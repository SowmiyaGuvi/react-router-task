import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Menu from "./components/Menu.jsx";
import AllCom from "./components/AllCom.jsx";
import FullStackDev from "./components/FullStackDev.jsx";
import DataScience from "./components/DataScience.jsx";
import CyberSecurity from "./components/CyberSecurity.jsx";
import Career from "./components/Career.jsx";
import Footer from "./components/Footer";
import { CardData } from "./data";

function App() {
  let data = CardData;
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<AllCom data={data}/>}></Route>
          <Route
            path="/fullStackDevelopment"
            element={<FullStackDev data={data}/>}
          ></Route>
          <Route path="/dataScience" element={<DataScience data={data}/>}></Route>
          <Route path="/cyberSecurity" element={<CyberSecurity data={data}/>}></Route>
          <Route path="/career" element={<Career data={data}/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;