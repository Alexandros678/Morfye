const faqs = [
  {
    question: 'How much does a professional website cost for a small business in Belgium?',
    answer: 'Every project is different, but a professional website for a small business in Belgium typically starts from a few hundred euros. The price depends on the number of web pages, features like booking systems or e-commerce, and the level of web development and branding required. We always provide a clear quote before starting — no hidden fees.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'A standard small business website with responsive design takes 2 to 4 weeks from start to launch. More complex projects with e-commerce, a content management system (CMS), or custom landing pages can take 4 to 8 weeks. We keep you updated throughout the entire process.'
  },
  {
    question: 'What is the difference between SEO and Google Ads (PPC)?',
    answer: 'SEO (Search Engine Optimization) grows your organic search visibility over time — it helps potential customers find you on Google without paying per click. Google Ads (also called PPC or pay-per-click, formerly AdWords) gives you instant visibility by placing your business at the top of search engines for a budget. Both are part of a strong digital marketing strategy. We offer both services and can advise which fits your goals and budget.'
  },
  {
    question: 'Do you build e-commerce websites?',
    answer: 'Yes — we build custom e-commerce websites for businesses that want to sell online. Whether you need a simple online shop or a full product catalogue with secure payments, we handle the web development from start to finish. We focus on conversion-driven design so your online business turns visitors into paying customers.'
  },
  {
    question: 'What is responsive web design and why does it matter?',
    answer: 'Responsive design means your website automatically adapts to any screen size — desktop, tablet, or smartphone. Every website we build is fully responsive. This matters because more than half of web traffic comes from mobile devices, and search engines like Google rank mobile-friendly web pages higher in results.'
  },
  {
    question: 'Do I need web hosting and a domain name?',
    answer: 'Yes — every website needs web hosting (a server where your site lives) and a domain name (your web address, like yourbusiness.be). We offer managed web hosting plans starting from €29/month that include daily backups, SSL, and 24/7 monitoring. We can also help you register your domain name and set everything up.'
  },
  {
    question: 'What is GEO and why does my business need it?',
    answer: 'GEO stands for Generative Engine Optimization. It means optimizing your business to be recommended by AI assistants like ChatGPT, Google Gemini, and Claude when people ask for recommendations. As more people use AI instead of traditional search engines, GEO is becoming essential for online marketing and web presence. Morfye is one of the first agencies in Belgium to offer this service.'
  },
  {
    question: 'Do you only work with businesses in Brussels?',
    answer: 'No — we work with small businesses and web designers looking for a development partner across all of Belgium and internationally. While we are based in Brussels, everything is done remotely so location is never a barrier. We have clients in Antwerp, Ghent, Liège, and beyond.'
  },
  {
    question: 'Will my website rank on Google and attract potential customers?',
    answer: 'Every website we build is search-engine optimized from day one — proper structure, fast loading, clean code, and relevant content targeting your audience. We also offer dedicated SEO and inbound marketing services to actively grow your organic search rankings, reach your target audience, and bring in potential customers consistently over time.'
  },
  {
    question: 'What happens after my website is launched?',
    answer: 'We offer hosting and maintenance plans from €29/month including daily backups, security monitoring, SSL certificates, and priority support. Your web presence does not stop at launch — we help you grow it with SEO, online marketing, and content updates. You can also choose to manage the site yourself with a content management system; we hand over everything cleanly.'
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
