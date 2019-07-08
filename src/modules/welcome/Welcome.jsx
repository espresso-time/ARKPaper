import React  from "react";
import AnimationsWrapper from "../animationWrapper/AnimationWrapper";
import {Offline, Online} from "react-detect-offline";
import {Link} from "react-router-dom";

export default function Welcome() {
  return (
    <div className="container has-text-centered landing">
      <AnimationsWrapper>
        <h1 className="title">ARK paper wallet</h1>
        <Offline>
          <h1 className="subtitle">(You are using this tool offline)</h1>
        </Offline>
        <p className="subtitle">
          Create your Ark paper wallet offline in 2 easy steps
        </p>
        <Link to="/start" className="button is-primary">
          <i className="fa fa-cog fa-fw slow-spin" aria-hidden="true" />{" "}
          Create/Import a wallet
        </Link>
        <Link to="/how-it-works" className="button is-primary">
          <i className="fa fa-question-circle fa-fw" aria-hidden="true" /> How
          it works
        </Link>
        {window && window.process && window.process.type
          ? ""
          : <Online>
            <a
              href="https://github.com/espresso-time/ARKPaper/releases"
              className="button is-primary"
            >
              <i className="fa fa-download fa-fw" aria-hidden="true" />{" "}
              Download offline version
            </a>
          </Online>}
      </AnimationsWrapper>
    </div>
  );
}
