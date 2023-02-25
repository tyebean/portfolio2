
import './App.css';
import { Routes, Route } from "react-router-dom";
import TellMeAbtYrslf from './components/TellMeAbtYrslf';

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<TellMeAbtYrslf />} />

    </Routes>
    <div className="App">
      <h1>Hello World</h1>
      
    </div>
    </>
  );
}

export default App;
