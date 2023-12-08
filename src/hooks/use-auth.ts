import { useAppSelector } from "./redux";

export const useAuth = () => {
  const { user } = useAppSelector((state) => state.userReducer);

  return {
    isAuth: !!user,
    user,
  };
};
