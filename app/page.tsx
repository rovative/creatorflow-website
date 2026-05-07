import Image from 'next/image';
import Link from 'next/link';

const FEATURES = [
  {
    icon: '📲',
    title: 'Post to every platform at once',
    desc: "Schedule one post and publish it to Instagram, TikTok, and more simultaneously. No more copying captions between apps.",
  },
  {
    icon: '🔄',
    title: 'Multiple accounts, zero switching',
    desc: "Manage all your creator accounts in one place. Creator Flow posts on your behalf — even when you're logged out.",
  },
  {
    icon: '📊',
    title: 'Analytics without the hassle',
    desc: "Check how your content is performing across all platforms without switching accounts or interrupting what you're doing.",
  },
  {
    icon: '⏰',
    title: 'Set it and forget it',
    desc: "Schedule your content weeks in advance. Creator Flow handles publishing automatically at exactly the right time.",
  },
  {
    icon: '✍️',
    title: 'Caption assistance',
    desc: "Get AI-powered caption ideas and hooks tailored to your niche. Use them as-is or as a starting point.",
  },
  {
    icon: '🔥',
    title: 'Trend discovery',
    desc: "See what's trending in your niche before everyone else jumps on it. Stay ahead without endless scrolling.",
  },
];

const PLATFORMS = [
  { name: 'Instagram', emoji: '📷', status: 'Coming soon', highlight: true },
  { name: 'TikTok', emoji: '🎵', status: 'Coming soon', highlight: true },
  { name: 'YouTube', emoji: '▶️', status: 'Planned', highlight: false },
  { name: 'X / Twitter', emoji: '𝕏', status: 'Planned', highlight: false },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', fontFamily: 'sans-serif' }}>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'rgba(6,15,10,0.9)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 64,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/logo.png" alt="Creator Flow" width={34} height={34} style={{ borderRadius: 10 }} />
          <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: -0.3 }}>Creator Flow</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <Link href="#features" style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Features</Link>
          <Link href="#platforms" style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Platforms</Link>
          <Link href="/privacy" style={{ color: 'var(--text-sub)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Privacy</Link>
          <a href="mailto:rovative@gmail.com" style={{
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
          maxWidth: 820, marginBottom: 28,
        }}>
          One app.{' '}
          <span style={{ color: 'var(--primary)' }}>Every platform.</span>
          {'\n'}Zero switching.
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--text-sub)',
          lineHeight: 1.65, maxWidth: 540, marginBottom: 52,
        }}>
          Schedule and publish your content to Instagram, TikTok and more — all from one place. No more jumping between apps, no more account switching.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="mailto:rovative@gmail.com" style={{
            backgroundColor: 'var(--primary)', color: '#fff',
            padding: '16px 36px', borderRadius: 14, fontSize: 16,
            fontWeight: 800, textDecoration: 'none', letterSpacing: -0.3,
            boxShadow: '0 0 50px rgba(34,197,94,0.3)',
          }}>
            Get Early Access
          </a>
          <a href="#features" style={{
            backgroundColor: 'var(--surface)', color: 'var(--text)',
            padding: '16px 36px', borderRadius: 14, fontSize: 16,
            fontWeight: 700, textDecoration: 'none',
            border: '1px solid var(--border)',
          }}>
            See Features →
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
            {FEATURES.map((f) => (
              <div key={f.title} style={{
                backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 20, padding: 28,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  backgroundColor: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, marginBottom: 16,
                }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, letterSpacing: -0.3 }}>{f.title}</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: 14, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
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
          Starting with Instagram and TikTok. More coming soon.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {PLATFORMS.map((p) => (
            <div key={p.name} style={{
              backgroundColor: 'var(--surface)',
              border: `1px solid ${p.highlight ? 'rgba(34,197,94,0.3)' : 'var(--border)'}`,
              borderRadius: 20, padding: '28px 36px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
              minWidth: 160,
            }}>
              <span style={{ fontSize: 38 }}>{p.emoji}</span>
              <span style={{ fontWeight: 800, fontSize: 16 }}>{p.name}</span>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
                color: p.highlight ? 'var(--primary)' : 'var(--text-muted)',
                backgroundColor: p.highlight ? 'rgba(34,197,94,0.1)' : 'var(--surface2)',
                padding: '3px 10px', borderRadius: 100,
              }}>{p.status}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '120px 24px', textAlign: 'center',
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)',
      }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <Image src="/logo.png" alt="Creator Flow" width={72} height={72} style={{ borderRadius: 20, marginBottom: 36 }} />
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 900,
            letterSpacing: -2, lineHeight: 1.08, marginBottom: 20,
          }}>
            Ready to stop<br />
            <span style={{ color: 'var(--primary)' }}>juggling apps?</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', fontSize: 17, lineHeight: 1.65, marginBottom: 44 }}>
            Creator Flow is in early access. Join now and get free Pro access while we build.
          </p>
          <a href="mailto:rovative@gmail.com" style={{
            display: 'inline-block',
            backgroundColor: 'var(--primary)', color: '#fff',
            padding: '18px 44px', borderRadius: 16, fontSize: 17,
            fontWeight: 800, textDecoration: 'none', letterSpacing: -0.3,
            boxShadow: '0 0 60px rgba(34,197,94,0.3)',
          }}>
            Get Early Access
          </a>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 16 }}>
            Available on iOS and Android — web app coming soon
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '28px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/logo.png" alt="Creator Flow" width={26} height={26} style={{ borderRadius: 7 }} />
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
