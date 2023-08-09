import React, { Component } from 'react';
import { FeedbackOption } from './Feedback/feedback';
import { GlobalStyle } from './globalStyled';
import { Section } from './Feedback/Section/section';
import { FeedbackStatistic } from './Feedback/Statistic/statistic';
import { Notification } from './Feedback/Notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : (good / total) * 100;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOption
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.updateFeedback}
            feedback={this.state}
          /> 
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback!" />
          ) : (
           <FeedbackStatistic  good={good}
           neutral={neutral}
           bad={bad}
           total={total}
           positivePercentage={positivePercentage}/>
          )}
        </Section>


        <GlobalStyle />
      </div>
    );
  }
}
