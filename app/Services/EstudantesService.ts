import { IEstudante } from "App/Controllers/Http/EstudantesController";
import Estudante from "App/Models/Estudante";

class EstudantesService {
    public async salvarEstudante(estudantePayload: IEstudante):  Promise<IEstudante> {
        const estudante = await Estudante.create({
          primeiroNome: estudantePayload.primeiroNome,
          ultimoNome: estudantePayload.ultimoNome,
          curso: estudantePayload.curso,
          linguagem: estudantePayload.linguagem,
          sistemasOperacionas: estudantePayload.sistemasOperacionas,
        })

        return estudante;
    }

    public async getListaEstudante(): Promise<Estudante[]> {
      const estudantes = await Estudante.all();

      return estudantes;
    }

}

export default EstudantesService;
