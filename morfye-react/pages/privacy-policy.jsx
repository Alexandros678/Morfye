import ServicePageLayout from '../components/ServicePageLayout'

export default function PrivacyPolicy() {
  return (
    <ServicePageLayout
      title="Privacy Policy — Morfye Web Design Agency"
      description="Read the Morfye privacy policy. Learn how we collect, use, and protect your personal data in compliance with GDPR and Belgian law."
      slug="privacy-policy"
    >
      <section className="privacy-page">
        <div className="privacy-inner">
          <h1>Privacy Policy</h1>
          <p className="privacy-updated">Last updated: March 2026</p>

          <h2>1. Who we are</h2>
          <p>Morfye is a web design and digital marketing agency based in Belgium. We build professional websites, SEO strategies, and online marketing solutions for small businesses. You can contact us at <a href="mailto:hello@morfye.com">hello@morfye.com</a>.</p>

          <h2>2. What data we collect</h2>
          <p>We may collect the following personal data when you use our website or contact us:</p>
          <ul>
            <li>Name and email address (via contact form)</li>
            <li>Usage data and analytics (via Google Analytics, only with your consent)</li>
            <li>IP address and browser information (collected automatically)</li>
          </ul>

          <h2>3. How we use your data</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Respond to your enquiries and provide our services</li>
            <li>Improve our website and user experience</li>
            <li>Analyse site traffic (only with cookie consent)</li>
          </ul>
          <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

          <h2>4. Cookies</h2>
          <p>Our website uses cookies to enhance your experience and analyse traffic. We use Google Analytics only after you have given explicit consent via our cookie banner. You can withdraw consent at any time by clearing your browser cookies.</p>

          <h2>5. Your rights (GDPR)</h2>
          <p>Under the General Data Protection Regulation (GDPR), you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:hello@morfye.com">hello@morfye.com</a>.</p>

          <h2>6. Data retention</h2>
          <p>We retain contact form submissions for a maximum of 12 months. Analytics data is retained as per Google Analytics default settings (26 months).</p>

          <h2>7. Security</h2>
          <p>We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse.</p>

          <h2>8. Changes to this policy</h2>
          <p>We may update this privacy policy from time to time. The latest version is always available on this page.</p>

          <h2>9. Contact</h2>
          <p>For any privacy-related questions, contact us at <a href="mailto:hello@morfye.com">hello@morfye.com</a>.</p>
        </div>
      </section>
    </ServicePageLayout>
  )
}
