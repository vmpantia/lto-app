using LTO.BAL.Models.DTOs;
using LTO.Common;
using LTO.DAL.DataAccess.Entities;

namespace LTO.BAL.Extensions
{
    public static class UserExtension
    {
        public static UserDTO ConvertToDTO(this User data)
        {
            var dto = new UserDTO();
            Parser.ParseData(data, dto);
            dto.StatusDescription = Parser.ParseStatus(dto.Status);
            return dto;
        }
        public static User ConvertToEntity(this UserDTO data)
        {
            var entity = new User();
            Parser.ParseData(data, entity);
            return entity;
        }
    }
}
