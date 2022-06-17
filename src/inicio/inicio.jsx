import React from 'react'
import Shopppingcart from '../imagens/shoppingcart.png'
import Facebook from '../imagens/facebook.png'
import Background from '../imagens/fundo.jpeg'
import { useAlert }  from 'react-alert'

import './inicio.css'

export default () => {

	const alert = useAlert()

	window.onload = function() {
  alert.show('Por favor, ative o modo de dispositivo do navegador na resolução de 470 x 890')
};

	return (

		<div id="bgc" style={{ backgroundImage: `url(${Background})` }}>

			<div id="container">
				<div>
					<img src={Shopppingcart} alt="carrinho" id="shoppingCart" />
				</div>

				<h1 id="name">MercaTour</h1>

				<div id="options" >
					<button id="facebook">
						<img src={Facebook} alt="Facebook" />
						<h3>Conectar com Facebook</h3>
					</button><br />

					<button id="login">
						<a href="/login">
							<h3>Entrar</h3>
						</a>
					</button><br />

					<button id="register">
						<a href="/cadastro">
							<h3>Cadastrar</h3>
						</a>
					</button>
				</div>
				
			</div>

		</div>
	)
}