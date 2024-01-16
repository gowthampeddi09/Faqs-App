// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="faqs-bg-container">
      <div className="faqs-card">
        <h1 className="card-heading">FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqItem={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
