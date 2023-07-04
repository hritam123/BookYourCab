
import Home from "./components/home/Home";
import Navbar from "./Navbar";
import DriverList from "./components/driverlists/DriverList";
import CabList from "./components/cabslists/CabList";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  // localStorage.clear();
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exaxt path="/" element={<Home key="Home"></Home>}></Route>
      <Route exaxt path="/Drivers" element={<DriverList key="Drivers"></DriverList>}></Route>
      <Route exaxt path="/Cabs" element={<CabList key="Cabs"></CabList>}></Route>

    </Routes>
    
    </>
  );
}

export default App;
