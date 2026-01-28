//FOR ADDRESS VALIDATION
export const validateAddress = (address) => {
  if (!address.trim()) {
    return "Address is required";
  }

  if (address.length < 10) {
    return "Address must be at least 10 characters";
  }

  if (address.length > 300) {
    return "Address must be less than 300 characters";
  }

  return "";
};
//FOR EMAIL VALIDATION
export const validateEmail = (email) => {
  if (!email.includes("@")) return "Invalid email";
  return "";
};
//FOR PHONE NUMBER VALIDATION
export const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    if (!phoneRegex.test(phoneNumber)) {
        return "Invalid phone number";
    }
    return "";
};
//FOR NAME  VALIDATION
export const validateName = (name) => {
  if (name.trim().length < 2) {
    return "Name must be at least 2 characters long";
  } else if (name.trim().length > 50) {
    return "Name must be less than 50 characters long";
  } else if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {        
    return "Name contains invalid characters";
  } 
    return "";  
};  
  //FOR ACCOUNT NUMBER VALIDATION
export const validateAccountNumber = (accountNumber) => {
  if (!/^\d{8,12}$/.test(accountNumber)) {
    return "Account number must be 8 to 12 digits";
  }   
  return "";
};
//FOR ZIP CODE VALIDATION
export const validateZipCode = (zipCode) => {
  if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
    return "Invalid ZIP code format";
  } 
  return "";
};
//FOR COMPANY DESCRIPTION VALIDATION
export const validateCompanyDescription = (description) => {
  if (description.trim().length < 20) {
    return "Description must be at least 20 characters long";
  } else if (description.trim().length > 500) {
    return "Description must be less than 500 characters long";
  }
  return "";
};
//FOR DATE VALIDATION
export const validateDate = (date) => {
  if (!date) return "Date is required";

  // Convert string to Date
  const selectedDate = new Date(date);
  const currentDate = new Date();

  selectedDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  if (selectedDate > currentDate) {
    return "Date cannot be in the future";
  }

  return "";
};

