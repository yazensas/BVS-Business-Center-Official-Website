import Link from "next/link";

export const metadata = {
  title: "Private Offices in Al Barsha, Dubai | BVS Business Center",
  description:
    "Furnished private offices in Al Barsha 1, Dubai, from AED 29,000 to AED 35,000 per year. Annual contracts with Ejari, internet, DEWA, AC, water and receptionist support included.",
};

const included = [
  "Furnished office",
  "Ejari",
  "Internet / Wi-Fi",
  "DEWA",
  "Air conditioning",
  "Water",
  "Receptionist support",
];

export default function PrivateOfficesPage() {
  return (
    <main className="private-offices-page">

      {/* TOP ANNOUNCEMENT */}
      <div className="announcement">
        <p>Private offices in Al Barsha 1, Dubai</p>

        <a href="tel:+97144478808">
          Talk to our team <span>+971 4 447 8808</span>
        </a>
      </div>

      {/* HEADER */}
      <header className="site-header private-header">
        <Link
          href="/"
          className="brand brand-inverse"
          aria-label="BVS Business Center home"
        >
          <span className="brand-mark">BVS</span>

          <span className="brand-name">
            Business
            <br />
            Center
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/#workspaces">Workspaces</Link>
          <Link href="/#experience">Why BVS</Link>
          <Link href="/#location">Location</Link>
          <Link href="/#faq">FAQs</Link>
        </nav>

        <a className="header-cta" href="/#enquire">
          Book a viewing <span>↗</span>
        </a>
      </header>

      {/* HERO */}
      <section className="private-hero">
        <div className="private-hero-copy">

          <p className="eyebrow">
            Private offices · Al Barsha 1 · Dubai
          </p>

          <h1>
            Private offices
            <br />
            <em>in Al Barsha, Dubai.</em>
          </h1>

          <p className="private-hero-intro">
            Fully furnished private offices for teams that want a professional
            Dubai address, a ready-to-use workspace and straightforward
            business support.
          </p>

          <div className="private-hero-actions">
            <a className="button button-light" href="/#enquire">
              Request a viewing <span>↗</span>
            </a>

            <a
              className="text-link"
              href="tel:+97144478808"
            >
              Call +971 4 447 8808 <span>→</span>
            </a>
          </div>

          <div className="private-hero-facts">
            <div>
              <span>From</span>
              <strong>AED 29,000 / year</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Al Barsha 1, Dubai</strong>
            </div>

            <div>
              <span>Contract</span>
              <strong>Annual</strong>
            </div>
          </div>

        </div>

        <div className="private-hero-image">
          <div className="private-image-label">
            <p>
              Furnished offices.
              <br />
              Ready for business.
            </p>

            <span>BVS / PRIVATE OFFICES</span>
          </div>
        </div>
      </section>

      {/* PRICE STRIP */}
      <section className="private-price-strip">
        <div>
          <p className="eyebrow">Annual office pricing</p>

          <h2>
            AED 29,000–35,000
            <span> / year</span>
          </h2>
        </div>

        <p>
          Prices vary by office size and availability. Contact the BVS team
          for the currently available units.
        </p>
      </section>

      {/* INTRO / INCLUDED */}
      <section className="private-section private-included">

        <div className="private-section-intro">
          <p className="eyebrow">
            What's included
          </p>

          <h2>
            Ready for
            <br />
            <em>business.</em>
          </h2>

          <p>
            Your office is prepared so you can focus on running your business,
            rather than setting up an office from scratch.
          </p>
        </div>

        <div className="private-included-list">

          {included.map((item, index) => (
            <div
              className="private-included-item"
              key={item}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{item}</strong>

              <b>✓</b>
            </div>
          ))}

        </div>

      </section>

      {/* KEY DETAILS */}
      <section className="private-details">

        <div className="private-detail">
          <p className="eyebrow">Contract</p>

          <h3>Annual contracts</h3>

          <p>
            Straightforward annual office arrangements for businesses looking
            for a stable Dubai workspace.
          </p>
        </div>

        <div className="private-detail">
          <p className="eyebrow">Parking</p>

          <h3>Parking is not included</h3>

          <p>
            Please speak with the BVS team about available parking options
            around the building.
          </p>
        </div>

        <div className="private-detail">
          <p className="eyebrow">Location</p>

          <h3>Al Barsha 1, Dubai</h3>

          <p>
            Barsha Valley Building, with convenient access to the surrounding
            Al Barsha business and commercial areas.
          </p>
        </div>

      </section>

      {/* WHY BVS */}
      <section className="private-why">

        <div className="private-why-image">
          <div>
            <span>BVS / 01</span>
          </div>
        </div>

        <div className="private-why-copy">

          <p className="eyebrow">
            The BVS experience
          </p>

          <h2>
            More than
            <br />
            <em>an office.</em>
          </h2>

          <p className="private-lead">
            A private office should give your team more than four walls.
            BVS combines a professional setting with practical support for
            your everyday business needs.
          </p>

          <div className="private-benefits">

            <div>
              <span>01</span>

              <div>
                <h3>Professional first impression</h3>

                <p>
                  Give clients and visitors a polished place to meet in
                  Al Barsha.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>

              <div>
                <h3>Ready to use</h3>

                <p>
                  Move into a furnished workspace without building an office
                  from the ground up.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>

              <div>
                <h3>Business support</h3>

                <p>
                  Reception and practical workspace services help keep the
                  working day moving.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* WHO IT IS FOR */}
      <section className="private-who">

        <div>
          <p className="eyebrow">
            Built for your business
          </p>

          <h2>
            A private base
            <br />
            <em>that fits your team.</em>
          </h2>
        </div>

        <div className="private-who-grid">

          <div>
            <span>01</span>
            <h3>Small teams</h3>
            <p>
              A dedicated professional environment for focused day-to-day
              work.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Growing businesses</h3>
            <p>
              A more established workspace as your team and client base grow.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Dubai presence</h3>
            <p>
              A professional Al Barsha address for businesses operating in
              Dubai.
            </p>
          </div>

        </div>

      </section>

      {/* LOCATION */}
      <section className="private-location">

        <div className="private-location-copy">

          <p className="eyebrow">
            Connected by location
          </p>

          <h2>
            Business,
            <br />
            <em>well positioned.</em>
          </h2>

          <p>
            Work from a central Al Barsha 1 address with convenient access to
            Dubai's major commercial districts.
          </p>

          <address>
            Offices 203–208, 2nd Floor
            <br />
            Barsha Valley Building
            <br />
            Al Barsha 1, Dubai, UAE
          </address>

          <a
            href="https://maps.app.goo.gl/WbjsEvxunLHeqoZi6?g_st=ac"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps <span>↗</span>
          </a>

        </div>

        <div className="private-location-visual">
          <div className="private-location-card">
            <span>BVS</span>
            <strong>Al Barsha 1</strong>
            <p>Dubai, UAE</p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="private-final">

        <p className="eyebrow">
          Private offices at BVS
        </p>

        <h2>
          Find the right office
          <br />
          <em>for your team.</em>
        </h2>

        <p>
          Office capacity depends on the size and availability of each unit.
          Speak with the BVS team to see the offices currently available.
        </p>

        <div className="private-final-actions">

          <a
            className="button private-dark-button"
            href="/#enquire"
          >
            Request a viewing <span>↗</span>
          </a>

          <a
            className="private-call"
            href="tel:+97144478808"
          >
            +971 4 447 8808
          </a>

        </div>

        <Link
          href="/"
          className="private-back"
        >
          ← Back to BVS Business Center
        </Link>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-top">

          <Link
            href="/"
            className="brand brand-inverse"
          >
            <span className="brand-mark">BVS</span>

            <span className="brand-name">
              Business
              <br />
              Center
            </span>
          </Link>

          <p>
            Professional workspace for modern business in the heart of
            Al Barsha.
          </p>

          <Link href="/">
            Back to home ↑
          </Link>

        </div>

        <div className="footer-grid">

          <div>
            <span>Explore</span>
            <Link href="/">Home</Link>
            <Link href="/#workspaces">Workspaces</Link>
            <Link href="/#experience">Why BVS</Link>
            <Link href="/#location">Location</Link>
          </div>

          <div>
            <span>Workspaces</span>
            <Link href="/private-offices">Private offices</Link>
            <Link href="/#workspaces">Meeting rooms</Link>
            <Link href="/#workspaces">Flexible desks</Link>
            <Link href="/#workspaces">Virtual office</Link>
          </div>

          <div>
            <span>Contact</span>

            <a href="tel:+97144478808">
              +971 4 447 8808
            </a>

            <p>
              Offices 203–208, 2nd Floor
              <br />
              Barsha Valley Building
              <br />
              Al Barsha 1, Dubai
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© 2026 BVS Business Center</span>
        </div>

      </footer>

    </main>
  );
}
