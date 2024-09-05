import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate, Link } from "react-router-dom";
import './Signup.css'; // Import your CSS file

const Step1 = ({ formData, setFormData, nextStep, inputErrors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="first-container">
      <div className="right-half">
        <div className="right-half-content">
          <p className="right-half-para">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>

      <div className='left-container'>
        <div>
          <div>
            <label className="label-questions">First Name</label>
            <br />
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="inputForm"
            />
            {inputErrors.firstname && <p className="error-message">{inputErrors.firstname}</p>}
          </div>

          <div>
            <label className="label-questions">Last Name</label>
            <br />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="inputForm"
            />
            {inputErrors.lastname && <p className="error-message">{inputErrors.lastname}</p>}
          </div>

          <div className="First-Page-Container">
            <label className="label-questions">Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="inputForm"
            />
            {inputErrors.email && <p className="error-message">{inputErrors.email}</p>}
          </div>

          <div>
            <label className="label-questions">Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="inputForm"
            />
             {inputErrors.password && <p className="error-message">{inputErrors.password}</p>}
          </div>


          <div>
            <button onClick={nextStep} className="inputForm">Next step to complete</button>
          </div>
          <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

const Step2 = ({ formData, setFormData, prevStep, submitForm, inputErrors }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, agreeToTerms: e.target.checked });
  };

  return (
    <div className="first-container">
      <div className="right-half">
        <div className="right-half-content">
          <p className="right-half-para">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>

      <div className='left-container'>
        <div>
          <div className="label-container">
            <label className="label-questions">Zip Code</label>
            <br />
            <input
              type="text"
              name="zipcode"
              placeholder="Zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="inputForm"
            />
            {inputErrors.zipcode && <p className="error-message">{inputErrors.zipcode}</p>}
          </div>

          <div className="label-container">
            <h3 className="label-questions">Type of Employment</h3>
            <div>
              <label>
                <input
                  type="radio"
                  name="Typeofemployeement"
                  value="Self"
                  checked={formData.Typeofemployeement === 'Self'}
                  onChange={handleChange}
                  className="radioInput"
                />
                <span className="labelCs">Self</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="Typeofemployeement"
                  value="Own Business"
                  checked={formData.Typeofemployeement === 'Own Business'}
                  onChange={handleChange}
                />
                <span className="labelCs">Own Business</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="Typeofemployeement"
                  value="Contractor"
                  checked={formData.Typeofemployeement === 'Contractor'}
                  onChange={handleChange}
                />
                <span className="labelCs">Contractor</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="Typeofemployeement"
                  value="Freelancer"
                  checked={formData.Typeofemployeement === 'Freelancer'}
                  onChange={handleChange}
                />
                <span className="labelCs">Freelancer</span>
              </label>
              {inputErrors.Typeofemployeement && <p className="error-message">{inputErrors.Typeofemployeement}</p>}
            </div>
          </div>

          <div className="label-container">
            <h3 className="label-questions">Do you own stocks, bonds, or crypto?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  name="DoYouOwnStockesOrBoundsOrCrypto"
                  value="true"
                  checked={formData.DoYouOwnStockesOrBoundsOrCrypto === 'true'}
                  onChange={handleChange}
                />
                <span className="labelCs">Yes</span>
              </label>
            </div>
            <div>
              <label className="label-questions">
                <input
                  type="radio"
                  name="DoYouOwnStockesOrBoundsOrCrypto"
                  value="false"
                  checked={formData.DoYouOwnStockesOrBoundsOrCrypto === 'false'}
                  onChange={handleChange}
                />
                <span className="labelCs">No</span>
              </label>
              {inputErrors.DoYouOwnStockesOrBoundsOrCrypto && <p className="error-message">{inputErrors.DoYouOwnStockesOrBoundsOrCrypto}</p>}
            </div>
          </div>

          <div className="label-container">
            <h3 className="label-questions">Do you own rental property?</h3>
            <div>
              <label>
                <input
                  type="radio"
                  name="DoYouOwnOrRentalProperty"
                  value="Yes"
                  checked={formData.DoYouOwnOrRentalProperty === 'Yes'}
                  onChange={handleChange}
                  className='labelCs'
                />
                <span className="labelCs">Yes</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="DoYouOwnOrRentalProperty"
                  value="No"
                  checked={formData.DoYouOwnOrRentalProperty === 'No'}
                  onChange={handleChange}
                  className='labelCs'
                />
                <span className="labelCs">No</span>
              </label>
              {inputErrors.DoYouOwnOrRentalProperty && <p className="error-message">{inputErrors.DoYouOwnOrRentalProperty}</p>}
            </div>
          </div>

          <div className="label-container">
            <label className="label-questions">What price are you willing to pay?</label>
            <br />
            <input
              type="text"
              name="WhatPriceOrWillingToPay"
              placeholder="What Price Are You Willing To Pay"
              value={formData.WhatPriceOrWillingToPay}
              onChange={handleChange}
              className="inputForm"
            />
            {inputErrors.WhatPriceOrWillingToPay && <p className="error-message">{inputErrors.WhatPriceOrWillingToPay}</p>}
          </div>

          <div className="label-container">
            <label className="label-questions">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
              />
              I accept the terms and conditions
            </label>
            {inputErrors.agreeToTerms && <p className="error-message">{inputErrors.agreeToTerms}</p>}
          </div>

          <button onClick={prevStep} >Back</button>
          <button onClick={submitForm}  className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    zipcode: '',
    agreeToTerms: false,
    WhatPriceOrWillingToPay: '',
    DoYouOwnOrRentalProperty: '',
    DoYouOwnStockesOrBoundsOrCrypto: '',
    Typeofemployeement: ''
  });
  const [inputErrors, setInputErrors] = useState({});
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log('Form data to submit:', formData);

    const requiredFields = [
      'firstname',
      'lastname',
      'email',
      'password',
      'zipcode',
      'agreeToTerms',
      'WhatPriceOrWillingToPay',
      'DoYouOwnOrRentalProperty',
      'DoYouOwnStockesOrBoundsOrCrypto',
      'Typeofemployeement'
    ];

    const newInputErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newInputErrors[field] = `${field} is required`;
      }
    });

    setInputErrors(newInputErrors);

    if (Object.keys(newInputErrors).length > 0) {
      return; // Stop form submission if there are errors
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);

      if (response.data != null) {
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle backend validation errors
        const backendErrors = error.response.data.errors;
        // Map backend errors to form input errors
        console.log(backendErrors)
        setInputErrors(backendErrors);

      } else {
        console.error('Error occurred while submitting the form:', error);
        alert(`Submission failed: ${error.message}`);
      }
     console.log(error)
    }
  };

  return (
    <div className="form-container">
     

    
        <div className="step-container">
          {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} inputErrors={inputErrors} />}
          {step === 2 && <Step2 formData={formData} setFormData={setFormData} prevStep={prevStep} submitForm={submitForm} inputErrors={inputErrors} />}
        </div>
     
    </div>
  );
};


export default Signup;
