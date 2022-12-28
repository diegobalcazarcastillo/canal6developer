using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Domain;
using Persistence;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var hosts = CreateHostBuilder(args).Build();
            // Crear usuarios en caso de que no existan en este proyecto
            using (var scope = hosts.Services.CreateScope())
            {
                var services = scope.ServiceProvider; 
                var userManager = services.GetRequiredService<UserManager<AppUser>>();
                try
                {
                    Seed.SeedData(userManager).Wait();
                }
                catch( Exception oe)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(oe, "No se lograron importar los usuarios");
                }
            }

            hosts.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
