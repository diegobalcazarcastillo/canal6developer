using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Application.Errors;
using Application.Interface;

namespace Application.User
{
    public class CurrentUser
    {

        public class Query : IRequest<User>
        {
        }


        public class Handler : IRequestHandler<Query, User>
        {
            private readonly Application.Interfaces.IUserAccesor UserAccesor;
            private readonly UserManager<AppUser> userManager;
            private readonly IJWtGenerator jwtGenerator;

            public Handler(Application.Interfaces.IUserAccesor UserAccesor, UserManager<AppUser> userManager, IJWtGenerator jwtGenerator)
            {
                this.jwtGenerator = jwtGenerator;
                this.userManager = userManager;
                this.UserAccesor = UserAccesor;
            }
            public async Task<User> Handle(Query request, CancellationToken cancellationToken)
            {

                var user = await userManager.FindByNameAsync(UserAccesor.GetCurrentUserName());

                if(user != null) return new User {
                    Token = jwtGenerator.CreateToken(user),
                            UserName = user.UserName,
                            Email = user.Email
                } ;
                throw new RestException(System.Net.HttpStatusCode.NotFound, new { user = "usuario no encontrado"});
                
                
            }
        }
    }
}