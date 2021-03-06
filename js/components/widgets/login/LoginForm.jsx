import React from 'react'

import { ValidInput } from '@liquid-labs/react-validation'

import { isEmail } from '@liquid-labs/validators'

const LoginForm = () => {
  const commonFieldProps = {
    initialValue : '',
    required     : true,
    gridded      : {xs : 12},
    viewOnly     : false,
  }

  return [
    <ValidInput key="emailInput"
        label="Email"
        validators={isEmail}
        {...commonFieldProps}
    />,
    <ValidInput key="passwordInput"
        name="password"
        label="Password"
        type="password"
        {...commonFieldProps}
    />,
  ]
}

export { LoginForm }
