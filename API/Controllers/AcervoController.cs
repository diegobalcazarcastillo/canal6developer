using System;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Collections.Generic;

using System.Threading.Tasks;
using Application.Acervos;

namespace API.Controllers
{
    [ApiController]
    [Route("api/acervos")]
    public class AcervoController : ControllerBase
    {
        private IMediator _mediator;

        public AcervoController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        public async Task<ActionResult<List<ACERVO>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.Acervos.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<ACERVO>>> Details(string id)
        {
            return await _mediator.Send(new Application.Acervos.Details.Query{id = id} );
        }

        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Acervos.Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpDelete]
        public async Task<Unit> Delete([FromBody] Application.Acervos.Delete.Command command)
        {
            return await _mediator.Send(command);
        }


        
    }
}