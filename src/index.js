import React from "react";
import ReactDOM from "react-dom";
import Regular from "./component/Regular";
import SASStlye from "./component/SASStlye";
import StyledComponent from "./component/StyledComponent";
import Bootstraped from "./component/Bootstraped";
import data from "./data/data.json";
import "./css/index.css";


ReactDOM.render(
    <React.StrictMode>
        <div className="body">
            <Regular style={data} />
            <SASStlye />
            <StyledComponent />
            <Bootstraped style={data} />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
