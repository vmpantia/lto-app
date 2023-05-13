using LTO.DAL.Contractors;
using LTO.DAL.DataAccess;
using LTO.DAL.Exceptions;
using Microsoft.EntityFrameworkCore;

namespace LTO.DAL.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly DbContext _db;
        private readonly DbSet<T> _table;

        public BaseRepository(LTODbContext db)
        {
            _db = db;
            _table = db.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _table.ToListAsync();
        }

        public IEnumerable<T> GetConditionAsync(Func<T, bool> condition)
        {
            return _table.Where(condition).ToList();
        }

        public async Task<T> GetByIDAsync(object id)
        {
            var result = await _table.FindAsync(id);
            if (result == null)
                throw new DALException("No records found in the system.");

            return result;
        }

        public async Task AddEntityAsync(T entity)
        {
            await _table.AddAsync(entity);
        }

        public async Task AddEntitiesAsync(IEnumerable<T> entities)
        {
            await _table.AddRangeAsync(entities);
        }

        public async Task UpdateAsync(object id, object model)
        {
            var data = await GetByIDAsync(id);
            _db.Entry(data).CurrentValues.SetValues(model);
        }

        public async Task DeleteAsync(object id)
        {
            var data = await GetByIDAsync(id);
            _table.Remove(data);
        }
    }
}
