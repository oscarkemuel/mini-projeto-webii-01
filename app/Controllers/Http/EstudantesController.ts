// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EstudantesService from 'App/Services/EstudantesService'


export interface IEstudante {
    primeiroNome: string;
    ultimoNome: string;
    curso: string;
    linguagem: string;
    sistemasOperacionas: string | string[];
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

        const hasManySystems = Array.isArray(estudantePayload.sistemasOperacionas);
        if(!hasManySystems) estudantePayload.sistemasOperacionas = [`${estudantePayload.sistemasOperacionas}`]

        const estudante = await this.estudantesService.salvarEstudante(estudantePayload)

        return ctx.view.render('estudante/paginaEstudante', { estudante });
    }

    public async showEstudantes({ view }: HttpContextContract) {
        const estudantes = await this.estudantesService.getListaEstudante()


        const teste = estudantes.map((estudante) => {
          return {
            ...estudante,
            sistemasOperacionas: estudante.sistemasOperacionas.split(',')
          }
        })

        return view.render('estudante/listaEstudantes', { estudantes })
    }
}
