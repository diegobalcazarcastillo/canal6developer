using System;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.UnidadSimple;

namespace API.Controllers
{
    [ApiController]
    [Route("api/unidadsimple")]
    public class UnidadSimpleController : ControllerBase
    {
        private IMediator _mediator;

        public UnidadSimpleController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }

        public async Task<ActionResult<List<UNIDADSIMPLE>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.UnidadSimple.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<UNIDADSIMPLE>>> Details(int id)
        {
            return await _mediator.Send(new Application.UnidadSimple.Details.Query{id = id} );
        }

        [HttpGet()]
        [Route("ultimo")]
        public async Task<UNIDADSIMPLE> Ultimo()
        {
            var lista = await _mediator.Send(new Application.UnidadSimple.List.Query() );
            return lista.OrderByDescending(x => x.id).FirstOrDefault();
        }

    



        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.UnidadSimple.Create.Command command)
        {
            return await _mediator.Send(command);
        }




    }
}