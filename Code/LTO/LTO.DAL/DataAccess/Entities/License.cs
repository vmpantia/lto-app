using System.ComponentModel.DataAnnotations;

namespace LTO.DAL.DataAccess.Entities
{
    public class License
    {
        [Key] public Guid InternalID { get; set; }
        [Required, MaxLength(20)] public string LicenseNo { get; set; }
        [Required, MaxLength(20)] public string LicenseCode { get; set; }
        [Required] public string PicturePath { get; set; }
        [Required] public string SignaturePath { get; set; }

        //Personal Details
        [Required, MaxLength(40)] public string FirstName{ get; set; }
        [MaxLength(40)] public string? MiddleName { get; set; } //Not require
        [Required, MaxLength(40)] public string LastName { get; set; }
        [MaxLength(20)] public string? Suffix { get; set; } //Not require
        [Required, MaxLength(10)] public string Gender { get; set; }
        [Required, MaxLength(10)] public string CivilStatus { get; set; }
        public DateTime Birthdate { get; set; }
        [Required, MaxLength(100)] public string Birthplace { get; set; }

        //Body Details
        [Required] public decimal Weight { get; set; }
        [Required] public decimal Height { get; set; }
        [Required, MaxLength(10)] public string EyeColor { get; set; }
        [Required, MaxLength(10)] public string BloodType { get; set; }

        //Contact Details
        [Required, MaxLength(11)] public string ContactNo { get; set; }
        [Required, MaxLength(15)] public string? TelephoneNo { get; set; } //Not require
        [Required, MaxLength(40)] public string? EmailAddress { get; set; } //Not require

        //Address Details
        [Required, MaxLength(50)] public string AddressLine1 { get; set; }
        [MaxLength(50)] public string? AddressLine2 { get; set; } //Not require
        [Required, MaxLength(50)] public string Barangay { get; set; }
        [Required, MaxLength(50)] public string City { get; set; }
        [Required, MaxLength(50)] public string Province { get; set; }
        [Required, MaxLength(10)] public string ZipCode { get; set; }

        public DateTime RenewDate { get; set; }
        public DateTime ExpirationDate { get; set; }

        public int Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; } //Not require
    }
}
