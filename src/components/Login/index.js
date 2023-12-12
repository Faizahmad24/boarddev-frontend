import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

// baru
import Input from '../Elements/Input/Input';
import Label from '../Elements/Input/Label';
import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';
import FormLogin from '../Fragments/FormLogin'
import AuthLayout from '../Layouts/AuthLayouts'
import LoginPage from '../../pages/login'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // console.log("ini Email : ", email)

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log("ini", setFormData);
  // }

  const handleLogin = (e) => {
    e.preventDefault();

    const param = new URLSearchParams()
    param.append("email", email)
    param.append("password", password)

    // console.log(param)

    try {
      // const request = new Request(`http://27.112.79.87:3000/api/v1/auth/login?${param.toString()}`, {
        const request = new Request("http://27.112.79.87:3000/api/v1/auth/login", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json",
        }
        ,
        body: JSON.stringify(formData)
      })

      const response = fetch(request)

      if (response.status === 201) {
        console.log("sukses")
      } else {
        console.log("gagal login")
      }
    } catch (error) {
      
    }
  }

  return (
    <LoginPage></LoginPage>


  )
}
