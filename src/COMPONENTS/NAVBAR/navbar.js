import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../FIREBASE/Firebase.init';
import useFireBase from '../FIREBASE/useFireBase';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const { user } = useFireBase();

  const signoutUser = () => {
    signOut(auth)
    localStorage.removeItem('access-token')
  }

  const navOption = <>
  <li><Link to={'/'}>Home</Link></li>
  <li><a>About</a></li>
  <li><Link to={'/appointment'}>Appointment</Link></li>
  <li><a>Reviews</a></li>
  <li><a>Contact</a></li>
  <li><Link to={'/dashboard'}>Dashboard</Link></li>
  {
    user ? <li onClick={signoutUser}><a>Logout</a></li> : <li><Link to={'/signin'}>Login</Link></li>
  }
  </>
  return (
    <div>
      <div className="navbar bg-base-100 lg:w-[80%] mx-auto flex justify-between rounded-2xl">
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">DOCTORS PORTAL</Link>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn bg-[accent] btn-circle swap swap-rotate lg:hidden">
            <input onClick={() => setShow(!show)}  type="checkbox" />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
            
          </label>
          <ul tabIndex="0" className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ${show ? 'block' : 'hidden'}`}>
            {
              navOption
            }
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
              {
                navOption
              }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;