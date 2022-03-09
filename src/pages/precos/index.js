import React from "react";
import './index.css';
import {  CardBody,
    CardTitle, CardText, Col, Row, Container} from 'reactstrap';
import melhorvalor from './melhorValor.png';
export default function Precos(){
    return(
        <div className="divPrecos">
            <Container  id="precos" name="precos">
                <Row>
                    <Col  className="colPrecos">
                        <h1 className="precosTitulo  text-center " > Planos e Preços </h1>
                        <Row className="rowCards"> 
                            <Col sm="12" md={{ size: 8, offset: 2 }} className="colCards">
                                <div sm="4" className="divCards">
                                    <div className="cardIniciante">
                                        <div className="  border-light cardHeader  ">Iniciante</div>
                                        <CardBody className="cardBody ">
                                            <CardTitle className="cardTittleValor">R$<spam className="spamValor">1.500</spam></CardTitle>
                                            <CardText  className="cardTextMensal">/mensal</CardText>
                                            <CardText  className="cardTextUsuarios">Até 20 usuários</CardText>
                                        </CardBody>
                                    </div>
                                </div>
                                <div sm="4" className="divCards ">
                                    <div className="cardIntermediario ">
                                        <div className=" border-light  cardHeader">intermediário</div>
                                        <CardBody className="cardBody  ">
                                            <CardTitle className="cardTittleValor">R$<spam className="spamValor">2.500</spam></CardTitle>
                                            <CardText  className="cardTextMensal">/mensal</CardText>
                                            <CardText  className="cardTextUsuarios">Até 21 a 50 usuários</CardText>
                                        </CardBody>
                                    </div>
                                </div>
                                <div sm="4" className="divCards">
                                        <div className="cardProfissional">
                                            <div className="cardHeader">Profissional  </div>
                                            <CardBody className=" cardBody ">
                                                <CardTitle className="cardTittleValor">R$<spam className="spamValor">5.000</spam></CardTitle>
                                                <CardText  className="cardTextMensal">/mensal</CardText>
                                                <CardText  className="cardTextUsuarios">Acima de 50 usuários</CardText>
                                            </CardBody>
                                        </div>
                                        <div className="divMelhorvalor">
                                            <img className="imgMelhorValor" src={melhorvalor}></img>
                                        </div>
                                </div>
                            </Col>
                        </Row>
                    <div  className="text-light text-center groupList  bg-dark ">
                        <p className="text-light  border-dark robos">Grupos de sinais, robôs e Planos Personalizados</p>
                        <hr className="hrList"></hr>
                        <p className="text-light  border-dark consulta">“Nos consulte” CTA para email</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}