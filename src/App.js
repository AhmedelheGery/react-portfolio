import HeaderWrapper from "./components/header/Header";
import About from "./components/about/About";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Nav/Navbar";

function App() {
  const [headerTitle, setHeaderTitle] = useState("State Header Title"); // 1 method from hooks
  const [aboutTitle, setAboutTitle] = useState("State About Title");

  const [userLogged, setUserLogged] = useState(false);

  const login = () => {
    setUserLogged(true);
  };
  const logout = () => {
    setUserLogged(false);
  };

  return (
    <div>
      <Navbar userLogged={userLogged} login={login} logout={logout} />

      {userLogged === true ? (
        <>
          <h1>Welcom From App</h1>
          <HeaderWrapper title={headerTitle} />
          <About
            aboutTitle={aboutTitle}
            info="Lorem ipsum dolor sit amet consectetur."
          />
        </>
      ) : (
        <p>Please Logon to see content!!</p>
      )}
    </div>
  );
}

export default App;
