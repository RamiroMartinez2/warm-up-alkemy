import React from "react";
import { Formik, Form, Field } from "formik";

export const Login = () => {
  function validateEmail(email) {
    
    let error;
    if (!email) {
      error = "Input Email cannot be empty";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      error = "Invalid email address";
    }

    return error;
  }

  function validatePassword(password) {
    console.log(password);
    let error;
    if (!password) {
      error = "Input Password cannot be empty";
    }
    return error;
  }

  return (
    <div>
      <h1>Log in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" validate={validateEmail} />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <Field
              type="password"
              name="password"
              validate={validatePassword}
            />
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
