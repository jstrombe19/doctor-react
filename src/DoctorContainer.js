import React from 'react';
import DoctorCard from './DoctorCard';

export default function DoctorContainer(props) {
  const renderDoctors = props.doctors.map(doctor => {
    return <DoctorCard doctorAction={props.doctorAction} doctor={doctor} key={doctor.id}/>
  })
  return(
    <div id="doctor-container">
      {renderDoctors}
    </div>
  )
}