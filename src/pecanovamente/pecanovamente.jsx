import React from 'react'
import Header from '../components/Header.jsx'
import Shoppingcart from '../imagens/shoppingcart.png'
import Supernosso from '../imagens/supernosso.jpg'
import Carrefour from '../imagens/carrefour.jpg'
import Makro from '../imagens/makro.jpg'

import './pecanovamente.css'

export default () => {
	return (
		<>
			<Header />

			<div id="lineHeader"></div>

			<img id="shoppingCart" src={Shoppingcart} alt="Carrinho" />

			<h6 id="favorites--text">Mais pedidos por você</h6>

			<div id="favorites--icons" >
				<a id="favorites--icons-id" href="">
					<img src={Supernosso} alt="supernosso" />
					<img src={Carrefour} alt="carrefour" />
					<img src={Makro} alt="makro" />
				</a>
			</div>

			<h6 id="orderAgain--text">Peça novamente</h6>

			<div id="pedido">
				<h6>Qua 4 Agosto 2021</h6>
				<div id="delivered">
					<img src={Makro} alt="pedido 1 supermercado" />
					<h5>Pedido entregue - 5986</h5>
				</div>

				<div id="products">
					<div id="square">3</div>
					<h3>Detergente ypê</h3>
				</div>

				<div id="products">
					<div id="square">1</div>
					<h3>Sabão em pó Omo</h3>
				</div>
			</div>

			<div id="pedido">
				<h6>Ter 1 Setembro 2021</h6>
				<div id="delivered">
					<img src={Carrefour} alt="pedido 2 supermercado" />
					<h5>Pedido entregue - 8080</h5>
				</div>

				<div id="products">
					<div id="square">1</div>
					<h3>Coca cola 2L</h3>
				</div>
			</div>

			<div id="pedido">
				<h6>Ter 7 Setembro 2021</h6>
				<div id="delivered">
					<img src={Carrefour} alt="pedido 1 supermercado" />
					<h5>Pedido entregue - 9641</h5>
				</div>

				<div id="products">
					<div id="square">2</div>
					<h3>Bandeja de sardinha 400g</h3>
				</div>

				<div id="products">
					<div id="square">2</div>
					<h3>Coca cola 2L</h3>
				</div>

				<div id="products">
					<div id="square">5</div>
					<h3>Lata skol 350ml</h3>
				</div>

				<div id="products">
					<div id="square">1</div>
					<h3>Azeite de Oliva Gallo 500ml</h3>
				</div>
			</div>

			<div id="pedido">
				<h6>Sex 24 Setembro 2021</h6>
				<div id="delivered">
					<img src={Supernosso} alt="pedido 1 supermercado" />
					<h5>Pedido entregue - 8493</h5>
				</div>

				<div id="products">
					<div id="square">5</div>
					<h3>Lata skol 350ml</h3>
				</div>

				<div id="products">
					<div id="square">1</div>
					<h3>Picanha Uruguaya 1kg</h3>
				</div>
			</div>

			<div id="overflow"></div>
		</>

	)

}