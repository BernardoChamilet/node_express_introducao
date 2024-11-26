export function teste(req, res) {
    console.log(req.params.parametro1);
    console.log(req.query.nome);
    res.send('Teste');
    return;
};