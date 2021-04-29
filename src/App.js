import React from "react";
import { AnimatePresence } from "framer-motion";
import ReactNotification from "react-notifications-component";

import "react-notifications-component/dist/theme.css";

//components
import Nav from "./components/Nav.component";

//pages
import Main from "./pages/Main.page.jsx";

function App() {
  return (
    <>
      <Nav />
      <ReactNotification />
      <AnimatePresence exitBeforeEnter>
        <Main />
      </AnimatePresence>
    </>
  );
}

export default App;
