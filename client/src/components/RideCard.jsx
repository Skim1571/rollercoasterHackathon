import { useNavigate } from "react-router-dom"

const RideCard = (props) => {

  let navigate = useNavigate()


  const showRide = (ride) => {
    navigate(`/rides/details/${ride.id}`)
  }

  return (
    <div className="ride-card-grid">
      {
        props.rides.map((ride) => (
          <div key={ride.id} className="card ride-card" onClick={() => showRide(ride)}>
            <div className="img-wrapper">
              <img src={ride.background_image} alt="image" />
            </div>
            <div className="info-wrapper flex-col">
              <h3>{ride.name}</h3>
              <p>{ride.rating}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RideCard
