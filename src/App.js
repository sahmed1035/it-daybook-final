import React, { Fragment, useEffect } from "react";

// bringing materialize-css
import "materialize-css/dist/css/materialize.min.css";
// bringing in materialize javascript for models and stuff
import M from "materialize-css/dist/js/materialize.min.js";

import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

const App = () => {
  // initializing Materialize JavaScript. Should be able to use Models
  useEffect(() => {
    M.AutoInit();
  });

  return (
    // <div className="App">
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
    // </div>
  );
};

export default App;
