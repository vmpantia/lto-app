using LTO.BAL.Models.DTOs;
using LTO.Common;
using LTO.DAL.DataAccess.Entities;

namespace LTO.BAL.Extensions
{
    public static class LicenseExtension
    {
        public static LicenseDTO ConvertToDTO(this License data)
        {
            var dto = new LicenseDTO();
            Parser.ParseData(data, dto);
            dto.StatusDescription = Parser.ParseStatus(dto.Status);
            return dto;
        }
        public static License ConvertToEntity(this LicenseDTO data)
        {
            var entity = new License();
            Parser.ParseData(data, entity);
            return entity;
        }
    }
}
