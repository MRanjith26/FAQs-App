// Write your code here.
import './index.css'
import {Component} from 'react'
import FaqItem from '../FaqItem/index'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faqs-card-container">
          <h1 className="container-heading">FAQs</h1>
          <ul className="card-container">
            {faqsList.map(eachFaq => (
              <FaqItem faqDetails={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
