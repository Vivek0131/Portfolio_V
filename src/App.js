import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import {Routes,Route} from "react-router-dom"
import Project from './Components/Project';

function App() {
  return (
   <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/project' element={<Project/>} />
    </Routes>
    <Footer />
   </>
  );
}

export default App;