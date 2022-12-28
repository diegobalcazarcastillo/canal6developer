using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
using FluentValidation;

namespace Application.Acervos
{

    public class Create
    {


        //Validaciones de los valores antes de ir a CQRS, esto se ejecuta antes de cualquier lógica del API
        //Esto hace que el API responda con un error 400
        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.nombre).NotEmpty();
                RuleFor(x => x.id).NotEmpty();
            }
            
        }


        public class Command : IRequest
        {
            public string id { get; set; }
            public string nombre { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private DataContext _context;

            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var newacervo = new ACERVO
                {
                    id = request.id,
                    nombre = request.nombre
                };
                _context.acervo.Add(newacervo);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new System.Exception("Error al insertar el registro");
            }
        }


    }
}