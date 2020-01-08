using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
namespace NopCommece2112.Filters
{
    public class CustomResourceFilterType : TypeFilterAttribute
    {
        public CustomResourceFilterType():base(typeof(CustomResourceFilter))
        {

        }
    }

    public class CustomResourceFilter : IResourceFilter
    {
        public void OnResourceExecuted(ResourceExecutedContext context)
        {
            throw new NotImplementedException();
        }

        public void OnResourceExecuting(ResourceExecutingContext context)
        {
            throw new NotImplementedException();
        }
    }
}
