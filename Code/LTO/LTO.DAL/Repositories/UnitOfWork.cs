﻿using LTO.DAL.Contractors;
using LTO.DAL.DataAccess;
using LTO.DAL.DataAccess.Entities;
using LTO.DAL.Exceptions;

namespace LTO.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly LTODbContext _db;
        private IBaseRepository<License> _licenseRepo;

        public UnitOfWork(LTODbContext db) => _db = db;

        public IBaseRepository<License> licenseRepo
        {
            get
            {
                if (licenseRepo == null)
                    _licenseRepo = new BaseRepository<License>(_db);

                return _licenseRepo;
            }
        }

        public async Task SaveAsync()
        {
            var result = await _db.SaveChangesAsync();
            if (result <= 0)
                throw new DALException("Failed to save data.");

            Dispose();
        }

        public void Dispose()
        {
            if(_db != null)
            {
                _db.Dispose();
                _licenseRepo = null;
            }
        }
    }
}
