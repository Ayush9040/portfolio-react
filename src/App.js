import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Themes from './components/Themes';
// import './index.css';


function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
