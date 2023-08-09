// import { Component } from "react";
import { StatisticList } from './statistic.styled'

export const FeedbackStatistic = ({good, neutral, bad }) => (
    <ul>
    <StatisticList>Good: {good}</StatisticList>
    <StatisticList>Neutral: {neutral}</StatisticList>
    <StatisticList>Bad: {bad}</StatisticList>
    <StatisticList>Total: {good + neutral + bad}</StatisticList>
    <StatisticList>Positive feedback: {Math.round((good / (good + neutral + bad)) * 100) || 0}%</StatisticList>
</ul> 
)



