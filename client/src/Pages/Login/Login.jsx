import { useAuth } from "../../Components/Providers/AuthProvider"

export const Login = () => {
    const { loginData, setLoginData } = useAuth()
  return (
    <div>Login</div>
  )
}
