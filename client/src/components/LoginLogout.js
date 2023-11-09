import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Signup from "./Singup";
import "../LoginLogout.css"; 

function LoginLogout({ setUser, user }) {
  const history = useHistory();

  const validationSchema = Yup.object({
    username: Yup.string().required("Name is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  const [signup, setsignup] = useState(true);

  function handletoggle(e) {
    setsignup(!signup);
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
            history.push("/usergallery");
          });
        } else {
          alert("Invalid username or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  function handleDeleteAccount(e){
    fetch('/delete_account',{ method:'DELETE'})
    .then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/")
      }
    })
  }

  const login = (
    <div className="form">
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">User name:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
      <button type="submit"onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );

  return (
    <div className="login-signup">
      {signup ? (
        login
      ) : (
        <Signup setUser={setUser} user={user} />
      )}
      <button className="logout-button" onClick={handletoggle}>
        {signup ? "Signup" : "Login"}
      </button>
    </div>
  );
}

export default LoginLogout;
