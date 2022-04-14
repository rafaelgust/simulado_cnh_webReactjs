import React from "react";
import RiveHeader from "./rive/RiveHeader";
import iconSite from  "../images/icon.png"
import qrcodeImg from  "../images/qr.png"
import googleplayImg from  "../images/googleplay.png"
import { Button } from "./button/Button";

import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="navHeader">
                    <Link to="/"><img src={iconSite} alt="Logo Simulado CNH / Voltar para pagina inicial" title="Página inicial" width="60" height="60" /></Link>
                    <div className="buttonsNav">
                        <Link to="/policy"><Button buttonStyle="btn--primary" buttonSize="btn--medium">Política de Privacidade e Termos</Button></Link>
                        <Link to="/contact"><Button buttonStyle="btn--primary" buttonSize="btn--medium">Fale Conosco</Button></Link>
                    </div>
                </div>
                <div className="animHeader">
                    <RiveHeader />
                </div>
                <div className="appHeader">
                    <div className="appContent">
                        <img src={qrcodeImg} alt="QR-CODE" width="120" height="120" />
                        <div>
                            <p>Baixe nosso aplicativo</p>
                            <a href="https://play.google.com/store/apps/details?id=com.gust.cnh" target="_blank" rel="noopener noreferrer">
                                <img src={googleplayImg} alt="IMG googleplay" width="140" height="50" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;