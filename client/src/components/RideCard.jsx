import { useNavigate } from "react-router-dom"

const RideCard = (props) => {

  let navigate = useNavigate()


  const showRide = (ride) => {
    navigate(`/rides/details/${ride._id}`)
  }

  return (
    <div className="ride-card-grid">
      {
        props.rides.map((ride) => (
          <div key={ride._id} className="card ride-card" onClick={() => showRide(ride)}>
            <div className="img-wrapper">
              <img src={ride.imageUrl} alt="image" />
            </div>
            <div className="info-wrapper flex-col">
              <h2>{ride.name}</h2>
              <h3>{ride.wait}</h3>
              <p>{ride.price}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default RideCard
