using System.Collections.Generic;
using MediatR;
using Domain;
using Persistence;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Linq;
namespace Application.Series
{
    public class Details
    {
        public class Query : IRequest<List<SERIE>>
        {
            /*Aquí van las propiedades de filtrado*/
            public int id { get; set; }
        }
        public class Handler : IRequestHandler<Query, List<SERIE>>
        {
            private DataContext _context;
            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<List<SERIE>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.serie.Where(x => x.id == request.id).ToListAsync();
            }
        }
    }
}