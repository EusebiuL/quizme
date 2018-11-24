import React from 'react';
import PropTypes from 'prop-types';
import classes from "./Question.css";
function Question(props) {
  return <h2 className={classes.question}>{props.content}</h2>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;