import React from 'react';

export default function DoctorCard(props) {
  return(
    <div className="doctor-card" onClick={() => props.doctorAction(props.doctor)}>
      <img src={props.doctor.image} alt={props.doctor.name} />
      <h3>{props.doctor.name}</h3>
      <h4>{props.doctor.specialty}</h4>
    </div>
  )
}