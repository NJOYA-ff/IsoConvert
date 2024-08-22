import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import React from "react";

import Converter from "./pages/Converter";

import Editor from "./components/game/Editor";
import Terminal from "./pages/Terminal";
import Console from "./components/game/Console";
import Document from "./components/game/Document";

import Calconvt from "./pages/Calconvt";
import History from "./pages/History";

import Calconvt1 from "./pages/Calconvt1";
import Calconvt2 from "./pages/Calconvt2";
import MathFormulars from "./components/MathFormulars";
import Graphic from "./components/game/Graphic";
import Toll from "./pages/Tools";
import Calconvt3 from "./pages/Calconvt3";
import Calconvt4 from "./pages/Calconvt4";
import Calconvt5 from "./pages/Calconvt5";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/Setting" exact={true}>
              <Setting />
            </Route>
            <Route path="/Converter" exact={true}>
              <Converter />
            </Route>

            <Route path="/Calconvt" exact={true}>
              <Calconvt />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/Editor" exact={true}>
              <Editor />
            </Route>
            <Route path="/Console" exact={true}>
              <Console />
            </Route>
            <Route path="/Terminal" exact={true}>
              <Terminal />
            </Route>
            <Route path="/Document" exact={true}>
              <Document />
            </Route>
            <Route path="/History" exact={true}>
              <History />
            </Route>

            <Route path="/Calconvt1" exact={true}>
              <Calconvt1 />
            </Route>
            <Route path="/MathFormulars" exact={true}>
              <MathFormulars />
            </Route>
            <Route path="/Calconvt2" exact={true}>
              <Calconvt2 />
            </Route>
            <Route path="/Calconvt3" exact={true}>
              <Calconvt3 />
            </Route>
            <Route path="/Calconvt4" exact={true}>
              <Calconvt4 />
            </Route>
            <Route path="/Calconvt5" exact={true}>
              <Calconvt5 />
            </Route>

            <Route path="/Toll" exact={true}>
              <Toll />
            </Route>
            <Route path="/Graphic" exact={true}>
              <Graphic />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
