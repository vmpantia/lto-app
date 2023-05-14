using LTO.BAL.Models.DTOs;
using LTO.BAL.Models.Requests;

namespace LTO.BAL.Contractors
{
    public interface IUserService
    {
        UserDTO AuthenticateUserLogin(UserLoginRequest request);
        string GenerateAccesToken(UserDTO user);
        Task SaveUserAsync(UserDTO request);
    }
}