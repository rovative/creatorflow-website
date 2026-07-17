import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Creator Flow',
  description: 'Terms of Service for Creator Flow. Read the terms governing your use of our app and services.',
};

export default function TermsOfService() {
  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', fontFamily: 'sans-serif', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 64,
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.svg" alt="Creator Flow" width={34} height={34} style={{ borderRadius: 10 }} />
          <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: -0.3, color: 'var(--text)' }}>Creator Flow</span>
        </Link>
        <Link href="/" style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
          ← Back to home
        </Link>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '120px 24px 80px' }}>

        <div style={{
          display: 'inline-block', backgroundColor: 'rgba(34,197,94,0.1)',
          border: '1px solid rgba(34,197,94,0.25)', borderRadius: 100,
          padding: '5px 16px', marginBottom: 24,
        }}>
          <span style={{ color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>LEGAL</span>
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, letterSpacing: -2, lineHeight: 1.1, marginBottom: 12 }}>
          Terms of Service
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 56 }}>
          Last updated: May 2025
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

          <Section title="1. Acceptance of Terms">
            <p>By downloading, installing, or using Creator Flow ("the App", "the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.</p>
            <p style={{ marginTop: 12 }}>These Terms apply to all users of Creator Flow, including users of the mobile application and website at createaflow.app.</p>
          </Section>

          <Section title="2. Description of Service">
            <p>Creator Flow is a social media scheduling and management tool that allows users to:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Connect and manage their social media accounts (Instagram, TikTok, and others)</li>
              <li>Schedule and automatically publish content to connected platforms</li>
              <li>View analytics and performance data across platforms</li>
              <li>Discover trends and generate content ideas</li>
            </ul>
            <p style={{ marginTop: 12 }}>The Service is currently in early access. Features may change, be added, or removed without notice.</p>
          </Section>

          <Section title="3. Eligibility">
            <p>You must be at least 13 years of age to use Creator Flow. By using the Service, you represent and warrant that you meet this age requirement.</p>
            <p style={{ marginTop: 12 }}>You must also comply with the terms of service of any third-party platforms you connect to Creator Flow (such as Instagram and TikTok). You are responsible for ensuring your use of those platforms through our Service complies with their policies.</p>
          </Section>

          <Section title="4. User Accounts">
            <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Provide accurate and complete information when creating your account</li>
              <li>Keep your password secure and not share it with others</li>
              <li>Notify us immediately of any unauthorised use of your account</li>
              <li>Accept responsibility for all activity that occurs under your account</li>
            </ul>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to use Creator Flow to:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>Publish content that violates any applicable law or regulation</li>
              <li>Post spam, unsolicited messages, or misleading content</li>
              <li>Infringe the intellectual property rights of others</li>
              <li>Harass, threaten, or harm other individuals</li>
              <li>Attempt to gain unauthorised access to other accounts or systems</li>
              <li>Use the Service in a way that violates the terms of connected third-party platforms</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the App</li>
            </ul>
            <p style={{ marginTop: 12 }}>We reserve the right to suspend or terminate accounts that violate these guidelines.</p>
          </Section>

          <Section title="6. Content Ownership">
            <p>You retain full ownership of all content you create, upload, or publish through Creator Flow. By using the Service, you grant Creator Flow a limited, non-exclusive licence to store, process, and transmit your content solely for the purpose of providing the Service (e.g., scheduling and publishing posts on your behalf).</p>
            <p style={{ marginTop: 12 }}>We do not claim ownership of your content and will not use it for any purpose beyond operating the Service.</p>
          </Section>

          <Section title="7. Third-Party Platform Integration">
            <p>Creator Flow integrates with third-party platforms (Instagram, TikTok) using their official APIs. Your use of these integrations is also subject to the terms and policies of those platforms.</p>
            <p style={{ marginTop: 12 }}>We are not responsible for changes to third-party APIs or platform policies that may affect the functionality of Creator Flow. If a platform revokes API access or changes its terms, certain features may become unavailable without notice.</p>
          </Section>

          <Section title="8. Subscription and Pricing">
            <p>Creator Flow is currently free to use during early access. Future pricing plans may be introduced with advance notice. Any paid features will be clearly communicated before any charges are applied.</p>
            <p style={{ marginTop: 12 }}>Early access users may receive special pricing or benefits, which will be communicated separately.</p>
          </Section>

          <Section title="9. Disclaimers and Limitation of Liability">
            <p>The Service is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>The Service will be uninterrupted, error-free, or secure</li>
              <li>Scheduled posts will always be published at the exact intended time</li>
              <li>The Service will meet your specific requirements</li>
            </ul>
            <p style={{ marginTop: 12 }}>To the maximum extent permitted by law, Creator Flow and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including but not limited to missed posting deadlines, loss of followers, or account suspensions on third-party platforms.</p>
          </Section>

          <Section title="10. Termination">
            <p>You may stop using Creator Flow at any time by deleting the app and requesting account deletion via email.</p>
            <p style={{ marginTop: 12 }}>We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, if we believe you have violated these Terms or are using the Service in a way that may harm other users or third parties.</p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>We may update these Terms from time to time. Significant changes will be communicated via the app or by email. Continued use of the Service after changes are posted constitutes acceptance of the updated Terms.</p>
          </Section>

          <Section title="12. Governing Law">
            <p>These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </Section>

          <Section title="13. Contact Us">
            <p>If you have any questions about these Terms of Service, please contact us:</p>
            <div style={{
              backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 14, padding: 20, marginTop: 14,
            }}>
              <p style={{ fontWeight: 700, marginBottom: 4 }}>Creator Flow</p>
              <a href="mailto:rovative@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: 15 }}>rovative@gmail.com</a>
              <p style={{ color: 'var(--text-sub)', marginTop: 4, fontSize: 14 }}>createaflow.app</p>
            </div>
          </Section>

        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '28px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.svg" alt="Creator Flow" width={26} height={26} style={{ borderRadius: 7 }} />
          <span style={{ fontWeight: 700, fontSize: 14 }}>Creator Flow</span>
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/privacy" style={{ color: 'var(--text-muted)', fontSize: 13, textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: 'var(--primary)', fontSize: 13, textDecoration: 'none', fontWeight: 600 }}>Terms of Service</Link>
          <a href="mailto:rovative@gmail.com" style={{ color: 'var(--text-muted)', fontSize: 13, textDecoration: 'none' }}>Contact</a>
        </div>
        <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>© 2026 Creator Flow. All rights reserved.</span>
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5, marginBottom: 16, color: 'var(--text)' }}>{title}</h2>
      <div style={{ color: 'var(--text-sub)', fontSize: 15, lineHeight: 1.75 }}>{children}</div>
    </div>
  );
}
