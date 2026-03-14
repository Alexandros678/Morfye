export default function FaqItem({ question, answer, index = 0 }) {
  return (
    <details className="faq-item-v2">
      <summary className="faq-question">
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true" />
      </summary>
      <div className="faq-answer-inner">
        <p>{answer}</p>
      </div>
    </details>
  )
}
