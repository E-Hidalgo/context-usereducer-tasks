import React, { useState } from 'react'
import { Formik } from "formik"
import "../App.css"
import { useHistory } from "react-router-dom"

function Login() {

  const [loggedIn, setloggedIn] = useState(false);
  console.log(loggedIn)

  const history = useHistory()

  return (
    <div>
      <h4>Login Page</h4>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validate={(values) => {
          let errors = {}

          if (!values.name) {
            errors.name = "Juani, please add an username"
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "Juani, write a normal name, asshole"

          }
          if (!values.email) {
            errors.email = "Juani, please add an email"
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = "Juani, enter a valid email"

          }

          if (!values.password) {
            errors.password = "Juani please, check your password"
          } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(values.password)) {
            errors.password = "Juani, password must use letters, numbers and minimum 6 characters"

          }
          return errors
        }}



        onSubmit={(values) => {
          console.log("form sent")
          setloggedIn(true)
          localStorage.setItem("user", JSON.stringify(values))
          history.push("/")

        }}
      >

        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <form className="formContainer" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">
                Username

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="user name"
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>

              {touched.name && errors.name && <div className="errorForm">{errors.name}</div>}
            </div>

            <div>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="alfredo@elcabezahuevo.com"
                  className="input"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {touched.email && errors.email && <div className="errorForm">{errors.email}</div>}

            </div>
            <div>
              <label htmlFor="password">
                Repeat Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder=" password"
                  className="input"

                />
              </label>
              {touched.password && errors.password && <div className="errorForm">{errors.password}</div>}

            </div>
            <button className="formButton" type="submit">Log In</button>

          </form>
        )}
      </Formik>
    </div >
  )
}

export default Login
