export function verificarUsuario(req, res, next){
    console.log('Verificando usuário');
    next();
}

export function especificoDaTeste(req, res, next){
    console.log('Página de teste carregada');
    next();
}