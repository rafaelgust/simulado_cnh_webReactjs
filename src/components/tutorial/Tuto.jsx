import React from "react";
import "./Tuto.css";
import Img1 from "../../images/1.png";
import Img2 from "../../images/2.png";
import Img3 from "../../images/3.png";

export const Tuto = () => {
    return (
        <div className="containerTuto">
            <div className="tutoBase">
                <img src={Img1} alt="IMG Tutorial 1" />
                <div>
                    <p>Escolha</p>
                    <p>o simulado</p>
                </div>
            </div>
            <div className="tutoBase">
                <img src={Img2} alt="IMG Tutorial 2" />
                <div>
                    <p>Avance e Retorne</p>
                    <br />
                    <p style={{ fontSize: "12px" }}>Pelos cubos superiores</p>
                    <p style={{ fontSize: "12px" }}>Pelos botões</p>
                    <p style={{ fontSize: "12px" }}>Pelo Touch</p>
                    <p style={{ fontSize: "12px" }}>Pelo Cartão de Resposta</p>
                </div>
            </div>
            <div className="tutoBase">
                <img src={Img3} alt="IMG Tutorial 3" />
                <div>
                    <p>Ao concluir</p>
                    <br />
                    <p style={{ fontSize: "12px" }}>Será redirecionado para o cartão de resposta, onde poderá conferir sua pontuação!</p>
                    <p style={{ fontSize: "12px" }}>Para acessar as alternativas, retorne ou escolha a alternativa no bloco superior</p>
                </div>
            </div>
        </div>  
    );
}