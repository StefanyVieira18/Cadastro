import React from 'react'
import Shoppingcart from '../imagens/shoppingcart.png'
import Header from '../components/Header.jsx'
import './login.css'
import Background from '../imagens/fundo.jpeg'

export default () => {
	return (
		<div id="bgc" style={{ backgroundImage: `url(${Background})` }}>


			<div >
				<img src={Shoppingcart} alt="carrinho" id="shoppingCart" />
			</div>

			<div id="com">
				<h1>Bem vindo de volta!</h1>
				<h3>Entre para continuar</h3>
			</div>

			<div id="form">
				<input type="text" id="email" placeholder="Digite seu email" /><br />
				<input type="text" id="password" placeholder="Digite sua senha" />
			</div>
			<h5 id="forgot">Esqueceu sua senha?</h5>

			<button id="entrar">
				<a href="/home">
					<h2>Entrar</h2>
				</a>
			</button>

		</div>

	)

}