using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NopCommece2112.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NopCommece2112.DataMapping
{
    public class SubjectMapping: NopEntityTypeConfiguration<Subject> 
    {
        public override void Configure(EntityTypeBuilder<Subject> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(p => p.Id);
            entityTypeBuilder.Property(p => p.SubjectName).HasMaxLength(100);
        }
    }
}
