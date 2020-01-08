using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
namespace NopCommece2112.Filters
{
    public class CustomExceptionType:TypeFilterAttribute
    {
        public CustomExceptionType():base(typeof(CustomExceptionFilter))
        {
               
        }

    }
    public class CustomExceptionFilter : IExceptionFilter
    {
        //public void OnException(ExceptionContext context)
        //{
        //    throw new NotImplementedException();
        //}
        public void OnException(ExceptionContext context)
        {
           // context.Result=
        }
    }
}
