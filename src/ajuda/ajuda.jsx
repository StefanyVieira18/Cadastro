import React from 'react'
import Ajuda from './ajuda.css'
import Botao from '../imagens/voltar.png'
import Logo from '../imagens/carrinho.png'

export default()=>{

	return(
       <div id="container" className="background_ajuda">

        <div id="cabecalho_carteira">
            <a href="/canais-de-atendimento">
                <img className="voltar" src={Botao} alt=""/>
            </a>
            <div>
                <h3>Ajuda</h3>
            </div>
        </div>

        <div id="container_ajuda">

            <a href="">
                Como Cadastro um novo cartão?
            </a>

        </div>

        <div id="container_ajuda">
        
            <a href="">
                Meu Cartão não está sendo aceito. O que eu faço?
            </a>
        
        </div>

        <div id="container_ajuda">
        
            <a href="">
                Onde está meu entregador?
            </a>
        
        </div>

        <div id="container_ajuda">
        
            <a href="">
                Posso cancelar uma compra?
            </a>
        
        </div>

        <div id="container_ajuda">
        
            <a href="">
                Meu pedido veio errado.
            </a>
        
        </div>

    </div>

	)
}