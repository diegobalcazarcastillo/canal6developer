using System.Linq;
using System.Security.Claims;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;
namespace Infraestructure.Security
{
    public class UserAccesor : IUserAccesor
    {
        private readonly IHttpContextAccessor httpContextAccesor;
        public UserAccesor(IHttpContextAccessor httpContextAccesor)
        {
            this.httpContextAccesor = httpContextAccesor;
        }
        public string GetCurrentUserName()
        {
            var userName  = 
            httpContextAccesor
                            .HttpContext
                            .User?
                            .Claims?
                            .FirstOrDefault( x => x.Type == ClaimTypes.NameIdentifier)?
                            .Value;
                            
            return userName;
        }
    }
}