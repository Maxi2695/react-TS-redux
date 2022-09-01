import { useEffect }              from "react";
import { LOCAL_STORAGE_PROPERTY } from "@utils/constants";

export const useGetLocalStorage = (setIsLogin: any) => {
  const userIdInLS = Number(localStorage.getItem(LOCAL_STORAGE_PROPERTY));

  useEffect(() => {
    if (userIdInLS) {
      setIsLogin(true);
    }
  }, [setIsLogin, userIdInLS])
  return { userIdInLS }
};

