import Header from "./components/Header";
import Base from "./components/Base"
import Contact from "./components/Contact"
import Policy from "./components/Policy"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Base/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/policy" element={<Policy/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
