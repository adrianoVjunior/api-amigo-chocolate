const mongoose = require('mongoose')

const GrupoSchema = new mongoose.Schema({
    Nome: String,
    Descricao: String,
    ValorMax: Number,
    ValorMin: Number,
    DtSorteio: Date,
    IdAdmin:{ type: mongoose.Schema.Types.ObjectId, ref: 'usuario' }
})

module.exports = mongoose.model('grupo', GrupoSchema)