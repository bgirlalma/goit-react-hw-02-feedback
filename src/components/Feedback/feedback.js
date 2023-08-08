import { Component } from "react";

export class Feedback extends Component {
   
    render() {
        return (
        <div>
          <button onClick={() => this.props.updateFeedback('good')}>Good</button>
          <button onClick={() => this.props.updateFeedback('neutral')}>Neutral</button>
          <button onClick={() => this.props.updateFeedback('bad')}>Bad</button>  

         <h2>Statistic</h2>
         <ul>
            <li>Good: {this.props.feedback.good}</li>
            <li>Neutral: {this.props.feedback.neutral}</li>
            <li>Bad: {this.props.feedback.bad}</li>
         </ul>
        </div>
      )
      }
}