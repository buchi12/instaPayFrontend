import React, {  useState } from 'react';
import axios from 'axios';
import { CSSTransition} from 'react-transition-group';
import {  useNavigate } from "react-router-dom";
import './Signup.css'; // Import your CSS file

const Step1 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
     
      <input
        type="text"
        name="firstname"
        placeholder="First Name"
        value={formData.firstname}
        onChange={handleChange}
      />
    </div>
      <div>
      <input
        type="text"
        name="lastname"
        placeholder="Last Name"
        value={formData.lastname}
        onChange={handleChange}
      />
      </div>
      <div>
      
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      </div>

      <div>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      </div>
      
    
      
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <input
        type="text"
        name="zipcode"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={handleChange}
      />
      <div>
        <h3>Type of Employment</h3>
        <div>
        <label  className="rr">
          <input
            type="radio"
            name="Typeofemployeement"
            value="Self"
            checked={formData.Typeofemployeement === 'Self'}
            onChange={handleChange}
           
           
          />
          Self
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
          Own Business
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
          Contractor
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
          Freelancer
        </label>
      </div>
      </div>
      <div>
        <h3>Do you own stocks, bonds, or crypto?</h3>
        <label>
          <input
            type="radio"
            name="DoYouOwnStockesOrBoundsOrCrypto"
            value="true"
            checked={formData.DoYouOwnStockesOrBoundsOrCrypto === 'true'}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="DoYouOwnStockesOrBoundsOrCrypto"
            value="false"
            checked={formData.DoYouOwnStockesOrBoundsOrCrypto === 'false'}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div>
        <h3>Do you own rental property?</h3>
        <label>
          <input
            type="radio"
            name="DoYouOwnOrRentalProperty"
            value="Yes"
            checked={formData.DoYouOwnOrRentalProperty === 'Yes'}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="DoYouOwnOrRentalProperty"
            value="No"
            checked={formData.DoYouOwnOrRentalProperty === 'No'}
            onChange={handleChange}
          />
          No
        </label>
      </div>
      <div>
        <input
          type="text"
          name="WhatPriceOrWillingToPay"
          placeholder="WhatPriceOrWillingToPay"
          value={formData.WhatPriceOrWillingToPay}
          onChange={handleChange}
        />
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

const Step3 = ({ formData, setFormData, prevStep, submitForm }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, agreeToTerms: e.target.checked });
  };

  return (
    <div>
      <h2>Step 3: Terms and Conditions</h2>
      <p>Terms and conditions text...</p>
      <label>
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        I accept the terms and conditions
      </label>
      <button onClick={prevStep}>Back</button>
      <button onClick={submitForm} disabled={!formData.agreeToTerms}>
        Submit
      </button>
     
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate()  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    zipcode: '',
    agreeToTerms: false,
    WhatPriceOrWillingToPay: '',
    DoYouOwnOrRentalProperty: '',
    DoYouOwnStockesOrBoundsOrCrypto: '',
    Typeofemployeement: '',
  });

  const steps = 3; // Total number of steps

   const nextStep = () => setStep(step + 1);
   const prevStep = () => setStep(step - 1);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log('Form data to submit:', formData);

    try {
      const response = await axios.post('http://localhost:3000/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response from server:', response.data);
      if (response.data != null){
        navigate('/login')
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = error.response.data.errors;
        // Display validation errors to the user
        alert(`Validation errors:\n${errors.join('\n')}`);
      } else {
        // Handle other errors, such as network issues
        console.error('Error occurred while submitting the form:', error);
        alert(`Submission failed: ${error.message}`);
      }
    }
  };

  // Calculate the progress width as a percentage
  const progressWidth = ((step - 1) / (steps - 1)) * 100;

  return (
    <div className="form-container">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
      </div>

  
        <CSSTransition
          key={step}
          timeout={500}
          classNames="step"
        >
          <div className="step-container">
            {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
            {step === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} submitForm={submitForm} />}
          </div>
        </CSSTransition>
    
    </div>
  );
};


export default Signup