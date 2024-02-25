import React, { useState } from 'react';
import Header from '../../Components/Website/Header';
import Footer from '../../Components/Website/Footer';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const DonateBlood = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    email: '',
    phoneNumber: '',
    gender: '',
    age: '',
    bloodType: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if at least one field is filled
    const isFormValid = Object.values(formData).some(value => value.trim() !== '');
    if (!isFormValid) {
      setFormErrors({ form: 'Fill out this form' });
      return;
    }

    // Perform other form submission actions
    // For this example, we're just logging the form data
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <div>
        <Header />
      <p className='text-2xl pt-10 text-center text-fourthColor'>Sign up here so when someone donates blood we can send you a message to help us, thanks</p>
      {formSubmitted && <p>Form submitted successfully!</p>}
      <form className='bg-primeryColor p-5 sm:w-[45%] w-[23.4em] sm:h-[28em]  rounded-xl sm:ml-80 ml-2 mt-10 mb-10' onSubmit={handleSubmit}>
        <div className='pt-5 sm:pl-20 pl-2 pb-5'>
          <label className='text-fourthColor font-semibold text-xl'>Full Name:</label>
          <input className='bg-gray-300 ml-2 rounded-lg outline-none sm:w-60 px-2' placeholder='Enter Foull Name'
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='sm:pl-20 pl-2 pb-5'>
          <label className='text-fourthColor font-semibold text-xl'>Address:</label>
          <input className='bg-gray-300 ml-4 rounded-lg outline-none sm:w-60 px-2' placeholder='Enter your Address'
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className='sm:pl-20 pl-2 pb-5'>
          <label className='text-fourthColor font-semibold text-xl'>Email:</label>
          <input className='bg-gray-300 ml-2 rounded-lg outline-none sm:w-60 px-2' placeholder='Enter your Email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='sm:pl-20 pl-2 pb-5'>
          <label className='text-fourthColor font-semibold text-xl'>Phone:</label>
          <input className='bg-gray-300 ml-2 rounded-lg outline-none sm:w-60 px-2' placeholder='Enter Phone using WhatsApp'
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='sm:pl-20 pl-2 pb-5'>
          <label className='text-fourthColor font-semibold text-xl'>Gender:</label>
          <select className='bg-gray-300 ml-2 rounded-lg outline-none sm:w-60 px-2' name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className='sm:pl-20 pl-2 pb-5'>
          <label className='text-fourthColor font-semibold text-xl'>Age:</label>
          <input className='bg-gray-300 ml-2 rounded-lg outline-none sm:w-60 px-2' placeholder='Enter your Age'
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className='sm:pl-20 pl-2 pb-5'>
          <label className='text-fourthColor font-semibold text-xl'>Blood Type:</label>
          <select className='bg-gray-300 ml-2 rounded-lg outline-none sm:w-60 px-2' name="bloodType" value={formData.bloodType} onChange={handleChange} required>
            <option value="">Select Blood Type</option>
            {bloodTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        {formErrors.form && <p>{formErrors.form}</p>}
        <button className="bg-fourthColor text-primeryColor px-10 py-2 rounded-lg font-semibold sm:ml-40 ml-20 mt-2 text-xl" type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
};

export default DonateBlood;
