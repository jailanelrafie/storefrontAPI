//Setting up server
import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, function (): void {
  console.log('Server is running');
});

//Test route
app.get('/', function (req: Request, res: Response){
  res.send('Hello World!');
});

export default app;
