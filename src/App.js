import Login from "./Components/Login";
import Watchlist from "./Components/Watchlist";
// import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/watchlist" element={<Watchlist/>}/>
      </Routes>
      </BrowserRouter>
      {/* <div className="App">
        
      </div> */}
     
    </>
  );
}

export default App;
