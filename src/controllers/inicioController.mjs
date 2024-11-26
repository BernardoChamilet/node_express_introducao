import { exemploModelo } from "../models/modelos1.mjs";


export function carregarPaginaInicial(req, res){
    res.render('index', {titulo: 'Páginal Inicial'});
    return;
};

export function enviarFormulario(req, res){
    //inserindo dados na coleção 
    exemploModelo.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome
    }).then(dados => console.log(dados)).catch(e => console.log(e));
    // criando sessão para esse usuário
    req.session.usuario = { nome: req.body.nome, logado: true };
    res.send(`Olá ${req.body.nome}`);
    return;
};