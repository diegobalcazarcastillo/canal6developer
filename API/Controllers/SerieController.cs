using System;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Application.Colecciones;

namespace API.Controllers
{
    [ApiController]
    [Route("api/series")]
    public class SerieController : ControllerBase
    {
        private IMediator _mediator;

        public SerieController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        [AllowAnonymous]
        public async Task<ActionResult<List<SERIE>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.Series.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<SERIE>>> Details(int id)
        {
            return await _mediator.Send(new Application.Series.Details.Query{id = id} );
        }
        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Series.Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [AllowAnonymous]
        [HttpPut]
        public async Task<Unit> Update([FromBody] Application.Series.Update.Command command)
        {
            return await _mediator.Send(command);
        }


        
    }
}