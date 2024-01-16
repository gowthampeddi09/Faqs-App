// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isPlusIconClicked: false}

  toggleIcon = () => {
    this.setState(prevState => {
      const {isPlusIconClicked} = prevState
      return {isPlusIconClicked: !isPlusIconClicked}
    })
  }

  render() {
    const {isPlusIconClicked} = this.state
    const {faqItem} = this.props
    const {questionText, answerText} = faqItem
    return (
      <li className="faqs-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.toggleIcon}>
            <img
              className="icon"
              src={
                isPlusIconClicked
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={isPlusIconClicked ? 'minus' : 'plus'}
            />
          </button>
        </div>
        {isPlusIconClicked && (
          <div className="answer-container">
            <hr className="hr-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
