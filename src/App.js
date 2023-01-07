import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage';
// import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Nav></Nav>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
