const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
let verVotaciones = async (filter = null) => {
    try {
        let dir = path.resolve(__dirname, '../json/preguntas.json')
        let votaciones = JSON.parse(fs.readFileSync(dir, 'utf8'));
        return votaciones.filter(x => filter == null ? !x.isFinish : x)
    } catch (error) {
        throw new Error(error);
    }
}
let crearNotas = async (datos) => {
    try {
        let dir = path.resolve(__dirname, '../json/preguntas.json')
        let currentArray = await verVotaciones(true);
        if (currentArray.length > 0)
            currentArray.map(item => item.isFinish = true);
        currentArray.push(
            {
                id: uuidv4(),
                tituloVotacion: datos.tituloVotacion,
                preguntas: datos.preguntas.map(item => {
                    return {
                        titulo: item.titulo,
                        votaciones: 0
                    }
                }),
                isFinish: false
            });
        let info = JSON.stringify(currentArray)
        fs.writeFileSync(dir, info);
    } catch (error) {
        throw error;
    }
}

let votar = async (preguntaVotada, id) => {
    try {
        let dir = path.resolve(__dirname, '../json/preguntas.json')
        let currentArray =await verVotaciones(null)
        let ultimoElemento = currentArray.pop()
        ultimoElemento.preguntas.forEach(x => {
            if (x.titulo.trim() == preguntaVotada.trim() )
                x.votaciones++
        })
        currentArray.push(ultimoElemento)
        let info = JSON.stringify(currentArray)
        fs.writeFileSync(dir, info);
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = { verVotaciones, crearNotas, votar };