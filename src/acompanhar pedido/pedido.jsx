import React from 'react'
import Header from '../components/Header.jsx'
import Voltar from '../imagens/voltar.png'
import Mapa from '../imagens/mapa.png'
import Entrega from '../imagens/entrega.png'
import Redarrow from '../imagens/redArrow.png'

import './pedido.css'

export default () => {
	return (
		<div>
			<header class="header">
				<button>
					<a href="/home">
						<img src={Voltar} alt="voltar" />
					</a>
				</button>

				<h2 id="entrega">Entrega</h2>

				<button id="ajudaBtn">
					<a href="/canais-de-atendimento">
						<h5 id="ajuda">Ajuda</h5>
					</a>
				</button>
			</header>

			<div id="lineHeader"></div>

			<div id="estimatedTime">
				<h5>Estimativa de entrega:</h5>
				<span>10:35 - 10:50</span>
			</div>

			<div id="steps"><h5>Comprando</h5></div>
			<div id="steps"><h5>A caminho</h5></div>
			<div id="stepsfinished"><h5>Entregue</h5></div>

			<img src={Mapa} alt="mapa" id="mapa" />

			<div id="contact">
				<img src={Entrega} alt="Entregador" />
				<div id="contactInfo">
					<h4>Paulo</h4>
					<h6>Entrar em contato</h6>
				</div>
				<button id="message">
					<img src={Redarrow} alt="Enviar mensagem" id="sendMessage" />
				</button>
			</div>
			<div id="lineHeader" ></div>

			<table>
				<tr>
					<td id="square">2</td>
					<td>
						<h3>Bandeja de sardinha 400g</h3>
					</td>
					<td>
						<h4>R$ 14,48</h4>
					</td>
				</tr>
				<tr>
					<td id="square">2</td>
					<td>
						<h3>Coca cola 2L</h3>
					</td>
					<td>
						<h4>R$ 9,50</h4>
					</td>
				</tr>
				<tr>
					<td id="square">4</td>
					<td>
						<h3>Lata skol 350ml</h3>
					</td>
					<td>
						<h4>R$ 2,44</h4>
					</td>
				</tr>
				<tr>
					<td id="square">1</td>
					<td>
						<h3>Azeite de Oliva Gallo 500ml</h3>
					</td>
					<td>
						<h4>R$ 18,99</h4>
					</td>
				</tr>
			</table>


		</div>



	)
}