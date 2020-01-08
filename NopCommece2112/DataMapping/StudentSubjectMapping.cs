using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NopCommece2112.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.DataMapping
{
    public class StudentSubjectMapping: NopEntityTypeConfiguration<StudentSubject>
    {
        public override void Configure(EntityTypeBuilder<StudentSubject> typeBuilder)
        {
            typeBuilder.HasKey(k => new { k.StudentId, k.SubjectId });
            typeBuilder.HasOne(p => p.Student).WithMany(m => m.studentSubjects).HasForeignKey(p => p.StudentId);
            typeBuilder.HasOne(p => p.Subject).WithMany(m => m.studentSubjects).HasForeignKey(p => p.SubjectId);
            typeBuilder.Ignore(ignore => ignore.Id);
        }
    }
}
