import React from 'react'
import './Login.css'
import { AuthContext } from './App'

const Login = (props) => {
  const { login, register } = React.useContext(AuthContext)
  const onLogin = login
  const onRegister = register
  
  const logRegHandler = (e) => {
    e.preventDefault();
    console.log('mode switch')
  }
  return (
    <div className='login-wrapper'>
      {props.mode === 'login' ?
      <>
      <form onSubmit={onLogin} className='login-form'>
        <h1 className='login-title'>
          Sign in
        </h1>
        <label htmlFor='emailUser'>User/Email</label>
        <input type={'text'} name='emailUser' id='emailUser' className='login-input'/>
        <label htmlFor='password'>Password</label>
        <input type={'password'} name='password' id='password' className='login-input'/>
        <div className='login-input-container'>
          <label htmlFor='rememberMe'>Recordarme</label>
          <input type={'checkbox'} name='rememberMe' id='rememberMe' className='rememberMe'/>
        </div>
        <p>Forgot your password?</p>
        <button className='login-btn' type={'submit'}>GO</button>
      </form>
      </>
      :
      <>
      <form onSubmit={onRegister} className='login-form'>
        <h1 className='login-title'>
          Register
        </h1>
        <label htmlFor='email'>Email</label>
        <input type={'text'} name='email' id='email' className='login-input'/>
        <label htmlFor='username'>Username</label>
        <input type={'text'} name='username' id='username' className='login-input'/>
        <label htmlFor='password'>Password</label>
        <input type={'password'} name='password' id='password' className='login-input'/>
        <label htmlFor='rePassword'>Repeat password</label>
        <input type={'password'} name='rePassword' id='rePassword' className='login-input'/>
        <button className='login-btn' type={'submit'}>GO</button>
      </form>
      </>
      }
      <p onClick={logRegHandler}>Don't have an account? register here</p>
    </div>
  )
}

export default Login