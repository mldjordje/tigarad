'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

const slides = [
  {
    id: 'obuca',
    eyebrow: 'Tigar AD, Pirot',
    title: 'Gumena obuca i industrijski programi.',
    body: 'Proizvodnja gumene obuce, tehnicke gume i hemijskih proizvoda, spremna za B2C i B2B partnere.',
    ctaPrimary: { label: 'Katalog obuce', href: '#obuca' },
    ctaSecondary: { label: 'Posalji upit', href: '#b2b' },
    imageDesktop: '/landing/hero-desktop.jpg',
    videoMobile: '/IMG_4707.mp4'
  },
  {
    id: 'guma',
    eyebrow: 'Tehnicka guma',
    title: 'Industrijska resenja za gradjevinarstvo i infrastrukturu.',
    body: 'Specijalizovani programi za zahtevne sisteme i stabilne serije.',
    ctaPrimary: { label: 'B2B upit', href: '#b2b' },
    ctaSecondary: { label: 'Pogledaj segmente', href: '#guma' },
    imageDesktop: '/1769189336248072.jpg',
    imageMobile: '/1769189336248072.jpg'
  },
  {
    id: 'hemija',
    eyebrow: 'Hemija',
    title: 'Lepkovi za industriju, gradjevinu i rudarstvo.',
    body: 'Formulacije prilagodjene tehnickim zahtevima i OEM saradnji.',
    ctaPrimary: { label: 'B2B upit', href: '#b2b' },
    ctaSecondary: { label: 'Program hemije', href: '#hemija' },
    imageDesktop: '/1769189336247524.jpg',
    imageMobile: '/1769189336247524.jpg'
  }
];

const SLIDE_INTERVAL_MS = 7000;

export default function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const slideCount = slides.length;

  const scrollToSlide = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = (index + slideCount) % slideCount;
    const slide = track.children[clamped] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setActive(clamped);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index || 0);
            setActive(index);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    Array.from(track.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      scrollToSlide(active + 1);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section className="hero" aria-label="Hero carousel">
      <div className="hero-carousel" ref={trackRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide${slide.videoMobile ? ' has-video' : ''}`}
            aria-label={`${index + 1} / ${slides.length}`}
            data-index={index}
          >
            <div className="hero-media" aria-hidden="true">
              {slide.videoMobile ? (
                <video
                  className="hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/landing/hero-poster.jpg"
                >
                  <source src={slide.videoMobile} type="video/mp4" />
                </video>
              ) : null}
              <div
                className="hero-image"
                style={{ backgroundImage: `url(${slide.imageDesktop})` }}
              />
              {slide.imageMobile ? (
                <div
                  className="hero-image mobile-image"
                  style={{ backgroundImage: `url(${slide.imageMobile})` }}
                />
              ) : null}
            </div>
            <div
              className="hero-content reveal"
              style={{ '--d': `${0.05 + index * 0.05}s` } as CSSProperties}
            >
              <span className="eyebrow">{slide.eyebrow}</span>
              <h1>{slide.title}</h1>
              <p>{slide.body}</p>
              <div className="hero-actions">
                <a className="btn primary" href={slide.ctaPrimary.href}>
                  {slide.ctaPrimary.label}
                </a>
                <a className="btn" href={slide.ctaSecondary.href}>
                  {slide.ctaSecondary.label}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-controls" aria-label="Hero navigation">
        <button
          className="icon-btn"
          type="button"
          onClick={() => scrollToSlide(active - 1)}
          aria-label="Prethodni slajd"
        >
          {'<'}
        </button>
        <div className="hero-dots" role="tablist" aria-label="Hero dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-dot${active === index ? ' is-active' : ''}`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Prikazi ${slide.eyebrow}`}
            />
          ))}
        </div>
        <button
          className="icon-btn"
          type="button"
          onClick={() => scrollToSlide(active + 1)}
          aria-label="Sledeci slajd"
        >
          {'>'}
        </button>
      </div>
    </section>
  );
}
