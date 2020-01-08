using Microsoft.EntityFrameworkCore;
using NopCommece2112.DbContextDataLayer;
using NopCommece2112.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.Services
{
    public class EfRepostary<T> : IRepostary<T> where T:BaseEntity
    {
        private readonly IDbContext _dbContext;
        private DbSet<T> _entities;
        public EfRepostary(IDbContext dbContext)
        {
            this._dbContext = dbContext;
        }
        public IEnumerable<T> Table => Entites;

        public void Delete(T t)
        {
            //throw new NotImplementedException();
            //_dbContext.Set<T>().Remove(t);
            Entites.Remove(t);
            _dbContext.SaveChanges();
        }

        public T GetById(object Id)
        {
            return Entites.Find(Id);
            //return _dbContext.Set<T>().Find(Id);
            //throw new NotImplementedException();
        }

        public void Insert(T t)
        {
            Entites.Add(t);
            _dbContext.SaveChanges();
            //throw new NotImplementedException();
        }

        public void Update(T t)
        {
            if (t == null)
                throw new ArgumentNullException(nameof(T));
            Entites.Update(t);
            _dbContext.SaveChanges();
            //throw new NotImplementedException();
        }
        //public DbSet<T> Entites { get; set; }
        
            //_dbContext.Set<T>();
            //return _dbContext.Set<T>();
        public DbSet<T> Entites {
            get
            {
                if(_entities==null)
                    _entities= _dbContext.Set<T>();
                return _entities;
            }
            
        }
    }
}
