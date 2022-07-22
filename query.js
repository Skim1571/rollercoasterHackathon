const db = require('./db');
const { Rides } = require('./models');

const updateRide = async () => {
  let updatedRide = await Rides.findOneAndUpdate(
    { _id: '62d9a06df1fca9289a0d6e7e' },
    { $set: { img: 'https://images.unsplash.com/photo-1621903526173-c2375df537c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80' } },
    { new: true }
  );
  console.log(updatedRide);
};

updateRide();