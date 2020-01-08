using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.Model
{
    public class Course:BaseEntity
    {
        public string CourseName { get; set; }
        public ICollection<Student> Students { get; set; }
    }
}
