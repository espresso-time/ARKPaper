import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnimationsWrapper from "../../animationWrapper/AnimationWrapper";

class Wizard extends Component {
  render() {
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

          {/*<div className="columns is-mobile">*/}
          {/*  <div className="column is-half is-offset-one-quarter">*/}
          {/*    <Link to="/create-wallet" className="button is-info is-fullwidth is-outlined">*/}
          {/*      <strong>Generate one from scratch</strong>*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*/!*</div>*!/*/}

          {/*/!*<div className="columns is-mobile">*!/*/}
          {/*  <div className="column is-half is-offset-one-quarter">*/}
          {/*    <Link to="/create-wallet?created=true" className="button is-success is-fullwidth is-outlined">*/}
          {/*      I already generated the passpharase*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*/!*</div>*!/*/}

          {/*/!*<div className="columns is-mobile">*!/*/}
          {/*  <div className="column is-half is-offset-one-quarter">*/}
          {/*    <Link*/}
          {/*      to="/create-wallet?blueprint=true"*/}
          {/*      className="button is-success is-fullwidth is-outlined"*/}
          {/*    >*/}
          {/*      I only want the paperwallet blueprint to print.*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </AnimationsWrapper>
      </div>
    );
  }
}

export default Wizard;
