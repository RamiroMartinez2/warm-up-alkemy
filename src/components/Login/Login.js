import React from "react";
import { withFormik, Field, ErrorMessage, Form } from "formik";

const Login = (props) => {
  const { isSubmitting } = props;
  return (
    <Form>
      <div className="row">
        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email">
          {(message) => <div>{message}</div>}
        </ErrorMessage>
      </div>
      <div className="row">
        <label>Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password">
          {(message) => <div>{message}</div>}
        </ErrorMessage>
      </div>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    return {
      email: "",
      password: "",
    };
  },
  async validate(values) {
    const errors = {};
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }

    return errors;
  },
  handleSubmit(values, formikBag) {
    console.log(values);
    formikBag.setSubmitting(false);
  },
})(Login);
