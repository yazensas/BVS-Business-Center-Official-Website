import Link from "next/link";

export const metadata = {
  title: "Private Offices in Al Barsha, Dubai | BVS Business Center",
  description:
    "Furnished private offices in Al Barsha 1, Dubai, from AED 29,000 to AED 35,000 per year. Annual contracts with Ejari, internet, DEWA, AC, water and receptionist support included.",
};

const included = [
  ["01", "Furnished offices", "Move-in ready workspaces designed for professional teams."],
  ["02", "Ejari", "Ejari support for businesses requiring a Dubai business address."],
  ["03", "Internet / Wi-Fi", "High-speed connectivity for your everyday business needs."],
  ["04", "DEWA & AC", "Electricity, water and air conditioning included."],
  ["05", "Reception support", "Professional support for your visitors and working day."],
];

const whyBvs = [
  ["01", "Professional address", "Establish your business in a professional Al Barsha 1 location."],
  ["02", "Ready to move in", "Furnished offices and essential services are already in place."],
  ["03", "Support when you need it", "Our team is available to help with your workspace and business centre needs."],
];

const faqs = [
  {
    q: "How much do private offices cost?",
    a: "Private offices at BVS Business Center are currently priced from AED 29,000 to AED 35,000 per year, depending on the office and availability.",
  },
  {
    q: "Are the private offices furnished?",
    a: "Yes. Our private offices are furnished and designed to be ready for business. Contact the team to confirm the furniture and setup of a specific available office.",
  },
  {
    q: "Is Ejari included?",
    a: "Ejari support is included with the private office offering. Our team can explain the registration process and requirements during your viewing.",
  },
  {
    q: "What is included in the office price?",
    a: "The private office package includes the furnished office, Ejari, internet/Wi-Fi, DEWA, air conditioning, water and receptionist support.",
  },
  {
    q: "Can I view an office before renting?",
    a: "Yes. Contact BVS Business Center to arrange a viewing and see the currently available private offices.",
  },
];

export default function PrivateOfficesPage() {
  return (
    <main className="private-offices-page">

      {/* HEADER */}
      <header className="site-header">
        <Link href="/" className="brand brand-inverse">
          <span className="brand-mark">BVS</span>
          <span className="brand-name">
            Business
            <br />
            Center
          </span>
        </Link>

        <nav className="private-nav">
          <a href="#private-offices">Private offices</a>
          <a href="#included">What's included</a>
          <a href="#faq">FAQs</a>
          <a href="#viewing">Book a viewing ↗</a>
        </nav>

        <a className="private-header-phone" href="tel:+97144478808">
          Call us ↗
        </a>
      </header>

      {/* HERO */}
      <section className="private-hero" id="private-offices">
        <div className="private-container private-hero-inner">

          <div className="private-hero-copy">
            <p className="eyebrow">
              Private offices · Al Barsha 1 · Dubai
            </p>

            <h1>
              Private offices in
              <br />
              <em>Al Barsha, Dubai.</em>
            </h1>

            <p className="private-hero-text">
              Furnished private offices for businesses looking for a
              professional Dubai address and a ready-to-use workspace.
            </p>

            <div className="private-actions">
              <a className="private-button" href="#viewing">
                Request a viewing <span>↗</span>
              </a>

              <a
                className="private-text-link"
                href="tel:+97144478808"
              >
                Call +971 4 447 8808 <span>→</span>
              </a>
            </div>
          </div>

          <div className="private-hero-image">
            <div>
              <p>
                Professional spaces.
                <br />
                Ready when you are.
              </p>

              <span>
                BVS / PRIVATE
                <br />
                OFFICES
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* PRICE */}
      <section className="private-price">
        <div className="private-container private-price-inner">
          <div>
            <p className="private-label">Private office pricing</p>

            <h2>
              AED 29,000–35,000
            </h2>

            <p className="private-price-period">
              per year
            </p>
          </div>

          <div className="private-price-note">
            <strong>Ready for business.</strong>
            <p>
              Furnished offices with Ejari, internet, DEWA, AC,
              water and receptionist support included.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK DETAILS */}
      <section className="private-details">
        <div className="private-container private-details-grid">

          <div>
            <span>Pricing</span>
            <strong>AED 29,000–35,000 / year</strong>
          </div>

          <div>
            <span>Contract</span>
            <strong>Annual contracts</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>Al Barsha 1, Dubai</strong>
          </div>

          <div>
            <span>Parking</span>
            <strong>Not included</strong>
          </div>

        </div>
      </section>

      {/* INCLUDED */}
      <section className="private-included section-pad" id="included">
        <div className="private-container private-two-column">

          <div className="private-section-intro">
            <p className="eyebrow">What's included</p>

            <h2>
              Everything
              <br />
              <em>you need.</em>
            </h2>

            <p>
              Your office is designed to be ready for business from
              the moment you move in.
            </p>
          </div>

          <div className="private-list">
            {included.map(([number, title, text]) => (
              <div className="private-list-item" key={title}>
                <span>{number}</span>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

                <b>＋</b>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY BVS */}
      <section className="private-why">
        <div className="private-container private-two-column">

          <div className="private-section-intro">
            <p className="eyebrow">Why BVS</p>

            <h2>
              A workspace that
              <br />
              <em>works for you.</em>
            </h2>

            <p>
              From your first viewing to moving in, BVS keeps the
              process straightforward so you can concentrate on
              running your business.
            </p>
          </div>

          <div className="private-list private-list-light">
            {whyBvs.map(([number, title, text]) => (
              <div className="private-list-item" key={title}>
                <span>{number}</span>

                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="private-faq section-pad" id="faq">
        <div className="private-container private-two-column">

          <div className="private-section-intro">
            <p className="eyebrow">Good to know</p>

            <h2>
              Questions,
              <br />
              <em>answered.</em>
            </h2>

            <p>
              Still have a question? Call the BVS team on{" "}
              <a href="tel:+97144478808">
                +971 4 447 8808
              </a>.
            </p>
          </div>

          <div className="private-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q}>
                <summary>
                  <span>0{index + 1}</span>
                  <strong>{faq.q}</strong>
                  <b>＋</b>
                </summary>

                <p>{faq.a}</p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="private-cta" id="viewing">
        <div className="private-cta-inner">

          <p className="eyebrow">
            Private offices at BVS
          </p>

          <h2>
            Find the right office
            <br />
            <em>for your team.</em>
          </h2>

          <p>
            Tell us what you need and arrange a viewing of the
            private offices currently available at BVS Business Center.
          </p>

          <a className="private-button" href="/#enquire">
            Request a viewing <span>↗</span>
          </a>

          <div className="private-cta-contact">
            <span>Prefer to call?</span>
            <a href="tel:+97144478808">
              +971 4 447 8808
            </a>
          </div>

          <Link href="/" className="private-back">
            ← Back to BVS Business Center
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <Link href="/" className="brand brand-inverse">
            <span className="brand-mark">BVS</span>
            <span className="brand-name">
              Business
              <br />
              Center
            </span>
          </Link>

          <p>
            Professional workspace for modern business in the heart
            of Al Barsha.
          </p>

          <a href="#private-offices">
            Back to top ↑
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 BVS Business Center Al Barsha 1, Dubai
          </span>
        </div>
      </footer>

    </main>
  );
}
