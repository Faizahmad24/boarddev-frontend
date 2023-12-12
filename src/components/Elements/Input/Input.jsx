const Input = (props) => {
    const {type, placeholder, name, onChange} = props
    return (
        <>
        <input id={name} type={type} placeholder={placeholder} name={name} 
        // value={name} 
        // onChange={(e) => setEmail(e.target.value)} 
        // onChange={onChange} 
        className="px-3 py-2 border mb-5 shadow-md rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 peer"></input>
        <Navigation type={type}/>
        </>
        
    )
}

const Navigation = ({type}) => {
    if (type === 'email') {
        return (
            <p className="text-sm m-1 text-pink-500 invisible peer-invalid:visible">Email Invalid</p>
        )

    }
}

export default Input