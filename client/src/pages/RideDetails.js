import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const BASE_URL = 'http://localhost:3001';

const RideDetails = () => {
  const [selectedRide, setSelectedRide] = useState(false);
  const [rideDetails, setRideDetails] = useState(null);

  let { rideId } = useParams();

  useEffect(() => {
    const getRideDetails = async () => {
      let res = await axios.get(`${BASE_URL}/ride/${rideId}`);
      setRideDetails(res.data);
      setSelectedRide(true);
    };
    getRideDetails();
  }, [rideId]);

  let rideName;
  let rideImage;
  let rideWait;
  let ridePrice;
  let rideCategories;

  if (selectedRide) {
    let ridecat;
    rideName = !!rideDetails.name ? <h3>{rideDetails.name}</h3> : '';
    rideImage = !!rideDetails.img ? <img src={rideDetails.img} /> : "";
    rideWait = !!rideDetails.wait ? <h3>Average Wait Time: {rideDetails.wait}</h3> : "";
    ridePrice = !!rideDetails.price ? <h3>Ride Price: {rideDetails.price}</h3> : "";
    switch (rideDetails.category) {
      case '62d9a06df1fca9289a0d6e6d':
        rideCategories = <h3>Ride Category: Junior Ride</h3>;
        break;
      case '62d9a06df1fca9289a0d6e6e':
        rideCategories = <h3>Ride Category: Gentle Ride</h3>;
        break;
      case '62d9a06df1fca9289a0d6e6f':
        rideCategories = <h3>Ride Category: Water Ride</h3>;
        break;
      case '62d9a06df1fca9289a0d6e70':
        rideCategories = <h3>Ride Category: Roller Coaster </h3>;
        break;
      case '62d9a06df1fca9289a0d6e71':
        rideCategories = <h3>Ride Category: Thrill Ride</h3>;
        break;
      default:
    }

  }

  return (
    <div className="ride-content">
      <section className="image-container">
        <div>
          {rideImage}
        </div>
      </section>
      <section className="details">
        <div className="flex-row space">
          {rideName}
          {rideCategories}
          {ridePrice}
        </div>
        <div>
          {rideWait}
        </div>
      </section>
    </div>
  );
};

export default RideDetails;
