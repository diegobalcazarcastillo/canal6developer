using System;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Colecciones;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [ApiController]
    [Route("api/conjuntos")]
    public class ConjuntoController : ControllerBase
    {
        private IMediator _mediator;

        public ConjuntoController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        [AllowAnonymous]
        public async Task<ActionResult<List<CONJUNTO>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.Conjuntos.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<CONJUNTO>>> Details(int id)
        {
            return await _mediator.Send(new Application.Conjuntos.Details.Query{id = id} );
        }
        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Conjuntos.Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [AllowAnonymous]
        [HttpPut]
        public async Task<Unit> Update([FromBody] Application.Conjuntos.Update.Command command)
        {
            return await _mediator.Send(command);
        }

        


        
    }
}