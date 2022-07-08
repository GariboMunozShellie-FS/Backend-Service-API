const express = require('express');
const router = express.Router();
const {getinfo, getinfoByNAL} = require("../services/service")

router.get("/", (req, res, next) => {
    // Call a service that grab facts of cats
    getinfo().then(result => {
        res.status(200).json(
            result.data
        )
    }).catch(err => {
        const error = new Error("NOT FOUND!");
        res.status(500).json({error:{
            message: error.message,
            status: error.status,
        }})
    })
})

router.get('/:nal', (req, res, next) => {
    getinfoByNAL(req.params.nal).then(result => {
        res.status(200).json(
            result.data
        )
    }).catch(err => {
        res.status(500).json({error:{
            message: error.message,
            status: error.status,
        }})
    })
})

module.exports = router
