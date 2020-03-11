const { Router } = require('express')

const UsuarioController = require('./src/Controllers/UsuarioController')
const GrupoController = require('./src/Controllers/GrupoController')
const Grupo_UsuarioController = require('./src/Controllers/GrupoController')

const routes = Router()

routes.get('/usuario', UsuarioController.index)
routes.get('/usuario/:_id', UsuarioController.getUsuario)
routes.post('/usuario', UsuarioController.create)
routes.put('/usuario', UsuarioController.edit)
routes.delete('/usuario', UsuarioController.delete)

routes.get('/grupo', GrupoController.index)
routes.get('/grupo/:_id', GrupoController.getUsuario)
routes.post('/grupo', GrupoController.create)
routes.put('/grupo', GrupoController.edit)
routes.delete('/grupo', GrupoController.delete)

module.exports = routes