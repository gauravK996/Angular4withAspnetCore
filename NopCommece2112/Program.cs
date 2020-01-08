using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace NopCommece2112
{


    public class Program
    {
        public static void Main(string[] args)
        {
            //WebHost.CreateDefaultBuilder(args).UseStartup<Startup>().Build().Run();
            CreateWebhost(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebhost(string[] args)
        {
            return WebHost.CreateDefaultBuilder(args).UseStartup<Startup>();
        }

    }
}
