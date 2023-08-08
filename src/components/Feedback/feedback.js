import { Statistic } from './Statistic/statistic';
import { FeedbackWrapper, ButtonFeedback, LastChild, Title } from './feedback.styled'

import { Component } from "react";
export class Feedback extends Component {


countTotalFeedback (good, neutral, bad) {
const totalFeedback = good + neutral + bad;
return totalFeedback;

}
    
countPositiveFeedbackPercentage(good, neutral, bad) {
const totalFeedback = this.countTotalFeedback(good, neutral, bad);
const positiveFeedback = (good / totalFeedback) * 100;
return positiveFeedback;
}

render() {
const {good, neutral, bad} = this.props.feedback;
return (
    <FeedbackWrapper>
    <Title>Please leave feedback</Title>
    <ButtonFeedback onClick={() => this.props.updateFeedback('good')}>Good</ButtonFeedback>
    <ButtonFeedback onClick={() => this.props.updateFeedback('neutral')}>Neutral</ButtonFeedback>
    <LastChild onClick={() => this.props.updateFeedback('bad')}>Bad</LastChild>  

    <Statistic feedback={this.props.feedback} countTotalFeedback={() => this.countTotalFeedback(good, neutral, bad)} countPositiveFeedbackPercentage={() => this.countPositiveFeedbackPercentage(good, neutral, bad)}/>
    </FeedbackWrapper>
)
}
}