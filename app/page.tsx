import type { CSSProperties } from 'react';
import Image from 'next/image';
import HeroMedia from './components/HeroMedia';

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <header className="nav-wrap">
        <div className="topline">
          <span>Proizvodnja u Pirotu</span>
          <span>Od 1935.</span>
          <span>Gumena obuca / tehnicka guma / hemija</span>
        </div>
        <div className="nav">
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
          <div className="nav-actions desktop-only">
            <a className="btn ghost" href="#obuca">
              Katalog
            </a>
            <a className="btn primary" href="#b2b">
              B2B upit
            </a>
          </div>
          <details className="nav-menu mobile-only">
            <summary>Menu</summary>
            <div className="nav-panel">
              <nav className="nav-links" aria-label="Mobilni meni">
                <a href="#obuca">Obuca</a>
                <a href="#guma">Tehnicka guma</a>
                <a href="#hemija">Hemija</a>
                <a href="#proizvodnja">Proizvodnja</a>
                <a href="#kontakt">Kontakt</a>
              </nav>
              <div className="nav-actions">
                <a className="btn ghost" href="#obuca">
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
        <section className="hero reveal" style={reveal('0.05s')}>
          <div className="hero-media" aria-hidden="true">
            <HeroMedia />
          </div>
          <div className="hero-body">
            <div className="hero-copy">
              <span className="section-tag">Tigar AD, Pirot</span>
              <h1>Gumena obuca i industrijski programi iz Pirota.</h1>
              <p className="hero-lead">
                Katalog obuce i B2B upiti za tehnicku gumu i hemiju, objedinjeni na jednom
                mestu.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#obuca">
                  Katalog obuce
                </a>
                <a className="btn" href="#b2b">
                  Posalji upit
                </a>
              </div>
            </div>
            <div className="hero-meta">
              <span>Proizvodjac gumene obuce</span>
              <span>Tehnicka guma i hemija</span>
              <span>B2C + B2B modeli</span>
            </div>
          </div>
        </section>

        <section id="obuca" className="section reveal" style={reveal('0.1s')}>
          <div className="section-head">
            <span className="section-tag">Kolekcije obuce</span>
            <h2>Premium izgled, industrijska izdrzljivost.</h2>
            <p>Radna, zastitna, modna, decija i lovacka obuca u jednom katalogu.</p>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <div className="product-image">
                <Image src="/landing/editorial-2.jpg" alt="Radna gumena obuca" fill sizes="(max-width: 720px) 100vw, 25vw" />
              </div>
              <div className="body">
                <span className="label">Radna obuca</span>
                <h3>Tigar Work Pro</h3>
              </div>
            </article>
            <article className="product-card">
              <div className="product-image">
                <Image src="/landing/editorial-3.jpg" alt="Zastitna gumena obuca" fill sizes="(max-width: 720px) 100vw, 25vw" />
              </div>
              <div className="body">
                <span className="label">Zastitna obuca</span>
                <h3>Tigar Protect</h3>
              </div>
            </article>
            <article className="product-card">
              <div className="product-image">
                <Image src="/landing/heritage.jpg" alt="Modna gumena obuca" fill sizes="(max-width: 720px) 100vw, 25vw" />
              </div>
              <div className="body">
                <span className="label">Modna obuca</span>
                <h3>Tigar Urban</h3>
              </div>
            </article>
            <article className="product-card">
              <div className="product-image">
                <Image src="/landing/campus.jpg" alt="Lovacka gumena obuca" fill sizes="(max-width: 720px) 100vw, 25vw" />
              </div>
              <div className="body">
                <span className="label">Lovacka obuca</span>
                <h3>Tigar Hunt</h3>
              </div>
            </article>
          </div>
        </section>

        <section className="section split reveal" style={reveal('0.16s')}>
          <div>
            <span className="section-tag">Manufacturer-first</span>
            <h2>Fabrika koja definise kvalitet.</h2>
            <p className="lead">
              Kontrolisani procesi i iskustvo iz gumarske industrije omogucavaju stabilan
              kvalitet i pouzdanu isporuku.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#proizvodnja">
                Pogledaj proizvodnju
              </a>
            </div>
          </div>
          <figure>
            <Image
              src="/landing/editorial-1.jpg"
              alt="Linija za proizvodnju"
              width={1200}
              height={1600}
              sizes="(max-width: 960px) 100vw, 45vw"
            />
          </figure>
        </section>

        <section className="section reveal" style={reveal('0.2s')}>
          <div className="section-head">
            <span className="section-tag">Programi</span>
            <h2>Tri oblasti, jedna industrijska platforma.</h2>
            <p>Struktura je spremna za kasnije razdvajanje na posebne stranice.</p>
          </div>
          <div className="card-grid">
            <article className="card">
              <span className="tag">Obuca (B2C + B2B)</span>
              <h3>Gumene cizme i cipele</h3>
              <p>Radna, zastitna, modna, decija i lovacka obuca.</p>
            </article>
            <article className="card" id="guma">
              <span className="tag">Tehnicka guma (B2B)</span>
              <h3>Industrijska resenja</h3>
              <p>Programi za gradjevinarstvo, vojni segment i zeleznice.</p>
            </article>
            <article className="card" id="hemija">
              <span className="tag">Hemija (B2B)</span>
              <h3>Industrijski lepkovi</h3>
              <p>Lepkovi opste potrosnje i program za gradjevinarstvo i rudarstvo.</p>
            </article>
          </div>
        </section>

        <section id="proizvodnja" className="section reveal" style={reveal('0.24s')}>
          <div className="section-head">
            <span className="section-tag">Proizvodnja</span>
            <h2>Kontrolisani procesi i specijalizovana oprema.</h2>
            <p>Editorial blok inspirisan referencom, sa jasnim ritmom fotografija.</p>
          </div>
          <div className="collage">
            <figure>
              <Image
                src="/landing/editorial-2.jpg"
                alt="Rad u proizvodnji"
                width={1200}
                height={1600}
                sizes="(max-width: 960px) 100vw, 60vw"
              />
            </figure>
            <div className="stack">
              <figure>
                <Image
                  src="/landing/editorial-3.jpg"
                  alt="Kontrola kvaliteta"
                  width={1200}
                  height={1600}
                  sizes="(max-width: 960px) 100vw, 40vw"
                />
              </figure>
              <figure>
                <Image
                  src="/landing/campus.jpg"
                  alt="Fabrika u Pirotu"
                  width={1200}
                  height={1600}
                  sizes="(max-width: 960px) 100vw, 40vw"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="b2b" className="section reveal" style={reveal('0.28s')}>
          <div className="section-head">
            <span className="section-tag">B2B upiti</span>
            <h2>Brzi upiti za tehnicku gumu i hemiju.</h2>
            <p>Forma je koncipirana za brzu obradu i jasne specifikacije.</p>
          </div>
          <div className="card-grid">
            <form id="guma-form" className="card highlight form-card" action="#">
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

            <form id="hemija-form" className="card highlight form-card" action="#">
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

            <article className="card">
              <span className="tag">Nasledje</span>
              <h3>Kvalitet koji se pamti</h3>
              <p>
                Dugorocna tradicija u gumenoj industriji i fokus na pouzdanost isporuke
                za domace i internacionalne partnere.
              </p>
              <Image
                src="/landing/heritage.jpg"
                alt="Tigar priznanje"
                width={900}
                height={1200}
                sizes="(max-width: 960px) 100vw, 33vw"
              />
            </article>
          </div>
        </section>

        <section className="section split reveal" style={reveal('0.32s')}>
          <figure>
            <Image
              src="/landing/hero-poster.jpg"
              alt="Tigar naslede"
              width={1350}
              height={1800}
              sizes="(max-width: 960px) 100vw, 45vw"
            />
          </figure>
          <div>
            <span className="section-tag">Od 1935.</span>
            <h2>Industrijski kredibilitet i pouzdanost.</h2>
            <p className="lead">
              Brend koji je izrastao iz proizvodnje u Pirotu i danas snabdeva partnere na
              domacem i izvoznom trzistu.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#kontakt">
                Zapocni saradnju
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="section reveal" style={reveal('0.36s')}>
          <div className="section-head">
            <span className="section-tag">FAQ</span>
            <h2>Najcesca pitanja o gumenoj obuci i proizvodnji.</h2>
            <p>SEO i AI-friendly blok sa jasnim definicijama i terminima.</p>
          </div>
          <div className="faq">
            <details>
              <summary>Sta je gumena obuca?</summary>
              <p>Gumena obuca je vodootporna obuca namenjena radu i zastiti u zahtevnim uslovima.</p>
            </details>
            <details>
              <summary>Da li Tigar AD proizvodi gumene cizme i gumene cipele?</summary>
              <p>Da, program obuhvata gumene cizme i cipele za radnu, zastitnu, modnu i lovacku namenu.</p>
            </details>
            <details>
              <summary>Sta obuhvata tehnicka guma?</summary>
              <p>Tehnicka guma ukljucuje industrijske proizvode namenjene gradjevinarstvu, vojnom programu i zeleznicama.</p>
            </details>
            <details>
              <summary>Kako funkcionise B2B upit?</summary>
              <p>Popunite formu za odgovarajuci program, a tim iz Tigar AD prosledjuje ponudu i specifikacije.</p>
            </details>
          </div>
        </section>

        <section id="kontakt" className="section reveal" style={reveal('0.4s')}>
          <div className="section-head">
            <span className="section-tag">Kontakt</span>
            <h2>Spremni za saradnju.</h2>
            <p>
              Ovaj landing je centralna prezentacija pre razdvajanja na tri posebne stranice.
            </p>
          </div>
          <div className="card-grid">
            <article className="card">
              <h3>Tigar AD, Pirot</h3>
              <p>Industrijska proizvodnja gumene obuce, tehnicke gume i hemije.</p>
              <p className="form-note">Za upite koristite forme ili direktan kontakt tim.</p>
            </article>
            <article className="card">
              <h3>B2C prodaja</h3>
              <p>Online katalog i direktna prodaja gumene obuce.</p>
              <a className="btn" href="#obuca">
                Idi na katalog
              </a>
            </article>
            <article className="card">
              <h3>B2B programi</h3>
              <p>Tehnicka guma i hemijski proizvodi uz brz upit.</p>
              <a className="btn primary" href="#b2b">
                Posalji upit
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer reveal" style={reveal('0.44s')}>
        <h2>Tigar AD &#8212; manufacturing-first digitalni nastup.</h2>
        <p>Landing spreman za prezentaciju pre razdvajanja na posebne stranice.</p>
        <div className="cta">
          <a className="btn primary" href="#obuca">
            Kreni od obuce
          </a>
          <a className="btn" href="#top">
            Nazad na vrh
          </a>
        </div>
      </footer>
    </div>
  );
}
