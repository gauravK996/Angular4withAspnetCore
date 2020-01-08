using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.Services
{
    public interface IRepostary<T> where T:class
    {
        void Insert(T t);
        void Update(T t);
        void Delete(T t);
        T GetById(object Id);
        IEnumerable<T> Table { get; }
    }
}
