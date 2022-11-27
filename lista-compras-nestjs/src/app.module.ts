import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TarefaController } from './tarefa.controller';
import { Tarefa } from './tarefa.entity';
import { TarefaService } from './tarefa.service';

//CONEXÃO COM O BANCO DE DADOS
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ascent',
      database: 'lista_compras',
      entities: [
        Tarefa
      ],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Tarefa])],
    controllers: [AppController, TarefaController],
    providers: [AppService, TarefaService],
})
export class AppModule {}