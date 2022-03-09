import React  from "react";
import { Col, Container, Row } from "reactstrap";
import './index.css';
import easerCrypto from '../../Assets/Group 2403.png'

export default function Sobre(){

    return(
        <div className="divSobre" id="sobre" name="sobre">
            <Container >
                <Row className="rowSobre">
                    <h1 className="Titulo">Sobre</h1>
                    <Col md="6" className="colImg">
                        <img src={easerCrypto} className="imgCrypto"></img>
                    </Col>
                    <Col  md="6">
                        <p className="TextConfigBold"> EaserCrypto é uma Plataforma que foi desenvolvida por traders, pensado nos traders. </p>
                        
                        <p className="TextConfig">Você terá acesso a uma Plataforma completa de copy, possibilitando que opere nas contas de seus clientes em tempo real e com total segurança.</p>
                        
                        <p className="TextConfigBold">Nosso objetivo é facilitar o serviço do trader, desde o iniciante até o profissional, 
                        nós sabemos que o importante é gerar escala e segurança.</p>

                        <p className="TextConfig">Com a EaserCrypto, você terá seu próprio painel e dashboard, poderá cadastrar seus clientes, 
                        configurar os setups, realizar o testes em back-teste, realizar as cobranças automáticas de mensalidades e rendimentos, 
                        bloqueios por falta de pagamento, programa de afiliados entre outros serviços.</p>
                    </Col>
                </Row>
                
            </Container>
            <hr className="hrSobre"></hr>
        </div>
    )

}