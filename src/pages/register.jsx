import AuthLayout from "../components/Layouts/AuthLayouts"
import FormRegister from "../components/Fragments/FormRegister"
const RegisterPage = () => {
    return (
        <AuthLayout type="register">
            <FormRegister></FormRegister>
        </AuthLayout>
    )
}

export default RegisterPage