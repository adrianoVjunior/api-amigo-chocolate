const usuario = require('../Models/UsuarioModel')
const jwt = require('jsonwebtoken')

module.exports = {
    async geraToken(request, response) {
        let { nome, senha } = request.body
        const usuarioRetorno = await usuario.findOne({ Nome: nome, Senha: senha })
        if (usuarioRetorno === null)
            return response.send({ erro: "Usuário não encontrado" })
        else {
            const token = jwt.sign({ _id: usuarioRetorno._id }, process.env.JWT_KEY, { expiresIn: 300 });
            return response.send({ auth: true, token: token });
        }
    }
}