// Модули
import React, { Component } from 'react';

// Компоненты
import SectionTitle from './components/SectionTitle';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

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

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const positivePercentage = (this.state.good * 100) / total;
    return positivePercentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = Math.round(
      this.countPositiveFeedbackPercentage(total),
    );

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
          total={total}
          positivePercentage={positivePercentage}
        />
      </SectionTitle>
    );
  }
}

export default App;
