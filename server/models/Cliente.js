const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',{
    name:String, 
    cpf:Number,
    email:String,
    senha:Number,
    telefone:Number,
    cep:Number,
    endereco:String,
});

module.exports = Cliente;