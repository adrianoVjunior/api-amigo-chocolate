const usuario = require('../Models/UsuarioModel')
const jwt = require('jsonwebtoken')

module.exports = {
    async geraToken(request, response) {
        let { nome, senha } = request.body
        const usuarioRetorno = await usuario.findOne({ Nome: nome })
        // return response.json(usuarioRetorno._id)
        const token = jwt.sign({ _id: usuarioRetorno._id }, process.env.JWT_KEY, { expiresIn: 300 })
        return response.send({ auth: true, token: token })
    }
}