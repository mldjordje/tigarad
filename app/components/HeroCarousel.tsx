'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { IconButton, MobileStepper } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

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
    if (slide) {
      // Avoid vertical page jumps caused by scrollIntoView on some browsers.
      const left = slide.offsetLeft;
      if (typeof (track as HTMLElement).scrollTo === 'function') {
        try {
          track.scrollTo({ left, behavior: 'smooth' });
        } catch {
          track.scrollLeft = left;
        }
      } else {
        track.scrollLeft = left;
      }
    }
    setActive(clamped);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (!('IntersectionObserver' in window)) {
      return;
    }

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
      <div className="hero-controls">
        <IconButton
          onClick={() => scrollToSlide(active - 1)}
          aria-label="Prethodni slajd"
          sx={{
            border: '1px solid rgba(255,255,255,0.6)',
            color: '#fff',
            width: 40,
            height: 40,
            background: 'rgba(0,0,0,0.2)',
            '&:hover': { background: 'rgba(0,0,0,0.35)' }
          }}
        >
          <KeyboardArrowLeft />
        </IconButton>
        <MobileStepper
          variant="dots"
          steps={slideCount}
          position="static"
          activeStep={active}
          sx={{
            background: 'transparent',
            padding: 0,
            '& .MuiMobileStepper-dot': {
              backgroundColor: 'rgba(255,255,255,0.45)',
              width: 8,
              height: 8,
              margin: '0 6px'
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#fff'
            }
          }}
          nextButton={<span />}
          backButton={<span />}
        />
        <IconButton
          onClick={() => scrollToSlide(active + 1)}
          aria-label="Sledeci slajd"
          sx={{
            border: '1px solid rgba(255,255,255,0.6)',
            color: '#fff',
            width: 40,
            height: 40,
            background: 'rgba(0,0,0,0.2)',
            '&:hover': { background: 'rgba(0,0,0,0.35)' }
          }}
        >
          <KeyboardArrowRight />
        </IconButton>
      </div>
    </section>
  );
}
