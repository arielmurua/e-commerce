import './App.css';
import Header from './Header';
import Footer from './Footer';
// import Home from './Home';
import Router from '../router/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-wrapper'>
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;