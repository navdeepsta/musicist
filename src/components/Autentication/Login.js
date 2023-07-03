import React from 'react'
import { loginEndPoint } from '../../spotify'
export default function Login() {
  return (
    <div><a href={loginEndPoint}>Login</a></div>
  )
}
