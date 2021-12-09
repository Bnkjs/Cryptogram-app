import { useSelector } from "react-redux";
import authReducer from "../Reducers/authReducer";
const useSelectorUserLoggedIn = () => {
 return useSelector(authReducer)
}

export default useSelectorUserLoggedIn