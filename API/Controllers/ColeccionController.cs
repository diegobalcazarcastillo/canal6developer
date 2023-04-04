using System;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("api/colecciones")]
    public class ColeccionController : ControllerBase
    {
        private IMediator _mediator;
        public ColeccionController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        public async Task<ActionResult<List<COLECCION>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.Colecciones.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<COLECCION>>> Details(int id)
        {
            return await _mediator.Send(new Application.Colecciones.Details.Query{id = id} );
        }
        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Colecciones.Create.Command command)
        {
            return await _mediator.Send(command);
        }
        [HttpPut]
        public async Task<Unit> Update([FromBody] Application.Colecciones.Update.Command command)
        {
            return await _mediator.Send(command);
        }        
    }
}