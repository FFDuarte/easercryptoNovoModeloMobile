import React from "react";
import { Col, Container, Row } from "reactstrap";
import './index.css';
import logo from '../../Assets/easeCrypto.png'
import { FaFacebookF,FaTwitter,FaInstagram,FaTumblr,FaYoutube,FaLinkedinIn,FaWhatsapp,FaSkype} from 'react-icons/fa';

export default function Contato(){
    return(
        <div className="Contato" id="contato" name="contato">
            <Container >
                <Row className="ContatoRow"> 
                    <Col className="ColContato">
                        <img src={logo} className="logo"></img>
                        <p className="contatoText"> EaserCrypto é a melhor plataforma para o trader iniciante e profissional operar a carteira de seus clientes.</p>
                        <div className="divIcons" >
                            <a href="#" className="aIcons"> < FaFacebookF /></a>
                            <a href="#" className="aIcons"><FaTwitter/></a>
                            <a href="#" className="aIcons"><FaInstagram/></a>
                            <a href="#" className="aIcons"><FaTumblr/></a>
                            <a href="#" className="aIcons"><FaFacebookF/></a>
                            <a href="#" className="aIcons"><FaLinkedinIn/></a>
                            <a href="#" className="aIcons"><FaYoutube/></a>
                            <a href="#" className="aIcons"><FaWhatsapp/></a>
                            <a href="#" className="aIcons"><FaSkype/></a>
                        </div>
                    </Col>
                    <Col  className="rowMoreInfo">
                        <div  className="divMoreInfo">
                            <a className="contatoInfos" href="">Home</a>
                            <a  className="contatoInfos" href="#comofunciona">Como Funciona</a>
                            <a  className="contatoInfos" href="#precos">Preços</a>
                            <a  className="contatoInfos" href="#sobre">Sobre</a>                       
                        </div>
                        <div  className="divMoreInfo">
                            <a  className="contatoInfos" href="#contato">Contato</a>
                            <a  className="contatoInfos d-none">Login</a>
                            <a  className="contatoInfos d-none">Cadastro</a>                    
                        </div>
                    </Col>
                </Row>
                <Row className="rowExtras">
                    <Col>
                        <hr className="hrExtras"></hr>
                        <div className="contatosExtras" >
                            <p className="ExtrasContatos">Email: contato@easercrypto.com</p>
                            <p className="ExtrasContatos">Cel: (11) 98403-7498</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}