import Header from "./components/Header";
import Article from "./components/Article"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Article/>} />
        <Route exact path="/contact" element={<div>Contato</div>} />
        <Route exact path="/policy" element={<div>Contato</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
