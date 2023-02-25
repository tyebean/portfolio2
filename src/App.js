
import './App.css';
import { Routes, Route } from "react-router-dom";
import TellMeAbtYrslf from './components/TellMeAbtYrslf/TellMeAbtYrslf.jsx';
import ContactMe from './components/ContactMe.jsx';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<TellMeAbtYrslf />} />
          <Route path="/" element={<ContactMe />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
