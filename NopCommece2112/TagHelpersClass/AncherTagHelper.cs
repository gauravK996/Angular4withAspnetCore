using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Razor.TagHelpers;
//using Microsoft.AspNetCore.TagHelpers;
namespace NopCommece2112.TagHelpersClass
{
    [HtmlTargetElement("ancher",TagStructure =TagStructure.NormalOrSelfClosing) ]
    public class AncherTagHelper: TagHelper
    {
        private string emailDomail = "sanju.com";
        public string MailTo { get; set; }
        public override void Process(TagHelperContext helperContext, TagHelperOutput helperOutput)
        {

            //helperContext.TagName = "a";
            helperOutput.TagName = "a";
            var address = MailTo + "@" + emailDomail;
            helperOutput.Attributes.Add("href", "MailTo" + address);
            
            helperOutput.Content.SetContent(address);
            helperOutput.PostContent.SetContent("Hiii  i AM ");
            helperOutput.PostElement.SetContent("DDSDS");
            helperOutput.PostElement.SetHtmlContent("<P>iTS</P>");
            
        }
    }
}
