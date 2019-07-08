import React, { Component } from "react";
import {
  generateSeed,
  generatePassphrase,
  emptyByte
} from "../../logic/wallets";

class PassphraseGenerator extends Component {
  constructor() {
    super();
    this.state = {
      step: "info",
      lastCaptured: {
        x: 0,
        y: 0
      },
      zeroSeed: emptyByte("00"),
      seedDiff: emptyByte(0)
    };
    this.seedGeneratorBoundToThis = this.seedGenerator.bind(this);
    document.addEventListener("mousemove", this.seedGeneratorBoundToThis, true);
  }

  componentWillUnmount() {
    document.removeEventListener(
      "mousemove",
      this.seedGeneratorBoundToThis,
      true
    );
  }

  /**
   * Tests useragent with a regexp and defines if the account is mobile device
   *
   * @returns {Boolean} - whether the agent represents a mobile device or not
   */
  isTouchDevice() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      navigator.userAgent || navigator.vendor || window.opera
    );
  }

  seedGenerator(nativeEvent) {
    let shouldTrigger;
    if (typeof nativeEvent === "string") {
      shouldTrigger = true;
    } else {
      const distance = Math.sqrt(
        (nativeEvent.pageX - this.state.lastCaptured.x) ** 2 +
          (nativeEvent.pageY - this.state.lastCaptured.y) ** 2
      );
      shouldTrigger = distance > 120;
    }

    if (
      shouldTrigger &&
      (!this.state.data || this.state.data.percentage < 100)
    ) {
      this.setState({
        lastCaptured: {
          x: nativeEvent.pageX,
          y: nativeEvent.pageY
        }
      });

      // defining diffSeed to use for animating HEX numbers
      // note: in the first iteration data is undefined
      const oldSeed = this.state.data
        ? this.state.data.seed
        : this.state.zeroSeed;
      const data = generateSeed(this.state.data);
      const seedDiff = oldSeed
        .map((item, index) => (item !== data.seed[index] ? index : null))
        .filter(item => item !== null);
      this.setState({ data, seedDiff });
    } else if (
      this.state.data &&
      this.state.data.percentage >= 100 &&
      !this.state.passphrase
    ) {
      const phrase = generatePassphrase(this.state.data);
      this.setState({
        passphrase: phrase
      });
      this.props.setPassphraseFromGenerator(phrase);
    }
  }

  percentage() {
    const number = this.state.data
      ? parseFloat(this.state.data.percentage + '').toFixed(1)
      : 0;
    return number >= 100 ? 100 : number
  }

  render() {
    const isTouch = this.isTouchDevice(this.props.agent);
    return (
      <div>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            {isTouch
              ? <div>
                  <p className="title-seed-message">
                    Enter text below to generate random bytes
                  </p>
                  <input
                    className="input message-input"
                    type="text"
                    placeholder="Enter random text"
                    onChange={event =>
                      this.seedGeneratorBoundToThis(event.target.value)}
                  />
                </div>
              : <p className="title-seed-message">
                Move your mouse to create some entropy... <br/>This is like a magic process to make sure your wallet is generated randomly.
                </p>}
          </div>
        </div>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="column is-8 is-offset-2">
              Progress:{" "}
              {this.percentage()}{" "}
              %
              <progress className="progress is-success" value={this.percentage()} max="100">75%</progress>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PassphraseGenerator;
