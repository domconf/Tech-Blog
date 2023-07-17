const { User } = require('../models');

const userData = [
    {
        username: "pete_alonso",
        twitter: "polarpete20",
        github: "palonso20",
        email: "petealonso20@gmail.com",
        password: "polarpete123"
    },
    {
        username: "francisco_lindor",
        twitter: "lindor12",
        github: "flindor12",
        email: "f_lindor12@gmail.com",
        password: "baseballgod123"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;