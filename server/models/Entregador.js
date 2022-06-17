const mongoose = require('mongoose');

const Entregador = mongoose.model('Entregador',{
    name:String, 
    cpf:Number,
    email:String,
    senha:Number,
    telefone:Number,
    cep:Number,
    endereco:String,
    placa:String,
    modeloVeiculo:String,
});

module.exports = Entregador;