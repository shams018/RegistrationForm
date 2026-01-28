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