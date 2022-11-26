import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'lista_itens'})
export class Tarefa {
    @PrimaryGeneratedColumn({name:'codigo'})
    codigo?: number;
    @Column({name: 'descricao', type: 'varchar', length: 255})
    descricao?: string
}