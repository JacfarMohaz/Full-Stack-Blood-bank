import React, { useState } from 'react';
import Header from '../../Components/Website/Header';
import Footer from '../../Components/Website/Footer';
import Swal from 'sweetalert2'
import axios from "axios"
import showcaseImage from "../../assets/showcaseImage.png"

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const DonateBlood = () => {

  const [fullName, setFullName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [gender, setGender] = useState("")
  const [age, setAge] = useState("")
  const [bloodType, setBloodType] = useState("")

  const handleRegisterDonor = (e) => {
    e.preventDefault()
    axios.post("http://localhost:7000/register/donors", {
      "fullName": fullName,
      "address": address,
      "email": email,
      "phone": phone,
      "gender": gender,
      "age": age,
      "bloodType": bloodType,
    }).then((res) => {
      Swal.fire({
        title: "Rgisteration success",
        text: "Thank you for your registration, I will send you a message in case of emergency",
        icon: "success"
      })
      setFullName("")
      setAddress("")
      setEmail("")
      setPhone("")
      setGender("")
      setAge("")
      setBloodType("")
    }).catch((error) => console.log(error))
  }

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
      <p className='text-2xl pt-10 pb-10 text-center text-fourthColor'>Sign up here so when someone donates blood we can send you a message to help us, thanks</p>
      {formSubmitted && <p>Form submitted successfully!</p>}
      <div className='sm:flex justify-around bg-primeryColor sm:h-[40em] h-[70em]'>
        <div className='pt-36'>
          <img className='w-[28em] sm:px-0 px-2 rounded-2xl' src={showcaseImage} />
        </div>
        <form className='bg-primeryColor shadow-2xl shadow-black p-5 sm:w-[45%] w-[23.4em] sm:h-[34em] h-[35em]  rounded-xl ml-2 mt-10 mb-10' onSubmit={handleSubmit}>
          <div className='pt-5 sm:pl-20 pb-5'>
            <label className='text-textColor font-semibold text-xl'>Full Name:</label>
            <input className='bg-gray-300 sm:ml-10 ml-2 rounded-lg outline-none sm:w-60 px-6 py-2' placeholder='Enter Foull Name'
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className='sm:pl-20 pb-5'>
            <label className='text-textColor font-semibold text-xl'>Address:</label>
            <input className='bg-gray-300 msm:l-14 ml-6 rounded-lg outline-none sm:w-60 px-6 py-2' placeholder='Enter your Address'
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className='sm:pl-20 pb-5'>
            <label className='text-textColor font-semibold text-xl'>Email:</label>
            <input className='bg-gray-300 msm:l-20 ml-11 rounded-lg outline-none sm:w-60 px-6 py-2' placeholder='Enter your Email'
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='sm:pl-20 pb-5'>
            <label className='text-textColor font-semibold text-xl'>Phone:</label>
            <input className='bg-gray-300 ml-[4.sm:4em] ml-9 rounded-lg outline-none sm:w-60 px-6 py-2' placeholder='Enter Phone using WhatsApp'
              type="text"
              name="phoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className='sm:pl-20 pb-5'>
            <label className='text-textColor font-semibold text-xl'>Gender:</label>
            <select className='bg-gray-300 ml-[3.sm:8em] ml-7 rounded-lg outline-none sm:w-60 w-56 py-2' name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='sm:pl-20 pb-5'>
            <label className='text-textColor font-semibold text-xl'>Age:</label>
            <input className='bg-gray-300 ml-[5.sm:8em] ml-14 rounded-lg outline-none sm:w-60 px-6 py-2' placeholder='Enter your Age'
              type="text"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className='sm:pl-20 pb-5'>
            <label className='text-textColor font-semibold text-xl'>Blood Type:</label>
            <select className='bg-gray-300 sm:ml-7 ml-4 rounded-lg outline-none sm:w-60 px-6 py-2' name="bloodType" value={bloodType} onChange={(e) => setBloodType(e.target.value)} required>
              <option value="">Select Blood Type</option>
              {bloodTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          {formErrors.form && <p>{formErrors.form}</p>}
          <button onClick={handleRegisterDonor} className="bg-fourthColor text-textColor px-10 py-2 rounded-lg font-semibold sm:ml-52 ml-20 mt-2 text-xl" type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DonateBlood;
