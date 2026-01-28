import React, { useState } from "react";
import InputField from "../components/inputField.jsx";
import SignatureField from "../components/signitureField.jsx";
import { validateEmail } from "../utils/validation.jsx";
import { validateAddress } from "../utils/validation.jsx";
import { validateName } from "../utils/validation.jsx";
import { validatePhoneNumber } from "../utils/validation.jsx";
import { validateAccountNumber } from "../utils/validation";
import { validateZipCode } from "../utils/validation.jsx";



  const Reg = () => {
  const [orgName, setOrgName] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const [insured, setInsured] = useState("");
  const [licensed, setLicensed] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNumberDay, setPhoneNumberDay] = useState("");
  const [phoneNumberEvening, setPhoneNumberEvening] = useState("");
  const [dayPhoneError, setDayPhoneError] = React.useState("");
  const [eveningPhoneError, setEveningPhoneError] = React.useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountError, setAccountError] = useState("");
  const [firstname, setFirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [companyadress, setCompanyaddress] = useState("");
  const [addressError, setAddressError] = useState(""); 
  const [streetadress, setStreetaddress] = useState(""); 
  const [streetaddressError, setStreetaddressError] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");

  const handleZipCodeBlur = () => {
    setZipCodeError(validateZipCode(zipCode));
  };

  const handleAddressBlur = () => {
    setAddressError(validateAddress(companyadress));
  };

  const handleStreetBlur = () => {
    setStreetaddressError(validateAddress(streetadress));
  };  

  const handleFirstBlur = () => {
    setFirstnameError(validateName(firstname));
  };
  const handleLastBlur = () => {
    setLastnameError(validateName(lastname));
  };



  const handleAccountBlur = () => {
    setAccountError(validateAccountNumber(accountNumber));
  };

 const handlePhoneBlur = () => {
    setDayPhoneError(validatePhoneNumber(phoneNumberDay));
  };

  const handleEvenPhoneBlur = () => {
    setEveningPhoneError(validatePhoneNumber(phoneNumberEvening));
  };
   const handleBlur = () => {
    setError(validateAddress(address));
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handleNameBlur = () => {
    setNameError(validateName(name));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);  
    if (nameError) {
      setNameError(validateName(e.target.value));
    }
  };  

  const isUppercase = orgName === orgName.toUpperCase();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl">
        {/* Header */}
        <div className="px-8 py-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Vendor Registration
          </h1>
          <p className="text-gray-600 mt-1">
            Complete form below to signup as a vendor.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mx-8"></div>

        {/* Form Section */}
        <div className="px-8 py-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Company Contact Information
          </h3>

          {/* Full-width fields */}
          <div className="grid grid-cols-1 gap-5 mb-6">
            {/* Organization Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization / Business Name
              </label>

              <InputField
                placeholder=""
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                onBlur={() => setTouched(true)} // 👈 validate AFTER typing
              />

              {touched && orgName.length > 0 && !isUppercase && (
                <p className="text-red-500 text-sm mt-1">
                  ⚠️ Please write the organization name in UPPERCASE letters
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Address
              </label>

              <InputField
                placeholder="Enter company address"
                value={companyadress}
                onChange={(e) => setCompanyaddress(e.target.value)}
                onBlur={handleAddressBlur}
                className={addressError ? "border-red-500" : ""}
              />

              {addressError && <p className="text-xs text-red-500 mt-1">{addressError}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address
              </label>

              <InputField
                placeholder=""
                value={streetadress}
                onChange={(e) => setStreetaddress(e.target.value)}
                onBlur={handleStreetBlur}
                className={streetaddressError ? "border-red-500" : ""}
              />

              {streetaddressError && <p className="text-xs text-red-500 mt-1">{streetaddressError}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address Line 2
              </label>
              <InputField placeholder="Apartment, suite, etc. (optional)" />
            </div>
          </div>

          {/* Two-column fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <InputField placeholder="" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State / Province
              </label>
              <InputField placeholder="" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP / Postal Code
              </label>  
              <InputField
                placeholder=""
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                onBlur={handleZipCodeBlur}
                className={zipCodeError ? "border-red-500" : ""}
              />
              {zipCodeError && (
                <p className="text-xs text-red-500 mt-1">{zipCodeError}</p>
              )}  
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <InputField placeholder="" />
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
              Point of Contact
            </h1>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <InputField 
                placeholder="" 
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                onBlur={handleFirstBlur}
              />
              <label className="block text-sm font-small text-gray-700 mt-2">
                First Name
              </label>
              {firstnameError && (
                <p className="text-xs text-red-500 mt-1">{firstnameError}</p>
              )}
            </div>    

             
            <div>
              <InputField 
                placeholder=""
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                onBlur={handleLastBlur}
              />
              <label className="block text-sm font-small text-gray-700 mt-2">
                Last Name
              </label>
              {lastnameError && (
                <p className="text-xs text-red-500 mt-1">{lastnameError}</p>
              )}
            </div>  

          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h1 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                Phone Number (Day)
              </h1>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                Phone Number (Evening)
              </h1>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
             <InputField
              placeholder=""
              value={phoneNumberDay}
              onChange={(e) => setPhoneNumberDay(e.target.value)}
              onBlur={handlePhoneBlur}
              className={dayPhoneError ? "border-red-500" : ""}
            />
            {dayPhoneError && (
              <p className="text-xs text-red-500 mt-1">{dayPhoneError}</p>
            )}
              
            </div>

            <div>
              <InputField
              placeholder=""
              value={phoneNumberEvening}
              onChange={(e) => setPhoneNumberEvening(e.target.value)}
              onBlur={handleEvenPhoneBlur}
              className={eveningPhoneError ? "border-red-500" : ""}
            />
            {eveningPhoneError && (
              <p className="text-xs text-red-500 mt-1">{eveningPhoneError}</p>
            )}
            </div>
            
           
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
            Email
          </label>
          <InputField
            placeholder="ex: myemail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            className={emailError ? "border-red-500" : ""}
          />

          {emailError && (
            <p className="text-xs text-red-500 mt-1">{emailError}</p>
          )}

          <div>
            {" "}
            <div>
              <h1 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                Company Overview
              </h1>
            </div>
            <label className="block text-sm font-2xl font-semibold  text-gray-700 mt-6 mb-2">
              General Details of Services/Goods
            </label>
            <InputField
              placeholder=""
              className="w-full h-50 text-start text-top align-top
               "
            />{" "}
          </div>

          <div>
            <label className="block text-sm font-2xl font-semibold  text-gray-700 mt-4 mb-4">
              Establishment Date
            </label>
            <InputField placeholder="MM-DD-YYYY" />
            <label className="block text-sm font-small text-gray-700 mt-2">
              Date
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
                  Geographic Service Area
                </label>
                <InputField placeholder="" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
                  Business Type
                </label>
                <InputField placeholder="" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-6 mt-4">
                Insured?
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="insured"
                    value="Yes"
                    checked={insured === "Yes"}
                    onChange={(e) => setInsured(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="insured"
                    value="No"
                    checked={insured === "No"}
                    onChange={(e) => setInsured(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Licensed */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Licensed?
              </label>
              <div className="flex items-center gap-6  p-3 rounded-md">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="licensed"
                    value="Yes"
                    checked={licensed === "Yes"}
                    onChange={(e) => setLicensed(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="licensed"
                    value="No"
                    checked={licensed === "No"}
                    onChange={(e) => setLicensed(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  No
                </label>
              </div>
            </div>

            {/* License Number */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Number
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Gross Annual Sales */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gross Annual Sales
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4">
                Bank Information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
                  Bank Name
                </label>
                <InputField placeholder="" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
                  Beneficiary Name
                </label>
                
                <InputField placeholder="" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
                Account Number
              </label>
              <InputField
                placeholder=""
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                onBlur={handleAccountBlur}
                className={accountError ? "border-red-500" : ""}
              />
              {accountError && (
                <p className="text-xs text-red-500 mt-1">{accountError}</p>
              )}
            </div>    

            <div className="mt-8 mb-8">
              <p>
                I hereby affirm that all information provided above is accurate
                to the best of my knowledge <br />
                and belief, and I understand that this information will be
                considered material in the <br />
                evaluation of quotations, bids and proposals.
              </p>
            </div>
            <label className="block text-sm font-2xl font-semibold  text-gray-700 mt-4 mb-4">
              Date
            </label>
            <InputField placeholder="MM-DD-YYYY" />
            <label className="block text-xs font-small text-gray-700 mt-2">
              Date
            </label>
          </div>
        </div>
        {/* Signiture fields */}
        <div className="p-6 w-[300px] h-[200px]">
          <SignatureField />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white py-2 px-4 rounded-md 
        hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
        items-center mb-6 mt-4 block mx-auto"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default Reg;
