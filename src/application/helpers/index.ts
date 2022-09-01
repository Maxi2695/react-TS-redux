import { LOCAL_STORAGE_PROPERTY } from "@utils/constants";

export const setLocalStorage = (
  userId: string,
  setIsLogin: (value: boolean) => void,
  valueSetIsLogin: boolean,
  setActiveModal?: (value: boolean) => void,
) => {
  localStorage.setItem(LOCAL_STORAGE_PROPERTY, userId);
  if (setActiveModal) {
    setActiveModal(false);
  }
  setIsLogin(valueSetIsLogin);
};
