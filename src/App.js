
import './App.css';
import { Routes, Route } from "react-router-dom";
import TellMeAbtYrslf from './components/TellMeAbtYrslf/TellMeAbtYrslf.jsx';
import ContactMe from './components/ContactMe.jsx';
import Skills from './components/Skills.jsx'

function App() {
  return (
    <>
      <div className="App">
        {<TellMeAbtYrslf />}
        {<ContactMe />}
        {<Skills />}

        <Routes>
          <Route path="/" element={}/>
          {/* <Route path="/contact" element={<ContactMe />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
