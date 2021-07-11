// Модули
import React, { Component } from 'react';

// Компоненты
import SectionTitle from './components/SectionTitle/SectionTitle';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButtonGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onClickButtonNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onClickButtonBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  // countTotalFeedback = () => {
  //   const total = this.state.good + this.state.neutral + this.state.bad;
  // }

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;
    // const countPositiveFeedbackPercentage = (this.state.good * 100) / countTotalFeedback;

    return (
      <SectionTitle>
        <FeedbackOptions
          onClickButtonGood={this.onClickButtonGood}
          onClickButtonNeutral={this.onClickButtonNeutral}
          onClickButtonBad={this.onClickButtonBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotalFeedback}
          // positivePercentage={countPositiveFeedbackPercentage }
        />
      </SectionTitle>
    );
  }
}

// const App = () => {
//     return (
//         <FeedbackOptions />
//     );
// };

export default App;
