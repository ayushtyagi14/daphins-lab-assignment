import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Hero />
        <div className="container">
          <Sidebar />
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
