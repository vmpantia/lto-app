namespace LTO.BAL.Models.Requests
{
    public class UserLoginRequest
    {
        public string LoginName { get; set; } /*It's either Username or Email*/
        public string Password { get; set; }
    }
}
