using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Application.Errors;
using System.Text.Json;
using System.Net;

namespace API.Middleware
{
    public class ErrorHandlingMiddleware
    {
        private RequestDelegate _next {get;}
        private readonly ILogger<ErrorHandlingMiddleware> _logger ;
        public ErrorHandlingMiddleware(RequestDelegate next, ILogger<ErrorHandlingMiddleware> logger)
        {
            this._logger = logger;
            this._next = next;

        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch(System.Exception oe)
            {
                await HandleExceptionAsync(context, oe, _logger);
            }
        }

        private async Task HandleExceptionAsync(HttpContext context, Exception oe, ILogger<ErrorHandlingMiddleware> logger)
        {
            object errors = null;
            switch(oe)
            {
                case RestException re:
                     logger.LogError(oe, "REST ERROR");
                     errors = re.Errors;
                     context.Response.StatusCode = (int)re.Code;
                     break;
                case Exception e:
                     logger.LogError(oe, "SERVER ERROR");
                     errors = string.IsNullOrEmpty(oe.Message) ? "No info" : oe.Message;
                     context.Response.StatusCode = (int)HttpStatusCode.InternalServerError; //Error 500 en caso de que todo falló
                     break;

            }

            context.Response.ContentType = "application/json";
            if(errors != null)
            {
                var result = JsonSerializer.Serialize(new {errors});
                await context.Response.WriteAsync(result);
            }
        }
    }
}