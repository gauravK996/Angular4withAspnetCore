using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NopCommece2112.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.DataMapping
{
    public class CourseMapping: NopEntityTypeConfiguration<Course>
    {
        public override void Configure(EntityTypeBuilder<Course> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(P => P.Id);
            entityTypeBuilder.Property(P => P.CourseName).HasMaxLength(100);
        }
    }
}
