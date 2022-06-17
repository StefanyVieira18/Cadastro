import React,{useState} from 'react'
import  './cadastro.css'
import botao from '../imagens/voltar.png'
import logo from '../imagens/carrinho.png'
import api from '../../Api.js'
import axios from 'axios'

export default()=>{
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState(0);
    const [confirmaSenha,setConfirmaSenha] = useState(0);
    const [telefone,setTelefone] = useState(0);
    const [cpf,setCpf] = useState(0);
    const [cep,setCep] = useState(0);
    const [endereco,setEndereco] = useState('');
    
    function criarNovoCadastro(){
        event.preventDefault();
        const newCadastro={ 
            name:nome,
            cpf:parseInt(cpf),
            email:email,
            senha:parseInt(senha),
            telefone:parseInt(telefone),
            cep:parseInt(cep),
            endereco:endereco
        }
        if(nome !='' && cpf != 0 && email != ''&& senha != 0 && telefone != 0 && cep != 0 && endereco !='' ){
            try{
                axios.post('http://localhost:8080/createCliente', newCadastro);
                alert("Cliente cadastrado com sucesso");
            }
            catch(error) {
                    console.log(error);
            };

        }else{
                
            console.log('Preencha todos os campos!');        
        }
        
    }

	return(
    <div id="container">
     <div id="cabecalho">
            <img className="logo" src={logo} alt="logo" />
            <a href="/login">
                <img className="voltar" src={botao} alt=""/>
            </a>
        </div>

        <div>
            <form>
                <input className="form_cadastro" type="text" placeholder="Nome" name="nome"onChange={(e)=>setNome(e.target.value)}/>
                
                <input className="form_cadastro" type="text" placeholder="Email"
                name="email" onChange={(e)=>setEmail(e.target.value)}/>
                
                <input className="form_cadastro" type="password" placeholder="Senha"
                name="senha"onChange={(e)=>setSenha(e.target.value)}/>
                
                <input className="form_cadastro" type="password" placeholder="Confirmar Senha"
                name="conf_senha"onChange={(e)=>setConfirmaSenha(e.target.value)}/>
                
                <input className="form_cadastro" type="text" placeholder="Telefone"
                name="telefone" onChange={(e)=>setTelefone(e.target.value)}/>

                <input className="form_cadastro" type="text" placeholder="CPF"
                name="cpf" onChange={(e)=>setCpf(e.target.value)}/>
                
                <input className="form_cadastro" type="text" placeholder="CEP"
                name="cep" onChange={(e)=>setCep(e.target.value)}/>
                
                <input className="form_cadastro" type="text" placeholder="Endereço"
                name="endereco" onChange={(e)=>setEndereco(e.target.value)}/>
                
                <button className="botao_cadastro" type="submit" onClick={()=>criarNovoCadastro()}>Cadastrar</button>
            </form>
                
        </div>
    </div>

	)
}