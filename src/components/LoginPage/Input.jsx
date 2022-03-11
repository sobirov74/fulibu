import InputMask from "react-input-mask";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Formik, Form } from "formik";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";
import ApiService from "../../ApiService";
import { Context } from "../MainContext";
import Loading from "../Loading/Loading";

// const state = {
//   value: "",
// };

const Input = ({
  onChange,
  btnLabel,
  to,
  inputType,
  inputLabel,
  path,
  history,
}) => {
  const { apiService, savePhone, currentLang } = useContext(Context);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const phone = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const getPhone = phone.current.value;
    const body = {
      phone: getPhone,
    };

    apiService.postData("/verification", null, body).then((value) => {
      setLoading(false);

      if (value.statusCode === 200) {
        savePhone(getPhone);
        history.push("confirm");
      }
    });

    console.log("submited");
  };

  const handleInput = (event) => {
    const value = event.target.value;
    console.log(value);
    setValue(value);
  };

  // useEffect(() => {
  //   handleInput(value);
  // }, [value]);

  const RenderInput = ({ value }) => {
    if (path === "LoginPage") {
      return (
        <InputMask
          mask="+\9\9\8 (99)-999-99-99"
          name="reactMaskInput"
          value={value}
          onChange={(e) => handleInput(e)}
          className={styles.loginField}
        />
      );
    }

    return (
      <input
        type={inputType}
        className={styles.loginField}
        onChange={onChange}
        value={value}
      />
    );
  };

  if (loading) return <Loading />;

  return (
    <Formik>
      <Form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label className={styles.loginLabel}>{inputLabel}</label>

        <RenderInput value={value} />
        <button type="submit" className={styles.loginBtn}>
          {btnLabel}
        </button>
      </Form>
    </Formik>
  );
};

export default Input;
