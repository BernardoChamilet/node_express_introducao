import express from 'express';
import { routes } from './routes.mjs';
import * as middleware from './src/middlewares/middlewares.mjs';
import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import helmet from 'helmet';

//carregando variaveis de ambiente
configDotenv();

const app = express();

//conectando com servidor de banco de dados
mongoose.connect(process.env.STRINGCONEXAO).then(()=>{
    app.emit('pronto');
}).catch(e => console.log(e));

app.use(helmet());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

//configurando sessões
const sessionOptions = session({
    secret: 'chave_secreta',
    store: MongoStore.create({ mongoUrl: process.env.STRINGCONEXAO }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000*60*60*10, httpOnly: true }
});
app.use(sessionOptions);

app.set('views', './src/views');
app.set('view engine', 'ejs');

//adcionando rotas e middlewares
app.use(middleware.verificarUsuario);
app.use(routes);

const porta = parseInt(process.env.PORT, 10);
app.on('pronto', ()=>{
    app.listen(porta, () => {
        console.log(`Escutando na porta ${porta}...`);
    });
});