using System.Collections.Generic;
using MediatR;
using Domain;
using Persistence;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Linq;

namespace Application.Acervos
{
    public class Details
    {
        public class Query : IRequest<List<ACERVO>>
        {
            /*Aquí van las propiedades de filtrado*/
            public string id { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<ACERVO>>
        {
            private DataContext _context;

            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }

            public async Task<List<ACERVO>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.acervo.Where(x => x.id == request.id).ToListAsync();
            }
        }
    }
}