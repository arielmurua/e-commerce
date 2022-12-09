import './App.css';
import Header from './Header';
import Footer from './Footer';
// import Home from './Home';
import Router from '../router/Router';
import React from 'react';

import AuthProvider from './AuthProvider';
export const AuthContext = React.createContext(null)

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <div className='content-wrapper'>
          <Router />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;