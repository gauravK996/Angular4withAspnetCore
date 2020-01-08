using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NopCommece2112.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.DataMapping
{
    public class StudentMapping : NopEntityTypeConfiguration<Student>
    {
        public override void Configure(EntityTypeBuilder<Student> entityTypeBuilder)
        {
            entityTypeBuilder.HasKey(p => p.Id);
            entityTypeBuilder.HasOne(p => p.Course).WithMany(p => p.Students).HasForeignKey(p => p.CourseId);
            entityTypeBuilder.Property(p => p.Name).HasMaxLength(100);
            //entityTypeBuilder.HasMany(p=>p.studentSubjects).WithOne(p=>p.)
        }
    }
}
