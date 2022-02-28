import InputMask from "react-input-mask";
import React from "react";
import { Formik, Field, Form } from "formik";
import styles from "../header.module.scss";

const Input = ({ value, onChange }) => {
  return (
    <Formik
      initialValues={{
        telNum: "3322",
      }}
    >
      <Form style={{ display: "flex", flexDirection: "column" }}>
        <label className={styles.loginLabel}>Введите свой номер телефона</label>

        <InputMask mask="999-99-999-99-99" name='reactMaskInput' value={value} onChange={onChange}>
          {(telNum) => (
            <Field
            {...telNum}
              type="tel"
              name="telNum"
              className={styles.loginField}
              onChange={onChange}
              disableUnderline
            />
          )}
        </InputMask>
        <button className={styles.loginBtn}>Получить код</button>
      </Form>
    </Formik>
  );
};

export default Input;
