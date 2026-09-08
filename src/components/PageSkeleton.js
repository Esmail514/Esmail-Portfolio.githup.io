'use client';

import { useState } from 'react';

export default function PageSkeleton({ isVisible }) {
  const [isRendered, setIsRendered] = useState(true);

  if (!isRendered) return null;

  return (
    <div 
      className={`page-skeleton-overlay ${!isVisible ? 'fade-out' : ''}`} 
      aria-hidden="true"
      onTransitionEnd={() => {
        if (!isVisible) {
          setIsRendered(false);
        }
      }}
    >
      {/* Header Skeleton */}
      <header className="skeleton-nav-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="skeleton-box skeleton-shimmer" style={{ width: '150px', height: '32px' }} />
          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="skeleton-box skeleton-shimmer" style={{ width: '60px', height: '20px' }} />
            <div className="skeleton-box skeleton-shimmer" style={{ width: '60px', height: '20px' }} />
            <div className="skeleton-box skeleton-shimmer" style={{ width: '60px', height: '20px' }} />
            <div className="skeleton-box skeleton-shimmer" style={{ width: '60px', height: '20px' }} />
            <div className="skeleton-box skeleton-shimmer" style={{ width: '60px', height: '20px' }} />
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="skeleton-hero">
        <div className="container">
          <div className="skeleton-hero-left" style={{ maxWidth: '750px' }}>
            <div className="skeleton-box skeleton-shimmer skeleton-title" style={{ width: '70%', height: '48px' }} />
            <div className="skeleton-box skeleton-shimmer skeleton-text" style={{ width: '90%', height: '22px' }} />
            <div className="skeleton-box skeleton-shimmer skeleton-text" style={{ width: '80%', height: '20px' }} />
            <div className="skeleton-btn-row">
              <div className="skeleton-box skeleton-shimmer skeleton-btn" style={{ width: '160px' }} />
              <div className="skeleton-box skeleton-shimmer skeleton-btn" style={{ width: '160px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="skeleton-section">
        <div className="container">
          <div className="skeleton-section-header">
            <div className="skeleton-box skeleton-shimmer skeleton-title" style={{ width: '220px', height: '36px' }} />
          </div>
          <div className="skeleton-cards-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="skeleton-card skeleton-box">
                <div className="skeleton-card-img skeleton-shimmer" />
                <div className="skeleton-card-body">
                  <div className="skeleton-box skeleton-shimmer skeleton-title" style={{ width: '75%', height: '24px' }} />
                  <div className="skeleton-box skeleton-shimmer skeleton-text" style={{ width: '100%' }} />
                  <div className="skeleton-box skeleton-shimmer skeleton-text" style={{ width: '85%' }} />
                  <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                    <div className="skeleton-box skeleton-shimmer" style={{ width: '60px', height: '24px', borderRadius: '12px' }} />
                    <div className="skeleton-box skeleton-shimmer" style={{ width: '60px', height: '24px', borderRadius: '12px' }} />
                    <div className="skeleton-box skeleton-shimmer" style={{ width: '60px', height: '24px', borderRadius: '12px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
