import express, { Response, Request } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/polygons', (_req: Request, res: Response) => {
  var jsonPath = path.join(__dirname, '..', 'src', 'data', 'polygons.json');
  var jsonString = fs.readFileSync(jsonPath, 'utf8');
  res.send(JSON.parse(jsonString));
});

app.listen(3001, () => {
  console.log('listening on', 3001);
});
