import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./componants/Home";
import Single from "./componants/Single";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/product/:id' element={<Single/>}/>
      </Routes>
    </>
  );
}

export default App;
