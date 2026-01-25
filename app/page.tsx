import type { CSSProperties } from 'react';
import Image from 'next/image';
import HeroCarousel from './components/HeroCarousel';
import RevealObserver from './components/RevealObserver';

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tigar AD',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pirot',
    addressCountry: 'RS'
  },
  description: 'Proizvodnja gumene obuce, tehnicke gume i hemijskih proizvoda.'
};

const reveal = (delay: string) => ({ '--d': delay } as CSSProperties);

export default function Page() {
  return (
    <div className="page" id="top">
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <header className="site-header">
        <div className="topline">
          <span>Proizvodnja u Pirotu</span>
          <span>Od 1935.</span>
          <span>Gumena obuca / tehnicka guma / hemija</span>
        </div>
        <div className="nav-bar">
          <a className="logo" href="#top">
            <Image src="/logotigarresponsive.jpg" alt="Tigar AD logo" width={220} height={70} />
          </a>
          <nav className="nav-links desktop-only" aria-label="Glavna navigacija">
            <a href="#obuca">Obuca</a>
            <a href="#guma">Tehnicka guma</a>
            <a href="#hemija">Hemija</a>
            <a href="#proizvodnja">Proizvodnja</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <div className="nav-cta desktop-only">
            <a className="btn secondary" href="#obuca">
              Katalog
            </a>
            <a className="btn primary" href="#b2b">
              B2B upit
            </a>
          </div>
          <details className="nav-menu mobile-only">
            <summary aria-label="Otvori meni">
              <span className="burger" />
              Meni
            </summary>
            <div className="nav-panel">
              <nav className="nav-links" aria-label="Mobilni meni">
                <a href="#obuca">Obuca</a>
                <a href="#guma">Tehnicka guma</a>
                <a href="#hemija">Hemija</a>
                <a href="#proizvodnja">Proizvodnja</a>
                <a href="#kontakt">Kontakt</a>
              </nav>
              <div className="nav-cta">
                <a className="btn secondary" href="#obuca">
                  Katalog
                </a>
                <a className="btn primary" href="#b2b">
                  B2B upit
                </a>
              </div>
            </div>
          </details>
        </div>
      </header>

      <main>
        <HeroCarousel />

        <section className="intro reveal" style={reveal('0.1s')}>
          <div className="intro-text">
            <span className="eyebrow">Proizvodnja, logistika, isporuka</span>
            <h2>Industrijska pouzdanost iz Pirota.</h2>
            <p>
              Tigar AD razvija gumu i obucu uz kontrolisane procese, specijalizovanu opremu i
              stabilne serije za domace i inostrane partnere.
            </p>
          </div>
        </section>

        <section id="obuca" className="section product-grid reveal" style={reveal('0.14s')}>
          <div className="section-head">
            <span className="eyebrow">Kolekcije obuce</span>
            <h2>Premium izgled, industrijska izdrzljivost.</h2>
          </div>
          <div className="grid-tiles">
            <article className="tile">
              <div className="tile-media">
                <Image
                  src="/landing/editorial-2.jpg"
                  alt="Radna gumena obuca"
                  fill
                  sizes="(max-width: 900px) 50vw, 22vw"
                />
              </div>
              <div className="tile-body">
                <span>Radna obuca</span>
                <h3>Tigar Work Pro</h3>
              </div>
            </article>
            <article className="tile">
              <div className="tile-media">
                <Image
                  src="/landing/editorial-3.jpg"
                  alt="Zastitna gumena obuca"
                  fill
                  sizes="(max-width: 900px) 50vw, 22vw"
                />
              </div>
              <div className="tile-body">
                <span>Zastitna obuca</span>
                <h3>Tigar Protect</h3>
              </div>
            </article>
            <article className="tile">
              <div className="tile-media">
                <Image
                  src="/landing/heritage.jpg"
                  alt="Modna gumena obuca"
                  fill
                  sizes="(max-width: 900px) 50vw, 22vw"
                />
              </div>
              <div className="tile-body">
                <span>Modna obuca</span>
                <h3>Tigar Urban</h3>
              </div>
            </article>
            <article className="tile">
              <div className="tile-media">
                <Image
                  src="/landing/campus.jpg"
                  alt="Lovacka gumena obuca"
                  fill
                  sizes="(max-width: 900px) 50vw, 22vw"
                />
              </div>
              <div className="tile-body">
                <span>Lovacka obuca</span>
                <h3>Tigar Hunt</h3>
              </div>
            </article>
          </div>
        </section>

        <section id="proizvodnja" className="section offset-grid reveal" style={reveal('0.18s')}>
          <div className="offset-copy">
            <span className="eyebrow">Proizvodnja</span>
            <h2>Master gumari od 1935. sa fokusom na detalj.</h2>
            <p>
              Kontrolisani procesi i specijalizovana oprema omogucavaju stabilan kvalitet
              gumene obuce, tehnicke gume i hemijskih proizvoda.
            </p>
            <a className="link-cta" href="#kontakt">
              Saznaj vise
            </a>
          </div>
          <div className="offset-media">
            <figure className="media-card">
              <div className="media-photo">
                <Image
                  src="/1769189336245365.jpg"
                  alt="Linija za proizvodnju gumene obuce"
                  fill
                  sizes="(max-width: 900px) 80vw, 32vw"
                />
              </div>
              <figcaption>Linija za proizvodnju</figcaption>
            </figure>
            <figure className="media-card offset">
              <div className="media-photo">
                <Image
                  src="/1769189336246991.jpg"
                  alt="Kontrola kvaliteta u fabrici"
                  fill
                  sizes="(max-width: 900px) 80vw, 32vw"
                />
              </div>
              <figcaption>Kontrola kvaliteta</figcaption>
            </figure>
          </div>
        </section>

        <section id="guma" className="section slider-split reveal" style={reveal('0.22s')}>
          <div className="slider-copy">
            <span className="eyebrow">Tehnicka guma</span>
            <h2>Industrijska resenja za tri kljucna sektora.</h2>
            <p>Fokus na pouzdanu proizvodnju i stabilne serije za B2B partnere.</p>
          </div>
          <div className="scroll-row image-row" aria-label="Segmenti tehnicke gume">
            <article className="image-card">
              <figure>
                <Image
                  src="/1769189336248072.jpg"
                  alt="Tehnicka guma za gradjevinarstvo"
                  fill
                  sizes="(max-width: 900px) 70vw, 26vw"
                />
              </figure>
              <h3>Gradjevinarstvo</h3>
              <p className="form-note">Otporni segmenti za infrastrukturu i gradnju.</p>
            </article>
            <article className="image-card">
              <figure>
                <Image
                  src="/1769189336246460.jpg"
                  alt="Tehnicka guma za vojni program"
                  fill
                  sizes="(max-width: 900px) 70vw, 26vw"
                />
              </figure>
              <h3>Vojni program</h3>
              <p className="form-note">Pouzdani programi za zahtevne uslove.</p>
            </article>
            <article className="image-card">
              <figure>
                <Image
                  src="/1769189336248567.jpg"
                  alt="Tehnicka guma za zeleznice"
                  fill
                  sizes="(max-width: 900px) 70vw, 26vw"
                />
              </figure>
              <h3>Zeleznice</h3>
              <p className="form-note">Komponente za dugotrajne sisteme.</p>
            </article>
          </div>
        </section>

        <section id="hemija" className="section media-products reveal" style={reveal('0.26s')}>
          <div className="media-sticky">
            <div className="sticky-media">
              <Image
                src="/1769189336247524.jpg"
                alt="Hemijski program Tigar AD"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="sticky-caption">
                <span className="eyebrow">Hemija</span>
                <h3>Lepkovi za industriju i gradjevinarstvo.</h3>
              </div>
            </div>
          </div>
          <div className="mini-grid">
            <article className="mini-card">
              <div className="mini-media">
                <Image
                  src="/1769189336245919.jpg"
                  alt="Lepkovi za domacinstvo"
                  fill
                  sizes="(max-width: 900px) 70vw, 22vw"
                />
              </div>
              <span>Opsta potrosnja</span>
              <h4>Lepkovi za domacinstvo</h4>
            </article>
            <article className="mini-card">
              <div className="mini-media">
                <Image
                  src="/1769189336246991.jpg"
                  alt="Lepkovi visokih performansi"
                  fill
                  sizes="(max-width: 900px) 70vw, 22vw"
                />
              </div>
              <span>Gradjevinarstvo</span>
              <h4>Lepkovi visokih performansi</h4>
            </article>
            <article className="mini-card">
              <div className="mini-media">
                <Image
                  src="/1769189336244647.jpg"
                  alt="Industrijski sistemi lepljenja"
                  fill
                  sizes="(max-width: 900px) 70vw, 22vw"
                />
              </div>
              <span>Rudarstvo</span>
              <h4>Industrijski sistemi lepljenja</h4>
            </article>
            <article className="mini-card">
              <div className="mini-media">
                <Image
                  src="/1769189336248072.jpg"
                  alt="Razvoj po zahtevu"
                  fill
                  sizes="(max-width: 900px) 70vw, 22vw"
                />
              </div>
              <span>OEM</span>
              <h4>Razvoj po zahtevu</h4>
            </article>
          </div>
        </section>

        <section className="section blog-slider reveal" style={reveal('0.3s')}>
          <div className="section-head">
            <span className="eyebrow">Proizvodne price</span>
            <h2>Prikaz procesa i ljudi iza brenda.</h2>
          </div>
          <div className="scroll-row story-row">
            <article className="story-card">
              <div className="story-media">
                <Image
                  src="/1769189336256736.jpg"
                  alt="Rucna dorada obuce"
                  fill
                  sizes="(max-width: 900px) 70vw, 28vw"
                />
              </div>
              <span className="eyebrow">Rucna dorada</span>
              <h3>Preciznost u svakoj seriji</h3>
            </article>
            <article className="story-card">
              <div className="story-media">
                <Image
                  src="/1769189336248567.jpg"
                  alt="Kontrola kvaliteta"
                  fill
                  sizes="(max-width: 900px) 70vw, 28vw"
                />
              </div>
              <span className="eyebrow">Kontrola kvaliteta</span>
              <h3>Standardi industrijske proizvodnje</h3>
            </article>
            <article className="story-card">
              <div className="story-media">
                <Image
                  src="/1769189336248072.jpg"
                  alt="Fabricki pogon"
                  fill
                  sizes="(max-width: 900px) 70vw, 28vw"
                />
              </div>
              <span className="eyebrow">Pogon</span>
              <h3>Proizvodnja u Pirotu</h3>
            </article>
          </div>
        </section>

        <section id="b2b" className="section b2b reveal" style={reveal('0.34s')}>
          <div className="section-head">
            <span className="eyebrow">B2B upiti</span>
            <h2>Brzi upiti za tehnicku gumu i hemiju.</h2>
            <p>Forma je koncipirana za brzu obradu i jasne specifikacije.</p>
          </div>
          <div className="form-split">
            <form id="guma-form" className="form-card" action="#">
              <h3>Tehnicka guma</h3>
              <p className="form-note">Segmenti: gradjevinarstvo, vojni program, zeleznice.</p>
              <div className="form-grid">
                <div>
                  <label htmlFor="guma-company">Ime firme</label>
                  <input id="guma-company" name="company" type="text" placeholder="Naziv firme" />
                </div>
                <div>
                  <label htmlFor="guma-email">Email</label>
                  <input id="guma-email" name="email" type="email" placeholder="email@firma.rs" />
                </div>
                <div>
                  <label htmlFor="guma-category">Kategorija / namena</label>
                  <select id="guma-category" name="category">
                    <option>Gradjevinarstvo</option>
                    <option>Vojni program</option>
                    <option>Zeleznice</option>
                    <option>Ostalo</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guma-qty">Kolicina</label>
                  <input id="guma-qty" name="quantity" type="text" placeholder="npr. 1000 kom" />
                </div>
              </div>
              <div>
                <label htmlFor="guma-note">Napomena / poruka</label>
                <textarea id="guma-note" name="message" placeholder="Opis potrebe ili specifikacije" />
              </div>
              <button className="btn primary" type="submit">
                Posalji upit
              </button>
            </form>

            <form id="hemija-form" className="form-card" action="#">
              <h3>Hemijski proizvodi</h3>
              <p className="form-note">Lepkovi opste potrosnje i industrijski program.</p>
              <div className="form-grid">
                <div>
                  <label htmlFor="hemija-company">Ime firme</label>
                  <input id="hemija-company" name="company" type="text" placeholder="Naziv firme" />
                </div>
                <div>
                  <label htmlFor="hemija-email">Email</label>
                  <input id="hemija-email" name="email" type="email" placeholder="email@firma.rs" />
                </div>
                <div>
                  <label htmlFor="hemija-product">Proizvod</label>
                  <input id="hemija-product" name="product" type="text" placeholder="Naziv proizvoda" />
                </div>
                <div>
                  <label htmlFor="hemija-qty">Kolicina</label>
                  <input id="hemija-qty" name="quantity" type="text" placeholder="npr. 500 kg" />
                </div>
              </div>
              <div>
                <label htmlFor="hemija-note">Napomena</label>
                <textarea id="hemija-note" name="message" placeholder="Opis namene ili potrebna specifikacija" />
              </div>
              <button className="btn primary" type="submit">
                Posalji upit
              </button>
            </form>
          </div>
        </section>

        <section className="section heritage reveal" style={reveal('0.38s')}>
          <div className="heritage-media">
            <Image
              src="/landing/heritage.jpg"
              alt="Tigar priznanje"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
          <div className="heritage-copy">
            <span className="eyebrow">Nasledje</span>
            <h2>Industrijski kredibilitet i dugorocna tradicija.</h2>
            <p>
              Brend koji je izrastao iz proizvodnje u Pirotu i danas snabdeva partnere na
              domacem i izvoznom trzistu.
            </p>
            <a className="btn" href="#kontakt">
              Zapocni saradnju
            </a>
          </div>
        </section>

        <section id="faq" className="section faq-section reveal" style={reveal('0.42s')}>
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Najcesca pitanja o gumenoj obuci i proizvodnji.</h2>
            <p>SEO i AI-friendly blok sa jasnim definicijama i terminima.</p>
          </div>
          <div>
            <details>
              <summary>Sta je gumena obuca?</summary>
              <p>Gumena obuca je vodootporna obuca namenjena radu i zastiti u zahtevnim uslovima.</p>
            </details>
            <details>
              <summary>Da li Tigar AD proizvodi gumene cizme i gumene cipele?</summary>
              <p>Da, program obuhvata gumene cizme i cipele za radnu, zastitnu i lovacku namenu.</p>
            </details>
            <details>
              <summary>Sta obuhvata tehnicka guma?</summary>
              <p>Tehnicka guma ukljucuje industrijske proizvode za gradjevinarstvo, vojni program i zeleznice.</p>
            </details>
            <details>
              <summary>Kako funkcionise B2B upit?</summary>
              <p>Popunite formu za odgovarajuci program, a tim iz Tigar AD prosledjuje ponudu i specifikacije.</p>
            </details>
          </div>
        </section>

        <section id="kontakt" className="section reveal" style={reveal('0.46s')}>
          <div className="section-head">
            <span className="eyebrow">Kontakt</span>
            <h2>Spremni za saradnju.</h2>
            <p>Ovaj landing je centralna prezentacija pre razdvajanja na tri posebne stranice.</p>
          </div>
          <div className="contact-grid">
            <article className="contact-card">
              <h3>Tigar AD, Pirot</h3>
              <p>Industrijska proizvodnja gumene obuce, tehnicke gume i hemije.</p>
              <p className="form-note">Kontakt: office@tigar.rs | +381 (0)10 000 000</p>
            </article>
            <article className="contact-card">
              <h3>B2C prodaja</h3>
              <p>Online katalog i direktna prodaja gumene obuce.</p>
              <a className="btn" href="#obuca">
                Idi na katalog
              </a>
            </article>
            <article className="contact-card">
              <h3>B2B programi</h3>
              <p>Tehnicka guma i hemijski proizvodi uz brz upit.</p>
              <a className="btn primary" href="#b2b">
                Posalji upit
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer reveal" style={reveal('0.5s')}>
        <div className="footer-grid">
          <div>
            <h2>Tigar AD — manufacturing-first digitalni nastup.</h2>
            <p>Landing spreman za prezentaciju pre razdvajanja na posebne stranice.</p>
          </div>
          <div className="footer-links">
            <a href="#obuca">Katalog</a>
            <a href="#guma">Tehnicka guma</a>
            <a href="#hemija">Hemija</a>
            <a href="#b2b">B2B upit</a>
            <a href="#faq">FAQ</a>
            <a href="#kontakt">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
