using LTO.BAL.Exceptions;
using LTO.BAL.Extensions;
using LTO.BAL.Models.DTOs;
using LTO.DAL.Contractors;

namespace LTO.BAL.Services
{
    public class LicenseService
    {
        private readonly IUnitOfWork _uow;

        public LicenseService(IUnitOfWork uow) => _uow = uow;

        public async Task<List<LicenseDTO>> GetLicensesAsync()
        {
            var result = await _uow.licenseRepo.GetAllAsync();
            return result.Select(data => data.ConvertToDTO()).ToList();
        }
        
        public async Task<LicenseDTO> GetLicenseByID(Guid internalID)
        {
            var result = await _uow.licenseRepo.GetByIDAsync(internalID);
            return result.ConvertToDTO();
        }

        public async Task SaveLicense(LicenseDTO request)
        {
            if (request == null)
                throw new BALException("License Request must have values.");

            var isAdd = request.InternalID == Guid.Empty;

            if (isAdd)
                await _uow.licenseRepo.AddEntityAsync(request.ConvertToEntity());
            else
            {
                await _uow.licenseRepo.UpdateAsync(request.InternalID, new
                {
                    //request.InternalID,
                    //request.LicenseNo,
                    request.LicenseCode, 
                    request.PicturePath, 
                    request.SignaturePath,
                    request.FirstName, 
                    request.MiddleName, 
                    request.LastName, 
                    request.Suffix,
                    request.Gender, 
                    request.CivilStatus, 
                    request.Birthdate, 
                    request.Birthplace,
                    request.Weight, 
                    request.Height, 
                    request.EyeColor, 
                    request.BloodType,
                    request.ContactNo, 
                    request.TelephoneNo, 
                    request.EmailAddress,
                    request.AddressLine1, 
                    request.AddressLine2, 
                    request.Barangay, 
                    request.City,
                    request.Province, 
                    request.ZipCode,
                    request.RenewDate, 
                    request.ExpirationDate,
                    request.Status, 
                    //request.CreatedDate,
                    ModifiedDate = DateTime.Now,
                });
            }

            await _uow.SaveAsync();
        }

    }
}
