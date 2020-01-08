using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.Filters
{
    public class AuthenticationByType:TypeFilterAttribute
    {
        public AuthenticationByType():base(typeof(Authentication))
        {

        }
    }

    public class Authentication : IAuthorizationFilter
    {
        //public void OnAuthorization(AuthorizationFilterContext context)
        //{
        //    //throw new NotImplementedException();
        //}
        public void OnAuthorization(AuthorizationFilterContext authorizationFilter)
        {
            if (authorizationFilter.HttpContext.Request.IsHttps)
            {
                authorizationFilter.Result = new RedirectToRouteResult(

                    new RouteValueDictionary(new { controller = "Home", action = "Error" })

                );
            }
        }
    }


}
