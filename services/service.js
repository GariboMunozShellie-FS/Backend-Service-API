const axios = require('axios');
require("dotenv").config();

const getinfo = async() => {
    console.log("Fetching Information")
    return await axios.get(`$${process.env.url}`)
};

const getinfoByNAL = async(nal) => {
    console.log("Fetching Information")
    return await axios.get(`${process.env.nalURL}${nal}`)
};

module.exports = {getinfo, getinfoByNAL};