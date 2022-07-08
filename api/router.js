const express = require('express');
const router = express.Router();
const getinfo = require('../services/service')

router.get("/indiv", (req, res, next) => {
    // Call a service that grab APi Person info
    getinfo().then(result => {
        res.status(200).json(
            result.data
        )
    }).catch(err => {
        res.status(501).json({err:{
            message: error.message,
            status: error.status
        }})
    })
});



module.exports = router
