import { IEstudante } from "App/Controllers/Http/EstudantesController";

class EstudantesService {
    private estudantes: IEstudante[] = [];

    public salvarEstudante(estudantePayload: IEstudante):  IEstudante {
        this.estudantes.push(estudantePayload)
        
        return estudantePayload;
    }

    public getListaEstudante(): IEstudante[] {
        return this.estudantes;
    }

}

export default EstudantesService;