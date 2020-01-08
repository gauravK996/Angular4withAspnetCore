using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.Filters
{

    public class MainActionFilter:TypeFilterAttribute
    {
        public MainActionFilter():base(typeof(CustomActionFilter))
        {

        }
    }
    public class CustomActionFilter : IActionFilter
    {
        //public void OnActionExecuted(ActionExecutedContext context)
        //{
        //    throw new NotImplementedException();
        //}

        //public void OnActionExecuting(ActionExecutingContext context)
        //{
        //    throw new NotImplementedException();
        //}

        public void OnActionExecuted(ActionExecutedContext executedContext)
        {

        }
        public void OnActionExecuting(ActionExecutingContext executingContext)
        {
            executingContext.Result =
                new RedirectToRouteResult(
                    new RouteValueDictionary(new { controller = "Home", action = "Error" })
                    );
            
        }
    }
}
