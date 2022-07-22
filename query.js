const db = require('./db');
const { Rides } = require('./models');

const updateRide = async () => {
  let updatedRide = await Rides.findOneAndUpdate(
    { _id: '62d9a06df1fca9289a0d6e75' },
    { $set: { img: '1' } },
    { new: true }
  );
  console.log(updatedRide);
};

updateRide();