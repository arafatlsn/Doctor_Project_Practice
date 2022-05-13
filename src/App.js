import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './COMPONENTS/APPOINTEMENT PAGE/AppointmentPage';
import Footer from './COMPONENTS/FOOTER/Footer';
import Homepage from './COMPONENTS/HOMEPAGE/Homepage';
import Navbar from './COMPONENTS/NAVBAR/navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/appointment' element={<AppointmentPage></AppointmentPage>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
