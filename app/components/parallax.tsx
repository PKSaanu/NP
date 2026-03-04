"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "IEEE Summer School'23",
    link: "https://www.csc.jfn.ac.lk/gallery/nggallery/album/2023-ieee-summer-school-dcs",
    thumbnail: "/images/IEEE-SCCI-D3-28.jpg",
  },
  {
    title: "IEEE Summer School'23",
    link: "https://www.csc.jfn.ac.lk/gallery/nggallery/album/2023-ieee-summer-school-dcs",
    thumbnail: "/images/IEEE-SSCI-D2-49.jpg",
  },
  {
    title: "CYBERSECURITY BOOTCAMP'24",
    link: "https://www.csc.jfn.ac.lk/gallery/nggallery/album/gessomi-2024-cybersecurity-bootcamp",
    thumbnail: "/images/13-scaled.jpg",
  },
  {
    title: "Emerging Affinity Group Certificate'24",
    link: "https://sites.google.com/univ.jfn.ac.lk/wie-uoj/achievements",
    thumbnail: "/images/1730875476889.jpeg",
  },
  {
    title: "Google exploreCSR Symposium'24",
    link: "https://www.csc.jfn.ac.lk/google-research/",
    thumbnail: "/images/symbosiumstudents24.jpg",
  },
  {
    title: "SL-SWCS'19",
    link: "https://www.csc.jfn.ac.lk/gallery/nggallery/album/sl-swcs19",
    thumbnail: "/images/slswcs19-1.jpg",
  },
  {
    title: "Thai Pongal'24",
    link: "#",
    thumbnail: "/images/pongal.png",
  },
  {
    title: "PhD Graduation'23",
    link: "#",
    thumbnail: "/images/graduationPhD.jpg",
  },
  {
    title: "Yarl Geek'23",
    link: "#",
    thumbnail: "/images/yarlgeek.png",
  },
  {
    title: "IEEE Day'23",
    link: "https://www.csc.jfn.ac.lk/gallery/nggallery/album/ieee-day-2023",
    thumbnail: "/images/ieeeday23-2.jpg",
  },
  {
    title: "SL-SWCS'21",
    link: "https://www.csc.jfn.ac.lk/gallery/nggallery/album/sl-swcs21",
    thumbnail: "/images/SLSWCS-21.jpg",
  },
  {
    title: "Emerging Affinity Group Award'24",
    link: "https://sites.google.com/univ.jfn.ac.lk/wie-uoj/achievements",
    thumbnail: "/images/1730875726782.jpeg",
  },
  {
    title: "SL-SWCS'17",
    link: "https://www.csc.jfn.ac.lk/gallery/nggallery/album/sl-swcs17",
    thumbnail: "/images/SL-SWCS17-1.jpg",
  },
  {
    title: "IEEE Day'23",
    link: "https://www.csc.jfn.ac.lk/gallery/nggallery/album/ieee-day-2023",
    thumbnail: "/images/ieeeday23.jpg",
  },
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = products[activeIndex];

  function selectImage(index: number) {
    if (index === activeIndex || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimating(false);
    }, 220);
    // scroll thumbnail into view
    thumbRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  // prev / next
  function prev() {
    selectImage((activeIndex - 1 + products.length) % products.length);
  }
  function next() {
    selectImage((activeIndex + 1) % products.length);
  }

  return (
    <section style={{ padding: "3rem 0" }}>
      <style>{`
        .gallery-preview-wrap {
          position: relative;
          width: 100%;
          border-radius: 16px;
          overflow: hidden;
          background: #0f0f1a;
          aspect-ratio: 16/9;
        }
        @media (max-width: 640px) {
          .gallery-preview-wrap { aspect-ratio: 4/3; border-radius: 12px; }
        }
        .gallery-preview-img {
          object-fit: cover;
          transition: opacity 0.22s ease;
        }
        .gallery-preview-img.fading { opacity: 0; }
        .gallery-preview-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.18) 40%,
            transparent 65%
          );
          pointer-events: none;
        }
        .gallery-preview-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 18px 20px 16px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
        }
        .gallery-preview-label {
          font-size: clamp(0.85rem, 2vw, 1.05rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.01em;
          line-height: 1.3;
        }
        .gallery-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(124,58,237,0.85);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          border: 1px solid rgba(167,139,250,0.4);
          backdrop-filter: blur(6px);
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .gallery-link-btn:hover { background: rgba(109,40,217,0.95); }

        /* Nav arrows */
        .gallery-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 38px; height: 38px;
          border-radius: 50%;
          background: rgba(15,15,26,0.65);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(6px);
          transition: background 0.2s, transform 0.15s;
        }
        .gallery-arrow:hover { background: rgba(124,58,237,0.8); transform: translateY(-50%) scale(1.08); }
        .gallery-arrow.left { left: 12px; }
        .gallery-arrow.right { right: 12px; }

        /* Counter badge */
        .gallery-counter {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(6px);
          color: rgba(255,255,255,0.8);
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
        }

        /* Thumbnail strip */
        .gallery-strip {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 12px 0 8px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .gallery-strip::-webkit-scrollbar { display: none; }

        .gallery-thumb-btn {
          flex-shrink: 0;
          width: 80px;
          height: 58px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          border: 2.5px solid transparent;
          padding: 0;
          background: #1a1a2e;
          cursor: pointer;
          transition: border-color 0.2s, opacity 0.2s, transform 0.2s;
          opacity: 0.55;
        }
        @media (max-width: 640px) {
          .gallery-thumb-btn { width: 68px; height: 50px; }
        }
        .gallery-thumb-btn.active {
          border-color: #7c3aed;
          opacity: 1;
          transform: translateY(-3px);
        }
        .gallery-thumb-btn:not(.active):hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }
        .gallery-thumb-img {
          object-fit: cover;
        }
      `}</style>

      {/* Section Header */}
      <div style={{ marginBottom: "1.6rem" }}>
        <p style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#7c3aed",
          marginBottom: "0.4rem",
        }}>
          Moments &amp; Memories
        </p>
        <h2
          className="dark:text-white text-gray-900"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, margin: 0, lineHeight: 1.2 }}
        >
          Gallery
        </h2>
        <p
          className="dark:text-neutral-400 text-gray-500"
          style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}
        >
          A glimpse into conferences, workshops, and events across my academic journey.
        </p>
      </div>

      {/* Big Preview */}
      <div className="gallery-preview-wrap">
        <Image
          src={active.thumbnail}
          alt={active.title}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1000px"
          className={`gallery-preview-img${animating ? " fading" : ""}`}
        />
        <div className="gallery-preview-gradient" />

        {/* Counter */}
        <div className="gallery-counter">
          {activeIndex + 1} / {products.length}
        </div>

        {/* Prev arrow */}
        <button className="gallery-arrow left" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next arrow */}
        <button className="gallery-arrow right" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Title + external link */}
        <div className="gallery-preview-title">
          <span className="gallery-preview-label">{active.title}</span>
          {active.link !== "#" && (
            <Link href={active.link} target="_blank" rel="noopener noreferrer" className="gallery-link-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View
            </Link>
          )}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="gallery-strip" ref={stripRef}>
        {products.map((p, i) => (
          <button
            key={i}
            ref={(el) => { thumbRefs.current[i] = el; }}
            className={`gallery-thumb-btn${i === activeIndex ? " active" : ""}`}
            onClick={() => selectImage(i)}
            aria-label={p.title}
          >
            <Image
              src={p.thumbnail}
              alt={p.title}
              fill
              sizes="80px"
              className="gallery-thumb-img"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

// Keep legacy export alias
export { GallerySection as HeroParallaxDemo };
