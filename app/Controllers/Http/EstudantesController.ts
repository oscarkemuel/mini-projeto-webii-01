// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EstudantesService from 'App/Services/EstudantesService'


export interface IEstudante {
    firstName: string;
    lastName: string;
    curso: string;
    linguagem: string;
    sistemaOperacional: string[]; 
}

export default class EstudantesController {
    public estudantesService = new EstudantesService()

    public async index(ctx: HttpContextContract) {
        const cursos = [
            {
                name: 'BTI'
            },
            {
                name: 'EngSoft'
            },
            {
                name: 'EngComp'
            },
        ]
        return ctx.view.render('estudante/form_estudante', { cursos })
    }

    public async register(ctx:  HttpContextContract) {
        const estudantePayload = ctx.request.all() as IEstudante;

        const estudante = this.estudantesService.salvarEstudante(estudantePayload)

        return ctx.view.render('estudante/paginaEstudante', { estudante });
    }

    public async showEstudantes({ view }: HttpContextContract) {
        const estudantes = this.estudantesService.getListaEstudante()

        return view.render('estudante/listaEstudantes', { estudantes })
    }
}
