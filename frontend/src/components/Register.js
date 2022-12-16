import React from 'react'
import './Login.css'
import { AuthContext } from './App'

const Register = () => {
  const { register } = React.useContext(AuthContext)
  const onRegister = register

  const [value, setValue] = React.useState(null)
  const [inputName, setInputName] = React.useState(null)
  const testing = (e) => {
    e.preventDefault();
    !value ? setValue(e.target.value) : setValue(e.target.value);
    !inputName ? setInputName(e.target.name) : setInputName(e.target.name);
  }

  return (
    <div className='login-wrapper'>
      <form onSubmit={onRegister} className='login-form'>
        <h1 className='login-title'>
          Register
        </h1>
        <label htmlFor='email'>Email</label>
        <input onInput={testing} type={'text'} name='email' id='email' className='login-input'/>
        <label htmlFor='username'>Username</label>
        <input onInput={testing} type={'text'} name='username' id='username' className='login-input'/>
        <label htmlFor='password'>Password</label>
        <input onInput={testing} type={'password'} name='password' id='password' className='login-input'/>
        <label htmlFor='rePassword'>Repeat password</label>
        <input onInput={testing} type={'password'} name='rePassword' id='rePassword' className='login-input'/>
        <button className='login-btn' type={'submit'}>GO</button>
      </form>
      <p>{inputName} {value}</p>
    </div>
  )
}

export default Register