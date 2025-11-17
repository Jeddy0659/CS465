/* GET travel list page */
const travelList = (req, res) => {
    res.render('travel-list', {
        title: 'TRAVLR Getaways',
        trips: [
            { destination: 'New York', price: 899, nights: 3 },
            { destination: 'Paris', price: 1299, nights: 5 },
            { destination: 'Tokyo', price: 1599, nights: 6 }
        ]
    });
};

module.exports = {
    travelList
};
