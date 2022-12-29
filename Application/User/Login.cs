using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Application.Errors;

namespace Application.User
{
    public class Login
    {
        public class CommandValidator : AbstractValidator<Query>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Email).NotEmpty();
                RuleFor(x => x.Password).NotEmpty();
            }
            
        }


        public class Query : IRequest<User>
        {
            /*Aquí van las propiedades de filtrado*/
            public string Email { get; set; }
            public string Password {get;set;}
        }

        public class Handler : IRequestHandler<Query, User>
        {

            private readonly UserManager<AppUser> UserManager ;
            private readonly SignInManager<AppUser> SignInManager ;

            public Handler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
            {
                UserManager = userManager;
                SignInManager = signInManager;
            }

           

            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await UserManager.FindByEmailAsync(request.Email);
                if(user != null) 
                {
                    var result = await SignInManager.CheckPasswordSignInAsync(user, request.Password, false); //False avoids user blocking
                    if(result.Succeeded)
                    {
                        //TODO: Generate JWT
                        return new User {
                            Token = "Will be token",
                            UserName = user.UserName,
                            Email = user.Email
                        };
                    }
                }
                throw new RestException(System.Net.HttpStatusCode.Unauthorized);
                

            }
        }


    }
}