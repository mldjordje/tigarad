export default function HeroMedia() {
  return (
    <>
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/landing/hero-poster.jpg"
      >
        <source src="/IMG_4707.mp4" type="video/mp4" />
      </video>
      <div className="hero-image" />
    </>
  );
}
