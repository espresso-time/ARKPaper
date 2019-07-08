import React  from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./bulma.css";
import "./App.css";
import "./fa/css/fa.min.css";

import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";
import Welcome from "./modules/welcome/Welcome";
import Wizard from "./modules/walletGenerator/views/Wizard";
import WalletInfo from "./modules/walletGenerator/views/generate/WalletInfo";
import How from "./modules/how/How";
import SmallScreenBlocker from "./modules/smallScreenBlocker/SmallScreen";

export default function App() {
  return (
    <Router>
      <div className="only-big-screen">
        <div>
          <section
            className="hero is-info is-fullheight"
            style={{
              background: "linear-gradient(126deg, #e1ebee -23%, #061c6d)"
            }}
          >
            <Header />

            <div className="hero-body">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/start" component={Wizard} />
                <Route path="/create-wallet" component={WalletInfo} />
                <Route path="/how-it-works" component={How} />
                <Route component={Welcome} />
              </Switch>
            </div>

            <Footer />
          </section>
        </div>
      </div>
      <SmallScreenBlocker/>
    </Router>
  );
};
