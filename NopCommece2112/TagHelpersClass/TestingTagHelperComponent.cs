using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Razor.TagHelpers;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace NopCommece2112.TagHelpersClass
{
    public class TestingTagHelperComponent:TagHelperComponent
    {
        public override Task ProcessAsync(TagHelperContext helperContext, TagHelperOutput helperOutput)
        {
            if (string.Equals(helperContext.TagName, "head", StringComparison.OrdinalIgnoreCase))
                {
                helperOutput.PostContent.AppendHtml($"<script>console.log('time oN SeRVER{DateTime.Now}')</script>");
                }
            return Task.CompletedTask;
        }
    }
}
