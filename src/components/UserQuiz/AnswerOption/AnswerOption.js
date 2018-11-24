import React from 'react';
import PropTypes from 'prop-types';
import classes from "./AnswerOption.css";

function AnswerOption(props) {
  return (
    <li className={classes.answerOption}>
      <input
        type="radio"
        className={classes.radioCustomButton}
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className={classes.radioCustomLabel} htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
