import Link from "next/link";

export const metadata = {
  title: "Meeting Room in Al Barsha, Dubai | BVS Business Center",
  description:
    "Meeting room at BVS Business Center in Al Barsha 1, Dubai. Free for BVS tenants. Capacity for 10–15 people with Wi-Fi, projector, white screen, reception support and air conditioning.",
};

const included = [
  {
    number: "01",
    title: "Wi-Fi",
    text: "Reliable internet connectivity for meetings, presentations and video calls.",
  },
  {
    number: "02",
    title: "Projector",
    text: "Projector available for presentations and business meetings.",
  },
  {
    number: "03",
    title: "White screen",
    text: "A white screen is available for presentations and visual discussions.",
  },
  {
    number: "04",
    title: "Air conditioning",
    text: "A comfortable, air-conditioned meeting environment.",
  },
  {
    number: "05",
    title: "Reception support",
    text: "Reception support is available during your meeting.",
  },
  {
    number: "06",
    title: "Water",
    text: "Water is available from reception for meeting room users.",
  },
];

const faqs = [
  {
    q: "Is the meeting room free?",
    a: "Yes. The meeting room is free for BVS Business Center tenants.",
  },
  {
    q: "How many people can the meeting room accommodate?",
    a: "The meeting room can accommodate approximately 10 to 15 people.",
  },
  {
    q: "How can I book the meeting room?",
    a: "Contact the BVS team or reception to request a booking. Booking requests must be made at least 1 day in advance.",
  },
  {
    q: "Can I book the room for an hour?",
    a: "Yes. The meeting room can be booked hourly, as well as for a half-day or full-day.",
  },
  {
    q: "What equipment is available?",
    a: "The meeting room includes Wi-Fi, a projector, a white screen and air conditioning. Water is available from reception.",
  },
  {
    q: "What are the meeting room hours?",
    a: "The meeting room is available Monday to Saturday from 9:00 AM to 5:00 PM.",
  },
];

