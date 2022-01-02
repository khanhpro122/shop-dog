const express = require("express")
const app = express()

const dogs = [
    {
        id: 1,
        name: "Tini",
        breed: "CHIHUAHUA",
        price: "1000",
        description: "This is a crazy tiny dog with bif alien eyes",
        imgaeUrl: "https://sieupet.com/sites/default/files/chihuahua1_0.jpg"
    },
    {
        id: 2,
        name: "Butty",
        breed: "CORGI",
        price: "1500",
        description: "This is a crazy tiny dog with bif alien eyes",
        imgaeUrl: "https://www.2thucung.com/wp-content/uploads/2021/01/cho-corgi-1.jpg"
    },
    {
        id: 3,
        name: "Butty",
        breed: "CORGI",
        price: "1500",
        description: "This is a crazy tiny dog with bif alien eyes",
        imgaeUrl: "https://www.2thucung.com/wp-content/uploads/2021/01/cho-corgi-1.jpg"
    },
    {
        id: 4,
        name: "Butty",
        breed: "CORGI",
        price: "1500",
        description: "This is a crazy tiny dog with bif alien eyes",
        imgaeUrl: "https://www.2thucung.com/wp-content/uploads/2021/01/cho-corgi-1.jpg"
    }
]

app.get("/v1/dogs", (req,res) => {
    res.status(200).json(dogs)
})

app.listen("8080",() => {
    console.log("Server is running...")
})