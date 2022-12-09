import React from 'react'
import { AuthContext } from './App';

const AuthProvider = ({ children }) => {
  const [userLogged, setUserLogged] = React.useState(JSON.parse(localStorage.getItem("userLogged")) || null)
  const loginHandler = async (e) => {
    await e.preventDefault();
    console.log("login...")
    let url = "http://localhost:8080/api/user/login"
    let response = await fetch(url, {
      method: 'POST',
      body: new FormData(e.target)
    })
    let data = await response.json()
    if (data.meta.status === 400) {
      console.log("login error...")
    } else {
      localStorage.setItem('userLogged', JSON.stringify(data.data))
      setUserLogged(data.data)
    }
  }
  const registerHandler = async (e) => {
    await e.preventDefault();
    console.log("register...")
    let url = "http://localhost:8080/api/user/register"
    let response = await fetch(url, {
      method: 'POST',
      body: new FormData(e.target)
    })
    let data = await response.json()
    console.log(data)
  }
  const logOutHandler = async (e) => {
    await e.preventDefault();
    localStorage.removeItem("userLogged")
    setUserLogged(null)
  }
  const value = {
    userLogged: userLogged,
    updateUserLogged: (userData) => {setUserLogged(userData)},
    login: loginHandler,
    logOut: logOutHandler,
    register: registerHandler
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider