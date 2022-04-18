import React from "react";
import { Button } from "./button/Button";
import { Link } from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footerPry">
                    <div>  
                        <Link to="/policy"><Button buttonStyle="btn--primary" buttonSize="btn--medium">Política de Privacidade e Termos</Button></Link>
                        <Link to="/contact"><Button buttonStyle="btn--primary" buttonSize="btn--medium">Fale Conosco</Button></Link>
                    </div>
                    <p>Possuímos caráter meramente informativo e não temos ligação com nenhum órgão público.</p>
                </div>
                <div className="footerSec">
                    <p>© 2021 Gust</p>
                </div>
            </div>
        )
    }
}

export default Footer;