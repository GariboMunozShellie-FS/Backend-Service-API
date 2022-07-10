const getInfo = async() => {
    console.log("Mocked Information")
    return Promise.resolve({
        data:[
    {
        "id": 5,
        "name": "boxes"
    },
    {
        "id": 15,
        "name": "clothes"
    },
    {
        "id": 1,
        "name": "hats"
    },
    {
        "id": 14,
        "name": "sinks"
    },
    {
        "id": 2,
        "name": "space"
    },
    {
        "id": 4,
        "name": "sunglasses"
    },
    {
        "id": 7,
        "name": "ties"
    }
]
    })
};
const getInfoByid = async(id) => {
    console.log("Mocked Information By ID")
    return Promise.resolve({
        data:{
            "id": 5,
            "name": "boxes"
        }
    })
};

module.exports = {getInfo, getInfoByid};