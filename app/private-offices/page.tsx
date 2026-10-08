import Link from "next/link";

export const metadata = {
  title: "Private Offices in Al Barsha, Dubai | BVS Business Center",
  description:
    "Furnished private offices in Al Barsha 1, Dubai, from AED 29,000 per year plus VAT. Annual contracts with Ejari, internet, DEWA, AC, water and receptionist support included.",
};

const included = [
  {
    number: "01",
    title: "Furnished offices",
    text: "Move-in ready workspaces designed for professional teams.",
  },
  {
    number: "02",
    title: "Ejari",
    text: "Ejari support for businesses requiring a Dubai business address.",
  },
  {
    number: "03",
    title: "Internet / Wi-Fi",
    text: "High-speed connectivity for your everyday business needs.",
  },
  {
    number: "04",
    title: "DEWA & AC",
    text: "Electricity, water and air conditioning included.",
  },
  {
    number: "05",
    title: "Reception support",
    text: "Professional support for your visitors and working day.",
  },
];

const faqs = [
  {
  q: "How much do private offices cost?",
  a: "Private offices at BVS Business Center are currently priced from AED 29,000 to AED 35,000 per year, plus VAT, depending on the office and availability.",
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
      <header className="site-header private-header">
        <Link href="/" className="brand brand-inverse">
          <span className="brand-mark">BVS</span>
          <span className="brand-name">
            Business
            <br />
            Center
          </span>
        </Link>

        <nav className="private-nav">
          <a href="#offices">Private offices</a>
          <a href="#included">What's included</a>
          <a href="#faq">FAQs</a>
        </nav>

        <a className="private-header-cta" href="#viewing">
          Book a viewing <span>↗</span>
        </a>
      </header>

      {/* HERO */}
      <section className="private-hero">
        <div className="private-hero-inner">

          <div className="private-hero-copy">
            <p className="eyebrow">Private offices · Al Barsha 1 · Dubai</p>

            <h1>
              Private offices in
              <br />
              <em>Al Barsha, Dubai.</em>
            </h1>

            <p className="private-hero-intro">
              Furnished private offices for businesses looking for a
              professional Dubai address and a ready-to-use workspace.
            </p>

            <div className="private-hero-actions">
              <a className="button button-light" href="#viewing">
                Request a viewing <span>↗</span>
              </a>

              <a className="text-link" href="tel:+97144478808">
                Call +971 4 447 8808 <span>→</span>
              </a>
            </div>
          </div>

          <div className="private-hero-image">
            <div className="private-image-label">
              <span>BVS / PRIVATE</span>
              <strong>OFFICES</strong>
            </div>
          </div>

        </div>
      </section>

      {/* PRICE STRIP */}
      <section className="private-price">
        <div className="private-price-inner">

          <div>
            <p className="private-label">Private office pricing</p>

            <h2>
            AED 29,000–35,000
            </h2>

            <p className="price-period">per year + VAT</p>
            
          </div>

          <div className="price-note">
            <strong>Ready for business.</strong>
            <p>
              Furnished offices with Ejari, internet, DEWA, AC, water and
              receptionist support included.
            </p>
          </div>

        </div>
      </section>

      {/* INTRO / OFFICE DETAILS */}
      <section className="private-intro section-pad" id="offices">
        <div className="private-intro-grid">

          <div>
            <p className="eyebrow">Private offices at BVS</p>

            <h2>
              A private base for
              <br />
              <em>serious business.</em>
            </h2>
          </div>

          <div className="private-intro-copy">
            <p>
              A professional, furnished office in Al Barsha 1 for businesses
              that want a ready-to-use workspace without the complexity of
              setting up a traditional office.
            </p>

            <div className="private-facts">
              <div>
              <span>Pricing</span>
              <strong>AED 29,000–35,000 / year + VAT</strong>
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
          </div>

        </div>
      </section>

      {/* INCLUDED */}
      <section className="private-included" id="included">
        <div className="private-included-inner">

          <div className="private-included-intro">
            <p className="eyebrow">What's included</p>

            <h2>
              Everything
              <br />
              <em>you need.</em>
            </h2>

            <p>
              Your office is designed to be ready for business from the
              moment you move in.
            </p>
          </div>

          <div className="private-included-list">
            {included.map((item) => (
              <div className="private-included-item" key={item.number}>

                <span>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <b>＋</b>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY BVS */}
      <section className="private-why">
        <div className="private-why-inner">

          <div className="private-why-image">
            <div>
              <span>BVS / 01</span>
            </div>
          </div>

          <div className="private-why-copy">
            <p className="eyebrow">Why BVS</p>

            <h2>
              A workspace that
              <br />
              <em>works for you.</em>
            </h2>

            <p className="private-why-lead">
              From your first viewing to moving in, BVS keeps the process
              straightforward so you can concentrate on running your business.
            </p>

            <div className="private-benefits">

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

        </div>
      </section>

      {/* FAQ */}
      <section className="private-faq section-pad" id="faq">
        <div className="private-faq-inner">

          <div className="private-faq-intro">
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

          <div className="private-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.q} className="private-faq-item">
                <summary>
                  <span>0{index + 1}</span>
                  <strong>{faq.q}</strong>
                  <b>+</b>
                </summary>

                <p>{faq.a}</p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="private-cta" id="viewing">

        <div className="private-cta-inner">

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
          </div>

          <div className="private-cta-actions">

            <a className="button button-light" href="tel:+97144478808">
              Call +971 4 447 8808 <span>↗</span>
            </a>

            <Link href="/">
              ← Back to BVS Business Center
            </Link>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="private-footer">

        <div className="private-footer-top">

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

          <a href="#top">Back to top ↑</a>

        </div>

        <div className="private-footer-bottom">
          <span>© 2026 BVS Business Center</span>

          <span>
            Al Barsha 1, Dubai · +971 4 447 8808
          </span>
        </div>

      </footer>

    </main>
  );
}
