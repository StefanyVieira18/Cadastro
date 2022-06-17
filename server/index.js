const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Cliente = require('./models/Cliente');
const Entregador = require('./models/Entregador');
const Empresa = require('./models/Empresa');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const cors= require('cors');
app.use(cors());


//lendo JSON
app.use(
    express.urlencoded({
        extended:true,
    }),
);

//Rotas
app.get('/',(req,res) =>{
    res.json({message:'Requisição OK'});
});

app.post('/createCliente',async (req,res)=>{
    const {name,cpf,email,senha,telefone,cep,endereco} = req.body;

    const cliente = {
        name,
        cpf,
        email,
        senha,
        telefone,
        cep,
        endereco,
    }
    try{
        await Cliente.create(cliente);
        res.status(201).json({msg:"Cliente Inserido com sucesso"});
    }catch(error){
        res.status(500).json({error:error});
    }
});


app.post('/createEntregador',async (req,res)=>{
    const {name,cpf,email,senha,telefone,cep,endereco,placa,modeloVeiculo} = req.body;

    const entregador = {
        name, 
        cpf,
        email,
        senha,
        telefone,
        cep,
        endereco,
        placa,
        modeloVeiculo,
    }
    try{
        await Entregador.create(entregador);
        res.status(201).json({msg:"Entregador Inserido com sucesso"});
    }catch(error){
        res.status(500).json({error:error});
    }
});


app.post('/createEmpresa',async (req,res)=>{
    const {razaoSocial,cnpj,endereco,numero,tipo} = req.body;

    const empresa = {
        razaoSocial,
        cnpj,
        endereco,
        numero,
        tipo,
    }
    try{
        await Empresa.create(empresa);
        res.status(201).json({msg:"Empresa Inserida com sucesso"});
    }catch(error){
        res.status(500).json({error:error});
    }
});


mongoose.connect('mongodb+srv://aluno:aluno123@clusterarquiteturaweb.7bpmq.mongodb.net/projetoIntegradorV_stf?retryWrites=true&w=majority')
.then(()=>{
    console.log('Conectado ao MongoDB');
    app.listen(8080);
})
.catch((err)=> console.log(err));
