import React from "react";
import { Container,Row,Col } from "reactstrap";
import './index.css';


export default function ComoFunciona(){

    return(
          <div className="configGeral" id="comofunciona" name="comofunciona">
            <Container className="comoFuncionarContainer">
                <Row>
                    <Col>
                        <div className="divComoFunciona">
                            <h1 className="TitutloComoFunciona"> Como funciona</h1>
                            <h5> Simples e fácil.</h5>
                            <p className="pConfig">: Na easercrypto o processo é rápido e fácil, veja como funciona em 3 passos:</p>
                        </div>
                    </Col>
                </Row>
                <Row className="rowInfos">
                    <Col md='6'>
                        <div >
                            <h2 className="tittle"><b>Para você:</b></h2>
                            <div className="configInfos"> 
                                <p className="numberInfo"> 1 </p> 
                                <p className="pConfig">Escolha seu plano e crie uma nova conta na Easercypto.</p>
                            </div>
                            <div className="configInfos"> 
                                <p className="numberInfo"> 2 </p> 
                                <p className="pConfig">Crie chaves de acesso a seus clientes e defina o método de cobrança e % de ganho.</p>
                            </div>
                            <div className="configInfos"> 
                                <p className="numberInfo"> 3 </p> 
                                <p className="pConfig">Comece a operar manual ou defina estratégias de automatização de operações</p>
                            </div>
                        </div>
                    </Col >
                    <Col md='6'>
                        <div>
                            <h2 className="tittle">< b>Para seu cliente:</b></h2>
                            <div className="configInfos"> 
                                <p className="numberInfo">1 </p> 
                                <p className="pConfig">Usar o link de acesso e terminar o cadastro.</p>
                            </div>

                            <div className="configInfos"> 
                                <p className="numberInfo">2 </p> 
                                <p className="pConfig">Configurar as chaves de acesso a Exchange</p>
                            </div>

                            <div className="configInfos"> 
                                <p className="numberInfo">3 </p> 
                                <p className="pConfig">Definir valores de operações</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="divComoFunciona">
                            <p className="subTittle">Pronto! Todos os clientes cadastrados em sua conta, receberão automaticamente todas as suas operações. </p>
                            <p className="subTittle"> Com a EaserCrypto nós possibilitamos que você automatize as suas estratégias de trader, assim você usará<br/> seu tempo apenas para captar mais clientes</p>
                            <p className="complemento">Além do mais temos uma equipe técnica especializada para te ajudar em todas as etapas, vamos garantir que você comece a operar em pouco tempo</p>
                        </div>
                    </Col>
                </Row>

                <Row className=" rowFuncoes">
               
                    <Col className="DivParaVoce">
                        <div className="divFuncionalidades">
                            <p className="subTittleFunc" >Funcionalidades para você</p>
                        
                            <div>
                                <div className="informacoes"> 
                                    <p className="number"> 1 </p> 
                                    <p className="info">Envie alertas pelo whatsapp para seus clientes</p>
                                </div>
                                <div className="informacoes"> 
                                    <p className="number"> 2 </p> 
                                    <p className="info">Envie resultados de operações em tempo real para grupos no whatsapp ou telegram. </p>
                                </div>
                                <div className="informacoes"> 
                                    <p className="number"> 3 </p> 
                                    <p className="info">Automatize cobrança de rendimentos via cartão de crédito</p>
                                </div>
                                <div className="informacoes"> 
                                    <p className="number"> 4 </p> 
                                    <p className="info">Configure estratégias de operações baseado nos principais indicadores do mercado.</p>
                                </div>
                                <div className="informacoes"> 
                                    <p className="number"> 5</p> 
                                    <p className="info">Opere direto na conta de todos seus clientes com segurança e praticidade.</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col className="DivParaClientes">
                        <div className="divFuncionalidades">
                            <p className="subTittleFunc">Funcionalidades para seus clientes</p>
                            <div>
                                <div className="informacoes"> 
                                    <p className="number"> 1 </p> 
                                    <p className="info">Receba diretamente em seu whatsapp alertas de operações e resultados</p>
                                </div>
                                <div className="informacoes"> 
                                    <p className="number"> 2 </p> 
                                    <p className="info">Configure e defina metas de investimento, além de opções de trader como Stop Loss, Stop Gain. </p>
                                </div>
                                <div className="informacoes"> 
                                    <p className="number"> 3 </p> 
                                    <p className="info">Acesso a plataforma, com histórico de resultados, painel de controle, gerenciamento de alertas. </p>
                                </div>
                            </div>
                        </div> 
                    </Col>

                </Row>
            </Container>
        </div>
    )

}