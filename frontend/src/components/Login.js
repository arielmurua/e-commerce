import React from 'react'
import './Login.css'
import { AuthContext } from './App'
import { validations } from './Validations'

const Login = () => {
  const { login } = React.useContext(AuthContext)
  const onLogin = login

  const [errors, setErrors] = React.useState(null)
  const testing = validations.loginEmailUser()

  return (
    <div className='login-wrapper'>
      <form onSubmit={onLogin} className='login-form'>
        <h1 className='login-title'>
          Sign in
        </h1>
        <label htmlFor='emailUser'>User/Email</label>
        <input onInput={testing} type={'text'} name='emailUser' id='emailUser' className='login-input'/>
        <label htmlFor='password'>Password</label>
        <input onInput={testing} type={'password'} name='password' id='password' className='login-input'/>
        <div className='login-input-container'>
          <label htmlFor='rememberMe'>Recordarme</label>
          <input type={'checkbox'} name='rememberMe' id='rememberMe' className='rememberMe'/>
        </div>
        <button className='login-btn' type={'submit'}>GO</button>
      </form>
      <p>Don't have an account? register here</p>
      <p>{errors}</p>
    </div>
  )
}

export default Login