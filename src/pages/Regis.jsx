import React, { useState } from "react";
import { useRef } from "react";
import InputField from "../components/inputField.jsx";
import SignatureField from "../components/signitureField.jsx";
import { validateEmail } from "../utils/validation.jsx";
import { validateAddress } from "../utils/validation.jsx";
import { validateName } from "../utils/validation.jsx";
import { validatePhoneNumber } from "../utils/validation.jsx";
import { validateAccountNumber } from "../utils/validation";
import { validateZipCode } from "../utils/validation.jsx";
import { validateCompanyDescription } from "../utils/validation.jsx";
import { validateDate } from "../utils/validation.jsx";
import { validateBusinessType } from "../utils/validation.jsx";
import { validategeneralInputType } from "../utils/validation.jsx";

const Reg = () => {
  const [orgName, setOrgName] = useState("");
  const [touched, setTouched] = useState(false);
  const [insured, setInsured] = useState("");
  const [licensed, setLicensed] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberDay, setPhoneNumberDay] = useState("");
  const [phoneNumberEvening, setPhoneNumberEvening] = useState("");
  const [dayPhoneError, setDayPhoneError] = useState("");
  const [eveningPhoneError, setEveningPhoneError] = useState("");
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
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyDescriptionError, setCompanyDescriptionError] = useState("");
  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [estdate, setEstdate] = useState("");
  const [estdateError, setEstdateError] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [busnisstypeError, setBusnisstypeError] = useState("");
  const [generalType, setGeneralType] = useState("");
  const [generalTypeError, setGeneralTypeError] = useState("");

  const hadleGeneralTypeBlur = () => {
    const error = validategeneralInputType(generalType);
    setGeneralTypeError(error);
  };

  const handleBusnissBlur = () => {
    const error = validateBusinessType(businessType);
    setBusnisstypeError(error);
  };

  const handleEstBlur = () => {
    const error = validateDate(estdate);
    setEstdateError(error);
  };

  const dateRef = useRef(null);

  const handleDateBlur = () => {
    const error = validateDate(date);
    setDateError(error);
  };

  const handleCompanyDescriptionBlur = () => {
    setCompanyDescriptionError(validateCompanyDescription(companyDescription));
  };

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

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

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
                name="orgname"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                onBlur={() => setTouched(true)}
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

              {addressError && (
                <p className="text-xs text-red-500 mt-1">{addressError}</p>
              )}
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

              {streetaddressError && (
                <p className="text-xs text-red-500 mt-1">
                  {streetaddressError}
                </p>
              )}
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

          <div></div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2 mt-4">
                Phone Number (Day)
              </label>
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
              <label className="block text-lg font-semibold text-gray-800 mb-2 mt-4">
                Phone Number (Evening)
              </label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
              General Details of Services/Goods
            </label>
            <textarea
              placeholder="Enter company description..."
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              onBlur={handleCompanyDescriptionBlur}
              rows={6} // controls height
              className={`w-full p-2 border rounded resize-y text-left ${companyDescriptionError ? "border-red-500" : ""}`}
            />
            {companyDescriptionError && (
              <p className="text-xs text-red-500 mt-1">
                {companyDescriptionError}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-2xl font-semibold  text-gray-700 mt-4 mb-4">
              Establishment Date
            </label>
            <div className="relative">
              {/* Calendar Icon */}
              <InputField
                type="date"
                ref={dateRef}
                value={date}
                onChange={(e) => setEstdate(e.target.value)}
                onBlur={handleEstBlur}
                className="w-full "
              />
            </div>

            {estdateError && (
              <p className="text-xs text-red-500 mt-1">{estdateError}</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
                  Geographic Service Area
                </label>

                <input
                  type="text"
                  value={generalType}
                  onChange={(e) => setGeneralType(e.target.value)}
                  onBlur={hadleGeneralTypeBlur}
                  placeholder=""
                  className={`w-full px-3 py-2 border rounded-md 
                   ${generalTypeError ? "border-red-500" : "border-gray-300"}`}
                />

                {generalTypeError && (
                  <p className="text-red-500 text-xs mt-1">
                    {generalTypeError}
                  </p>
                )}
              </div>

              <div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 mt-6">
                    Business Type
                  </label>

                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    onBlur={handleBusnissBlur}
                    placeholder="e.g. Software House"
                    className={`w-full px-3 py-2 border rounded-md 
                   ${busnisstypeError ? "border-red-500" : "border-gray-300"}`}
                  />

                  {busnisstypeError && (
                    <p className="text-red-500 text-xs mt-1">
                      {busnisstypeError}
                    </p>
                  )}
                </div>
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
              <div className="flex items-center gap-6  rounded-md">
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

            {/* License Number (show only if Yes) */}
            {licensed === "Yes" && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  License Number
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter license number"
                />
              </div>
            )}

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

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>

            <div>
              <div className="relative">
                {/* Calendar Icon */}
                <InputField
                  type="date"
                  ref={dateRef}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onBlur={handleDateBlur}
                  className="w-full "
                />
              </div>

              {dateError && (
                <p className="text-xs text-red-500 mt-1">{dateError}</p>
              )}

              <label className="block text-sm font-small text-gray-700 ">
                Date
              </label>
            </div>
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
