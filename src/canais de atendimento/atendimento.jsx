import React from 'react'
import Header from '../components/Header.jsx'
import Shoppingcart from '../imagens/shoppingcart.png'
import Background from '../imagens/fundo.jpeg'

export default () => {
	return (

		<div id="bgc" style={{ backgroundImage: `url(${Background})` }}>
			<div>
				<Header />

				<div>
					<img src={Shoppingcart} alt="carrinho" id="shoppingCart" />
				</div>

				<div id="options">
					<button id="chat">
						<a href="/chat">
							<h1>Chat</h1>
						</a>
					</button><br />

					<button id="email" onclick="alert('Levaria para serviço de email')">
						<h1>Enviar email</h1>
					</button><br />

					<button id="contatos" onclick="alert('Mostraria os telefones de contato')">
						<h1>Contatos</h1>
					</button><br />

					<button id="ajuda" >
						<a href="/ajuda">
							<h1>Ajuda</h1>
						</a>
					</button><br />
				</div>

			</div>

		</div>
	)
}