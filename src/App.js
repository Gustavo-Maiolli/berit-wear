import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import About from './components/About/About';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Hero></Hero>
        <Products></Products>
        <About></About>
        <Feedback></Feedback>
      </header>
    </div>
  );
}

export default App;
