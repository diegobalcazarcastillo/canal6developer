using System.Collections.Generic;
using MediatR;
using Domain;
using Persistence;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Linq;
namespace Application.UnidadSimple
{
    public class Details
    {
        public class Query : IRequest<List<UNIDADSIMPLE>>
        {
            /*Aquí van las propiedades de filtrado*/
            public int id { get; set; }
        }
        public class Handler : IRequestHandler<Query, List<UNIDADSIMPLE>>
        {
            private DataContext _context;
            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<List<UNIDADSIMPLE>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.unidadsimple.Where(x => x.id == request.id).ToListAsync();
            }
        }
    }
}