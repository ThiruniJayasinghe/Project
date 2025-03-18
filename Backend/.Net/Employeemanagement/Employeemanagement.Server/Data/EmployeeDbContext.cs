using Microsoft.EntityFrameworkCore;
using Employeemanagement.Server.Models;

namespace Employeemanagement.Server.Data
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Project> Projects { get; set; }


       

        
    }
}
