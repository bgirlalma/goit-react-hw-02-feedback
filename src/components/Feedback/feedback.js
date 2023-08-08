import { Component } from "react";

export class Feedback extends Component {
    handlex = type => {
        this.setState(prevState => {
          return {
            [type]: prevState[type] + 1,
          }
        })
      };
    render() {
        return (
        <div>
          <button onClick={() => this.handlex('good')}>Good</button>
          <button onClick={() => this.handlex('neutral')}>Neutral</button>
          <button onClick={() => this.handlex('bad')}>Bad</button>  
        </div>
      )
      }
}