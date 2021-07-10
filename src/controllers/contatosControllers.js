const contatosJson = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send(contatosJson)
}

const getById = (request, response) => {
    const idRequerido = request.params.id
    const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido)

    response.status(200).send(contatoFiltrado)
}

const getByName = (request,response) => {
    const nomeRequerido = request.query.nome.toLowerCase(); 
    const nomeFiltrado = contatosJson.find(contato => contato.nome.toLowerCase().includes(nomeRequerido));

    response.status(200).send(nomeFiltrado);
}

const addContato = (request, response) => {
    const nomeRequerido = request.body.nome
    const telefoneRequerido = request.body.celular
    const redesSociaisRequerida = request.body.redesSociais

    const novoContato = {
        id: "1ef4",
        nome: nomeRequerido,
        celular: telefoneRequerido,
        redesSociais: redesSociaisRequerida
}

    contatosJson.push(novoContato)
    response.status(200).send(novoContato);
}

const apagarContato = (request, response) => {

    const idRequerido = request.params.id;
    const nomeFiltrado = contatosJson.find(nome => nome.id == idRequerido);

    const indice = contatosJson.indexOf(nomeFiltrado);
    console.log(indice);
    contatosJson.splice(indice, 1);

    response.status(200).send(
        [
            {
                "message": "Contato deletado com sucesso!"
            },
            contatosJson
        ]
    )
}

module.exports = {
    getAll,
    getById,
    getByName,
    addContato,
    apagarContato


}