import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar"
import Home from "./routes/Hhome";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

function App() {    
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      

      
    </div>
  );
}

export default App;
