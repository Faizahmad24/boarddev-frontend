import Navbar from "../components/Fragments/Navbar"
import { useLogin } from "../hooks/useLogin"

const DashboardPage = () => {
    const userName = useLogin()
    return (
        <Navbar></Navbar>
    )
}

export default DashboardPage