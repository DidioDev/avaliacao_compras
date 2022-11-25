import { Repository } from "typeorm";
import { Tarefa } from './tarefa.entity';
export declare class TarefaService {
    private readonly tarefaRepository;
    constructor(tarefaRepository: Repository<Tarefa>);
    findAll(): Promise<Tarefa[]>;
    findById(codigo: number): Promise<Tarefa>;
    salvar(tarefa: Tarefa): Promise<Tarefa>;
    excluir(codigo: number): Promise<void>;
}
