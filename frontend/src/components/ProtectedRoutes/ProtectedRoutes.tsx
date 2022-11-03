import { Outlet } from "react-router"; // Allows for nested routes to render
import SignUp from "../../routes/SignUp/SignUp";


const useAuth = (user : any) => {
	// Here we authenticate the user. In future i plan to use context instead of state so this will remain empty until then.
	return true;
}

const ProtectedRoutes = ({ user } : any) => {
	const isAuth = useAuth(user);
	return isAuth ? <Outlet /> : <SignUp />
}

export default ProtectedRoutes