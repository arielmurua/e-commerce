import React from 'react'
import { AuthContext } from './App';

const AuthProvider = ({ children }) => {
  const testUser = {
    username: "USER_FOR_TESTING",
    email: "testing44@test.com.ar",
    first_name: "USER001",
    last_name: "TESTER001",
    address: "Fake St 123, Buenos Aires, Argetina",
    phone: "+5493804585057",
    zip: "F5300DDS",
    payment_method_id: "Debit",
    role: 2
  }

  const [userLogged, setUserLogged] = React.useState(JSON.parse(localStorage.getItem("userLogged")) || null)
  const loginHandler = async (e) => {
    await e.preventDefault();
    // console.log("login...")
    // let url = "http://localhost:8080/api/user/login"
    // let response = await fetch(url, {
    //   method: 'POST',
    //   body: new FormData(e.target)
    // })
    // let data = await response.json()
    // if (data.meta.status === 400) {
    //   console.log("login error...")
    // } else {
    //   localStorage.setItem('userLogged', JSON.stringify(data.data))
    //   setUserLogged(data.data)
    // }
    console.log("login test...")
    localStorage.setItem('userLogged', JSON.stringify(testUser))
    setUserLogged(testUser)
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