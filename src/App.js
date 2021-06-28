import React, { useEffect } from "react";
import "./app.css";
//react router
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

//Compoents
import Home from "./pages/Home/Home";
import Header from "./components/Layout/Header";
import ObjectDetection from "./pages/ObjectDetection/ObjectDetection";
import Prediction from "./pages/Prediction/Prediction";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Segmentation from "./pages/Segmentation/Segmentation";

import { leaveActions } from "./store/leave";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("RESULT") !== null) {
      dispatch(
        leaveActions.setResultData(JSON.parse(sessionStorage.getItem("RESULT")))
      );
    }
  }, [dispatch]);

  return (
    <Router>
      <main className="app">
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/object-detection" exact>
            <ObjectDetection></ObjectDetection>
          </Route>
          <Route path="/prediction" exact>
            <Prediction></Prediction>
          </Route>
          <Route path="/project-detail" exact>
            <ProjectDetail></ProjectDetail>
          </Route>
          <Route path="/segmentation" exact>
            <Segmentation></Segmentation>
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
