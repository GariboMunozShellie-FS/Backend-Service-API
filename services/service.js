const axios = require("axios");
require("dotenv").config();

const getInfo = async() => {
    console.log("Fetching Information")
    return await axios.get(`${process.env.url}`)
};
const getInfoByid = async(id) => {
    console.log("Fetching Information By ID")
    return await axios.get(`${process.env.url}${id}`)
};

module.exports = {getInfo, getInfoByid};