import express from 'express';
import url from 'url';
import path from 'path'; 

// Routes import
import homeRoute from './routes/homeRoute.js';
import newMessageRoute from './routes/newMessageRoute.js';
import messageDetailRouter from './routes/messageDetailRoute.js';
 
const app = express();
const port = process.env.PORT || 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

// Template setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

// Routes setup
app.use('/new', newMessageRoute);
app.use('/message',messageDetailRouter);
app.use('/', homeRoute);


app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
})

