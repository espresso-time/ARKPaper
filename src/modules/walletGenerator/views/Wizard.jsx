import React  from "react";
import { Link } from "react-router-dom";
import AnimationsWrapper from "../../animationWrapper/AnimationWrapper";

export default function Wizard() {
  return (
    <div className="container has-text-centered">
      <AnimationsWrapper>
        <p className="title">
          Alrighty! Let&apos;s create a paper wallet. <br />How do do you
          want to create a paper wallet?
        </p>

        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="buttons are-medium is-centered">
              <Link to="/create-wallet" className="button is-info">
                  <span className="icon">
                    <i className="fas fa-wallet"></i>
                  </span>
                <span>New from scratch</span></Link>
              <Link to="/create-wallet?created=true" className="button is-info">
                  <span className="icon">
                    <i className="fa fa-lock"></i>
                  </span>
                <span>Existing passphrase</span></Link>
              <Link to="/create-wallet?blueprint=true" className="button is-info">
                  <span className="icon">
                    <i className="fa fa-map"></i>
                  </span>
                <span>Just blueprint</span></Link>
            </div>
          </div>
        </div>
      </AnimationsWrapper>
    </div>
  );
}
