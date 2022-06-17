import React from 'react'
import Voltar from '../imagens/voltar.png'
import BH from '../imagens/bh.png'
import Lupa from '../imagens/lupa.png'
import Ipe from '../imagens/ipe2.jpg'
import Tixan from '../imagens/tixan2.jpeg'
import Macarrao from '../imagens/macarrao.jpeg'

import './supermercado.css'

export default () => {

	return (
    <>
      <header class="header">
        <button>
          <a href="/busca">
            <img src={Voltar} alt="return" />
          </a>
        </button>
      </header>
      <figure id="bh">
        <img src={BH} alt="Carrinho" id="bh"/>
      </figure>
      
      <div id="textareaContainer">
        <textarea type="text" id="textField" placeholder="Coca Cola"></textarea>
        <button type="button" id="sendMessage">
          <img src={Lupa} alt="enviar" />
        </button>
      </div>
    
      <div class="produtos">
        <div id="item">
          <img src={Ipe} alt="um" id="um" />
        </div>
        <div id="ok">
          <h3>Detergente Ipê 500ml</h3>
          <h2>R$ 3,49</h2>
          <label class="container"><input type="checkbox" />
            <span class="checkmark"></span></label>
        </div>
      </div>
      
      <div class="produtos">
        <div id="item">
          <img src={Tixan} alt="dois" id="dois" />
        </div>
        <div id="ok">
          <h3>Sabão em Pó Tixan</h3>
          <h2>R$ 11,59</h2>
          <label class="container"><input type="checkbox" />
            <span class="checkmark"></span></label>
        </div>
      </div>

      <div class="produtos">
        <div id="item">
          <img src={Macarrao} alt="tres" id="tres" />
        </div>
        <div id="ok">
          <h3>Pacote de Macarrão Vilma 500g</h3>
          <h2>R$ 4,59</h2>
          <label class="container"><input type="checkbox" />
            <span class="checkmark"></span></label>
        </div>

      </div>

      <div>
        <button id="opcao">
        <a href="/finalizar-pedido">
          <div id="nome">
            <h2>Adicionar à Lista</h2>
          </div>
          </a>
        </button>
      </div>
    </>
  )
}
