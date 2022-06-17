import React from 'react'
import Voltar from '../imagens/voltar.png'
import './Header.css'

export default () => {
	return (
		<header id="header">
			<button>
				<a href="/home">
					<img src={Voltar} alt="voltar" />
				</a>
			</button>
		</header>
	)
}