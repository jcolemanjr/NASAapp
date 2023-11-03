import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login(){

    const validationSchema = Yup.object({
        username: Yup.string().required('Name is required'),
        password: Yup.string().required('Password is required').
        min(8, 'Password must be at least 8 characters long')
      })

    return (
    <>
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        // Handle form submission here, e.g., send data to the server
        console.log(values);
        actions.setSubmitting(false);
      }}>
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
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
        
    </>
    )
}

export default Login 