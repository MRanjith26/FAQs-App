// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isAnsShown: false}

  ToggleIcon = () => {
    this.setState(prevState => ({isAnsShown: !prevState.isAnsShown}))
  }

  render() {
    const {isAnsShown} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const iconCLick = isAnsShown
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const iconAlt = isAnsShown ? 'minus' : 'plus'
    return (
      <li className="faq-item">
        <div className="ques-card">
          <h1 className="faq-question">{questionText}</h1>
          <button className="btn" type="button" onClick={this.ToggleIcon}>
            <img src={iconCLick} alt={iconAlt} className="icon" />
          </button>
        </div>
        {isAnsShown && <p className="faq-ans">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
