// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EstudantesController {
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
        const estudantePayload = await ctx.request.all();

        console.log(estudantePayload)

        return ctx.response.ok({});
    }
}
