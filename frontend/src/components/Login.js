import React from 'react'
import './Login.css'

const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className='login-wrapper'>
      <form className='login-form'>
        <h1 className='login-title'>
          Sign in
        </h1>
        <label htmlFor='username'>User/Email</label>
        <input type={'text'} name='username' id='username' className='login-input'/>
        <label htmlFor='pwd'>Password</label>
        <input type={'password'} name='pwd' id='pwd' className='login-input'/>
        <div className='login-input-container'>
          <label htmlFor='rememberMe'>Recordarme</label>
          <input type={'checkbox'} name='rememberMe' className='rememberMe'/>
        </div>
        <p>Forgot your password?</p>
        <button onClick={loginHandler} className='login-btn' type={'submit'}>GO</button>
      </form>
      <p>Don't have an account? register here</p>
    </div>
  )
}

export default Login