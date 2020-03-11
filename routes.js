const { Router } = require('express')

const UsuarioController = require('./src/Controllers/UsuarioController')
const GrupoController = require('./src/Controllers/GrupoController')

const routes = Router()

routes.get('/usuario', UsuarioController.index)
// routes.get('/usuario/:id', UsuarioController.getUsuario)
routes.post('/usuario', UsuarioController.create)
routes.put('/usuario', UsuarioController.edit)
routes.delete('/usuario', UsuarioController.delete)

routes.get('/grupo', GrupoController.index)
// routes.get('/grupo/:id', GrupoController.getGrupo)
routes.post('/grupo', GrupoController.create)
routes.put('/grupo', GrupoController.edit)
routes.delete('/grupo', GrupoController.delete)

module.exports = routes