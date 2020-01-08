using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using NopCommece2112.DbContextDataLayer;
using NopCommece2112.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.ExtensionStartUp
{
    public static class Extension
    {
        public static IServiceProvider CustomConfigureServices(this IServiceCollection service, IConfiguration descriptors)
        {
            service.AddMvc();
            service.AddDbContext<StudentDbConetxt>(option => option.UseSqlServer(descriptors.GetConnectionString("DefaultConnection")));
            service.AddScoped<IDbContext, StudentDbConetxt>();
            service.AddScoped(typeof(IRepostary<>), typeof(EfRepostary<>));



            return service.BuildServiceProvider();
        }

        public static void ConfigurePipeLine(this IApplicationBuilder applicationBuilder,IHostingEnvironment hostingEnvironment)
        {
            applicationBuilder.UseMvc(route =>
            route.MapRoute(name: "Default",template: "{controller=Home}/{action=Index}/{Id?}")   
            );

            applicationBuilder.UseStaticFiles();
            applicationBuilder.UseStaticFiles(
                new StaticFileOptions
                {
                    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"node_modules")),
                    RequestPath= new PathString("/node_modules")
                }
                );
            applicationBuilder.UseStaticFiles(
                new StaticFileOptions
                {
                    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"ClientApp")),
                    RequestPath = new PathString("/ClientApp")
                }
                );

        }
    }
}
