import React from 'react'
import './busca.css'
import botao from '../imagens/voltar.png'
import logo from '../imagens/carrinho.png'
import carrefour from '../imagens/carrefour.jpg'
import extra from '../imagens/extra.png'
import makro from '../imagens/makro.jpg'
import bh from '../imagens/bh.png'
import supernosso from '../imagens/supernosso.jpg'
import verdemar from '../imagens/img_verdemar.jpg' 

export default()=>{

	return(
   <div id="container" className="container_busca">

        <div id="cabecalho">
            <img className="logo" src={logo} alt="logo"/>
            <a href="/home">
                <img className="voltar" src={botao} alt=""/>
            </a>
        </div>

        <div id="formulario_busca">
            <form action="">
            <input className="form_busca" type="text" placeholder="Buscar Mercado"
            name="busca"/>
            <button className="btn_busca" type="submit" name="" id="" value=""/>
            </form>
        </div>

        <div id="container_mercados">
            <span id="mercado_ln1">
                <div className="mercado">
                    <a href="">
                        <img src={carrefour} alt="img_carrefour" height="90px"/>
                    </a>
                </div>
                <div className="mercado">
                    <a href="">
                        <img src={extra} alt="img_extra" height="90px" width="90px" />
                    </a>
                </div>
            </span>
            <span id="mercado_ln2">
                <div className="mercado">
                    <a href="">
                        <img src={makro} alt="img_makro" height="90px" width="90px"/>
                    </a>
                </div>
                <div className="mercado">
                    <a href="">
                        <img src={bh} alt="img_bh" height="90px" width="90px"/>
                    </a>
                </div>
            </span>
            <span id="mercado_ln3">
                <div className="mercado">
                    <a href="">
                        <img src={supernosso} alt="img_supernosso" height="90px" width="90px"/>
                    </a>
                </div>
                <div className="mercado">
                <a href="">
                    <img src={verdemar}alt="img_verdemar" height="90px" width="90px"/>
                </a>
                </div>
            </span>

        </div>

    </div>

	)
}