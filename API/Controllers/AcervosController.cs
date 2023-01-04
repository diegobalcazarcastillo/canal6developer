using System;
using System.Linq;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Domain;
using System.Collections.Generic;

using System.Threading.Tasks;
using Application.Acervos;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    
    public class AcervosController : BaseController
    {
        
        public async Task<ActionResult<List<ACERVO>>> List()
        {
            //Llamar a mediator, siempre se envían eventos
            return await Mediator.Send(new Application.Acervos.List.Query());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<ACERVO>>> Details(string id)
        {
            return await Mediator.Send(new Application.Acervos.Details.Query{id = id} );
        }

        [HttpPost]
        public async Task<Unit> Create([FromBody] Application.Acervos.Create.Command command)
        {
            return await Mediator.Send(command);
        }

        [HttpDelete]
        public async Task<Unit> Delete([FromBody] Application.Acervos.Delete.Command command)
        {
            return await Mediator.Send(command);
        }


        
    }
}