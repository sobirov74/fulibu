import { createContext, useEffect, useState } from "react";
import ApiService from "../ApiService";
import Loading from "./Loading/Loading";

export const Context = createContext();
const apiService = new ApiService();

const MainContext = ({ children }) => {
  const [phone, setPhone] = useState(null);
  const [token, setToken] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [relatedId, setRelatedId] = useState(null);

  const getStorageData = (name, method) => {
    const data = JSON.parse(localStorage.getItem(name));
    if (data) method(data);
  };

  const removeStorageData = (name) => {
    localStorage.removeItem(name);
  };

  const logout = () => {
    removeStorageData("token");
    window.location.replace("https://fulibu.uz");
  };

  const saveStorageData = (name, value, method) => {
    method(value);
    localStorage.setItem(name, JSON.stringify(value));
  };

  const saveRelatedId = (value) => {
    saveStorageData("related", value, setRelatedId);
  };

  const saveToken = (value) => {
    saveStorageData("token", value, setToken);
  };

  const savePhone = (value) => {
    saveStorageData("phone", value, setPhone);
  };
  const saveRegister = (value) => {
    saveStorageData("register", value, setRegistered);
  };

  useEffect(() => {
    if (
      window.location.protocol === "http:" &&
      process.env.NODE_ENV === "production"
    ) {
      window.location.replace("https://fulibu.uz");
      return;
    }

    getStorageData("token", setToken);
    getStorageData("phone", setPhone);
    getStorageData("registered", setRegistered);
    getStorageData("registered", setRegistered);
    let params = new URL(document.location).searchParams;
    let getUUID = params.get("referal");
    if (getUUID) setRelatedId(getUUID);
    else getStorageData("related", setRelatedId);
  }, []);

  if (loading) return <Loading />;

  <Context.Provider
    value={{
      apiService,
      phone,
      savePhone,
      token,
      setToken,
      saveToken,
      registered,
      saveRegister,
      saveRelatedId,
      relatedId,
      logout,
    }}
  >
    {children}
  </Context.Provider>;
};

export default MainContext;
