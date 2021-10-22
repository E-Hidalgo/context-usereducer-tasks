import React from 'react'
import { Formik } from "formik"
import "../App.css"

function Login() {
  return (
    <div>
      <h4>Login Page</h4>
      <Formik
        initialValues={{
          name: "",
          email: ""
        }}
        validate={(values) => {
          if (!values.nombre) {
            console.log("Escribe algún texto")
          }
        }}
        onSubmit={(values) => {
          console.log(values)
          console.log("formulario enviado")
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (
          <form className="formContainer" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="userName">
                Username
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="alfredo@elcabezahuevo.com"
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
              </label>
            </div>

            <div>
              <label htmlFor="password">
                Password
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

            </div>
            <div>
              <label htmlFor="Password">
                Repeat Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" password"
                  className="input"

                />
              </label>
            </div>
            <button className="formButton" type="submit">Log In</button>

          </form>
        )}
      </Formik>
    </div >
  )
}

export default Login
