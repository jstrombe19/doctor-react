import React from 'react';
import DoctorCard from './DoctorCard'

export default function FavoriteDoctors(props) {
  const renderDoctors = props.doctors.map(doctor => {
    return <DoctorCard doctor={doctor} key={doctor.id} doctorAction={props.doctorAction} />
  })
  return(
    <div id="favorite-doctors">
      {renderDoctors}
    </div>
  )
}