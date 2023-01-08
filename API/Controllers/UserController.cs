using System.Threading.Tasks;
using Application.User;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
     // Esto permite que este EndPoint pueda ser accesible sin JWT
    public class UserController : BaseController
    {
        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<ActionResult<User>> Login(Login.Query query)
        {
            return await Mediator.Send(query);
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<ActionResult<User>> Register(Register.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpGet]
        
        public async Task<ActionResult<User>> CurrentUser()
        {
            return await Mediator.Send(new Application.User.CurrentUser.Query() );
        }
    }
}