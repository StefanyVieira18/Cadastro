import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Acompanharpedido from './acompanhar pedido/pedido.jsx'
import Canaisdeatendimento from './canais de atendimento/atendimento.jsx'
import Chat from './chat/chat.jsx'
import Inicio from './inicio/inicio.jsx'
import Login from './login/login.jsx'
import Notificacoes from './notificacoes/notificacoes.jsx'
import Pecanovamente from './pecanovamente/pecanovamente.jsx'
import Home from './home/home.jsx'
import Cadastro from './cadastro/cadastro.jsx'
import Carteira from './carteira/carteira.jsx'
import Busca from './busca/busca.jsx'
import Ajuda from './ajuda/ajuda.jsx'
import Buscarproduto from './buscar produto/buscarproduto.jsx'
import Configuracoes from './configuracoes/configuracoes.jsx'
import Finalizarpedido from './finalizar pedido/finalizarpedido.jsx'
import Supermercado from './supermercado/supermercado.jsx'


export default()=>{
	return(
		<BrowserRouter>
			<Switch>
				<Route path = "/" exact component={Inicio} />
				<Route path = "/login" component={Login} />
				<Route path = "/acompanhar-pedido" component={Acompanharpedido} />
				<Route path = "/canais-de-atendimento" component={Canaisdeatendimento} />
				<Route path = "/chat" component={Chat} />
				<Route path = "/notificacoes" component={Notificacoes} />
				<Route path = "/peca-novamente" component={Pecanovamente} />
				<Route path = "/home" component={Home} />
				<Route path = "/cadastro" component={Cadastro} />
        <Route path = "/carteira" component={Carteira} />
        <Route path = "/busca" component={Busca} />
        <Route path = "/buscar-produto" component={Buscarproduto} />
        <Route path = "/configuracoes" component={Configuracoes} />
        <Route path = "/finalizar-pedido" component={Finalizarpedido} />
        <Route path = "/supermercado" component={Supermercado} />
        <Route path = "/ajuda" component={Ajuda} />
			</Switch>
		</BrowserRouter>

	)

}