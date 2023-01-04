
using Application.Acervos;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;
using Domain;
using Microsoft.AspNetCore.Identity;
using FluentValidation.AspNetCore;
using API.Middleware;
using Application.Interface;
using Infraestructure.Security;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers(
                opt => {
                    var policy = new AuthorizationPolicyBuilder()
                    .RequireAuthenticatedUser().Build(); // Con esto garantizamos que pida JWT en todos los endpoints sin el decorador [Authorize] 
                    opt.Filters.Add(new AuthorizeFilter(policy));
                }
            )
            .AddFluentValidation( asam => {
                asam.RegisterValidatorsFromAssemblyContaining<Application.Acervos.Create>();
            }); //aquí estamos agregando el fluentValidation con un assambly, como todo lo de Application

            services.AddDbContext<DataContext> ( x =>
                x.UseMySQL(Configuration.GetConnectionString("Dev"))
            );
            services.AddMediatR(typeof(List.Handler).Assembly); //esto solo es para la inyección de dependencia de mediator
        
        //Agregar política CORS
            services.AddCors(opt => {
                opt.AddPolicy("CorsPolicy",policy => {
                    policy
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin(); //("http://localhost:3000/");
                }
                );
            });

            //Servicios de IdentityFW
            var builder = services.AddIdentityCore<AppUser>();
            var identityBuilder = new IdentityBuilder(builder.UserType, builder.Services);
            identityBuilder.AddEntityFrameworkStores<DataContext>();
            identityBuilder.AddSignInManager<SignInManager<AppUser>>();
            services.AddAuthentication();
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(Configuration["TokenKey"]));
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer( opt => { //To call, add Header Authorization => Bearer XXX_TOKEN_XXX
                opt.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = key,
                    ValidateAudience = false,
                    ValidateIssuer = false
                };
            });


            services.AddScoped<IJWtGenerator, JwtGenerator>();
            
        }




        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // if (env.IsDevelopment())
            // {
            //     app.UseDeveloperExceptionPage();
            // }

            app.UseMiddleware<ErrorHandlingMiddleware>();
            app.UseRouting();            
            app.UseCors("CorsPolicy"); // Cambiar esta política cuando se termina la aplicación

            app.UseAuthentication(); // Servicios de Identity
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
