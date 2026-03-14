const faqs = [
  {
    question: 'How much does a professional website cost for a small business in Belgium?',
    answer: 'Every project is different, but a professional website for a small business in Belgium typically starts from a few hundred euros. The price depends on the number of web pages, features like booking systems or an online store, and the level of web development and branding required. As a web design company, we always provide a clear quote before starting — no hidden fees.'
  },
  {
    question: 'How long does it take to build a new website?',
    answer: 'A standard small business website with responsive design takes 2 to 4 weeks from start to launch and get your business up and running online. More complex projects with e-commerce, a content management system (CMS), or custom landing pages can take 4 to 8 weeks. We keep you involved throughout the entire design process.'
  },
  {
    question: 'What makes a good web design for a small business?',
    answer: 'Great professional web design combines an intuitive user experience (UX) with clear messaging and fast loading. Your website visitors should instantly understand what you offer and how to contact you. A strong mobile website is essential — more than half of users browse on smartphones. At Morfye, our design process focuses on custom web design tailored to your business needs, not generic templates. We build every site from scratch to maximize website traffic and conversions.'
  },
  {
    question: 'Can you build an ecommerce website or online store?',
    answer: 'Yes — we build custom ecommerce websites and online stores to help you sell products or services online. Whether you want to create a website on Shopify or a fully custom solution, we guide you through the decision based on your business needs and budget. Our ecommerce web design services cover the full design process from layout and branding to payments and mobile website optimization.'
  },
  {
    question: 'What is the difference between SEO and Google Ads (PPC)?',
    answer: 'SEO (Search Engine Optimization) is an internet marketing strategy that grows your organic search visibility over time — it helps potential customers find you on Google without paying per click. Google Ads (PPC or pay-per-click, formerly AdWords) is a paid marketing campaign that gives instant visibility at the top of search engines. Both are part of a strong digital marketing strategy. We offer both and advise which fits your goals.'
  },
  {
    question: 'Do you offer social media marketing or email marketing?',
    answer: 'Our core focus is web design, SEO, GEO, and online advertising — not social media account management. However, we design websites that work seamlessly alongside your social media marketing and email marketing campaigns. We also advise on content marketing strategies that drive website traffic and help grow your business. For full internet marketing support, we can connect you with trusted partners.'
  },
  {
    question: 'What is responsive web design and why does it matter?',
    answer: 'Responsive design means your website automatically adapts to any screen size — desktop, tablet, or smartphone. Every website we build is a fully responsive mobile website. This matters because more than half of website visitors browse on mobile, and search engines like Google rank mobile-friendly web pages higher in results.'
  },
  {
    question: 'Do I need web hosting and a domain name?',
    answer: 'Yes — every website needs web hosting (a server where your site lives) and a domain name (your web address, like yourbusiness.be). We offer managed web hosting plans starting from €29/month that include daily backups, SSL, and 24/7 monitoring. We can also help you register your domain name and get everything set up and running.'
  },
  {
    question: 'What is GEO and why does my business need it?',
    answer: 'GEO stands for Generative Engine Optimization. It means optimizing your business to be recommended by AI assistants like ChatGPT, Google Gemini, and Claude when people ask for recommendations. As more people use AI instead of traditional search engines, GEO is becoming essential for online marketing and web presence. Morfye is one of the first web design services agencies in Belgium to offer this.'
  },
  {
    question: 'Will my website rank on Google and attract potential customers?',
    answer: 'Every website we build is search-engine optimized from day one — proper structure, fast loading, clean code, and relevant content. We also offer dedicated SEO and inbound marketing services to actively grow your organic search rankings, reach your target audience, and bring potential customers to your business online consistently.'
  },
  {
    question: 'What happens after my website is launched?',
    answer: 'We offer hosting and maintenance plans from €29/month including daily backups, security monitoring, SSL certificates, and priority support. Your web presence does not stop at launch — we help you grow it with SEO, online marketing campaigns, and content updates so you can keep building your business online. You can also choose to manage the site yourself with a content management system.'
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
