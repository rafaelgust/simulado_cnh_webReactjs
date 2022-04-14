import { useState } from "react";

function ContatoForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}`)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
            <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <textarea 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            />
          </label>
        <input type="submit" />
      </form>
    )
  }
  

  export default ContatoForm;