﻿using System.ComponentModel.DataAnnotations;

namespace LTO.BAL.Models.DTOs
{
    public class UserDTO
    {
        [Key] public Guid InternalID { get; set; }
        [Required, MaxLength(15)] public string Username { get; set; }
        [Required, MaxLength(50)] public string Email { get; set; }
        [Required, MaxLength(50)] public string Password { get; set; }
        [Required, MaxLength(10)] public string Role { get; set; }
        public int Status { get; set; }
        public string? StatusDescription { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
