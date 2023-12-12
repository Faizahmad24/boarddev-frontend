import { Link } from 'react-router-dom'
const AuthLayout = (props) => {
    const {children, type} = props
    console.log(type)
    return (
        // <section className=''>
              
        // </section>
            <div className='flex min-h-screen'>
                <div className='border border-slate-200  rounded-lg p-5 w-full max-w-lg m-auto shadow-lg '>
                    {children}

                {/* <div className='text-center'> */}
                <Navigation type={type}/>    
                {/* <span className='text-white text-sm'>Don't have an account yet?<Link to="/register" className='hover:text-orange-400'> Sign Up</Link></span> */}
                {/* </div> */}
            </div>
                </div>
    )
}

const Navigation = ({type}) => {
    if ( type === 'login') {
        return (
        <p className='mt-6 text-center text-black'>
            Dont have an account?
            <Link className='font-bold text-orange-400' to="/register"> Sign Up</Link>
        </p>
        )
    } else {
        return (
        <p className='mt-6 text-center text-black'>
            Already have an account?
            <Link className='font-bold text-orange-400' to="/"> Sign In</Link>
        </p>
        )
    }
}

export default AuthLayout