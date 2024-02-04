import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./routes/Hhome";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import TripPlan from './routes/TripPlan';
import Booking from './routes/Booking';

function App() {    
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/plan' element={<TripPlan/>}/>
        <Route path='/book/:busNumber' element={<Booking />} />
      </Routes>
      

      
    </div>
  );
}

export default App;
