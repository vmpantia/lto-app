using LTO.BAL.Models.DTOs;

namespace LTO.BAL.Contractors
{
    public interface ILicenseService
    {
        Task<List<LicenseDTO>> GetLicensesAsync();
        Task<LicenseDTO> GetLicenseByIDAsync(Guid internalID);
        Task SaveLicenseAsync(LicenseDTO request);
    }
}