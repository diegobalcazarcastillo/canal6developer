using System.Collections.Generic;
using MediatR;
using Domain;
using Persistence;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Linq;

namespace Application.Colecciones
{
    public class Details
    {
        public class Query : IRequest<List<COLECCION>>
        {
            /*Aquí van las propiedades de filtrado*/
            public int id { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<COLECCION>>
        {
            private DataContext _context;

            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }

            public async Task<List<COLECCION>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.coleccion.Where(x => x.id == request.id).ToListAsync();
            }
        }
    }
}