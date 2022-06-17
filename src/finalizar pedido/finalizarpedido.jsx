import React from 'react'
import './finalizarpedido.css'
import Voltar from '../imagens/voltar.png'
import Mapa from '../imagens/mapa.jpeg'
import Seta from '../imagens/redArrow.png'
import Ipe from '../imagens/ipe2.jpg'
import Tixan from '../imagens/tixan2.jpeg'
import Cupom from '../imagens/cupom.png'
import Ver from '../imagens/ver.jpeg'
import Visa from '../imagens/visa.jpeg'
import Trocar from '../imagens/trocar.jpeg'

export default () => {

	return (
    <>
      <header id="header">
      <button>
        <a href="/home">
          <img src= {Voltar} alt="return"/>
        </a>
      </button>
        <div id="topo">
          <h2 id="carrinho">Carrinho</h2>
          <h2 id="limpar">Limpar</h2>
        </div>
      </header>
      <div id="cabeca">
        <h2 id="entrega">Entrega</h2>
        <h2 id="retirada">Retirada</h2>
      </div>
      
      <div id="linha1"></div>

      <div id="info">
        <img src= {Mapa} id="mapa"/>
          <div id="ok">
            <h3>Entregar em Casa</h3>
            <p><strong>R.x, 35</strong></p>
          </div>
            <img src= {Seta} alt="enviar" id="pote"/>
      </div>
      <div id="horario">
        <h3>Hoje, 35 - 45 min</h3>
        <p>R$ 3,00</p>
      </div>

      <div id="linha2"></div>

      <h1 id="bh">Supermercados BH</h1>

      <div id="produto">
          <div id="ok2">
            <h3>Detergente Ypê</h3>
            <h3 id="preco">R$ 3,49</h3>
          </div>
            <img src= {Ipe} alt="enviar" id="pote1"/>
      </div>

      <div id="linha1"></div>

      <div id="produto">
          <div id="ok2">
            <h3>Sabão em Pó Tixan Ypê</h3>
            <h3 id="preco">R$ 11,59</h3>
          </div>
            <img src= {Tixan} alt="enviar" id="pote"/>
      </div>

      <div id="linha1"></div>

      <h2 id="adc">Adicionar mais Itens</h2>

      <div id="linha1"></div>

      <div id="valor">
        <div id="primeiro">
          <h3 id="1">Subtotal</h3><h3 id="2">R$ 18,57</h3>
        </div>
        <div id="primeiro">
          <h3 id="1">Taxa de entrega</h3><h3 id="2">R$ 3,00</h3>
        </div>
        <div id="primeiro">
          <h3 id="1">Total</h3><h3 id="2">R$ 21,57</h3>
        </div>
      </div>

          <div id="linha2"></div>

          <div id="info2">
        <img src= {Cupom} id="cupom"/>
          <div id="ok3">
            <h3>Cupom</h3>
            <p><strong>5 disponíveis</strong></p>
          </div>
            <img src= {Ver} alt="enviar" id="ver"/>
      </div>

      <div id="linha2"></div>

      <div id="info3">
        <img src= {Visa} id="visa"/>
          <div id="ok4">
            <h3>Cartão de Crédito pelo Mercatour</h3>
            <p><strong>Visa ****3263</strong></p>
          </div>
            <img src= {Trocar} alt="enviar" id="trocar"/>
      </div>

      <button id="opcao">
      <a href="/acompanhar-pedido">
            <div id="nome">
              <h2>Finalizar Compra</h2>
            </div>
      </a>
      </button>
    </>
  )
}