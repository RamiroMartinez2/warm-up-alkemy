import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { generateToken } from "../../utils";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [saveCredentials, setSaveCredentials] = useState([]);
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
            window.location.reload();
            fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: JSON.stringify({
                email: values.email,
                password: values.password,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((json) => setSaveCredentials(json));
          } else {
            window.alert("Invalid user or password");
          }
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
