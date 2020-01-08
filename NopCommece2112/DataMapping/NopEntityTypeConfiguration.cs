using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NopCommece2112.DataMapping
{
    public class NopEntityTypeConfiguration<T> : IEntityTypeConfiguration<T> where T:class
    {
        public  virtual void Configure(EntityTypeBuilder<T> builder)
        {
            //throw new NotImplementedException();
        }
    }
}
