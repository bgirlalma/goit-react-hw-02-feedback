import { FeedbackWrapper, ButtonFeedback, LastChild, Title, StatisticList } from './feedback.styled'

import { Component } from "react";
export class Feedback extends Component {
   
    render() {
        return (
        <FeedbackWrapper>
          <ButtonFeedback onClick={() => this.props.updateFeedback('good')}>Good</ButtonFeedback>
          <ButtonFeedback onClick={() => this.props.updateFeedback('neutral')}>Neutral</ButtonFeedback>
          <LastChild onClick={() => this.props.updateFeedback('bad')}>Bad</LastChild>  

          <Title>Statistic</Title>
    <ul>
       <StatisticList>Good: {this.props.feedback.good}</StatisticList>
       <StatisticList>Neutral: {this.props.feedback.neutral}</StatisticList>
       <StatisticList>Bad: {this.props.feedback.bad}</StatisticList>
    </ul> 

        </FeedbackWrapper>
      )
      }
}