import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ChangePassword({setUser}){

    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required').
        min(8, 'Password must be at least 8 characters long'),
        passwordConfirmation: Yup.string().required('Password confirmation is required')
      })

      const handleSubmit = (values) => {
        fetch("/change_password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: values.password,
            password_confirmation: values.passwordConfirmation,
          }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
            }
        })
        .catch((error) => {
          // Handle errors here
          console.error("Error:", error);
          });
        }
    
    return (
        <>
            <Formik 
      initialValues={{
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password"/>
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <label htmlFor="passwordConfirmation">Password Confirmation:</label>
          <Field type="password" id="passwordConfirmation" name="passwordConfirmation" />
          <ErrorMessage name="passwordConfirmation" component="div" />
        </div>

        </Form>
    </Formik>
        </>
    )
}

export default ChangePassword