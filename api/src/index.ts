import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes';
import cors from 'cors'

dotenv.config();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors())
app.use('/', routes);

app.listen(port, () => console.log(`App is running on port ${port}`));
