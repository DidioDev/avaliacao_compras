import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//TABELAS QUE VÃO SER USADAS NO DBEAVER
@Entity({name: 'lista_compras'})
export class Tarefa {

    @PrimaryGeneratedColumn({name:'codigo'})
    codigo?: number;

    @Column({name: 'item', type: 'varchar', length: 255})
    descricao?: string
}