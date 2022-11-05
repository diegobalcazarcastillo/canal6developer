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
    [Route("api/categorias")]
    public class CategoriaController : ControllerBase
    {
        private IMediator _mediator;

        public CategoriaController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        public async Task<ActionResult<List<CATEGORIA>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.Categorias.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<CATEGORIA>>> Details(string id)
        {
            return await _mediator.Send(new Application.Categorias.Details.Query{id = id} );
        }
        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Categorias.Create.Command command)
        {
            return await _mediator.Send(command);
        }


        
    }
}