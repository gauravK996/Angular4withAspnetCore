using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.Model
{
    public class Subject:BaseEntity
    {
        public string SubjectName { get; set; }
        public ICollection<StudentSubject> studentSubjects { get; set; }
       
    }
}
