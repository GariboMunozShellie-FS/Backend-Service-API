const express = require("express");
const router = express.Router();
const {getInfo, getInfoByid} = require('../services/service')

router.get("/", (req, res, next) => {
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

router.get('/:id', (req, res, next) => {
    // Calls API to give facts about cats
    getInfoByid(req.params.id).then(result => {
        res.status(200).json(
            result.data
        )
    }).catch(error => {
        res.status(500).json({
            error:{
                message: error.message,
                status: error.status
            }
        })
    })
})

module.exports = router