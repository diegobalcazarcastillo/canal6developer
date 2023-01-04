using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interface;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string UserName { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.UserName).NotEmpty();
                RuleFor(x => x.Email).NotEmpty();
                RuleFor(x => x.Password).NotEmpty();


            }
        }

        public class Handler : IRequestHandler<Command, User>
        {

            private readonly UserManager<AppUser> UserManager;
            private readonly IJWtGenerator JwtGenerator;

            public Handler(UserManager<AppUser> userManager, IJWtGenerator jwtGenerator)
            {
                this.JwtGenerator = jwtGenerator;
                this.UserManager = userManager;

            }



            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if(await UserManager.FindByEmailAsync(request.Email) != null)
                {
                    throw new RestException(System.Net.HttpStatusCode.BadRequest, new { Email = "Ya existe este Email"});
                }

                if(await UserManager.FindByNameAsync(request.UserName) != null)
                {
                    throw new RestException(System.Net.HttpStatusCode.BadRequest, new { Email = "Ya existe este Usuario"});
                }

                var user = new AppUser {
                    Email = request.Email,
                    UserName = request.UserName
                };

                var result = await UserManager.CreateAsync(user, request.Password);
                if(result.Succeeded)
                {
                    return new User
                    {
                        UserName = user.UserName,
                        Email = user.Email,
                        Token = JwtGenerator.CreateToken(user)
                    };
                }

                throw new System.Exception("Error al registrar el usuario");




            }
        }

    }
}