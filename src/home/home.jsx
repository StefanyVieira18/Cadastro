import React from 'react'
import Carrinho from '../imagens/shoppingcart.png'
import Loja from '../imagens/loja.png'
import Produtos from '../imagens/produtos.png'
import Atendimento from '../imagens/atendimento.png'
import Sacola from '../imagens/bag.png'
import Configuracao from '../imagens/config.png'



import './home.css'

export default()=>{
	return(
    <>
          <div>
            <img src={Carrinho} alt="carrinho" id="shoppingCart"/>
          </div>

      <h1>O que você deseja fazer?</h1>

      <div id="options">
          <button id="list">
              <img src={Carrinho} alt="carrinho"/>
            <a href="/finalizar-pedido">
              <h4>Lista de compras</h4>
            </a>
          </button>
          <button id="loja">
              <img src={Loja} alt="loja" />
              <a href="/busca">
                <h4>Encontre uma loja</h4>
              </a>
          </button>
          <button id="produto">
              <img src={Produtos} alt="produto"/>
              <a href="/buscar-produto">
                <h4>Encontre um produto</h4>
              </a>
          </button>
          <button id="atendimento">
              <img src={Atendimento} alt="atendimento"/>
              <a href="/canais-de-atendimento">
                <h4>Canais de atendimento</h4>
              </a>
          </button>
          <button id="historico">
              <img src={Sacola} alt="historico"/>
              <a href="/peca-novamente">
                <h4>Histórico de compras</h4>
              </a>
          </button>
          <button id="config">
              <img src={Configuracao} alt="config"/>
              <a href="/configuracoes">
                <h4>Configurações</h4>
              </a>
          </button>
        </div>
    </>
    
	)
}