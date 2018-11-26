import React, { Component } from 'react';
import quizQuestions from '../api/quizQuestions';
import Quiz from '../Quiz/Quiz';
import Result from '../Result/Result';
import logo from '../../../logo.svg';
import classes from "./QuizBuilder.css";
import axios from 'axios';

class QuizBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [{}],
      questionDtoOutList: [{
        sentence: '',
        options: [{
          id:0,
          opt: ''
        }],
      }],
      answer: '',
      answersCount: {
        Nintendo: 0,
        Microsoft: 0,
        Sony: 0
      },
      answeredQuestions:[{
        questions:{
          question: '',
          answer: ''
        },
      }],
      result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    axios.get(
      "http://108fb526.ngrok.io/quiz/1",
    {
      headers: { 'Authorization': "Bearer " + localStorage.getItem("Authorization")}
    }
  ).then(res => {
    console.log(res.data.questionDtoOutList[0].options);

    this.setState({
      questionDtoOutList: res.data.questionDtoOutList,
      question: res.data.questionDtoOutList[this.state.counter].sentence,
      answerOptions: res.data.questionDtoOutList[this.state.counter].options
    })
  }
  );

    
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    console.log(this.state.answerOptions);

    if (this.state.questionId < this.state.questionDtoOutList.length + 2) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const previousQuestion = this.state.questionDtoOutList[this.state.counter].sentence;
    const previousAnswer = answer;
    const questionObj = Object.assign({}, {question:{question:previousQuestion, answer:previousAnswer}});
    console.log(this.state.answerOptions);
    console.log(questionObj);

    this.setState((state, props) => ({
      answeredQuestions: this.state.answeredQuestions.push(questionObj),
      answer: answer
    }));
    console.log(this.state.answerOptions);

  }

  setNextQuestion() {
  
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    const question = this.state.questionDtoOutList[this.state.counter].sentence;
    const answerOption = this.state.questionDtoOutList[this.state.counter].options.clone();

    console.log(answerOption);
    console.log(question);
    this.setState({
      counter: counter,
      questionId: questionId,
      question: question,
      answerOptions: answerOption,
      answer:''
      }
    );
    // console.log(this.state.answerOptions);

  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    console.log(this.state.answerOptions);
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.questionDtoOutList.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
       <div className="quiz">
        <div className={classes.quizHeader}>
          <img src={logo} className={classes.quizLogo} alt="logo" />
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
       </div>
    );
  }
}

export default QuizBuilder;