import React from "react";
import RiveHeader from "./rive/RiveHeader";
import iconSite from  "../images/icon.png"
import qrcodeImg from  "../images/qr.png"
import googleplayImg from  "../images/googleplay.png"
import { Button } from "./button/Button";

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="navHeader">
                    <img src={iconSite} alt="Logo Simulado CNH" width="60" height="60" />
                    <div className="buttonsNav">
                        <Button onClick={() => {console.log('foi1')}} buttonStyle="btn--primary" buttonSize="btn--medium">Política de Privacidade e Cookies</Button>
                        <Button onClick={() => {console.log('foi2')}} buttonStyle="btn--primary" buttonSize="btn--medium">Fale Conosco</Button>
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