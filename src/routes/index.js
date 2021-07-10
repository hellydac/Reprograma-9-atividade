const express = require("express")
const router = express.Router()


router.get("/", (request, response) => {
    response.status(200).send({
        "título": "Contatinhos API - Reprograma",
        "version": "1.0.0",
        "mensagem": "Bem vinda a sua lista de contatinhos!"
    })
})

module.exports = router