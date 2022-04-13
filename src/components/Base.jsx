import React from "react";
import { Simu } from "./simu/Simu";

class Base extends React.Component{
    render(){
        return(
            <div className="article">
                <h1>Ajudamos você a se preparar para a prova teórica realizada pelo DETRAN</h1>
                <div className="sections">
                    <dir className="simuContent">
                        <Simu />
                    </dir>
                    <div className="simuTuto"></div>
                </div>
            </div>
        );
    }
}
export default Base;