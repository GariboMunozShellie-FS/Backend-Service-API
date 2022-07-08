const express = require("express");
const router = express.Router();
const getInfo = require('../services/service')

router.get("/cats", (req, res, next) => {
    // Calls API to give facts about cats
    getInfo().then(result => {
        res.status(200).json(
            result.data
        )
    }).catch(error => {
        res.status(501).json({
            error:{
                message: error.message,
                status: error.status
            }
        })
    })
})

module.exports = router