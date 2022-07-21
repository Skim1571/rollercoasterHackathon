const db = require('../db');
const { Categories, Rides } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createCategories = async () => {
  const categories = [
    {
      type: 'Junior Ride',
      intensity: 1,
      nausea: 1,
      imageUrl: 'https://imgs.search.brave.com/g1ZZ_DNFx4MY2p_NJoFokN6XaoM1_uGe3VLWu_tKRCs/rs:fit:1200:836:1/g:ce/aHR0cHM6Ly93d3cu/bW9udGdvbWVyeWNv/dW50eW1kLmdvdi9y/ZWMvUmVzb3VyY2Vz/L0ltYWdlcy9pU3Rv/Y2stMTU3NTgxNzk0/XzEuanBn'
    },
    {
      type: 'Gentle Ride',
      intensity: 2,
      nausea: 1,
      imageUrl: 'https://imgs.search.brave.com/Iaw6hUCxsTngSXpwpNDv5MFWI6QrsTZE1Q5PXhvZGPg/rs:fit:1200:645:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly1tcDhuQm9vZHBo/TS9UbUZnNUNSWjZl/SS9BQUFBQUFBQUl2/OC91NmZMU3dsd0Nj/WS9zMTYwMC9iYWJ5/K3JvbGxlcitjb2Fz/dGVyLTMuanBn'
    },
    {
      type: 'Water Ride',
      intensity: 2,
      nausea: 2,
      imageUrl: 'https://imgs.search.brave.com/jmjb7cQgnXieBl5laayO9MB8El39GBKEck0yLWeqBOQ/rs:fit:1200:1200:1/g:ce/aHR0cDovL2NvYXN0/ZXJmb3JjZS5jb20v/ZGV2L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE2LzExL1NrYXR0/ZW9lbkRqdXJzU29t/bWVybGFuZDItMS5q/cGc'
    },
    {
      type: 'Roller Coaster',
      intensity: 3,
      nausea: 3,
      imageUrl: 'https://imgs.search.brave.com/BGLsBkP45z3ZPr72QYWTY4k6xy08dLQfv-ku-aTUP_Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ibG9n/cy5tZXJjdXJ5bmV3/cy5jb20vZWF0LWRy/aW5rLXBsYXkvZmls/ZXMvMjAxNS8wNy9i/bG9nLXJvYXJjb2Fz/dGVyLmpwZw'
    },
    {
      type: 'Thrill Ride',
      intensity: 4,
      nausea: 5,
      imageUrl: 'https://imgs.search.brave.com/5YGNTGaC6VWI0DNMH_TpsozI8IPdM3Gpe2xkGGmGin4/rs:fit:600:400:1/g:ce/aHR0cHM6Ly93ZWVr/ZW5kZXIuY29tLnNn/L2VudGVydGFpbm1l/bnQvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMDcvc2h1dHRl/cnN0b2NrXzE0NjE4/NzE3MC5qcGc'
    },

  ];

  await Categories.insertMany(categories);
  console.log('Created categories.');
};

const createRides = async (categories) => {
  const rides = [
    {
      name: 'Wind Venom',
      categories: categories[0]._id,
      price: '$1',
      wait: '5 minutes'
    },
    {
      name: 'Scorpion',
      categories: categories[1]._id,
      price: '$2',
      wait: '15 minutes'
    },
    {
      name: 'Downpour',
      categories: categories[2]._id,
      price: '$3',
      wait: '3 minutes'
    },
    {
      name: 'Limit',
      categories: categories[3]._id,
      price: '$1',
      wait: '6 minutes'
    },
    {
      name: 'Intimidator',
      categories: categories[4]._id,
      price: '$2',
      wait: '9 minutes'
    },
    {
      name: 'Magnum Ripper',
      categories: categories[0]._id,
      price: '$3',
      wait: '13 minutes'
    },
    {
      name: 'Aftershock',
      categories: categories[1]._id,
      price: '$1',
      wait: '2 minutes'
    },
    {
      name: 'Waterfall',
      categories: categories[2]._id,
      price: '$2',
      wait: '4 minutes'
    },
    {
      name: 'Goliath',
      categories: categories[3]._id,
      price: '$3',
      wait: '65 minutes'
    },
    {
      name: 'Ripsaw',
      categories: categories[4]._id,
      price: '$1',
      wait: '35 minutes'
    }
  ];
  await Rides.insertMany(rides);
  console.log('Created rides.');
};

const run = async () => {
  await createCategories();
  const categories = await Categories.find({});
  await createRides(categories);
  db.close();
};

run();