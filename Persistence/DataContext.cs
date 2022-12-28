using System;
using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<ACERVO> acervo  {get;set;}
        public DbSet<COLECCION> coleccion {get;set;}
        public DbSet<GRUPO> grupo {get;set;}
        public DbSet<SERIE> serie {get;set;}

        public DbSet<CONJUNTO> conjunto {get;set;}
        public DbSet<SUBCONJUNTO> subconjunto {get;set;}
        public DbSet<SUBGRUPO> subgrupo {get;set;}
        public DbSet<SUBSERIE> subserie  {get;set;}
        public DbSet<CATEGORIA> categoria  {get;set;}
        public DbSet<UNIDADSIMPLE> unidadsimple {get;set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
