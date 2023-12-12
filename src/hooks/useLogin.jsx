import { useEffect, useState } from "react"

export const useLogin = () => {
    const [userName, setUserName] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setUserName(token)
        } else {
            window.location.href = "/"
        }
    }, [])
    return userName
}
