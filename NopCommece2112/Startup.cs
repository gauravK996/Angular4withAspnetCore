using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NopCommece2112.ExtensionStartUp;

namespace NopCommece2112
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        //public void ConfigureServices(IServiceCollection services)
        //{
        //}
        public Startup(IConfiguration _configuration)
        {
            Configuration = _configuration;
        }


        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddMvc();
            services.CustomConfigureServices(Configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        //public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        //{
        //    //if (env.IsDevelopment())
        //    //{
        //    //    app.UseDeveloperExceptionPage();
        //    //}

        //    //app.Run(async (context) =>
        //    //{
        //    //    await context.Response.WriteAsync("Hello World!");
        //    //});


        //}
        public void Configure(IApplicationBuilder applicationBuilder, IHostingEnvironment hostingEnvironment)
        {
            if (hostingEnvironment.IsDevelopment())
            {
                applicationBuilder.UseDeveloperExceptionPage();
            }
            else
            {
                applicationBuilder.UseExceptionHandler();
            }
            //applicationBuilder.UseMvc(routes =>
            //{
            //    //routes.Routes=new RedirectToRouteResult()
            //    //{
            //    //    new RouteValueDictionary()
            //    //    {

            //    //    }
            //    //}
            //    routes.MapRoute(
            //        name: "default",
            //        template: "{controller=Home}/{action=Index}/{Id?}"
            //        //defaults:new { controller="Home",action="Index",Id=Urlparameter }

            //        );
            //});
            applicationBuilder.ConfigurePipeLine(hostingEnvironment);
        }
    }
}
