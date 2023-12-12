import InputForm from "../Elements/Input/Index"
import Button from "../Elements/Button/Index";
import { useState } from "react";
import login from "../../services/auth.service";

const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const [loginFailed, setLoginFailed] = useState("")

    // const handleLogin = (e) => {
    //     e.preventDefault();
    
    //     const param = new URLSearchParams()
    //     param.append("email", email)
    //     param.append("password", password)
    
    //     // console.log(param)
    
    //     try {
    //       // const request = new Request(`http://27.112.79.87:3000/api/v1/auth/login?${param.toString()}`, {
    //         const request = new Request("http://27.112.79.87:3000/api/v1/auth/login", {
    //         method: "GET",
    //         mode: "cors",
    //         headers: {
    //           "Content-Type" : "application/json",
    //           "Accept" : "application/json",
    //         }
    //         ,
    //         body: JSON.stringify(formData)
    //       })
    
    //       const response = fetch(request)
    
    //       if (response.status === 201) {
    //         console.log("sukses")
    //       } else {
    //         console.log("gagal login")
    //       }
    //     } catch (error) {
          
    //     }
    //   }

    const handleLogin = (e) => {
      e.preventDefault()
      console.log("masuk login")

      const data = {
        email: e.target.email.value,
        password: e.target.password.value
      }

      login(data, (status, res) => {
        console.log(res.accessToken)
        console.log(status)
        if (status) {
          localStorage.setItem('token', res.accessToken)
          // window.location.href = "/register"
        } else {
          setLoginFailed(res)
        }
      })
      // console.log(login)

    }
    return (
        <form onSubmit={handleLogin}>
            <h3 className='text-white mb-5'>Sign In</h3>
            {/* <InputForm 
            label={<span className="block font-semibold mb-1 text-slate-100 after:content-['*'] after:text-pink-500 after:ml-0.5">Username</span>}
            type="text"
            placeholder="John Doe"
            name="username"></InputForm> */}

            <InputForm 
            label={<span className="block font-semibold mb-1 text-slate-100 after:content-['*'] after:text-pink-500 after:ml-0.5">Email</span>}
            type="email"
            placeholder="example@mail.com"
            name="email"></InputForm>

            <InputForm 
            label={<span className="block font-semibold mb-1 text-slate-100 after:text-pink-500 after:ml-0.5">Password <i className="toggle-password" onClick={togglePasswordVisibility}>{showPassword ? '👁️' : '👁️‍🗨'}</i></span>}
            type={showPassword ? 'text': 'password'}
            placeholder="******"
            name="password"></InputForm>

            <Button type="submit">Login</Button>
            {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
        
    )
}

export default FormLogin