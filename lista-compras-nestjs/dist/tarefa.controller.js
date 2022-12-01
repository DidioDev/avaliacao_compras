"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefaController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const tarefa_service_1 = require("./tarefa.service");
let TarefaController = class TarefaController {
    constructor(tarefaService) {
        this.tarefaService = tarefaService;
    }
    async listaTarefa() {
        return await this.tarefaService.findAll();
    }
    async buscarPorId(parametro) {
        console.log(parametro.codigo);
        return await this.tarefaService.findById(parametro.codigo);
    }
    async excluirTarefa(parametro) {
        await this.tarefaService.excluir(parametro.codigo);
        return "ok";
    }
    async salvarTarefa(tarefa) {
        await this.tarefaService.salvar(tarefa);
        return 'Seu item foi salvo na lista!';
    }
};
__decorate([
    (0, common_1.Get)('/tarefa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "listaTarefa", null);
__decorate([
    (0, common_1.Get)('/tarefa/:codigo'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "buscarPorId", null);
__decorate([
    (0, decorators_1.Delete)('/tarefa/:codigo'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "excluirTarefa", null);
__decorate([
    (0, common_1.Put)('/tarefa'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TarefaController.prototype, "salvarTarefa", null);
TarefaController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [tarefa_service_1.TarefaService])
], TarefaController);
exports.TarefaController = TarefaController;
//# sourceMappingURL=tarefa.controller.js.map