const faqs = [
  {
    question: 'How much does a website cost for a small business in Belgium?',
    answer: 'Every project is different, but a professional custom website for a small business in Belgium typically starts from a few hundred euros. The price depends on the number of pages, features like booking systems or e-commerce, and the level of design work required. We always provide a clear quote before starting — no hidden fees.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard small business website takes 2 to 4 weeks from start to launch. More complex projects with e-commerce or custom functionality can take 4 to 8 weeks. We work efficiently and keep you updated throughout the entire process.'
  },
  {
    question: 'What is GEO and why does my business need it?',
    answer: 'GEO stands for Generative Engine Optimization. It means optimizing your business to be recommended by AI assistants like ChatGPT, Google Gemini, and Claude when people ask for recommendations. As more people use AI instead of Google Search, GEO is becoming essential for online visibility. Morfye is one of the first agencies in Belgium to offer this service.'
  },
  {
    question: 'Do you only work with businesses in Brussels?',
    answer: 'No — we work with small businesses across all of Belgium and internationally. While we are based in Brussels, everything is done remotely so location is never a barrier. We have clients in Antwerp, Ghent, Liège, and beyond.'
  },
  {
    question: 'Will my website rank on Google?',
    answer: 'Every website we build follows SEO best practices from day one — proper structure, fast loading, clean code, and relevant content. We also offer dedicated SEO services if you want to actively grow your rankings with keyword targeting, link building, and monthly reporting.'
  },
  {
    question: 'What happens after my website is launched?',
    answer: 'We offer hosting and maintenance plans starting from €29/month that include daily backups, security monitoring, SSL certificates, and priority support. You can also choose to manage the site yourself — we hand over everything cleanly. We are here for the long term, not just the launch.'
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
            <div key={i} className="home-faq-item">
              <h3 className="home-faq-question">{faq.question}</h3>
              <p className="home-faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
