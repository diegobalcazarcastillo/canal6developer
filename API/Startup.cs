using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Acervos;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Persistence;

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

            services.AddControllers();
            services.AddDbContext<DataContext> ( x =>
                x.UseSqlServer(Configuration.GetConnectionString("Dev"))
            );
            services.AddMediatR(typeof(List.Handler).Assembly); //esto solo es para la inyección de dependencia de mediator
        
        //Agregar política CORS
            services.AddCors(opt => {
                opt.AddPolicy("CorsPolicy",
                  policy => {
                    policy
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowAnyOrigin(); //("http://localhost:3000/");
                
                  }
                );
            });
        
        }




        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("CorsPolicy"); // Cambiar esta política cuando se termina la aplicación

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
