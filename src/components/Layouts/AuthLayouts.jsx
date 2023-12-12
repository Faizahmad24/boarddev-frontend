import { Link } from 'react-router-dom'
const AuthLayout = (props) => {
    const {children, type} = props
    console.log(type)
    return (
        <section className='pt-36'>
            <div className='container'>
                <div className='border border-slate-50 shadow-slate-50 rounded-lg p-5 max-w-lg m-auto shadow-md bg-dark'>
                    {children}

                {/* <div className='text-center'> */}
                <Navigation type={type}/>    
                {/* <span className='text-white text-sm'>Don't have an account yet?<Link to="/register" className='hover:text-orange-400'> Sign Up</Link></span> */}
                {/* </div> */}
            </div>
                </div>
              
        </section>
    )
}

const Navigation = ({type}) => {
    if ( type === 'login') {
        return (
            <p className='mt-6 text-center text-white'>
            Dont have an account?
            <Link className='font-bold text-orange-400' to="/register"> Sign Up</Link>
        </p>
        )
    }
}

export default AuthLayout