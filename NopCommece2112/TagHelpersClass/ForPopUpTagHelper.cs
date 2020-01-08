using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace NopCommece2112.TagHelpersClass
{
    [HtmlTargetElement("MyScript",Attributes =ButtonId +","+ButtonName, TagStructure =TagStructure.NormalOrSelfClosing)]
    public class ForPopUpTagHelper:TagHelper
    {
        private const string ButtonId = "Asp-button-id";
        private const string ButtonName = "Asp-button-Name";

        [HtmlAttributeName(ButtonName)]
        public string buttonname { get; set; }
        [HtmlAttributeName(ButtonId)]
        public string Button { get; set; }
        public override void Process(TagHelperContext tagHelperContext, TagHelperOutput tagHelperOutput)
        {
            //TagHelperAttribute tagHelperAttribute = new TagHelperAttribute();
            tagHelperOutput.TagName = "input";
            tagHelperOutput.Attributes.Add("Onclick", "MyFunc()");
            tagHelperOutput.Attributes.Add("name", buttonname);
            tagHelperOutput.Attributes.Add("Id", Button);
            tagHelperOutput.Attributes.Add("type", "Button");
            tagHelperOutput.Content.SetContent("Click");
            TagBuilder builder = new TagBuilder("script");
            builder.InnerHtml.AppendHtml("function MyFunc(){alert('OKKKK')}");
            builder.RenderEndTag();
           // IHtmlContent htmlContent = new HtmlContentBuilder();
            string htmlContent = "";
            using (var writer = new StringWriter())
            {
                //htmlContent.WriteTo(writer,HtmlEncoder.Default)
                builder.WriteTo(writer, HtmlEncoder.Default);
                htmlContent = writer.ToString();
            }
            tagHelperOutput.PostElement.SetHtmlContent(htmlContent);
        }
    }
}
