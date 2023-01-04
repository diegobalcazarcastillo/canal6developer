using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Application.Interface;
using Domain;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Infraestructure.Security
{
    public class JwtGenerator : IJWtGenerator
    {

        private SymmetricSecurityKey _key;
        public JwtGenerator(IConfiguration configuration)
            {   
                _key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(configuration["TokenKey"]));
            }


        public string CreateToken(AppUser user)
        {
            

            
            //Crear el JWT
            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256Signature);
            
            var tokenDescriptor = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(claims),
                Expires = System.DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };
            var TokenHandler = new JwtSecurityTokenHandler();
            var token = TokenHandler.CreateToken(tokenDescriptor);
            return TokenHandler.WriteToken(token);
            
        }
        
    }
}