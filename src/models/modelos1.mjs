import mongoose from "mongoose";

const exemploSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome: String
});

export const exemploModelo = mongoose.model('exemplo', exemploSchema, "colecao1");