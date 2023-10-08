import './App.css';
import Home from './componets/Home';
import Contact from "./componets/Contact";
import Navbar from './componets/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

  

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
