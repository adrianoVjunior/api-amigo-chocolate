const Grupo = require('../Models/GrupoModel')
module.exports = {
    async index(request, response) {
        const GrupoRetorno = await Grupo.find()
        return response.json(GrupoRetorno)
    },

    async getGrupo(request, response) {
        let { IdGrupo } = request.body
        const GrupoRetorno = await Grupo.find({ IdGrupo: IdGrupo })
        return response.json(GrupoRetorno)
    },

    async create(request, response) {
        let { Nome, Descricao, ValorMax, ValorMin, DtSorteio, IdAdmin } = request.body

        const GrupoRetorno = await Grupo.create({
            Nome,
            Descricao,
            ValorMax,
            ValorMin,
            DtSorteio,
            IdAdmin
        })
        return response.json(GrupoRetorno)
    },

    async edit(request, response) {
        let { _id, Nome, Descricao, ValorMax, ValorMin, DtSorteio, IdAdmin } = request.body

        const GrupoRetorno = await Grupo.updateOne(
            {
                _id: _id
            },
            {
                $set: {
                    Nome: Nome,
                    Descricao: Descricao,
                    ValorMax: ValorMax,
                    ValorMin: ValorMin,
                    DtSorteio: DtSorteio,
                    IdAdmin: IdAdmin
                }
            })
        return response.json(GrupoRetorno)
    },

    async delete(request, response) {
        let { _id } = request.body

        const GrupoRetorno = await Grupo.deleteOne(
            {
                _id: _id
            }
        )
        return response.json(GrupoRetorno)
    }
}
