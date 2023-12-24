import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import SignUp from './Pages/SignUp';
import TravelPlan from './Pages/TravelPlan';

function App() {
  return (
    <div  className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/travel-plan' element={<TravelPlan/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
