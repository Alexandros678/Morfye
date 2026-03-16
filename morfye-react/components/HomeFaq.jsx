const faqs = [
  {
    question: 'How much does a professional website cost for a small business in Belgium?',
    answer: 'Every project is different, but a professional website typically starts from a few hundred euros. The price depends on the number of pages, features like booking systems or e-commerce, and the level of web development required. We always provide a clear quote before starting — no hidden fees.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard website takes 2 to 4 weeks from start to launch. More complex projects with e-commerce, a content management system (CMS), or custom features can take 4 to 8 weeks. We keep you updated throughout the entire process.'
  },
  {
    question: 'Can you build an e-commerce website or online store?',
    answer: 'Yes — we build custom e-commerce websites for businesses that want to sell online. Whether you need a simple shop or a full product catalogue with secure payments, we handle web development from start to finish — including Shopify and custom solutions.'
  },
  {
    question: 'What is the difference between SEO and Google Ads?',
    answer: 'SEO grows your organic search visibility over time — it helps potential customers find you on Google without paying per click. Google Ads (pay-per-click / PPC) gives you instant visibility for a budget. Both are valid strategies and we offer both. We will advise which fits your goals best.'
  },
  {
    question: 'Do I need web hosting and a domain name?',
    answer: 'Yes — every website needs web hosting and a domain name. We offer managed hosting plans from €29/month including daily backups, SSL, and 24/7 monitoring. We can also help you register your domain and get everything set up.'
  },
  {
    question: 'What is GEO and why should my business care?',
    answer: 'GEO stands for Generative Engine Optimization — it means optimizing your business to be recommended by AI assistants like ChatGPT, Google Gemini, and Claude. As more people search through AI instead of Google, GEO is becoming as important as SEO. Morfye is one of the first agencies in Belgium offering this service.'
  }
]

export default function HomeFaq() {
  return (
    <section className="home-faq" id="faq">
      <div className="home-faq-inner">
        <div className="home-faq-header">
          <div className="wwa-label">FAQ</div>
          <h2>Common Questions</h2>
          <p>Everything small businesses in Belgium want to know before getting started.</p>
        </div>
        <div className="home-faq-list">
          {faqs.map((faq, i) => (
            <details key={i} className="home-faq-item">
              <summary className="home-faq-question">
                <span>{faq.question}</span>
                <span className="home-faq-icon" aria-hidden="true" />
              </summary>
              <p className="home-faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
