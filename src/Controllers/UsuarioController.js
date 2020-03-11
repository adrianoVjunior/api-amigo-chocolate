const Usuario = require('../Models/UsuarioModel')
module.exports = {
    async index(request, response) {
        const UsuarioRetorno = await Usuario.find()
        return response.json(UsuarioRetorno)
    },

    async getUsuario(request, response) {
        let { IdUsuario } = request.body
        const UsuarioRetorno = await Usuario.find({ IdUsuario: IdUsuario })
        return response.json(UsuarioRetorno)
    },

    async create(request, response) {
        let { Nome, Email, Senha } = request.body

        const UsuarioRetorno = await Usuario.create({
            Nome,
            Email,
            Senha
        })
        return response.json(UsuarioRetorno)
    },

    async edit(request, response) {
        let { _id, Nome, Email, Senha} = request.body

        const UsuarioRetorno = await Usuario.updateOne(
            {
                _id: _id
            },
            {
                $set: {
                    Nome: Nome,
                    Email: Email,
                    Senha: Senha,
                }
            })
        return response.json(UsuarioRetorno)
    },

    async edit(request, response) {
        let { _id } = request.body

        const UsuarioRetorno = await Usuario.deleteOne(
            {
                _id: _id
            }
        )
        return response.json(UsuarioRetorno)
    }
}
