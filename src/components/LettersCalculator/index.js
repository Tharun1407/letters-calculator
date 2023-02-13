import React from 'react'
import './index.css'

class LettersCalculator extends React.Component {
  state = {count: 0}

  clickHandler = e => {
    const word = e.target.value
    this.setState({count: word.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="rowBox">
          <div className="main-container">
            <h1 className="heading">Calculate the letters You enter</h1>
            <p className="para">Enter the Phrase</p>
            <input
              className="inputBox"
              type="text"
              placeholder="Enter The Phrase"
              onChange={this.clickHandler}
            />
            <h2 className="heading1">No.of letters:{count}</h2>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
