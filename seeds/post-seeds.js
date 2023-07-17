const { Post } = require('../models');

const postData = [
    {
        title: "BrewCast is now Available!",
        post_content: "A simple application where you can search a city and information will appear regarding breweries in the city along with a weather forecast to plan your trip accordingly!"
    }, {
        title: "Real Dills Pro Shop is open for business!",
        post_content: "Get your official Real Dills merchandise today and run the pickleball courts!"
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;