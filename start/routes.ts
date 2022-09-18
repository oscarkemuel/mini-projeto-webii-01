import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('estudante', 'EstudantesController.showForm')
Route.post('estudante/register', 'EstudantesController.register')
Route.get('estudante/getListaEstudantes', 'EstudantesController.showEstudantes')
Route.get('estudante/detalhes/:id', 'EstudantesController.showDetalhes')
Route.get('estudante/deletar/:id', 'EstudantesController.deleteEstudante')
Route.get('estudante/getListaPorCurso', 'EstudantesController.showEstudantesPorCurso')
Route.get('estudante/getListaPorLinguagem', 'EstudantesController.showEstudantesPorLinguagem')

