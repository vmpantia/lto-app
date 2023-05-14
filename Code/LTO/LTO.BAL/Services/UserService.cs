using LTO.BAL.Contractors;
using LTO.BAL.Exceptions;
using LTO.BAL.Extensions;
using LTO.BAL.Models.DTOs;
using LTO.BAL.Models.Requests;
using LTO.DAL.Contractors;
using LTO.DAL.DataAccess.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace LTO.BAL.Services
{
    public class UserService : IUserService
    {
        private readonly IConfiguration _config;
        private readonly IUnitOfWork _uow;
        public UserService(IConfiguration config, IUnitOfWork uow)
        {
            _config = config;
            _uow = uow;
        }

        public UserDTO AuthenticateUserLogin(UserLoginRequest request)
        {
            if (request == null)
                throw new BALException("User Login Request must have values.");

            var users = _uow.userRepo.GetByCondition(data => (data.Username.ToLower() == request.LoginName.ToLower() ||
                                                              data.Email.ToLower() == request.LoginName.ToLower()) &&
                                                             data.Password.ToLower() == request.Password.ToLower());
            if (users.Any())
                return users.First().ConvertToDTO();

            throw new BALException("User credentials not found in the system, Please try again.");
        }

        public string GenerateAccesToken(UserDTO user)
        {
            //Get JWT Security Key
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

            //Get Credentials using JWT Security Key
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            //Create Identity Claims such as Actor, Name, Role and etc.
            var claims = new[]
            {
                new Claim(ClaimTypes.Actor, user.InternalID.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                //new Claim(ClaimTypes.Email, user.Email),
                //new Claim(ClaimTypes.GivenName, user.FirstName),
                //new Claim(ClaimTypes.Surname, user.LastName),
                new Claim(ClaimTypes.Role, user.Role)
            };

            //Create Security Token based on the JWT Issuer, JWT Audience, Claims, Expirations and Credentials
            var token = new JwtSecurityToken(_config["Jwt:Issuer"], _config["Jwt:Audience"], claims,
                                             expires: DateTime.Now.AddHours(1), signingCredentials: credentials);

            //Create User Access Token
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task SaveUserAsync(UserDTO request)
        {
            if (request == null)
                throw new BALException("User Request must have values.");

            var isAdd = request.InternalID == Guid.Empty;

            if (isAdd)
                await _uow.userRepo.AddEntityAsync(request.ConvertToEntity());
            else
                await _uow.userRepo.UpdateAsync(request.InternalID, new
                {
                    //request.InternalID,
                    request.Username,
                    request.Email,
                    request.Password,
                    request.Role,
                    request.Status,
                    //request.CreatedDate,
                    ModifiedDate = DateTime.Now
                });

            await _uow.SaveAsync();
        }
    }
}
