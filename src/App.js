import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './COMPONENTS/APPOINTEMENT PAGE/AppointmentPage';
import SignIn from './COMPONENTS/Authentication/SignIn';
import SignUp from './COMPONENTS/Authentication/SignUp';
import Dashboard from './COMPONENTS/DASHBOARD/Dashboard';
import Myitems from './COMPONENTS/DASHBOARD/Myitems';
import Review from './COMPONENTS/DASHBOARD/Review';
import Homepage from './COMPONENTS/HOMEPAGE/Homepage';
import Navbar from './COMPONENTS/NAVBAR/navbar';
import RequireAuth from './COMPONENTS/REQUIRE AUTH/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
          <Route path='/appointment' element={
            <RequireAuth>
              <AppointmentPage></AppointmentPage>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<Myitems></Myitems>}></Route>
            <Route path='review' element={<Review></Review>}></Route>
          </Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </div>
  );
}

export default App;
