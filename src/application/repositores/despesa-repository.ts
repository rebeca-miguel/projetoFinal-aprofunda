import { Despesa } from '../../domain/despesa';

export interface DespesaRepository {
    save(despesa: Despesa): Promise<void>;
    findAll(): Promise<Despesa[]>;
    findById(id: string): Promise<Despesa | null>;
    delete(despesaId: string): Promise<void>;

}