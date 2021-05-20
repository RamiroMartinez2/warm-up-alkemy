import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { generateToken } from "../../utils";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [saveCredentials, setSaveCredentials] = useState([]);
  const history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="fw-bold text-center pt-5 mb-5">Log in</h3>

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
              <Form className="w-50 p-3 d-block mx-auto">
                <div className="mb-4">
                  <div className="label form-label">Email</div>
                  <Field className="form-control" name="email" />
                  {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="mb-4">
                  <div className="label form-label">Password</div>
                  <Field
                    className="form-control"
                    type="password"
                    name="password"
                  />
                  {errors.password && touched.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
