const axios = require('axios');
require("dotenv").config();

const getinfo = async() => {
    console.log("Fetching Information")
    return await axios.get(`$${process.env.url}`)
};

module.exports = {getinfo};