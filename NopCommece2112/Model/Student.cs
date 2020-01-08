using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.Model
{
    public class Student:BaseEntity
    {
        public string Name { get; set; }
        public int? Age { get; set; }
        public Nullable<DateTime> CreateDate { get; set; }
        public int CourseId { get; set; }
        public virtual Course Course { get; set; }
        public ICollection<StudentSubject> studentSubjects { get; set; }
    }
}
