import Link from 'next/link'
import ServicePageLayout from '../../components/ServicePageLayout'

const navLinks = [
  { id: 'why-redesigns-hurt', label: 'Why Redesigns Hurt SEO' },
  { id: 'before', label: 'Before You Start' },
  { id: 'during', label: 'During the Redesign' },
  { id: 'after', label: 'After Launch' },
]

export default function WebsiteRedesignSeo() {
  return (
    <ServicePageLayout
      title="How to Redesign Your Website Without Losing Google Rankings | Morfye"
      description="A website redesign can destroy your SEO if done wrong. Here's the step-by-step checklist to keep your Google rankings, organic traffic, and online presence intact."
      keywords="website redesign, responsive website, search engine optimization, SEO, web design and development, online presence, online business, usability, mobile-friendly, web development services, responsive design, ecommerce, organic search"
      slug="blog/website-redesign-seo"
      navLinks={navLinks}
    >
      <article className="blog-article">
        <div className="blog-article-inner">

          <header className="blog-article-header">
            <div className="blog-tag">SEO</div>
            <h1>How to Redesign Your Website Without Losing Your Google Rankings</h1>
            <p className="blog-meta">7 min read &middot; SEO &middot; Morfye</p>
            <p className="blog-intro">
              A website redesign is exciting — new look, better usability, modern web design and development.
              But done without care, a redesign can wipe out years of SEO work in a matter of days.
              Here is how to make your website better without paying the price in lost traffic.
            </p>
          </header>

          <section id="why-redesigns-hurt">
            <h2>Why Website Redesigns Often Hurt SEO</h2>
            <p>
              When you redesign your website, you often change URLs, remove pages, restructure content,
              or switch to a completely different platform. Each of these changes signals something new to Google —
              and Google does not like sudden, unexplained changes to a site it already knows.
            </p>
            <p>
              Common mistakes that destroy online business search rankings after a redesign:
            </p>
            <ul>
              <li>Changing page URLs without setting up redirects</li>
              <li>Removing text content that Google ranked you for</li>
              <li>Switching to a new platform (e.g. from WordPress to custom) without migrating SEO settings</li>
              <li>Launching a non-mobile-friendly or slow site</li>
              <li>Forgetting to make the new site indexed by Google search</li>
              <li>Removing internal links that connected your pages</li>
            </ul>
            <p>
              All of these break the web presence signals Google has built up about your site over time.
            </p>
          </section>

          <section id="before">
            <h2>Before You Start the Redesign</h2>
            <p>
              Before touching anything, do a full audit of your existing site. Document:
            </p>
            <ul>
              <li><strong>All existing URLs</strong> — every page that is currently indexed</li>
              <li><strong>Your top-performing pages</strong> — check Google Search Console to see which pages bring the most traffic</li>
              <li><strong>All meta titles and meta descriptions</strong> — these need to carry over</li>
              <li><strong>Your current keyword rankings</strong> — take a screenshot or export from a tool so you have a baseline to compare after</li>
              <li><strong>Your backlinks</strong> — external sites linking to you. If their links break, you lose valuable authority</li>
            </ul>
            <p>
              This audit takes time but it is the foundation of a safe redesign. If you are working with a
              web design and development agency like Morfye, we handle this audit as part of our process.
            </p>
          </section>

          <section id="during">
            <h2>During the Redesign</h2>
            <p>
              Keep the new site in a staging environment (a private preview) until it is fully ready.
              Never build your redesign directly on the live URL.
            </p>
            <p>Key rules to follow during web development:</p>
            <ul>
              <li>
                <strong>Keep the same URL structure where possible.</strong> If you must change URLs,
                set up 301 redirects from every old URL to the new one. This passes SEO authority to the new page.
              </li>
              <li>
                <strong>Preserve all text content.</strong> If a page ranked on Google, it ranked because of its content.
                Do not remove or shorten text just because the new design looks cleaner.
              </li>
              <li>
                <strong>Build a fully responsive website.</strong> Google uses mobile-first indexing — your mobile website
                version is what Google primarily crawls and ranks.
              </li>
              <li>
                <strong>Maintain or improve page speed.</strong> A slower site after a redesign will drop in rankings.
                Modern web development practices (optimized images, clean code, minimal scripts) keep things fast.
              </li>
              <li>
                <strong>Copy all meta titles, descriptions, and structured data</strong> to the new pages.
              </li>
              <li>
                <strong>Test usability thoroughly.</strong> Poor usability (confusing navigation, broken buttons,
                slow interactions) increases bounce rate, which signals to Google that users did not find what they needed.
              </li>
            </ul>
          </section>

          <section id="after">
            <h2>After Launch — What to Do Immediately</h2>
            <p>
              Once your redesigned website is live, do not disappear. The first few weeks are critical:
            </p>
            <ul>
              <li>
                <strong>Submit your updated sitemap</strong> to Google Search Console so Google crawls
                the new structure immediately.
              </li>
              <li>
                <strong>Check for broken links and redirect errors.</strong> Any 404 page (page not found)
                that was previously indexed will lose its ranking.
              </li>
              <li>
                <strong>Monitor your rankings weekly</strong> for the first month. A temporary dip of
                5-10% is normal. A drop of 50%+ means something went wrong and you need to investigate fast.
              </li>
              <li>
                <strong>Check that all redirects are working.</strong> Use a tool like Screaming Frog
                or simply test your most important old URLs manually.
              </li>
              <li>
                <strong>If you moved to a new platform</strong> (e.g. from Joomla to a custom build,
                or from an old HTML site to WordPress), verify that Google has re-indexed the new version
                within 2 to 4 weeks.
              </li>
            </ul>
            <p>
              A professionally handled redesign — whether for a simple business site, a responsive ecommerce website,
              or a complex online store — should maintain or improve your online presence, not damage it.
              Web development services that include SEO migration are the responsible standard.
            </p>
          </section>

          <div className="blog-cta">
            <h2>Planning a redesign for your online business?</h2>
            <p>We handle the full migration — design, development, and SEO — so you do not lose what you built.</p>
            <Link href="/#contact" className="geo-cta">Let's Talk</Link>
          </div>

        </div>
      </article>
    </ServicePageLayout>
  )
}
