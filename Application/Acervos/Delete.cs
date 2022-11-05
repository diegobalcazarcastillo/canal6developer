using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using System.Linq;
namespace Application.Acervos
{

    public class Delete
    {
        public class Command : IRequest
        {
            public string id { get; set; }
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
                var toRemove = _context.acervo.Where(x => x.id == request.id).FirstOrDefault();
                _context.acervo.Remove(toRemove);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new System.Exception("Error al eliminar el registro");

            }
        }
    }
}