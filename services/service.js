const axios = require("axios");
require("dotenv").config();

const getInfo = async() => {
    console.log("Fetching Information")
    return await axios.get(`${process.env.url}`)
};

module.exports = getInfo;