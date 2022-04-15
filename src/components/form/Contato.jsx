import { useState } from "react";
import './Contato.css';

function ContatoForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("/api/cnh/sendmail", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            text: text,
          }),
        });
        if (res.status === 200) {
          setName("");
          setEmail("");
          setText("");
          alert('Enviado com Sucesso!');
        } else {
          alert('Falha ao enviar... Verifique os campos!');
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
            <h2>Contato</h2>
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