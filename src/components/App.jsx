import { Component } from "react";
import { Feedback } from "./Feedback/feedback";
import { GlobalStyle } from "./globalStyled";


export class  App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  updateFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      }
    })
  };


render() {
  return (
  <div>
  <Feedback updateFeedback={this.updateFeedback} feedback={this.state}/>

  <GlobalStyle/>
  </div>
)
}
};
