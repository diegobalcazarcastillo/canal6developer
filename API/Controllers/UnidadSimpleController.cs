using System;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.UnidadSimple;
using Microsoft.AspNetCore.Authorization;

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

        [HttpGet("list/{id_categoria}")]
        public async Task<ActionResult<List<UNIDADSIMPLE>>> List(string id_categoria)
        {
            //Llamar a mediator, siempre se envían eventos
            return await _mediator.Send(new Application.UnidadSimple.List.Query{id_categoria = id_categoria});
        }
        [HttpGet("ultimo/{id_categoria}")]
        public async Task<UNIDADSIMPLE> Ultimo(string id_categoria)
        {
            // 
            var lista = await _mediator.Send(new Application.UnidadSimple.List.Query{id_categoria = id_categoria} );
            return lista.OrderByDescending(x => x.id).FirstOrDefault();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<UNIDADSIMPLE>>> Details(int id)
        {
            return await _mediator.Send(new Application.UnidadSimple.Details.Query{id = id} );
        }
        
        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.UnidadSimple.Create.Command command)
        {
            return await _mediator.Send(command);
        }


        [HttpPut]
        [AllowAnonymous]
        public async Task<Unit> Update([FromBody] Application.UnidadSimple.Update.Command command)
        {
            return await _mediator.Send(command);
        }

       
        

    

    }
}