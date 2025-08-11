import { useState, useEffect } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function FormPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    gender: '',
    district: '',
    professionalDetails: '',
    institutionName: '',
    designation: '',
    participationInterest: '',
    whyJoin: '',
    previousExperience: '',
    reference1: '',
    contactNumber1: '',
    reference2: '',
    contactNumber2: '',
    consent: false,
  });

  const [districts, setDistricts] = useState({});
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', 'submitting'

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch('/api/districts');
        const result = await response.json();
        if (result.success) {
          setDistricts(result.data);
        }
      } catch (err) {
        console.error('Failed to fetch districts:', err);
      }
    };
    fetchDistricts();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName || formData.fullName.length < 3 || !/^[A-Z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Full Name must be at least 3 characters and in all capital letters.';
    }
    if (!formData.mobileNumber || !/^[0-9]{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile Number must be exactly 10 digits.';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email must be a valid email address.';
    }
    if (!formData.gender) newErrors.gender = 'Gender is required.';
    if (!formData.district) newErrors.district = 'District is required.';
    if (!formData.professionalDetails) newErrors.professionalDetails = 'Professional Details are required.';
    if (!formData.institutionName || formData.institutionName.length < 5) {
      newErrors.institutionName = 'Institution Name must be at least 5 characters.';
    }
    if (!formData.participationInterest) newErrors.participationInterest = 'Participation Interest is required.';
    if (!formData.whyJoin || formData.whyJoin.length < 10) {
      newErrors.whyJoin = 'This field must be at least 10 characters.';
    }
    if (!formData.consent) newErrors.consent = 'You must agree to the terms and conditions.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setSubmissionStatus('error');
      return;
    }

    setSubmissionStatus('submitting');
    try {
      const response = await fetch('/api/form/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        navigate('/thank-you'); // Redirect to a success page
      } else {
        const result = await response.json();
        setSubmissionStatus('error');
        console.error('Submission error:', result.errors);
        // Handle backend validation errors and update the state
        if (result.errors) {
          const backendErrors = {};
          result.errors.forEach(err => {
            // A simplified mapping, you might need a more complex one
            if (err.includes('fullName')) backendErrors.fullName = err;
            if (err.includes('mobileNumber')) backendErrors.mobileNumber = err;
            if (err.includes('email')) backendErrors.email = err;
            if (err.includes('gender')) backendErrors.gender = err;
            if (err.includes('district')) backendErrors.district = err;
            if (err.includes('professionalDetails')) backendErrors.professionalDetails = err;
            if (err.includes('institutionName')) backendErrors.institutionName = err;
            if (err.includes('participationInterest')) backendErrors.participationInterest = err;
            if (err.includes('whyJoin')) backendErrors.whyJoin = err;
            if (err.includes('consent')) backendErrors.consent = err;
          });
          setErrors(backendErrors);
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmissionStatus('error');
    }
  };

  const renderFormGroup = (label, name, type = 'text', placeholder, options = [], isTextArea = false) => (
    <div className="mb-6">
      <label htmlFor={name} className="block text-white text-sm font-semibold mb-2">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
          rows="4"
        ></textarea>
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="" disabled>Select {label.toLowerCase()}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${errors[name] ? 'border-red-500' : 'border-gray-300'}`}
        />
      )}
      {errors[name] && <p className="text-red-500 text-xs italic mt-2">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-[linear-gradient(357.22deg,#283643_29.73%,#425A6F_97.69%)] p-8 md:p-12 rounded-xl shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
          Avishkandhra Campaign
        </h1>
        <p className="text-center text-white mb-8">
          Join us in shaping the future of innovation in Andhra Pradesh!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {renderFormGroup('FULL NAME', 'fullName', 'text', 'e.g., JOHN DOE')}
            {renderFormGroup('GENDER', 'gender', 'select', '', ['Male', 'Female', 'Prefer not to say'])}
            {renderFormGroup('MOBILE NUMBER (WhatsApp preferred)', 'mobileNumber', 'tel', 'e.g., 9876543210')}
            {renderFormGroup('EMAIL ID', 'email', 'email', 'e.g., john.doe@example.com')}
            <div className="mb-6">
              <label htmlFor="district" className="block text-gray-700 text-sm font-semibold mb-2">
                DISTRICT
              </label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className={`shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ${errors.district ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="" disabled>Select your district</option>
                {Object.keys(districts).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              {errors.district && <p className="text-red-500 text-xs italic mt-2">{errors.district}</p>}
            </div>
            {renderFormGroup('PROFESSIONAL / ACADEMIC DETAILS', 'professionalDetails', 'select', '', [
              'Startup Founder', 'Incubator Head/Manager', 'Faculty Member', 'School Teacher',
              'College/University Student', 'ITI/Polytechnic Student', 'Innovator/Grassroot Entrepreneur',
              'Homemaker', 'Others'
            ])}
            {renderFormGroup('NAME OF INSTITUTION / ORGANISATION', 'institutionName', 'text', 'e.g., Andhra University')}
            {renderFormGroup('CURRENT DESIGNATION / TITLE (if applicable)', 'designation', 'text', 'e.g., CEO, Professor, Student')}
            <div className="md:col-span-2">
              {renderFormGroup('I AM INTERESTED TO PARTICIPATE AS', 'participationInterest', 'select', '', [
                'Trainer of Trainers (ToT)', 'Innovation Sarathi (Faculty Champion)',
                'AVISHKANDHRA Student Ambassador', 'Event Volunteer (District Level)'
              ])}
            </div>
          </div>

          <div className="mb-6">
            {renderFormGroup('WHY DO YOU WANT TO BE A PART OF AVISHKANDHRA?', 'whyJoin', 'text', 'Explain your motivation (min. 10 characters)', null, true)}
          </div>
          <div className="mb-6">
            {renderFormGroup('PREVIOUS EXPERIENCE (if any ) IN START UP / INNOVATION / TEACHING / TRAINING', 'previousExperience', 'text', 'Describe any relevant experience', null, true)}
          </div>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {renderFormGroup('REFERENCE NAME 1', 'reference1', 'text', 'Enter reference name')}
            {renderFormGroup('CONTACT NUMBER', 'contactNumber1', 'tel', 'e.g., 9876543210')}
          </div>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {renderFormGroup('REFERENCE NAME 2', 'reference2', 'text', 'Enter reference name')}
            {renderFormGroup('CONTACT NUMBER', 'contactNumber2', 'tel', 'e.g., 9876543210')}
          </div>


          <div className="flex items-center mb-6">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
              className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${errors.consent ? 'border-red-500' : ''}`}
            />
            <label htmlFor="consent" className="ml-2 block text-sm text-white">
              I hereby agree to be contacted by AP Innovation Society and associative partners for the AVISHKANDHRA initiative and future programs.            </label>
          </div>
          {errors.consent && <p className="text-red-500 text-xs italic mb-4">{errors.consent}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 flex items-center justify-center disabled:opacity-50"
            disabled={submissionStatus === 'submitting'}
          >
            {submissionStatus === 'submitting' ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <FaPaperPlane className="mr-2" />
                Submit
              </>
            )}
          </button>
        </form>

        {submissionStatus === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline ml-2">There was an issue submitting your form. Please check your details.</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormPage;