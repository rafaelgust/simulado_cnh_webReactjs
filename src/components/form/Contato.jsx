import { useState } from "react";
import './Contato.css';

function ContatoForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name} ${email} ${text}`)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
            <input 
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <textarea 
            placeholder="Mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)} 
            />
          </label>
        <input type="submit" />
      </form>
    )
  }
  

  export default ContatoForm;