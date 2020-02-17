import { env } from './env';
import app from './app/App';

env;
app.start(8080, 'localhost');
