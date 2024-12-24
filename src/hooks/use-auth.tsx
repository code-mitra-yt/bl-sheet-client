import { RootState } from "@/store";
import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return { user: auth.user, authToken: auth.authToken, isAuth: auth.isAuth };
};

export default useAuth;
