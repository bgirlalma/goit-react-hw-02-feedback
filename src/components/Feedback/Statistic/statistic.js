import { Component } from "react";
import { TitleStatistic, StatisticList } from './statistic.styled'


export class Statistic extends Component {
render() {
    const totalFeedback = this.props.countTotalFeedback();
    const positiveFeedbackPercentage = this.props.countPositiveFeedbackPercentage();
return (
<div>
    <TitleStatistic>Statistic</TitleStatistic>
<ul>
    <StatisticList>Good: {this.props.feedback.good}</StatisticList>
    <StatisticList>Neutral: {this.props.feedback.neutral}</StatisticList>
    <StatisticList>Bad: {this.props.feedback.bad}</StatisticList>
    <StatisticList>Total: {totalFeedback}</StatisticList>
    <StatisticList>Positive feedback: {positiveFeedbackPercentage}</StatisticList>
</ul> 

</div>
)
}
}