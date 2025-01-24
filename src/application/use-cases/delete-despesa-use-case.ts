import { Despesa } from '../../domain/despesa';
import { DespesaRepository } from '../repositores/despesa-repository';


export class DeleteDespesaUseCase {
    constructor(private despesaRepository: DespesaRepository) {}


    async execute(id: string): Promise<void> {
       const despesa = await this.despesaRepository.findAll();
       const existe = despesa.some(item => item.id === id);

       if (!existe) {

         throw new Error('Despesa não encontrada');
       }

      


      await this.despesaRepository.delete(id)
   }
  

}