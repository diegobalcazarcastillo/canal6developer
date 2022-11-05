using System;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Colecciones;

namespace API.Controllers
{
    [ApiController]
    [Route("api/subconjuntos")]
    public class SubconjuntoController : ControllerBase
    {
        private IMediator _mediator;

        public SubconjuntoController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        public async Task<ActionResult<List<SUBCONJUNTO>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.Subconjuntos.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<SUBCONJUNTO>>> Details(int id)
        {
            return await _mediator.Send(new Application.Subconjuntos.Details.Query{id = id} );
        }
        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Subconjuntos.Create.Command command)
        {
            return await _mediator.Send(command);
        }


        
    }
}