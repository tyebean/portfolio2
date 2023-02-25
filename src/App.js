import './App.css';
import { Routes, Route } from "react-router-dom";

import Main from './pages/Main.jsx';
import ContactMe from './pages/ContactMe.jsx';

function App() {
  return (
    <>
      <div className="App">

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>


      </div>
    </>
  );
}

export default App;
