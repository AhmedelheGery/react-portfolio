import { useState } from "react";
import "./Header.css";

function Header(props) {
  const [name, setName] = useState("Name State");

  const withParams = (params) => {
    console.log("function called");
  };

  const normalWithoutParams = () => {
    console.log("normalWithoutParams");
  };

  return (
    <>
      <div className="header">
        <h2>{props.title}</h2>
        <span>{name}</span>
        <button onClick={normalWithoutParams}>Normal</button>
        <button onClick={()=>withParams("Ahmed")}>withParams</button>
      </div>
    </>
  );
}

export default Header;
