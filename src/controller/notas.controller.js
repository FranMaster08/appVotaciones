
const helper = require('../helpers/gestorArchivos');
let renderIndex = async (req, res) => {
    try {
        let votaciones = await helper.verVotaciones()
        res.render('index.html', { votaciones: votaciones[0] })

    } catch (error) {
        res.status(400).json({ ok: false, error })
    }
}

let createVotaciones = async (req, res) => {
    try {
        let body = req.body
        await helper.crearNotas(body)
        res.status(201).json({ ok: true })
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

let getStats = async (req, res) => {
    try {
        let votaciones = await helper.verVotaciones(true)
        res.render('stats.html', { votaciones: votaciones })
    } catch (error) {
        res.status(400).json({ ok: false, error })
    }
}

let votar = async (req, res) => {
    try {
        let body = req.body
        await helper.votar(body.pregunta,body.id)
        res.status(201).json({ ok: true })
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

module.exports = {
    renderIndex,
    createVotaciones,
    getStats,
    votar
}