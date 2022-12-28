using Domain;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Persistence
{
    public class Seed
    {

        // Esto crea usuarios de pruebas en la base de datos, solo se insertan si no existe ningún usuario
        public static async Task SeedData(UserManager<AppUser> userManager) 
        {
            if(!userManager.Users.Any())
             {
                var users = new List<AppUser>
                {
                    new AppUser {
                        Id="1",
                        UserName="Administrador",
                        Email="zero15_diego@hotmail.com"
                    },
                    new AppUser {
                        Id ="2",
                        UserName="Pris",
                        Email="acervoCanal6@hotmail.com"
                    }

                };
                foreach(var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }

             }
        }
    }
}