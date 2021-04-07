import React from "react";
import { AnimatePresence } from "framer-motion";

//components
import Nav from "./components/Nav.component";

//pages
import Main from "./pages/Main.page.jsx";

function App() {
  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Main />
      </AnimatePresence>
    </>
  );
}

export default App;
