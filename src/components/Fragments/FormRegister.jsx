import InputForm from "../Elements/Input/Index"
import { useState } from "react";
import Button from "../Elements/Button/Index";
import register from "../../services/register.service";
import Swal from "sweetalert2";

const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [registerFailed, setRegisterFailed] = useState("");

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    const toogleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleRegister = (e) => {
        e.preventDefault()
        console.log("masuk register")

        const data = {
            fullName: e.target.fullname.value,
            email: e.target.email.value,
            newPassword: e.target.newPassword.value,
            confirmNewPassword: e.target.confirmNewPassword.value,
            status: "Active",
            role: "Admin"
          }

          register(data, (status, res)=> {
            if (res.code === 201){
                Swal.fire({
                    position: 'top-end',
                    title: 'Success!',
                    text: 'Registration Successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                  });
                window.location.href = "/"
            } else {
                setRegisterFailed(res.message)
            }
        })
    }
    return (
        <form onSubmit={handleRegister}>
            <h3 className='text-orange-400 font-bold text-3xl mb-5'>Sign Up</h3>
            <InputForm
            label={<span className="block font-semibold mb-1 text-black after:text-pink-500 after:ml-0.5">Fullname</span>}
            name="fullname"
            placeholder="Insert your name here"
            type="text"
            />

             <InputForm
            label={<span className="block font-semibold mb-1 text-black after:content-['*'] after:text-pink-500 after:ml-0.5">Email</span>}
            name="email"
            placeholder="example@mail.com"
            type="email"
            />

             <InputForm
            label={<span className="block font-semibold mb-1 text-black after:text-pink-500 after:ml-0.5">Password <i className="toggle-password" onClick={togglePasswordVisibility}>{showPassword ? '👁️' : '👁️‍🗨'}</i></span>}
            name="newPassword"
            placeholder="******"
            type={showPassword ? 'text': 'password'}
            />

             <InputForm
            label={<span className="block font-semibold mb-1 text-black after:text-pink-500 after:ml-0.5">Confirm Password <i className="toggle-password" onClick={toogleConfirmPasswordVisibility}>{showConfirmPassword ? '👁️' : '👁️‍🗨'}</i></span>}
            name="confirmNewPassword"
            placeholder="******"
            type={showConfirmPassword ? 'text': 'password'}
            />
            <Button type="submit">Login</Button>
            {registerFailed && <p className="text-red-500 text-center">{registerFailed}</p>}
        </form>
    )
}

export default FormRegister