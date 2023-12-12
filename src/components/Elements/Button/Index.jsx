const Button = (props) => {
    const {type, classname = "bg-orange-400", children, onClick= () => {}} = props
    return (
        <div className='flex justify-center w-full mb-5'>
            <button className={`text-white font-bold w-full ${classname} p-2 border rounded-lg shadow-md shadow-slate-500`}
            type={type}
            onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button