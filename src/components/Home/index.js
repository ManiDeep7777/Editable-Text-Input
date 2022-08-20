import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {
    isClicked: false,
    userInput: '',
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Edit' : 'Save'
  }

  ChangeButtonState = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const buttonText = this.getButtonText()
    const {isClicked, userInput} = this.state
    // console.log(isClicked)
    // console.log(userInput)
    return (
      <div className="app-container">
        <div className="editContainer">
          <h1 className="heading">Editable Text Input</h1>
          <form className="inputContainer">
            {isClicked ? (
              <p className="userTextEdit">{userInput}</p>
            ) : (
              <input
                type="text"
                onChange={this.getUserInput}
                placeholder="Enter Your Text Here"
                value={userInput}
                className="inputTextContainer"
              />
            )}
            <button
              type="button"
              onClick={this.ChangeButtonState}
              className="optionButton"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home
