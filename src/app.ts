import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';



const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// applications route
app.use('/api/v1', router);


const test = async (req: Request, res: Response) => {
  Promise.reject()
  const a = 10;
  res.send(a);
};
app.get('/', test);
app.use(globalErrorHandler)

export default app;
