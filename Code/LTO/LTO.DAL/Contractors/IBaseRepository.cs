namespace LTO.DAL.Contractors
{
    public interface IBaseRepository<T> where T : class
    {
        Task AddEntitiesAsync(IEnumerable<T> entities);
        Task AddEntityAsync(T entity);
        Task DeleteAsync(object id);
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> GetByIDAsync(object id);
        IEnumerable<T> GetConditionAsync(Func<T, bool> condition);
        Task UpdateAsync(object id, object model);
    }
}