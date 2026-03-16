import Link from 'next/link'

const articles = [
  {
    tag: 'Web Design',
    title: 'How to Choose the Right Web Designer for Your Small Business',
    excerpt: 'Freelancer or agency? What to look for in a portfolio and the questions to ask before you sign anything.',
    href: '/blog/choosing-web-designer',
  },
  {
    tag: 'Platforms',
    title: 'WordPress, Shopify or Custom Build — Which Is Right for You?',
    excerpt: 'An honest comparison of every major platform — WordPress, Shopify, Joomla, Squarespace, and custom builds.',
    href: '/blog/wordpress-shopify-custom',
  },
  {
    tag: 'SEO',
    title: 'How to Redesign Your Website Without Losing Your Google Rankings',
    excerpt: 'A redesign can destroy years of SEO in days. Here is the step-by-step checklist to do it safely.',
    href: '/blog/website-redesign-seo',
  },
]

export default function BlogPreview() {
  return (
    <section className="blog-preview" id="insights">
      <div className="blog-preview-inner">
        <div className="blog-preview-header">
          <div className="wwa-label">Insights</div>
          <h2>From Our Blog</h2>
          <p>Practical guides for small businesses navigating the world of web design and digital marketing.</p>
        </div>
        <div className="blog-preview-grid">
          {articles.map((article, i) => (
            <Link href={article.href} key={i} className="blog-preview-card">
              <span className="blog-preview-tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span className="blog-preview-link">Read article →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
