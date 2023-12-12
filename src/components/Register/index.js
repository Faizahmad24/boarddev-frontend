import React from 'react'
import { Link } from 'react-router-dom'
import { redirect } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import FormRegister from '../Fragments/FormRegister'


export default function Register() {
  // const history = unstable_HistoryRouter();
  const [formData, setFormData] = useState({
    fullName : '',
    email : '',
    newPassword : '',
    confirmNewPassword : '',
    status: 'Active',
    role: 'Admin'
  })

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("ini", setFormData);

  }

  // useEffect(() => {
     async function handleRegister(e) {
      e.preventDefault()

      // console.log("ini", formData);

      // const test = {
      //   nameSKow : e.target.value
      // }
      // console.log(test)

      // setName({
      //   ...name,
      //   [e.target.name]: e.target.value,
      // });
      // console.log(setName)

      try {
        const request = new Request("http://27.112.79.87:3000/api/v1/user", {
          method : "post",
          mode : "cors",
          headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000"
          },
          body: JSON.stringify(formData)
        }) 
  
        const response = await fetch(request)
        // history.push('/');
        if (response.status === 200) {
          
          // console.log(response.url)
          console.log('sukses')
          Swal.fire({
            position: 'top-end',
            title: 'Success!',
            text: 'Registration Successfully!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
        } else if (response.status === 400) {
          console.log("Validation Error")
        }
      } catch (error) {
        console.log("dapat error", error)
      }
    }
  // }, [])
  


  
  return (
    <section className='pt-36'>
        <div className='container'>
          <div className='border border-slate-50 shadow-slate-50 rounded-lg p-5 max-w-lg m-auto shadow-md bg-dark'>\
          <FormRegister></FormRegister>
             {/* <form onSubmit={handleRegister}>
                <h3 className='text-white mb-5'>Sign Up</h3>
                <label for="username">
                  <span className="block font-semibold mb-1 text-slate-100 after:text-pink-500 after:ml-0.5">Fullname</span>
                  <input id="username" type="text" name='fullName' value={formData.fullName} onChange={handleInputChange} placeholder="Masukkan Username" className="px-3 py-2 border shadow-md rounded w-full block text-sm placeholder:text-slate-400  mb-4"/>
                </label>
                <label for="email">
                  <span className="block font-semibold mb-1 text-slate-100 after:content-['*'] after:text-pink-500 after:ml-0.5">Email</span>
                  <input id="email" type="email" placeholder="Masukkan Email" name='email' value={formData.email} onChange={handleInputChange} className="px-3 py-2 border shadow-md rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 peer"/>
                  <p className="text-sm m-1 text-pink-500 invisible peer-invalid:visible">Email Invalid</p>
                </label>
                <label for="password">
                  <span className="block font-semibold mb-1 text-slate-100 after:text-pink-500 after:ml-0.5">Password <i className="toggle-password" onClick={togglePasswordVisibility}>{showPassword ? '👁️' : '👁️‍🗨'}</i></span>
                  <input id="password" type={showPassword ? 'text': 'password'} placeholder="Masukkan Password" name='newPassword'  value={formData.newPassword} onChange={handleInputChange} className="px-3 py-2 border shadow-md rounded w-full block text-sm placeholder:text-slate-400 mb-4"/>
                </label>
                <label for="confirm">
                  <span className="block font-semibold mb-1 text-slate-100 after:text-pink-500 after:ml-0.5">Confirm Password <i className="toggle-password" onClick={togglePasswordVisibility}>{showPassword ? '👁️' : '👁️‍🗨'}</i></span>
                  <input id="confirm" type={showPassword ? 'text': 'password'} placeholder="Konfirmasi Password" name='confirmNewPassword' value={formData.confirmNewPassword} onChange={handleInputChange} className="px-3 py-2 border shadow-md rounded w-full block text-sm placeholder:text-slate-400 mb-10"/>
                </label>
                <div className='flex justify-center w-full mb-5'>
                  <button className="text-white w-full bg-orange-400 p-2 border rounded-lg shadow-md shadow-slate-500">Register</button>
                </div>
              </form> */}
          </div>
        </div>
      </section>
  )
}
