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
    [Route("api/subseries")]
    public class SubseriesController : ControllerBase
    {
        private IMediator _mediator;

        public SubseriesController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        [AllowAnonymous]
        public async Task<ActionResult<List<SUBSERIE>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.Subseries.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<SUBSERIE>>> Details(int id)
        {
            return await _mediator.Send(new Application.Subseries.Details.Query{id = id} );
        }
        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Subseries.Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [AllowAnonymous]
        [HttpPut]
        public async Task<Unit> Update([FromBody] Application.Subseries.Update.Command command)
        {
            return await _mediator.Send(command);
        }


        
    }
}