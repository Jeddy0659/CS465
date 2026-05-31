const fs = require('fs');
const path = require('path');

const travelList = (req, res) => {
  const trips = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/trips.json'), 'utf8')
  );

  console.log('Trips loaded:', trips);

  res.render('travel-list', {
    title: 'Travel List',
    trips
  });
};

module.exports = {
  travelList
};