using LTO.DAL.DataAccess.Entities;

namespace LTO.DAL.Contractors
{
    public interface IUnitOfWork
    {
        IBaseRepository<License> licenseRepo { get; }
        IBaseRepository<User> userRepo { get; }
        Task SaveAsync();
    }
}