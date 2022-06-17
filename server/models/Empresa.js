const mongoose = require('mongoose');

const Empresa = mongoose.model('Empresa',{
    razaoSocial:String,
    cnpj:Number,
    endereco:String,
    numero:Number,
    tipo:String,
});

module.exports = Empresa;