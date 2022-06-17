import React from 'react'
import './buscarproduto.css'
import Voltar from '../imagens/voltar.png'
import Carrinho from '../imagens/carrinho.png'
import Lupa from '../imagens/lupa.png'
import Zero from '../imagens/zero.png'
import Extra from '../imagens/extra.png'
import Lata from '../imagens/lata.png'
import Carrefour from '../imagens/carrefour.png'

export default () => {
  return (
    <>
      <header class="header">
        <button>
          <a href="/home">
            <img src= {Voltar} alt="voltar"/>
          </a>
        </button>
      </header>
    
        <img src= {Carrinho} alt="Carrinho" id="mercatur" />
        <div id="textareaContainer">
              <textarea type="text"  id="textField" placeholder="Coca Cola"></textarea>
            <button type="button" id="sendMessage">
              <img src= {Lupa} alt="enviar"/>
            </button>
          </div>
      <div id="produtos">
        <img src= {Zero} alt="um" id="um"/>
          <div id="coluna">
            <h3>Refrigerante Coca Cola 2l</h3>
            <h2>R$ 8,00</h2>
            <img src= {Extra} id="dois"/>
          </div>
      </div>
      <div id="produtos">
        <img src= {Lata} alt="um" id="um"/>
        <div id="coluna">
          <h3>Refrigerante Coca Cola Lata 350ml</h3>
          <h2 id="preco2">R$ 3,50</h2>
          <img src= {Carrefour} id="tres"/>
        </div>
      </div>
    </>
  )
}