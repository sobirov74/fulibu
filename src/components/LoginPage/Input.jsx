import InputMask from "react-input-mask";
import React from "react";
import { Formik, Form } from "formik";
import styles from "./login.module.scss";
import { Link } from "react-router-dom";

const Input = ({
  value,
  onChange,
  btnLabel,
  to,
  inputType,
  inputLabel,
  path,
}) => {
  const RenderInput = () => {
    if (path === "LoginPage") {
      return (
        <InputMask
          mask="+\9\9\8 (99)-999-99-99"
          name="reactMaskInput"
          value={value}
          onChange={onChange}
          className={styles.loginField}
        />
      );
    }

    return (
      <input
        type={inputType}
        className={styles.loginField}
        onChange={onChange}
      />
    );
  };

  return (
    <Formik
      initialValues={{
        telNum: "",
      }}
    >
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <label className={styles.loginLabel}>{inputLabel}</label>

        {/* {(telNum) => (
            <input
              {...telNum}
              type={inputType}
              name="telNum"
              className={styles.loginField}
              onChange={onChange}
            />
          )} */}

        <RenderInput />
        <Link to={to} className={styles.loginBtn}>
          {btnLabel}
        </Link>
      </Form>
    </Formik>
  );
};

export default Input;
