import React from 'react'
import './carteira.css'
import botao from '../imagens/voltar.png'
import QR from '../imagens/frame.png'
import cartao from '../imagens/cartao.png'
import presente from '../imagens/presente.png'
import carteira from '../imagens/carteira.png'


export default()=>{

	return(

    <div id="container">
        <div id="cabecalho_carteira">
            <a href="/configuracoes">
                <img className="voltar" src={botao} alt=""/>
            </a>
            <div><h3>Carteira</h3></div>
        </div>

        <div id="container_saldo">
           
           <span className="info_carteira">
            <h3>Seu saldo da Carteira</h3>
            <p>R$ 0,00 
            <button type="submit" className="custom">></button> </p>
            <img className="qr" src={QR} alt="" width="50px" height="50px"/>
           </span> 
            
        </div>

        <div id="container_forma_pgto">

            <span id="forma_pgto">
                <a href="">
                    <img src={cartao} alt="" height="50px" width="45px"/>
                    <h6>Formas de pagamento</h6>
                </a>
            </span>
            <span id="forma_pgto">
                <a href="">
                    <img src={presente} alt="" height="50px" width="45px"/>
                    <h6>Resgatar ou enviar vale presente</h6>
                </a>
            </span>

        </div>

        <div id="pagamentos">
            <span>
                    <img src={carteira} alt="" height="100px" width="100px"/>
                    <p>
                        Você não fez nenhum pagamento.
                        Suas atividades aparecerão aqui.
                    </p>
            </span>



        </div>
        
    </div>

	)
}