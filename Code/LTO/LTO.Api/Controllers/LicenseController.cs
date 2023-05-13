using LTO.BAL.Contractors;
using LTO.BAL.Models.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace LTO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LicenseController : ControllerBase
    {
        private readonly ILicenseService _license;

        public LicenseController(ILicenseService license) => _license = license;

        [HttpGet("GetLicenses")]
        public async Task<IActionResult> GetLicensesAsync()
        {
            try
            {
                var response = await _license.GetLicensesAsync();

                if(response == null)    
                    return NotFound();

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("GetLicenseByID")]
        public async Task<IActionResult> GetLicenseByIDAsync(Guid internalID)
        {
            try
            {
                var response = await _license.GetLicenseByIDAsync(internalID);

                if (response == null)
                    return NotFound();

                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpPost("SaveLicense")]
        public async Task<IActionResult> SaveLicenseAsync(LicenseDTO request)
        {
            try
            {
                await _license.SaveLicenseAsync(request);
                return Ok("License Saved Successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
