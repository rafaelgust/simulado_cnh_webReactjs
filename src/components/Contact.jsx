import React from "react";
import ContatoForm from "./form/Contato";

class Contact extends React.Component{
    render(){
        return(
            <div className="contactContainer">
                <ContatoForm />
            </div>
        );
    }
}
export default Contact;