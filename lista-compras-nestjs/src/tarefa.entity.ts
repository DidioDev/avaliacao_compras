import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//CONEXÃO COM AS TABELAS CRIADAS NO BANCO DE DADOS
@Entity({name: 'lista'})
export class Tarefa {
    @PrimaryGeneratedColumn({name:'codigo'})
    codigo?: number;
    @Column({name: 'descricao', type: 'varchar', length: 255})
    descricao?: string
}