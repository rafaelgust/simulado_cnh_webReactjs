import React from "react";
import "./Simu.css";
import { FaClipboard, FaCircle , FaClock } from "react-icons/fa";
import RiveInList from "../rive/RiveInList";

export const Simu = () => {
    const listaSimulado =[{
        "id": 1,
        "name": "Simulado 1",
        "quest_total": 30,
        "alter_total": 4,
        "color1": "5275ed",
        "color2": "0bb8fd",
        "time": "01:00:00"
      },
      {
        "id": 2,
        "name": "Simulado 2",
        "quest_total": 40,
        "alter_total": 4,
        "color1": "ee709e",
        "color2": "ec8a6e",
        "time": "01:00:00"
      },
      {
        "id": 3,
        "name": "Legislação de Trânsito",
        "quest_total": 15,
        "alter_total": 4,
        "color1": "a690d2",
        "color2": "f3bde6",
        "time": "00:30:00"
      },
      {
        "id": 4,
        "name": "Direção Defensiva",
        "quest_total": 15,
        "alter_total": 4,
        "color1": "90d2c9",
        "color2": "b4cae1",
        "time": "00:30:00"
      },
      {
        "id": 5,
        "name": "Noções de Primeiros Socorros",
        "quest_total": 15,
        "alter_total": 4,
        "color1": "cc0033",
        "color2": "ff4d4d",
        "time": "00:30:00"
      },
      {
        "id": 6,
        "name": "Meio Ambiente e Cidadania",
        "quest_total": 15,
        "alter_total": 4,
        "color1": "1eb300",
        "color2": "55ff33",
        "time": "00:30:00"
      },
      {
        "id": 7,
        "name": "Mecânica básica",
        "quest_total": 15,
        "alter_total": 4,
        "color1": "d2a690",
        "color2": "e1c3b4",
        "time": "00:30:00"
      }];

    return (
        <div>
      {listaSimulado.map(function(d, idx){
         return (
            <button key={idx} className={`simu`} onClick={() => window.open(window.location.href + 'quiz?id=' + d.id, "_self")} style={{backgroundImage: `linear-gradient(to right, #${d.color1} ,  #${d.color2})`}}> 
                <div className="simuCard">
                    <div className="simuTitle">
                        <p>{d.name}</p>
                    </div>
                    <div className="simuSections">
                        <p><FaClipboard />  {d.quest_total} QUESTÕES</p>
                        <p><FaCircle />  {d.alter_total} ALTERNATIVAS</p>
                        <p><FaClock />  {d.time}</p>
                    </div>
                </div>
                <RiveInList key={idx} type={d.id}/>
            </button>
         )
       })}
      </div>  
    );
}