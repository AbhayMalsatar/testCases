import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./component/Login";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Login name={"Abhay"} />
    </>
  );
}

export default App;
