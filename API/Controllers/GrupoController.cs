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
    [Route("api/grupos")]
    public class GrupoController : ControllerBase
    {
        private IMediator _mediator;

        public GrupoController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        public async Task<ActionResult<List<GRUPO>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.Grupos.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<GRUPO>>> Details(int id)
        {
            return await _mediator.Send(new Application.Grupos.Details.Query{id = id} );
        }
        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Grupos.Create.Command command)
        {
            return await _mediator.Send(command);
        }


        
    }
}