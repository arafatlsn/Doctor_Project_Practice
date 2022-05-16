import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './COMPONENTS/APPOINTEMENT PAGE/AppointmentPage';
import SignIn from './COMPONENTS/Authentication/SignIn';
import SignUp from './COMPONENTS/Authentication/SignUp';
import Homepage from './COMPONENTS/HOMEPAGE/Homepage';
import Navbar from './COMPONENTS/NAVBAR/navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/appointment' element={<AppointmentPage></AppointmentPage>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
