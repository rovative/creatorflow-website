import Link from 'next/link';
import EarlyAccessForm from '@/components/EarlyAccessForm';

// ─── Feature icons (stroke SVGs) ───────────────────────────────────────────

function IconShare() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
      <line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function IconPen() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  );
}

function IconTrending() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  );
}

// ─── Platform logos (brand SVGs) ────────────────────────────────────────────

function LogoInstagram({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#F58529"/>
          <stop offset="30%" stopColor="#DD2A7B"/>
          <stop offset="70%" stopColor="#8134AF"/>
          <stop offset="100%" stopColor="#515BD4"/>
        </linearGradient>
      </defs>
      <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function LogoTikTok({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="white" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function LogoYouTube({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#FF0000" d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  );
}

function LogoX({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="white" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    Icon: IconShare,
    title: 'Post to every platform at once',
    desc: "Schedule one post and publish it to Instagram, TikTok, and more simultaneously. No more copying captions between apps.",
  },
  {
    Icon: IconUsers,
    title: 'Multiple accounts, zero switching',
    desc: "Manage all your creator accounts in one place. Creator Flow posts on your behalf — even when you're logged out.",
  },
  {
    Icon: IconChart,
    title: 'Analytics without the hassle',
    desc: "Check how your content is performing across all platforms without switching accounts or interrupting what you're doing.",
  },
  {
    Icon: IconClock,
    title: 'Set it and forget it',
    desc: "Schedule your content weeks in advance. Creator Flow handles publishing automatically at exactly the right time.",
  },
  {
    Icon: IconPen,
    title: 'Caption assistance',
    desc: "Get AI-powered caption ideas and hooks tailored to your niche. Use them as-is or as a starting point.",
  },
  {
    Icon: IconTrending,
    title: 'Trend discovery',
    desc: "See what's trending in your niche before everyone else jumps on it. Stay ahead without endless scrolling.",
  },
];

const PLATFORMS = [
  { name: 'TikTok', Logo: LogoTikTok, status: 'Available', highlight: true },
  { name: 'Instagram', Logo: LogoInstagram, status: 'Coming soon', highlight: false },
  { name: 'YouTube', Logo: LogoYouTube, status: 'Coming soon', highlight: false },
  { name: 'X / Twitter', Logo: LogoX, status: 'Planned', highlight: false },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', fontFamily: 'sans-serif' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 64,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/logo.svg" alt="Creator Flow" width={34} height={34} style={{ borderRadius: 10 }} />
          <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: -0.3 }}>Creator Flow</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <Link href="#features" style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Features</Link>
          <Link href="#platforms" style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Platforms</Link>
          <Link href="/terms" style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Terms</Link>
          <Link href="/privacy" style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Privacy</Link>
          <a href="#signup" style={{
            backgroundColor: 'var(--primary)', color: '#fff',
            padding: '8px 20px', borderRadius: 10, fontSize: 14,
            fontWeight: 700, textDecoration: 'none',
          }}>
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '130px 24px 80px', position: 'relative',
        overflow: 'hidden', textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
          top: '0%', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
          borderRadius: 100, padding: '6px 16px', marginBottom: 36,
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            backgroundColor: 'var(--primary)', boxShadow: '0 0 8px var(--primary)',
          }} />
          <span style={{ color: 'var(--primary)', fontSize: 13, fontWeight: 700 }}>Early Access — Free for creators</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(44px, 7vw, 82px)', fontWeight: 900,
          letterSpacing: -3, lineHeight: 1.03,
          maxWidth: 820, marginBottom: 16, color: 'var(--primary)',
        }}>
          Creator Flow
        </h1>

        <p style={{
          fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 900,
          letterSpacing: -2, lineHeight: 1.1,
          maxWidth: 820, marginBottom: 28, color: 'var(--text)',
        }}>
          One app.{' '}
          <span style={{ color: 'var(--primary)' }}>Every platform.</span>{' '}
          Zero switching.
        </p>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text-sub)',
          lineHeight: 1.65, maxWidth: 540, marginBottom: 52,
        }}>
          Schedule and publish your content to TikTok, Instagram, YouTube and more — all from one place. No more jumping between apps, no more account switching.
        </p>

        <EarlyAccessForm />
        <div style={{ marginTop: 16 }}>
          <a href="#features" style={{
            color: 'var(--text-sub)', fontSize: 14, textDecoration: 'none', fontWeight: 500,
          }}>
            See features →
          </a>
        </div>

        <div style={{ display: 'flex', gap: 48, marginTop: 72, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: 'Post everywhere at once', sub: 'Multi-platform publishing' },
            { label: 'Auto-publish', sub: 'Works while you sleep' },
            { label: 'All accounts', sub: 'One dashboard' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--primary)' }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 3 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{
              display: 'inline-block', backgroundColor: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.25)', borderRadius: 100,
              padding: '5px 16px', marginBottom: 20,
            }}>
              <span style={{ color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>FEATURES</span>
            </div>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.1 }}>
              Built for creators who are{' '}
              <span style={{ color: 'var(--primary)' }}>serious about growth</span>
            </h2>
            <p style={{ color: 'var(--text-sub)', fontSize: 17, marginTop: 14, maxWidth: 480, margin: '14px auto 0' }}>
              Everything you need to stay consistent — without the friction.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
            {FEATURES.map((f) => {
              const Icon = f.Icon;
              return (
                <div key={f.title} style={{
                  backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 20, padding: 28,
                }}>
                  <div style={{ color: 'var(--primary)', marginBottom: 16, lineHeight: 0 }}>
                    <Icon />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, letterSpacing: -0.3 }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block', backgroundColor: 'rgba(34,197,94,0.1)',
            border: '1px solid rgba(34,197,94,0.25)', borderRadius: 100,
            padding: '5px 16px', marginBottom: 20,
          }}>
            <span style={{ color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>HOW IT WORKS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 56 }}>
            Three steps to consistent content
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
            {[
              { num: '01', title: 'Connect your accounts', desc: "Link your Instagram and TikTok accounts once. Creator Flow handles publishing securely — your credentials never leave your device." },
              { num: '02', title: 'Create and schedule', desc: "Write your caption, pick your platforms, set a time. One post goes everywhere at once." },
              { num: '03', title: 'We publish automatically', desc: "Creator Flow publishes your content at exactly the scheduled time — even if your phone is off or you're on a call." },
            ].map((step) => (
              <div key={step.num} style={{
                display: 'flex', gap: 24, alignItems: 'flex-start',
                backgroundColor: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 20, padding: 28,
              }}>
                <div style={{
                  fontSize: 12, fontWeight: 900, color: 'var(--primary)',
                  letterSpacing: 1, minWidth: 28, paddingTop: 3,
                }}>{step.num}</div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: 15, lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" style={{ padding: '100px 24px', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block', backgroundColor: 'rgba(34,197,94,0.1)',
          border: '1px solid rgba(34,197,94,0.25)', borderRadius: 100,
          padding: '5px 16px', marginBottom: 20,
        }}>
          <span style={{ color: 'var(--primary)', fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>PLATFORMS</span>
        </div>
        <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, letterSpacing: -1.5, marginBottom: 14 }}>
          Where you create, we publish
        </h2>
        <p style={{ color: 'var(--text-sub)', fontSize: 17, marginBottom: 52 }}>
          TikTok is live. Instagram and YouTube coming soon.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {PLATFORMS.map((p) => {
            const Logo = p.Logo;
            return (
              <div key={p.name} style={{
                backgroundColor: 'var(--surface)',
                border: `1px solid ${p.highlight ? 'rgba(34,197,94,0.3)' : 'var(--border)'}`,
                borderRadius: 20, padding: '28px 36px',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                minWidth: 160,
              }}>
                <Logo size={52} />
                <span style={{ fontWeight: 800, fontSize: 15 }}>{p.name}</span>
                <span style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                  color: p.highlight ? 'var(--primary)' : 'var(--text-muted)',
                  backgroundColor: p.highlight ? 'rgba(34,197,94,0.1)' : 'var(--surface2)',
                  padding: '3px 10px', borderRadius: 100,
                }}>{p.status}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section id="signup" style={{
        padding: '120px 24px', textAlign: 'center',
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)',
      }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900,
            letterSpacing: -2, lineHeight: 1.08, marginBottom: 20,
          }}>
            Ready to stop<br />
            <span style={{ color: 'var(--primary)' }}>juggling apps?</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', fontSize: 17, lineHeight: 1.65, marginBottom: 44 }}>
            Enter your email and we&apos;ll notify you the moment the app is ready.
          </p>
          <EarlyAccessForm />
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 20 }}>
            Web app available now — iOS &amp; Android coming soon
          </p>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: '48px 24px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <p style={{ maxWidth: 560, margin: '0 auto', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75 }}>
          <span style={{ fontWeight: 700, color: 'var(--text-sub)' }}>Creator Flow</span> is a social media scheduling application for content creators. Connect your accounts once and schedule posts to TikTok, Instagram, YouTube and more — Creator Flow publishes automatically so you can focus on creating.
        </p>
      </section>

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
          <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: 13, textDecoration: 'none' }}>Terms of Service</Link>
          <a href="mailto:rovative@gmail.com" style={{ color: 'var(--text-muted)', fontSize: 13, textDecoration: 'none' }}>Contact</a>
        </div>
        <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>© 2026 Creator Flow. All rights reserved.</span>
      </footer>
    </main>
  );
}
