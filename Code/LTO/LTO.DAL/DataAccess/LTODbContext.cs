using LTO.DAL.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace LTO.DAL.DataAccess
{
    public class LTODbContext : DbContext
    {
        public LTODbContext(DbContextOptions options) : base(options) { }

        public DbSet<License> Licenses { get; set; }
    }
}
