import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Signup from "./Singup";

function LoginLogout({ setUser, user }) {
  const history = useHistory();

  const validationSchema = Yup.object({
    username: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long')
  })

  const[signup,setsignup]=useState(true)

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
          r.json().then((data) => {
            setUser(data.user);
            // Redirect to the user gallery upon successful login
            history.push("/Gallery");
          });
        } else {
          // Handle the case where login is not successful
          alert("Invalid username or password");
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };
      
    
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
        {signup ? login : <Signup setUser={setUser} user={user}/>}
        <button onClick={handletoggle}>{signup ? "Signup" : "Login"}</button>
      </div>
      
    )

}

export default LoginLogout 