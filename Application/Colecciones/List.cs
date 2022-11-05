using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Colecciones
{
    public class List
    {
        public class Query : IRequest<List<COLECCION>>
        {}

        public class Handler : IRequestHandler<Query, List<COLECCION>>
        {
            private DataContext _context;

            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<List<COLECCION>> Handle(Query request, CancellationToken cancellationToken)
            {
                /*Lógica de la aplicación para este objeto*/
                return await _context.coleccion.ToListAsync();
            }
        }

    }
}