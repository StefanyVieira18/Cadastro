import React from 'react'
import Voltar from '../imagens/voltar.png'
import Logo from '../imagens/logo.png'

import './configuracoes.css'

export default () => {

  return (
    <>
      <header class="header">
          <button>
            <a href="/home">
              <img src={Voltar} alt="voltar"/>
            </a>
          </button>
      </header>
      
        <button id="perfil">
          <img src= {Logo} alt="perfil"/>
            <div id="nome">
                <h4>João da Silva</h4>
                <h6>Editar perfil</h6>
            </div>
        </button>
      

      <div>
          <button id="opcao">
              <div id="nome">
              <a href="/notificacoes">
                  <h4>Notificações</h4>
              </a>
                  <h6>Minha central de Notificações</h6>
              </div>
          </button>
          
          <button id="opcao">
              <div id="nome">
                  <h4>Carteira</h4>
                  <h6>Meu saldo</h6>
              </div>
          </button>

          <button id="opcao">
              <div id="nome">
                  <h4>Favoritos</h4>
                  <h6>Meus Supermercados Favoritos</h6>
              </div>
          </button>

          <button id="opcao">
              <div id="nome">
                  <h4>Pagamentos</h4>
                  <h6>Minhas formas de pagamento</h6>
              </div>
          </button>

          <button id="opcao">
              <div id="nome">
                  <h4>Endereços</h4>
                  <h6>Meus endereços cadastrados</h6>
              </div>
          </button>
      </div>
    </>
  )
}