export default function MeetingRoomPage() {
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
          <a href="#meeting-room">Meeting room</a>
          <a href="#included">What's included</a>
          <a href="#faq">FAQs</a>
        </nav>

        <a className="private-header-cta" href="#booking">
          Request a booking <span>↗</span>
        </a>
      </header>

      {/* HERO */}
      <section className="private-hero">
        <div className="private-hero-inner">

          <div className="private-hero-copy">
            <p className="eyebrow">
              Meeting room · Al Barsha 1 · Dubai
            </p>

            <h1>
              A professional meeting room
              <br />
              <em>for BVS tenants.</em>
            </h1>

            <p className="private-hero-intro">
              A comfortable meeting space for presentations, team meetings
              and business discussions, available exclusively to BVS tenants.
            </p>

            <div className="private-hero-actions">
              <a className="button button-light" href="#booking">
                Request a booking <span>↗</span>
              </a>

              <a className="text-link" href="tel:+97144478808">
                Call +971 4 447 8808 <span>→</span>
              </a>
            </div>
          </div>

          <div className="private-hero-image">
            <div className="private-image-label">
              <span>BVS / MEETING</span>
              <strong>ROOM</strong>
            </div>
          </div>

        </div>
      </section>

      {/* PRICE / AVAILABILITY */}
      <section className="private-price">
        <div className="private-price-inner">

          <div>
            <p className="private-label">
              Tenant meeting room
            </p>

            <h2>
              FREE FOR TENANTS
            </h2>

            <p className="price-period">
              Subject to availability
            </p>
          </div>

          <div className="price-note">
            <strong>Advance booking required.</strong>

            <p>
              Booking requests must be made at least 1 day in advance.
              Available hourly, half-day or full-day.
            </p>
          </div>

        </div>
      </section>

      {/* MEETING ROOM DETAILS */}
      <section
        className="private-intro section-pad"
        id="meeting-room"
      >
        <div className="private-intro-grid">

          <div>
            <p className="eyebrow">
              Meeting room at BVS
            </p>

            <h2>
              A space for
              <br />
              <em>productive meetings.</em>
            </h2>
          </div>

          <div className="private-intro-copy">

            <p>
              The BVS meeting room provides a professional space for tenants
              to meet clients, colleagues and business partners in a
              comfortable environment.
            </p>

            <div className="private-facts">

              <div>
                <span>Price</span>
                <strong>Free for BVS tenants</strong>
              </div>

              <div>
                <span>Capacity</span>
                <strong>10–15 people</strong>
              </div>

              <div>
                <span>Booking</span>
                <strong>Hourly / Half-day / Full-day</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>BVS 2nd Floor</strong>
              </div>

              <div>
                <span>Hours</span>
                <strong>Mon–Sat · 9:00 AM–5:00 PM</strong>
              </div>

              <div>
                <span>Notice</span>
                <strong>Book at least 1 day in advance</strong>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* INCLUDED */}
      <section className="private-included" id="included">

        <div className="private-included-inner">

          <div className="private-included-intro">

            <p className="eyebrow">
              What's included
            </p>

            <h2>
              Everything
              <br />
              <em>for your meeting.</em>
            </h2>

            <p>
              The meeting room is equipped with the essentials you need for
              a professional and productive business meeting.
            </p>

          </div>

          <div className="private-included-list">

            {included.map((item) => (
              <div
                className="private-included-item"
                key={item.number}
              >

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

      {/* BOOKING INFORMATION */}
      <section className="private-why" id="booking">

        <div className="private-why-inner">

          <div className="private-why-image">

            <div>
              <span>BVS / 01</span>
            </div>

          </div>

          <div className="private-why-copy">

            <p className="eyebrow">
              Booking information
            </p>

            <h2>
              Plan your meeting
              <br />
              <em>in advance.</em>
            </h2>

            <p className="private-why-lead">
              Meeting room bookings are available to BVS tenants. To help us
              prepare the room for your meeting, booking requests must be
              submitted at least 1 day in advance.
            </p>

            <div className="private-benefits">

              <div>
                <span>01</span>

                <div>
                  <h3>Request your booking</h3>

                  <p>
                    Contact BVS reception or the BVS team with your preferred
                    date and time.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <h3>Choose your duration</h3>

                  <p>
                    Book the meeting room hourly, for a half-day or for a
                    full-day.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <h3>Receive confirmation</h3>

                  <p>
                    Your booking is subject to room availability and
                    confirmation by BVS.
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

            <p className="eyebrow">
              Good to know
            </p>

            <h2>
              Questions,
              <br />
              <em>answered.</em>
            </h2>

            <p>
              Still have a question? Call the BVS team on{" "}
              <a href="tel:+97144478808">
                +971 4 447 8808
              </a>
              .
            </p>

          </div>

          <div className="private-faq-list">

            {faqs.map((faq, index) => (

              <details
                key={faq.q}
                className="private-faq-item"
              >

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

      {/* FINAL CTA */}
      <section className="private-cta">

        <div className="private-cta-inner">

          <div>

            <p className="eyebrow">
              Meeting room at BVS
            </p>

            <h2>
              Ready for your next
              <br />
              <em>meeting?</em>
            </h2>

            <p>
              Contact BVS to request a meeting room booking. Please remember
              that booking requests must be made at least 1 day in advance.
            </p>

          </div>

          <div className="private-cta-actions">

            <a
              className="button button-light"
              href="tel:+97144478808"
            >
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

            <span className="brand-mark">
              BVS
            </span>

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

          <a href="#meeting-room">
            Back to top ↑
          </a>

        </div>

        <div className="private-footer-bottom">

          <span>
            © 2026 BVS Business Center
          </span>

          <span>
            Al Barsha 1, Dubai · +971 4 447 8808
          </span>

        </div>

      </footer>

    </main>
  );
}
