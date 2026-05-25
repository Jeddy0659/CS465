/* get travel view */
const travelList = (req, res) => {
    res.render('travel-list', { title: 'Travel List' });
};

module.exports = {
    travelList
};