const fs = require('fs');
const path = require('path');
let verVotaciones = async (filter=null) => {
    try {
        let dir = path.resolve(__dirname, '../json/preguntas.json')
        let votaciones = JSON.parse(fs.readFileSync(dir, 'utf8'));
        return votaciones.filter(x =>filter==null?!x.isFinish:x)
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
module.exports = { verVotaciones, crearNotas };