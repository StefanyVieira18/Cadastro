import React from 'react'
import Header from '../components/Header.jsx'
import Redarrow from '../imagens/redArrow.png'



import './chat.css'
export default () => {
	return (
		<>
			<Header />

			<div id="lineHeader"></div>

			<ul id="list">
				<li id="clientChat">Olá, como poderia te ajudar?</li>
			</ul>

			<div id="textareaContainer">
				<textarea type="text" id="textField" placeholder="Digite sua Mensagem"></textarea>
				<button type="button" id="sendMessage" >
					<img src={Redarrow} alt="enviar" />
				</button>
			</div>

		</>

	)
}

