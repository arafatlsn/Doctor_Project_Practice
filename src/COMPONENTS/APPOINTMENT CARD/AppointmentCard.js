import AppointmentModal from '../APPOINTMENT MODAL/AppointmentModal';

const AppointmentCard = ({ elAppointments, date, setModalDetail }) => {
  const { name, time, spaces } = elAppointments;
  return (
    <div>
      <div className="card w-[95vw] mx-auto lg:w-[425px] h-[230px] bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-secondary">{name}</h2>
          <p className='m-0 p-0'>{time}</p>
          <p className='m-0 p-0'>{spaces} Spaces Available</p>
          <div className="card-actions" disabled >
            <label disabled = {spaces === 0} onClick={() => setModalDetail(elAppointments)} htmlFor="my-modal-3" className="btn modal-button bg-gradient-to-r from-secondary to-primary border-hidden text-white modal-button">BOOK APPOINTMENT</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;