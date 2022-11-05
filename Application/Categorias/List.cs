using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
namespace Application.Categorias
{
    public class List
    {
        public class Query : IRequest<List<CATEGORIA>>
        {}
        public class Handler : IRequestHandler<Query, List<CATEGORIA>>
        {
            private DataContext _context;
            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<List<CATEGORIA>> Handle(Query request, CancellationToken cancellationToken)
            {
                /*Lógica de la aplicación para este objeto*/
                return await _context.categoria.ToListAsync();
            }
        }
    }
}