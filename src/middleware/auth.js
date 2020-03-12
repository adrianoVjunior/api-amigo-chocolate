const jwt = require('jsonwebtoken')
const usuario = require('../Models/UsuarioModel')

const auth = async (request, response, next) => {
    const token = request.header('Authorization').replace('Bearer', '')
    const data = jwt.verify(token, process.env.JWT_TOKEN)
    try {
        const user = await usuario.findOne({ _id: data.id })
        if (!user) {
            throw new Error()
        }
        request.user = user
        request.token = token
        next()
    } catch (error) {
        response.status(401).send({ error: 'Não autorizado' })
    }

}

module.exports = auth