using System.Collections.Generic;
using MediatR;
using Domain;
using Persistence;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Linq;
namespace Application.Categorias
{
    public class Details
    {
        public class Query : IRequest<List<CATEGORIA>>
        {
            /*Aquí van las propiedades de filtrado*/
            public string id {get;set;}
        }
        public class Handler : IRequestHandler<Query, List<CATEGORIA>>
        {
            private DataContext _context;
            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<List<CATEGORIA>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.categoria.Where(x => x.id == request.id).ToListAsync();
            }
        }
    }
}