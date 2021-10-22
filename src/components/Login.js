import React from 'react'
import { Formik, Form, Field } from "formik"

function Login() {
  return (
    <div>
      <h4>Login Page</h4>
      <Formik>
        {() => (
          <Form>
            <div>
              <label htmlFor="email">
                Username
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="alfredo@elcabezahuevo.com"
                />
              </label>
            </div>

            <div>
              <label htmlFor="password">
                Password
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </label>

            </div>
            <div>
              <label labelFor="validatePassword">
                Repeat Password
                <Field
                  type="password"
                  name="validatePassword"
                  id="validatePassword"
                  placeholder="repeat password"
                />
              </label>
            </div>
            <button type="submit">Log In</button>

          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
