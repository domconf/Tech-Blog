const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Wow, this is great!"
    }, {
        user_id: 2,
        post_id: 1,
        comment_text: "Perfect, now I can be organized!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;