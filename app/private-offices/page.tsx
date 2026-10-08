import Link from "next/link";

export const metadata = {
  title: "Private Offices in Al Barsha 1, Dubai | BVS Business Center",
  description:
    "Furnished private offices in Al Barsha 1, Dubai, from AED 29,000 per year. Ejari, internet, DEWA, AC, water and receptionist support included.",
};

const included = [
  ["01", "Furnished offices", "Move-in ready workspaces designed for professional teams."],
  ["02", "Ejari", "Ejari support for businesses requiring a Dubai business address."],
  ["03", "Internet / Wi-Fi", "High-speed connectivity for your everyday business needs."],
  ["04", "DEWA & AC", "Electricity, water and air conditioning included."],
  ["05", "Reception support", "Professional support for your visitors and working day."],
];

const officeFacts = [
  ["Pricing", "AED 29,000–35,000 / year"],
  ["Contract", "Annual contracts"],
  ["Location", "Al Barsha 1, Dubai"],
  ["Parking", "Not included"],
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
        <Link href="/" className="brand brand-inverse" aria-label="BVS Business Center home">
          <span className="brand-mark">BVS</span>
          <span className="brand-name">
            Business
            <br />
            Center
          </span>
        </Link>

        <nav className="private-office-nav">
          <a href="#offices">Private offices</a>
          <a href="#included">What's included</a>
          <a href="#faq">FAQs</a>
          <a href="#viewing">Book a viewing</a>
        </nav>

        <a className="header-cta" href="tel:+97144478808">
          Call us <span>↗</span>
        </a>
      </header>

      {/* HERO */}
      <section className="private-office-hero">

        <div className="private-office-hero-copy">
          <p className="eyebrow">Private offices · Al Barsha 1 · Dubai</p>

          <h1>
            Private offices in
            <br />
            <em>Al Barsha, Dubai.</em>
          </h1>

          <p className="private-office-intro">
            Furnished private offices for businesses looking for a
            professional Dubai address and a ready-to-use workspace.
          </p>

          <div className="private-office-actions">
            <a className="button button-light" href="#viewing">
              Request a viewing <span>↗</span>
            </a>

            <a className="text-link" href="tel:+97144478808">
              +971 4 447 8808 <span>→</span>
            </a>
          </div>
        </div>

        <div className="private-office-hero-image">
          <div className="private-office-image-footer">
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

      </section>

      {/* PRICE / TRUST STRIP */}
      <section className="private-office-price">

        <div>
          <p className="eyebrow">Private office pricing</p>

          <h2>AED 29,000–35,000</h2>

          <p>per year</p>
        </div>

        <div className="private-office-price-note">
          <strong>Ready for business.</strong>
          <span>
            Furnished offices with Ejari, internet, DEWA, AC, water and
            receptionist support included.
          </span>
        </div>

      </section>

      {/* OFFICE DETAILS */}
      <section className="private-office-details section-pad" id="offices">

        <div className="section-heading">
          <div>
            <p className="eyebrow">Private offices at BVS</p>

            <h2>
              A private base for
              <br />
              <em>serious business.</em>
            </h2>
          </div>

          <p>
            A professional, furnished office in Al Barsha 1 for businesses
            that want a ready-to-use workspace without the complexity of
            setting up a traditional office.
          </p>
        </div>

        <div className="office-facts">
          {officeFacts.map(([label, value]) => (
            <div className="office-fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

      </section>

      {/* INCLUDED */}
      <section className="private-office-included" id="included">

        <div className="private-office-included-intro">
          <p className="eyebrow">What's included</p>

          <h2>
            Everything
            <br />
            you need.
          </h2>

          <p>
            Your office is designed to be ready for business from the moment
            you move in.
          </p>
        </div>

        <div className="private-office-included-list">

          {included.map(([number, title, text]) => (
            <div className="private-office-included-item" key={title}>

              <span>{number}</span>

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>

              <b>＋</b>

            </div>
          ))}

        </div>

      </section>

      {/* WHY BVS */}
      <section className="private-office-why">

        <div className="private-office-why-image">
          <div />
          <span>BVS / 01</span>
        </div>

        <div className="private-office-why-copy">

          <p className="eyebrow">Why BVS</p>

          <h2>
            A workspace that
            <br />
            <em>works for you.</em>
          </h2>

          <p className="private-office-lead">
            From your first viewing to moving in, BVS keeps the process
            straightforward so you can concentrate on running your business.
          </p>

          <div className="private-office-benefits">

            <div>
              <span>01</span>
              <div>
                <h3>Professional address</h3>
                <p>
                  Establish your business in a professional Al Barsha 1
                  location.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h3>Ready to move in</h3>
                <p>
                  Furnished offices and essential services are already in
                  place.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h3>Support when you need it</h3>
                <p>
                  Our team is available to help with your workspace and
                  business centre needs.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="private-office-faq section-pad" id="faq">

        <div className="private-office-faq-intro">

          <p className="eyebrow">Good to know</p>

          <h2>
            Questions,
            <br />
            <em>answered.</em>
          </h2>

          <p>
            Still have a question? Call the BVS team on{" "}
            <a href="tel:+97144478808">+971 4 447 8808</a>.
          </p>

        </div>

        <div className="private-office-faq-list">

          {faqs.map((faq, index) => (
            <details key={faq.q}>
              <summary>
                <span>0{index + 1}</span>
                <strong>{faq.q}</strong>
                <b>+</b>
              </summary>

              <p>{faq.a}</p>
            </details>
          ))}

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="private-office-cta" id="viewing">

        <div>

          <p className="eyebrow">Private offices at BVS</p>

          <h2>
            Find the right office
            <br />
            <em>for your team.</em>
          </h2>

          <p>
            Tell us what you need and arrange a viewing of the private
            offices currently available at BVS Business Center.
          </p>

          <div className="private-office-cta-actions">

            <a className="button button-light" href="/#enquire">
              Request a viewing <span>↗</span>
            </a>

            <a className="text-link" href="tel:+97144478808">
              Call +971 4 447 8808 <span>→</span>
            </a>

          </div>

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
            Professional workspace for modern business in the heart of
            Al Barsha.
          </p>

          <Link href="/">Back to home ↑</Link>

        </div>

        <div className="footer-bottom">
          <span>© 2026 BVS Business Center</span>
          <span>Al Barsha 1, Dubai</span>
        </div>

      </footer>

    </main>
  );
}
