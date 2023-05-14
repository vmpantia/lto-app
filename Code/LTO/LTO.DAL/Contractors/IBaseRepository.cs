namespace LTO.DAL.Contractors
{
    public interface IBaseRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAllAsync();
        IEnumerable<T> GetByCondition(Func<T, bool> condition);
        Task<T> GetByIDAsync(object id);
        Task AddEntityAsync(T entity);
        Task AddEntitiesAsync(IEnumerable<T> entities);
        Task UpdateAsync(object id, object model);
        Task DeleteAsync(object id);
    }
}