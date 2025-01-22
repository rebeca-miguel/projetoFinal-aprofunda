import express from 'express';
import cors from 'cors';
import { configureDependencies } from '../infrastructure/utils/config';
import { connectDB } from '../infrastructure/database/connection'
import dotenv from 'dotenv'
dotenv.config();

//seu codigo aqui
export const app = express();
connectDB();
app.use(cors());
app.use(express.json());

const { despesaController } = configureDependencies();

app.post('/despesa', (req, res) => despesaController.create(req, res));
app.get('/despesas/:userId', (req, res) => despesaController.findAll(req, res));
//app.delete('despesa/:id', (req, res) => despesaController.delete(req, res));

if (require.main === module) {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
}