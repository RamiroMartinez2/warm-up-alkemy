import React from "react";
import { Formik, Form, Field } from "formik";
import { generateToken } from "../../utils";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Log in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email required";
          }

          if (!values.password) {
            errors.password = "Password required";
          }

          return errors;
        }}
        onSubmit={(values) => {
          if (
            values.email === "challenge@alkemy.org" &&
            values.password === "react"
          ) {
            const token = generateToken();
            localStorage.setItem("token", token);
            history.push("/");
          } else {
            window.alert("Invalid user or password");
          }

          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field type="password" name="password" />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
