import { TarefaService } from './tarefa.service';
import { Tarefa } from './tarefa.entity';
export declare class TarefaController {
    private tarefaService;
    constructor(tarefaService: TarefaService);
    listaTarefa(): Promise<Tarefa[]>;
    buscarPorId(parametro: any): Promise<Tarefa>;
    excluirTarefa(parametro: any): Promise<string>;
    salvarTarefa(tarefa: any): Promise<string>;
}
