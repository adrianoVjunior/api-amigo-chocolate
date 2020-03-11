const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    Nome: String,
    Email: String,
    Senha: String,
    Grupos: [{
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'grupo' },
        _idAmigoSorteado: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario' },
        ListaDesejos: [String]
    }]
})

module.exports = mongoose.model('usuario', UsuarioSchema)