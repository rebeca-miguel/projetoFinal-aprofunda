import { Request, Response } from 'express';
import { CreateDespesaUseCase } from '../application/use-cases/create-despesa-use-case';
import { GetDespesasByUserUseCase } from '../application/use-cases/get-despesas-by-user-use-case';
import { DeleteDespesaUseCase } from '../application/use-cases/delete-despesa-use-case'
import { Despesa } from '../domain/despesa';

export class DespesaController {
  constructor(
    private createDespesaUseCase: CreateDespesaUseCase,
    private getDespesasByUserUseCase: GetDespesasByUserUseCase,
    private deleteDespesaUseCase: DeleteDespesaUseCase,
  ){}

  create(req: Request, res: Response) {
    const params: Despesa = req.body;
    const despesa = this.createDespesaUseCase.execute(params);
    res.status(201).json(despesa);
  }

  async getAll(req: Request, res: Response) {
    const userId = req.params.userId;
    const despesas = await this.getDespesasByUserUseCase.execute(userId);
    res.json(despesas);
  }

  async delete(req: Request, res: Response) {
    const despesaId = req.params.id;
    try {
      await this.deleteDespesaUseCase.execute(despesaId);
      res.status(204).send();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro desconecido';
      res.status(404).json({ message });

    }
  }

    
}
