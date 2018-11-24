import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classes from "./Result.css";
function Result(props) {
    const assignedClasses = [];
    assignedClasses.push(classes.container);
    assignedClasses.push(classes.result);
  return (

    <CSSTransition
      className={assignedClasses.join(' ')}
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <p>Sallll tu ai {props.quizResult} </p>
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
