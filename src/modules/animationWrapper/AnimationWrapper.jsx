import React  from "react";
import EasyTransition from "react-easy-transition";
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';

const AnimationsWrapper = withRouter(props => <AnimationsWrapperComponent {...props}/>);

function AnimationsWrapperComponent(props) {
  return (
    <EasyTransition
      path={props.location}
      initialStyle={{ opacity: 0 }}
      transition="opacity 0.5s ease-in"
      finalStyle={{ opacity: 1 }}
    >
      {props.children}
    </EasyTransition>
  );
}

export default AnimationsWrapper;

AnimationsWrapper.contextTypes = {
  router: PropTypes.object.isRequired
};
