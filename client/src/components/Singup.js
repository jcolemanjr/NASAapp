import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signup({setUser}){
    
    const validationSchema = Yup.object({
        username: Yup.string().required('Name is required'),
        password: Yup.string().required('Password is required').
        min(8, 'Password must be at least 8 characters long'),
        passwordConfirmation: Yup.string().required('Password confirmation is required')
        .oneOf([Yup.ref('password')], 'Password must match')
      })

    const handleSubmit = (values) => {
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
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
      };

    return (
    <Formik 
      initialValues={{
        username: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="username">User name:</label>
          <Field type="text" id="username" name="username"/>
          <ErrorMessage name="username" component="div" />
        </div>
  
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
        
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
    )
}

export default Signup