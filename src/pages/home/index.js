
import binance from './binance.png';
import binancefutures from './futures.png'
import bybit from './BYBIT.png';
import React from "react";
import './index.css';
import Menu from '../navbar'
import { Container, Row, Col } from 'reactstrap';
import { FiArrowRight } from "react-icons/fi";

import imagem from '../../Assets/001.png'


export default function Home(){
    return(
        <div>
            <div className='bg-black home' >
                <Container className='bg-black containerHome'>
                    <Menu/>
                    <Row className="rowHome">
                        <Col className="text-light mt-4">
                            <h1 className="homeTitulo"> Simples<br/>e Fácil</h1>
                            <p className="homeSubtitulo"><b>Gerencie os investimentos </b>de seus clientes em um único lugar</p>
                            <p className="homeSubtitulo">Utilize nossas ferramentas para <b>administrar a carteira</b> de seus Clientes. </p>
                            <p className="homeSubtitulo"><b>Negocie no mercado</b> spot e futuros.</p>
                        </Col>
                        <Col><img src={imagem} className="easerCrypto"></img></Col>
                    </Row>
                </Container>
            </div>


            <div className='estrategias'>
                <Container>
                    <Row className="estrategiasRow">
                        <Col className="colEstrategia" >
                            <h1 className="estrategiasTitulo" ><b className="negrito">Automatize suas</b> <b className="negritoBlack">estratégias e setups </b> </h1>
                            <p className="estrategiasText"><b>Nossas ferramentas possibilitam o trader profissional a escalar sua carteira de clientes.</b>  </p>
                            <p className="estrategiasText">Nós cuidamos da administração das contas, realizamos cobrança de mensalidade e dos lucros.  </p>
                            <p className="estrategiasText">Defina a sua estratégia de mensalidades, participação do lucro e configure diretamente na ferramenta.  </p>
                            <p className="estrategiasText"> Você foca em suas estratégias, enquanto nos focamos no melhor atendimento dos clientes, escalabilidade, suporte e segurança.</p>
                            <div className='flexButton'>
                                <a  href="#" className="button"><p className="buttonText"> COMECE AGORA </p> <div className="icon "> <FiArrowRight size={50} className="iconConfig " /> </div> </a>
                        </div>
                        </Col>
                        <Col className="exchanges">
                            <h1 className="titulo"> <b className="negrito"> EXCHANGES: </b> </h1>
                            <a href="#binance"><img src={binance} className='imagesLogo'></img> </a>
                            <a href="#binanceFutures"> <img  className='imagesLogo' src={binancefutures}></img></a>
                            <a href="#bybit"><img className='imagesLogo' src={bybit}></img> </a>
                        </Col>
                        
                    </Row>
                </Container>
            </div>  



            <div className='plataforama'>
                <Container>
                    <Row>
                        <Col className="colPlataforma">
                            <h1 className="plataformeTitle">Comece agora com a </h1>
                            <h1 className="plataformeTitleSpam">Plataforma da Easer Crypto</h1>
                            <p className="plataformaSubTittle">Maximize seus resultados. <spam className="plataformaSubTittleSpam" > Vá de 0 a 100 muito rápido.</spam></p>
                            <div className="plataformaButton">
                                <a  href="#" className="button"><p className="buttonText"> COMECE AGORA</p> <div className="icon"> <FiArrowRight size={50} className="iconConfig" /> </div> </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
