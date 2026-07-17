import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Privacy Policy — Creator Flow',
  description: 'Privacy Policy for Creator Flow. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
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
          <Image src="/logo.svg" alt="Creator Flow" width={34} height={34} style={{ borderRadius: 10 }} />
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
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 56 }}>
          Last updated: May 2025
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>

          <Section title="1. Introduction">
            <p>Creator Flow ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and website (collectively, the "Service").</p>
            <p style={{ marginTop: 12 }}>By using Creator Flow, you agree to the collection and use of information in accordance with this policy.</p>
          </Section>

          <Section title="2. Information We Collect">
            <SubHeading>Account Information</SubHeading>
            <p>When you create an account, we collect your email address and any profile details you provide (such as your name or username).</p>

            <SubHeading>Social Media Account Data</SubHeading>
            <p>To enable publishing features, we access your connected social media accounts (Instagram, TikTok). This includes:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li>OAuth access tokens (stored securely, never exposed to other users)</li>
              <li>Your public username or handle on each platform</li>
              <li>Basic account information required by the platform's API</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not access your private messages, follower lists, or any data beyond what is required to publish content on your behalf.</p>

            <SubHeading>Content You Create</SubHeading>
            <p>Posts, captions, and scheduled content that you create within the app are stored to enable scheduling and publishing features.</p>

            <SubHeading>Usage Data</SubHeading>
            <p>We collect anonymised analytics about how you use the app (e.g., features used, screens visited) to improve the product. This data is stored locally on your device and is not linked to personally identifiable information.</p>

            <SubHeading>Device Information</SubHeading>
            <p>We may collect basic device information (operating system version, app version) for debugging and support purposes.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>To provide and operate the Service, including scheduling and publishing your content</li>
              <li>To authenticate your identity and maintain your account</li>
              <li>To connect to third-party platforms (Instagram, TikTok) on your behalf</li>
              <li>To send important service updates, security alerts, and support messages</li>
              <li>To improve and develop new features based on usage patterns</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p style={{ marginTop: 12 }}>We do not sell your personal information to third parties. We do not use your data for advertising purposes.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>Creator Flow integrates with the following third-party platforms to provide its core functionality:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li><strong>Meta (Instagram)</strong> — content publishing via the Instagram Graph API</li>
              <li><strong>TikTok</strong> — content publishing via the TikTok for Developers API</li>
              <li><strong>Supabase</strong> — secure backend infrastructure and data storage</li>
            </ul>
            <p style={{ marginTop: 12 }}>Each of these services has its own privacy policy and terms of service. We encourage you to review them. We are not responsible for the privacy practices of these third parties.</p>
          </Section>

          <Section title="5. Data Storage and Security">
            <p>Your data is stored securely using Supabase infrastructure, which uses industry-standard encryption at rest and in transit.</p>
            <p style={{ marginTop: 12 }}>Access tokens for social media platforms are stored with restricted access. Only the server-side functions that perform publishing operations can read these tokens — they are never exposed to other users or transmitted to your device after initial setup.</p>
            <p style={{ marginTop: 12 }}>While we implement strong security measures, no system is 100% secure. We cannot guarantee absolute security of your data.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain your data for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it by law.</p>
            <p style={{ marginTop: 12 }}>You can request deletion of your data at any time by contacting us at <a href="mailto:rovative@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>rovative@gmail.com</a>.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your location, you may have the following rights:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate data</li>
              <li><strong>Deletion:</strong> Request that we delete your personal data</li>
              <li><strong>Portability:</strong> Request a machine-readable export of your data</li>
              <li><strong>Objection:</strong> Object to certain types of data processing</li>
            </ul>
            <p style={{ marginTop: 12 }}>To exercise any of these rights, contact us at <a href="mailto:rovative@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>rovative@gmail.com</a>.</p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>Creator Flow is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us and we will take steps to remove that information.</p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice in the app or by email. Continued use of the Service after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
          <Image src="/logo.svg" alt="Creator Flow" width={26} height={26} style={{ borderRadius: 7 }} />
          <span style={{ fontWeight: 700, fontSize: 14 }}>Creator Flow</span>
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Link href="/privacy" style={{ color: 'var(--primary)', fontSize: 13, textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: 13, textDecoration: 'none' }}>Terms of Service</Link>
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontWeight: 700, color: 'var(--text)', marginTop: 20, marginBottom: 8, fontSize: 15 }}>{children}</p>
  );
}
