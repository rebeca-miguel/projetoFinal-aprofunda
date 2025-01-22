import { Request, Response } from 'express';
import { CreateDespesaUseCase } from '../application/use-cases/create-despesa-use-case';
import { GetDespesasByUserUseCase } from '../application/use-cases/get-despesas-by-user-use-case';
//import { DeleteDespesaUseCase } from '../application/use-cases/delete-despesa-use-case';
import { Despesa } from '../domain/despesa';

export class DespesaController {
    constructor(
        private createDespesaUseCase: CreateDespesaUseCase,
        private getDespesasByUserCase: GetDespesasByUserUseCase,
        //private deleteDespesaUseCase: DeleteDespesaUseCase

    ){}

    async create(req: Request, res: Response) {
        const params: Despesa = req.body;
        const despesa = this.createDespesaUseCase.execute(params);
        res.status(201).json(despesa);
    }

    async findAll(req: Request, res: Response) {
        const userId = req.params.userId;
        const despesas = await this.getDespesasByUserCase.execute(userId);
        res.status(200).json(despesas);

    }

    //async delete(req: Request, res: Response) {
       // const despesaId = req.params.id;
       // try {
          // await this.deleteDespesaUseCase.execute(despesaId);
           // res.status(204).send();
        //} catch (error) {
            //res.status(500).json({ message: 'Erro ao excluir despesa', error });
       // }
    //}//
}
