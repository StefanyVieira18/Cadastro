import React from 'react'
import Header from '../components/Header.jsx'
import Desconto from '../imagens/desconto.png'
import Push from '../imagens/pushnotification.png'
import './notificacoes.css'

export default () => {
	return (
		<>
			<Header/>

			<div id="lineHeader"></div>

			<div id="notification" onclick="window.location.href = 'supermercado.html'">
				<img src={Desconto} alt="cupom" id='cupom' />
				<h3>Você recebeu um novo cupom</h3>
				<p>Novo <strong>cupom</strong> de R$10 adicionado na sua conta</p>

				<div id="line"></div>
			</div>

			<div id="notification">
				<img src={Push} alt="pushNotification" id='pushNotification' />
				<p id="order"  >Fique de olho em suas notificações para saber quando seu pedido está chegando</p>
				<div id="lineOrder"></div>
			</div>
		</>
	)

}