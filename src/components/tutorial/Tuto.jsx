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
                </div>
            </div>
            <div className="tutoBase">
                <img src={Img2} alt="IMG Tutorial 2" />
                <div>
                    <p>Escolha</p>
                </div>
            </div>
            <div className="tutoBase">
                <img src={Img3} alt="IMG Tutorial 3" />
                <div>
                    <p>Escolha</p>
                </div>
            </div>
        </div>  
    );
}