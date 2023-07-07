import React from 'react'
import { loginEndPoint } from '../../spotify'
import styles from './Login.module.css'
export default function Login() {
  return (
    <div className={styles.login}>
      <img className={styles.image}/> <br />
      <a href={loginEndPoint}>Login</a>   
    </div>
  )
}
