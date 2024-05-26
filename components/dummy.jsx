// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

// const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
// const phoneValidator = /^\d{10}$/; // Assuming 10 digit phone number

// const FormComponent = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     emailAddress: "",
//     password: "",
//     passwordConfirmation: "",
//     phoneNumber: "",
//     country: "",
//     city: "",
//     panNumber: "",
//     aadharNumber: ""
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstNameError: "",
//     lastNameError: "",
//     emailAddressError: "",
//     passwordError: "",
//     passwordConfirmationError: "",
//     phoneNumberError: "",
//     countryError: "",
//     cityError: "",
//     panNumberError: "",
//     aadharNumberError: ""
//   });

//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [buttonUnlock, setButtonUnlock] = useState(false);

//   useEffect(() => {
//     setButtonUnlock(areAllErrorsEmpty(formErrors));
//   }, [formErrors]);

//   const areAllErrorsEmpty = (errors) => {
//     return Object.values(errors).every(error => error === "");
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//     validateField(name, value);
//   };

//   const handleBlur = (event) => {
//     const { name, value } = event.target;
//     validateField(name, value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (buttonUnlock) {
//       setIsFormSubmitted(true);
//     } else {
//       alert("Please fill all the fields correctly.");
//     }
//   };

//   const validateField = (name, value) => {
//     let isValid = false;

//     switch (name) {
//       case "firstName":
//         isValid = validateFirstName(value);
//         break;
//       case "lastName":
//         isValid = validateLastName(value);
//         break;
//       case "emailAddress":
//         isValid = validateEmailAddress(value);
//         break;
//       case "password":
//         isValid = validatePassword(value);
//         break;
//       case "passwordConfirmation":
//         isValid = validatePasswordConfirmation(value);
//         break;
//       case "phoneNumber":
//         isValid = validatePhoneNumber(value);
//         break;
//       case "country":
//         isValid = validateCountry(value);
//         break;
//       case "city":
//         isValid = validateCity(value);
//         break;
//       case "panNumber":
//         isValid = validatePanNumber(value);
//         break;
//       case "aadharNumber":
//         isValid = validateAadharNumber(value);
//         break;
//       default:
//         break;
//     }

//     return isValid;
//   };

//   const validateFirstName = (value) => {
//     const error = value.trim() === "" ? "First Name is required" : "";
//     setFormErrors((prevErrors) => ({ ...prevErrors, firstNameError: error }));
//     return error === "";
//   };

//   const validateLastName = (value) => {
//     const error = value.trim() === "" ? "Last Name is required" : "";
//     setFormErrors((prevErrors) => ({ ...prevErrors, lastNameError: error }));
//     return error === "";
//   };

//   const validateEmailAddress = (value) => {
//     let error = "";
//     if (value.trim() === "") error = "Email Address is required";
//     else if (!emailValidator.test(value)) error = "Email is not valid";
//     setFormErrors((prevErrors) => ({ ...prevErrors, emailAddressError: error }));
//     return error === "";
//   };

//   const validatePassword = (value) => {
//     let error = "";
//     if (value.trim() === "") error = "Password is required";
//     else if (!passwordValidator.test(value))
//       error = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
//     setFormErrors((prevErrors) => ({ ...prevErrors, passwordError: error }));
//     return error === "";
//   };

//   const validatePasswordConfirmation = (value) => {
//     const error = formData.password !== value ? "Password does not match Confirmation" : "";
//     setFormErrors((prevErrors) => ({ ...prevErrors, passwordConfirmationError: error }));
//     return error === "";
//   };

//   const validatePhoneNumber = (value) => {
//     const error = value.trim() === "" || !phoneValidator.test(value) ? "Phone Number is required" : "";
//     setFormErrors((prevErrors) => ({ ...prevErrors, phoneNumberError: error }));
//     return error === "";
//   };

//   const validateCountry = (value) => {
//     const error = value.trim() === "" ? "Country is required" : "";
//     setFormErrors((prevErrors) => ({ ...prevErrors, countryError: error }));
//     return error === "";
//   };

//   const validateCity = (value) => {
//     const error = value.trim() === "" ? "City is required" : "";
//     setFormErrors((prevErrors) => ({ ...prevErrors, cityError: error }));
//     return error === "";
//   };

//   const validatePanNumber = (value) => {
//     const error = value.trim() === "" ? "PAN Number is required" : "";
//     setFormErrors((prevErrors) => ({ ...prevErrors, panNumberError: error }));
//     return error === "";
//   };

//   const validateAadharNumber = (value) => {
//     const error = value.trim() === "" ? "Aadhar Number is required" : "";
//     setFormErrors((prevErrors) => ({ ...prevErrors, aadharNumberError: error }));
//     return error === "";
//   };

//   return (
//     <Router>
//       <div className="main">
//         <h3>SignUp Form</h3>
//         {isFormSubmitted ? (
//           <Redirect to="/success" />
//         ) : (
//           <div style={{ textAlign: "center" }}>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.firstNameError && (
//                 <div className="errorMsg">{formErrors.firstNameError}</div>
//               )}
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.lastNameError && (
//                 <div className="errorMsg">{formErrors.lastNameError}</div>
//               )}
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 name="emailAddress"
//                 value={formData.emailAddress}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.emailAddressError && (
//                 <div className="errorMsg">{formErrors.emailAddressError}</div>
//               )}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.passwordError && (
//                 <div className="errorMsg">{formErrors.passwordError}</div>
//               )}
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 name="passwordConfirmation"
//                 value={formData.passwordConfirmation}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.passwordConfirmationError && (
//                 <div className="errorMsg">{formErrors.passwordConfirmationError}</div>
//               )}
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.phoneNumberError && (
//                 <div className="errorMsg">{formErrors.phoneNumberError}</div>
//               )}
//               <input
//                 type="text"
//                 placeholder="Country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.countryError && (
//                 <div className="errorMsg">{formErrors.countryError}</div>
//               )}
//               <input
//                 type="text"
//                 placeholder="City"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.cityError && (
//                 <div className="errorMsg">{formErrors.cityError}</div>
//               )}
//               <input
//                 type="text"
//                 placeholder="PAN Number"
//                 name="panNumber"
//                 value={formData.panNumber}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.panNumberError && (
//                 <div className="errorMsg">{formErrors.panNumberError}</div>
//               )}
//               <input
//                 type="text"
//                 placeholder="Aadhar Number"
//                 name="aadharNumber"
//                 value={formData.aadharNumber}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 autoComplete="off"
//               />
//               <br />
//               {formErrors.aadharNumberError && (
//                 <div className="errorMsg">{formErrors.aadharNumberError}</div>
//               )}
//               <button
//                 type="submit"
//                 style={{
//                   backgroundColor: buttonUnlock ? "green" : "blue",
//                   cursor: buttonUnlock ? "pointer" : "not-allowed"
//                 }}
//                 disabled={!buttonUnlock}
//               >
//                 Signup
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//       <Switch>
//         <Route path="/success">
//           <div className="details">
//             <h3>Thanks for signing up, find your details below:</h3>
//             <div>First Name: {formData.firstName}</div>
//             <div>Last Name: {formData.lastName}</div>
//             <div>Email Address: {formData.emailAddress}</div>
//             <div>Phone Number: {formData.phoneNumber}</div>
//             <div>Country: {formData.country}</div>
//             <div>City: {formData.city}</div>
//             <div>PAN Number: {formData.panNumber}</div>
//             <div>Aadhar Number: {formData.aadharNumber}</div>
//             <Link to="/">Back to Signup</Link>
//           </div>
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default FormComponent;
