using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NopCommece2112.DataMapping;
using NopCommece2112.Model;

namespace NopCommece2112.DbContextDataLayer
{
    public class StudentDbConetxt:DbContext, IDbContext
    {
        public StudentDbConetxt(DbContextOptions<StudentDbConetxt> dbContextOptions) :base(dbContextOptions)
        {
            this.Database.EnsureCreated();
        }
        //public DbSet<Student> students { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //    modelBuilder.Entity<Student>().HasKey(p => p.Id);
            //    modelBuilder.Entity<Student>().HasOne(p => p.Course).WithMany(p => p.Students).HasForeignKey(p => p.CourseId);
            //    modelBuilder.Entity<Student>().Property(p => p.Age).HasDefaultValue(10); 
            // modelBuilder.ApplyConfiguration(new StudentMapping());
            var Instance = Assembly.GetExecutingAssembly().GetTypes()
                  .Where(type => !String.IsNullOrEmpty(type.Namespace))
                  .Where(type=>type.BaseType!=null && type.BaseType.IsGenericType &&
                  type.BaseType.GetGenericTypeDefinition() == typeof(NopEntityTypeConfiguration<>));
            foreach (var v in Instance)
            {
                dynamic ins = Activator.CreateInstance(v);
                modelBuilder.ApplyConfiguration(ins);
            }
            base.OnModelCreating(modelBuilder);
        }
        public new DbSet<TEntity> Set<TEntity>() where TEntity : BaseEntity
        {
            return  base.Set<TEntity>();
        }
    }
}
