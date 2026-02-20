import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/Untitled-3.png" alt="Morfye Logo" className="footer-logo" />
        <p>&copy; 2025 Morfye. All rights reserved.</p>
      </div>
      <nav className="footer-nav" aria-label="Services">
        <Link href="/website-design">Web Design</Link>
        <Link href="/seo-optimization">SEO</Link>
        <Link href="/geo-optimization">GEO</Link>
        <Link href="/hosting-maintenance">Hosting</Link>
        <Link href="/sea-campaigns">SEA</Link>
      </nav>
    </footer>
  )
}
