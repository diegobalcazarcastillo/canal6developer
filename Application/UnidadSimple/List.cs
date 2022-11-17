using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
namespace Application.UnidadSimple
{
    public class List
    {
        public class Query : IRequest<List<UNIDADSIMPLE>>
        {}
        public class Handler : IRequestHandler<Query, List<UNIDADSIMPLE>>
        {
            private DataContext _context;
            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<List<UNIDADSIMPLE>> Handle(Query request, CancellationToken cancellationToken)
            {
                /*Lógica de la aplicación para este objeto*/
                return await _context.unidadsimple.ToListAsync();
            }
        }
    }
}