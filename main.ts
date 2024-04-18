import express, {Request, Response} from 'npm:express@4.19.2';
import { apiReference } from 'npm:@scalar/express-api-reference@0.4.0'

const app = express()
app.use(express.json())
app.use(express.static('public'));

app.use(
  '/docs',
  apiReference({
    spec: {
      url: '/openapi.yaml',
    },
  }),
)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
});

app.listen(2077, () => {
  console.log('Server is running on http://localhost:2077')
});
