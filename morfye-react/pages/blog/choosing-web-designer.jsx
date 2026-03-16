import Link from 'next/link'
import ServicePageLayout from '../../components/ServicePageLayout'

const navLinks = [
  { id: 'what-they-do', label: 'What They Do' },
  { id: 'freelancer-vs-agency', label: 'Freelancer vs Agency' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'questions', label: 'Questions to Ask' },
]

export default function ChoosingWebDesigner() {
  return (
    <ServicePageLayout
      title="How to Choose the Right Web Designer for Your Small Business | Morfye"
      description="Not sure how to choose a web designer for your small business? Learn what to look for, what questions to ask, and how to avoid common mistakes."
      keywords="web designer, website designer, web design company, professional web design, web design services, web development services, brand identity, logo design, custom web design, web designers Belgium"
      slug="blog/choosing-web-designer"
      navLinks={navLinks}
    >
      <article className="blog-article">
        <div className="blog-article-inner">

          <header className="blog-article-header">
            <div className="blog-tag">Web Design</div>
            <h1>How to Choose the Right Web Designer for Your Small Business</h1>
            <p className="blog-meta">5 min read &middot; Web Design &middot; Morfye</p>
            <p className="blog-intro">
              Getting your own website built is one of the best investments a small business can make.
              But with hundreds of web designers, website designers, and design companies out there,
              how do you know who to trust? This guide walks you through what to look for — and what to avoid.
            </p>
          </header>

          <section id="what-they-do">
            <h2>What Does a Web Designer Actually Do?</h2>
            <p>
              A web designer is responsible for the visual appearance, layout, and user experience of your website.
              A web developer handles the technical side — the code that makes everything work. Many professionals
              do both, which is what we call <strong>web design and development</strong>. When you hire a web design company,
              you typically get a full design team covering both disciplines.
            </p>
            <p>
              Good professional web design is not just about making something that looks nice. It means
              creating a website that loads fast, works on mobile, is easy to navigate, reflects your brand identity,
              and converts visitors into clients. The best web design combines aesthetics with strategy.
            </p>
          </section>

          <section id="freelancer-vs-agency">
            <h2>Freelancer vs Design Agency — Which Is Better?</h2>
            <p>
              Both have their place. A freelance web designer is usually cheaper and more flexible.
              A web design agency brings a full design team — designers, developers, copywriters, and SEO specialists —
              under one roof.
            </p>
            <p>
              For small businesses, we recommend working with a small web design company or boutique agency.
              You get the personal attention of a freelancer with the range of web design services an agency offers:
              professional website design, brand identity, logo design, hosting, SEO, and ongoing support.
              Design projects handled by a team tend to be more consistent and better thought through.
            </p>
            <p>
              Watch out for very cheap offers. Some design companies outsource your project overseas to cut costs,
              resulting in generic website designs that do not reflect your brand. Always ask who will actually be doing the work.
            </p>
          </section>

          <section id="portfolio">
            <h2>What to Look for in a Web Design Portfolio</h2>
            <p>
              Before you hire anyone, review their portfolio carefully. Look at their previous design projects and ask:
            </p>
            <ul>
              <li>Do the website designs look modern and clean, or outdated?</li>
              <li>Are the sites mobile-friendly and fast?</li>
              <li>Do the designs vary, or does every site look the same?</li>
              <li>Have they worked with businesses in your industry or of similar size?</li>
              <li>Do they include web development services alongside design?</li>
            </ul>
            <p>
              The best web design portfolios show real results — not just pretty screenshots. Ask if those websites
              still perform well on Google. A good web designer thinks about SEO and performance, not just visual design.
            </p>
          </section>

          <section id="questions">
            <h2>Questions to Ask Before You Sign Anything</h2>
            <p>
              Whether you are looking to build a new website, make your website better, or do a full redesign,
              these are the questions every small business should ask a website designer:
            </p>
            <ul>
              <li><strong>Who owns the website after launch?</strong> Your own website should belong to you.</li>
              <li><strong>Is the site built on a CMS?</strong> A content management system lets you update your own website without a developer.</li>
              <li><strong>Is SEO included?</strong> A professionally built site should be search-engine ready from day one.</li>
              <li><strong>Do you offer hosting and maintenance?</strong> Web development services should not stop at launch.</li>
              <li><strong>What does the design process look like?</strong> You should see mockups before anything is built.</li>
              <li><strong>Can you help with branding?</strong> If you do not have a logo or brand identity yet, find out if they offer logo design.</li>
            </ul>
            <p>
              At Morfye, we are a web design company based in Brussels, Belgium. We offer end-to-end
              professional web design services — from brand identity and logo design to web development, SEO, and hosting.
              Every project is custom-built for your business. No templates. No outsourcing.
            </p>
          </section>

          <div className="blog-cta">
            <h2>Ready to build your own website?</h2>
            <p>Tell us about your project and we will get back to you within 24 hours.</p>
            <Link href="/#contact" className="geo-cta">Get a Free Quote</Link>
          </div>

        </div>
      </article>
    </ServicePageLayout>
  )
}
