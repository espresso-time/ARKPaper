import React, { Component } from "react";
import EasyTransition from "react-easy-transition";
import PropTypes from "prop-types";

import {withRouter} from 'react-router-dom';

const AnimationsWrapper = withRouter(props => <AnimationsWrapperComponent {...props}/>);

class AnimationsWrapperComponent extends Component {
  render() {
  console.log(this.props);
    return (
      <EasyTransition
        path={this.props.location}
        initialStyle={{ opacity: 0 }}
        transition="opacity 0.5s ease-in"
        finalStyle={{ opacity: 1 }}
      >
        {this.props.children}
      </EasyTransition>
    );
  }
}

export default AnimationsWrapper;

AnimationsWrapper.contextTypes = {
  router: PropTypes.object.isRequired
};
