import express from 'express';
import  cors from 'cors';

const app = express();

// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes/index'));

app.listen(5000);
console.log('Server on port', 5000);