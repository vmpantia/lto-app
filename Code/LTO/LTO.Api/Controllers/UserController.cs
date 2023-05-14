using LTO.BAL.Contractors;
using LTO.BAL.Models.DTOs;
using LTO.BAL.Models.Requests;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _user;
        public UserController(IUserService user) => _user = user;

        [AllowAnonymous, HttpPost("Login")]
        public IActionResult LoginAsync(UserLoginRequest request)
        {
            try
            {
                var result = _user.AuthenticateUserLogin(request);
                if (result == null)
                    return NotFound();

                var token = _user.GenerateAccesToken(result);
                return Ok(new
                {
                    email = result.Email,
                    accessToken = token
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous, HttpPost("Register")]
        public async Task<IActionResult> Register(UserDTO request)
        {
            try
            {
                await _user.SaveUserAsync(request);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
