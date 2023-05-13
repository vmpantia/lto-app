using System.ComponentModel.DataAnnotations;

namespace LTO.DAL.DataAccess.Entities
{
    public class License
    {
        [Key]
        public Guid InternalID { get; set; }
        public string LicenseNo { get; set; }
        public string LicenseCode { get; set; }
        public string PicturePath { get; set; }
        public string SignaturePath { get; set; }

        //Personal Details
        public string FirstName{ get; set; }
        public string? MiddleName { get; set; } //Not require
        public string LastName { get; set; }
        public string? Suffix { get; set; } //Not require
        public string Gender { get; set; }
        public string CivilStatus { get; set; }
        public DateTime Birthdate { get; set; }
        public string Birthplace { get; set; }

        //Body Details
        public string Weight { get; set; }
        public string Height { get; set; }
        public string EyeColor { get; set; }
        public string BloodType { get; set; }

        //Contact Details
        public string ContactNo { get; set; }
        public string? TelephoneNo { get; set; } //Not require
        public string? EmailAddress { get; set; } //Not require

        //Address Details
        public string AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; } //Not require
        public string Barangay { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string ZipCode { get; set; }

        public DateTime RenewDate { get; set; }
        public DateTime ExpirationDate { get; set; }

        public int Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; } //Not require
    }
}
