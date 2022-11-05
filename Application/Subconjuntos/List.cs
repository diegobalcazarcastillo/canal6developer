using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
namespace Application.Subconjuntos
{
    public class List
    {
        public class Query : IRequest<List<SUBCONJUNTO>>
        {}
        public class Handler : IRequestHandler<Query, List<SUBCONJUNTO>>
        {
            private DataContext _context;
            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<List<SUBCONJUNTO>> Handle(Query request, CancellationToken cancellationToken)
            {
                /*Lógica de la aplicación para este objeto*/
                return await _context.subconjunto.ToListAsync();
            }
        }
    }
}