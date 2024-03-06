import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
