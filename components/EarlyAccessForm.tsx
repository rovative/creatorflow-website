'use client';

import { useState } from 'react';

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('https://formspree.io/f/xaqvdqgp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
        borderRadius: 14, padding: '16px 28px',
      }}>
        <span style={{ fontSize: 18 }}>✓</span>
        <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 15 }}>
          You&apos;re on the list — we&apos;ll notify you when the app is ready.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
          color: 'var(--text)', borderRadius: 12, padding: '14px 20px',
          fontSize: 15, outline: 'none', width: 280,
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          backgroundColor: 'var(--primary)', color: '#fff',
          padding: '14px 32px', borderRadius: 12, fontSize: 15,
          fontWeight: 800, border: 'none', cursor: 'pointer',
          letterSpacing: -0.3, boxShadow: '0 0 40px rgba(34,197,94,0.3)',
          opacity: status === 'loading' ? 0.7 : 1,
        }}
      >
        {status === 'loading' ? 'Joining...' : 'Notify Me'}
      </button>
      {status === 'error' && (
        <p style={{ width: '100%', textAlign: 'center', color: '#f87171', fontSize: 13, marginTop: 4 }}>
          Something went wrong — try again or email rovative@gmail.com
        </p>
      )}
    </form>
  );
}
