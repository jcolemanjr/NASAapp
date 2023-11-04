import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Signup from "./Singup";

function Login({setUser}){

  const validationSchema = Yup.object({
    username: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required').
    min(8, 'Password must be at least 8 characters long')
  })

  const[signup,setsignup]=useState(false)

  function handletoggle(e){
    setsignup(!signup)
  }

  const handleSubmit = (values) => {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error)
      })
  }
      
    
  const login = <div className="form">
  <Formik
    initialValues={{ username: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}>
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
  </div>

    return (
      <div className="login-signup">
        {signup ? login : <Signup setUser={setUser}/>}
        <button onClick={handletoggle}>{signup ? "Signup" : "Login"}</button>
      </div>
      
    )
 
}

export default Login 