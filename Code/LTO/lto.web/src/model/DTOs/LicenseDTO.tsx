export interface LicenseDTO {
    internalID:string;
    licenseNo:string;
    licenseCode:string;
    picturePath:string;
    signaturePath:string;

    //Personal Details
    firstName:string;
    middleName:string;
    lastName:string;
    suffix:string;
    gender:string;
    civilStatus:string;
    birthDate:Date;
    birthPlace:string;

    //Body Details
    weight:number;
    height:number;
    eyeColor:string;
    bloodType:string;

    //Contact Details
    contactNo:string;
    telephoneNo:string;
    emailAddress:string;

    //Address Details
    addressLine1:string;
    addressLine2:string;
    barangay:string;
    city:string;
    province:string;
    zipCode:string;

    renewDate:Date;
    expirationDate:Date;

    status:number;
    statusDescription:string;
    createdDate:Date;
    modifiedDate:Date;
}