import React from 'react';
import './App.css';
import DoctorContainer from './DoctorContainer';
import FavoriteDoctors from './FavoriteDoctors';

export default class App extends React.Component {
  state = {
    doctors: [
      {
        id: 1,
        name: "Doctor Nick",
        specialty: "General Practicioner",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86cf185c-ad61-4faa-9c63-de77f6c62a3c/db3bbew-0c6fce45-2435-4753-839d-893c05d76452.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2Y2YxODVjLWFkNjEtNGZhYS05YzYzLWRlNzdmNmM2MmEzY1wvZGIzYmJldy0wYzZmY2U0NS0yNDM1LTQ3NTMtODM5ZC04OTNjMDVkNzY0NTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jBcgUZ7nxIe-jocSPdXnrcmObeNV2SOn9o3H_GLR-Fs"
      },
      {
        id: 2,
        name: "Doctor Doogie Howser",
        specialty: "MD",
        image: "https://tvseriesfinale.com/wp-content/uploads/2020/04/doogie-howser-md-472x400.jpg"
      },
      {
        id: 3,
        name: "Doctor House",
        specialty: "Nephrology",
        image: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/24/1497535738-hugh.jpg"
      },
    ],
    favoriteDoctors: []
  }

  addDoctorToFavorites = (doctor) => {
    if(this.state.favoriteDoctors.includes(doctor)) {
      return null
    } else {
      this.setState({
        favoriteDoctors: [...this.state.favoriteDoctors, doctor]
      })
    }
  }

  removeDoctorFromFavorites = (doctorToRemove) => {
    const updatedFavoriteDoctors = this.state.favoriteDoctors.filter(doctor => {
      return doctor !== doctorToRemove
    })
    this.setState({
      favoriteDoctors: updatedFavoriteDoctors
    })
  }

  render() {
    return(
      <div id="app">
        <section id="favorite-doctors-container">
          <h3 id="title">Favorite Doctors:</h3>
          <FavoriteDoctors key={1} doctors={this.state.favoriteDoctors} doctorAction={this.removeDoctorFromFavorites} />
        </section>
        <section id="doctor-list">
          <h3>Available Doctors:</h3>
          <DoctorContainer doctors={this.state.doctors} doctorAction={this.addDoctorToFavorites} />
        </section>
      </div>
    )
  }
}
