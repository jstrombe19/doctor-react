import React from 'react';

export default function DoctorCard(props) {

  function handleClick(event) {
    props.dischargeDoc(event, props.doctor)
  }
  return(
    <div className="doctor-card" onClick={() => props.doctorAction(props.doctor)}>
      <img src={props.doctor.image} alt={props.doctor.name} />
      <h3>{props.doctor.name}</h3>
      <h4>{props.doctor.specialty}</h4>
      <button onClick={(event) => handleClick(event)}>Discharge</button>
    </div>
  )
}