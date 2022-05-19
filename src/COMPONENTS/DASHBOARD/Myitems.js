import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFireBase from '../FIREBASE/useFireBase';
import { signOut } from 'firebase/auth';
import auth from '../FIREBASE/Firebase.init';

const Myitems = () => {

  const [appointments, setAppointments] = useState([]);

  const { user } = useFireBase();

  useEffect(() => {
    if(user){
      const func = async() => {
        try{
          const url = `http://localhost:5000/myappointments?email=${user.email}`
        const { data } = await axios.get(url, {
          headers: {
            authorization : `Bearer ${localStorage.getItem(('access-token'))}`
          }
        });
        setAppointments(data)
        }
        catch(error){
          if(error?.response?.status === 403 || error?.response?.status === 401){
            signOut(auth)
            localStorage.removeItem('access-token')
          }
        }
      }
      func()
    }
  }, [user])

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-[80vw] mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Appointment</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              appointments.map(el => <tr>
                <th>{appointments.indexOf(el) + 1}</th>
                <td>{el.fullName}</td>
                <td>{el.name}</td>
                <td>{el.time}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myitems;