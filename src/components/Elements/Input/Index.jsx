import Label from "./Label"
import Input from "./Input"
import { useState } from "react";

const InputForm = (props) => {
    const {label, name, type, placeholder} = props


    return(
        <>

        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} placeholder={placeholder}></Input>
        {/* <Label htmlFor="email"><span className="block font-semibold mb-1 text-slate-100 after:content-['*'] after:text-pink-500 after:ml-0.5">Email</span></Label>
        <Input type="email" placeholder="example@mail.com" name="email"></Input> */}

        {/* <Label htmlFor="password"><span className="block font-semibold mb-1 text-slate-100 after:text-pink-500 after:ml-0.5">Password <i className="toggle-password" onClick={togglePasswordVisibility}>{showPassword ? '👁️' : '👁️‍🗨'}</i></span></Label>
        <Input type={showPassword ? 'text': 'password'} name="password"></Input> */}
        </>
    )
}

export default InputForm