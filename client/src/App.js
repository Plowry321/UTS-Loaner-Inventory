import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
//Components
import Computer from "./components/Computer/index.js";
import Navbar from "./components/Navbar/index.js";
//Images
import RefreshSVG from "./images/refresh.svg";
import PlusSVG from "./images/plus.svg";

function App() {
  const [computerList, setComputerList] = useState([]);

  const getComputers = () => {
    Axios.get("http://localhost:3002/computers").then((response) => {
      setComputerList(response.data);
    });
    console.log("Data Updated");
  };

  useEffect(() => {
    getComputers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="inventory">
        {/* Refresh Button */}
        <img
          src={RefreshSVG}
          className="refresh-button"
          onClick={() => {
            getComputers();
          }}
        />
        {/* Add Computer Button */}
        <img
          src={PlusSVG}
          className="plus-button"
          onClick={() => {
            console.log("Add Computer");
          }}
        />
        {/* Computers */}
        {computerList.map((computer) => {
          return <Computer key={computer.id} {...computer} />;
        })}
      </div>
    </div>
  );
}

export default App;
