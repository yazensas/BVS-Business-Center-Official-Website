"use client";

import { FormEvent, useState } from "react";

const workspaces = [
  {
    number: "01",
    title: "Private offices",
    text: "Fully furnished, secure offices for focused teams and established businesses.",
    meta: "For 1–12 people",
    image: "/bvs-corridor.jpg",
  },
  {
    number: "02",
    title: "Meeting rooms",
    text: "Professional rooms for pitches, workshops, interviews and client conversations.",
    meta: "Book by the hour or day",
    image: "/bvs-meeting.jpg",
  },
  {
    number: "03",
    title: "Flexible desks",
    text: "A ready-to-use desk and a polished environment whenever business brings you in.",
    meta: "Flexible access",
    image: "/bvs-lounge.jpg",
  },
  {
    number: "04",
    title: "Virtual office",
    text: "Build a credible Dubai presence with a professional business address and support.",
    meta: "Work from anywhere",
    image: "/bvs-sign.jpg",
  },
];

const faqs = [
  {
    q: "Can I view the offices before deciding?",
    a: "Yes. Call our team to arrange a viewing and we’ll show you the available spaces that best suit your team size and working style.",
  },
  {
    q: "Are the offices furnished?",
    a: "Our workspace options are designed to be move-in ready. Final furniture, access and service details can be confirmed with the team during your viewing.",
  },
  {
    q: "Do you offer short and long-term options?",
    a: "BVS is built around flexibility. Tell us how long you need the space and we’ll explain the currently available contract options.",
  },
  {
    q: "Where is BVS Business Center located?",
    a: "We are in Barsha Valley Building, Al Barsha 1, Dubai—conveniently positioned for teams, clients and everyday business needs.",
  },
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand ${inverse ? "brand-inverse" : ""}`} href="#top" aria-label="BVS Business Center home">
      <span className="brand-mark">BVS</span>
      <span className="brand-name">Business<br />Center</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;

  const data = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    teamSize: (form.elements.namedItem("teamSize") as HTMLSelectElement).value,
    lookingFor: (form.elements.namedItem("workspace") as HTMLSelectElement).value,
    comments: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  try {
    const response = await fetch(
  "https://script.google.com/macros/s/AKfycbyinrnWnJ2OKvSpZAmnkUi0ttTuovf-FIS0BsEMWqI9a4c7Yb3hABZEMzU9dmN20Do5/exec",
  {
    method: "POST",
    body: JSON.stringify(data),
  }
);
    await fetch("/api/send-email", {
  method: "POST",
  body: JSON.stringify(data),
});

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    alert("Unable to submit.");
  }
}

  return (
    <main id="top">
      <div className="announcement">
        <p>Private offices and flexible workspace in Al Barsha 1, Dubai</p>
        <a href="tel:+97144478808">Talk to our team <span>+971 4 447 8808</span></a>
      </div>

      <header className="site-header">
        <Brand inverse />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#workspaces">Workspaces</a>
          <a href="#experience">Why BVS</a>
          <a href="#location">Location</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="header-cta" href="#enquire">Book a viewing <span>↗</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span /><span />
        </button>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {[["Workspaces", "#workspaces"], ["Why BVS", "#experience"], ["Location", "#location"], ["FAQs", "#faq"], ["Book a viewing", "#enquire"]].map(([label, href]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<span>↗</span></a>
            ))}
          </nav>
        )}
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Al Barsha · Dubai</p>
          <h1>Space to do<br /><em>serious business.</em></h1>
          <p className="hero-intro">Private offices and flexible business solutions for teams who want a polished Dubai presence—without the usual friction.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#workspaces">Explore our spaces <span>↓</span></a>
            <a className="text-link" href="tel:+97144478808">Call +971 4 447 8808 <span>→</span></a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Contemporary executive office with warm natural light">
          <div className="hero-image-footer">
            <p>Professional spaces.<br />Ready when you are.</p>
            <span>25.1133° N<br />55.2009° E</span>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Workspace benefits">
        <p>Everything your business needs, under one roof.</p>
        <div><span>01</span><strong>Move-in ready</strong></div>
        <div><span>02</span><strong>Flexible payments</strong></div>
        <div><span>03</span><strong>Professional support</strong></div>
      </section>

      <section className="workspaces section-pad" id="workspaces">
        <div className="section-heading">
          <div><p className="eyebrow">Find your space</p><h2>Built around<br /><em>the way you work.</em></h2></div>
          <p>From your first Dubai address to a private base for a growing team, choose the space you need today—with room to evolve tomorrow.</p>
        </div>
        <div className="workspace-grid">
          {workspaces.map((space) => (
            <article className="workspace-card" key={space.title}>
              <div className="workspace-image"><img src={space.image} alt="" /><span>{space.number}</span></div>
              <div className="workspace-content">
                <h3>{space.title}</h3>
                <p>{space.text}</p>
                <div><span>{space.meta}</span><a href="#enquire" aria-label={`Enquire about ${space.title}`}>Enquire <b>↗</b></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-visual">
          <div className="experience-photo" role="img" aria-label="Elegant shared business lounge" />
          <span className="photo-index">BVS / 01</span>
        </div>
        <div className="experience-copy">
          <p className="eyebrow">The BVS experience</p>
          <h2>A workspace that reflects your ambition.</h2>
          <p className="experience-lead">Every detail is designed to help you arrive, settle in and focus on the work that matters.</p>
          <div className="feature-list">
            {[
              ["A professional first impression", "Welcome clients into a considered business environment that feels established from day one."],
              ["Simple, flexible arrangements", "Choose the right space and commitment without the burden of a traditional office setup."],
              ["Support close at hand", "A responsive on-site team helps keep your working day moving smoothly."],
            ].map(([title, text], index) => (
              <div key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>
            ))}
          </div>
          <a className="dark-link" href="#enquire">Arrange a private viewing <span>↗</span></a>
        </div>
      </section>

      <section className="included section-pad">
        <div className="included-intro">
          <p className="eyebrow">Designed for the workday</p>
          <h2>More than<br />four walls.</h2>
          <p>The practical essentials are already considered, so your team can focus on business rather than office administration.</p>
        </div>
        <div className="included-list">
          {[
            ["Furnished workspaces", "A professional setting ready for your team."],
            ["High-speed connectivity", "Reliable access for calls, meetings and daily work."],
            ["Meeting room access", "A polished setting when conversations matter."],
            ["Reception support", "A welcoming first point of contact for visitors."],
            ["Printing and scanning", "Everyday business tools within easy reach."],
            ["Comfortable common areas", "Space to pause, connect or work informally."],
          ].map(([title, text], index) => (
            <div className="included-item" key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div><b>＋</b></div>
          ))}
        </div>
      </section>

      <section className="location" id="location">
        <div className="location-map" aria-hidden="true">
          <div className="map-grid" />
          <div className="map-road road-one">Sheikh Zayed Road</div>
          <div className="map-road road-two">Umm Suqeim Street</div>
          <div className="map-pin"><span>BVS</span><i /></div>
          <span className="map-label label-one">Al Barsha 1</span>
          <span className="map-label label-two">Mall of the Emirates</span>
          <span className="map-label label-three">Dubai Internet City</span>
        </div>
        <div className="location-copy">
          <p className="eyebrow">Connected by location</p>
          <h2>Business,<br />well positioned.</h2>
          <p>Meet clients and work from a central Al Barsha address with easy access to Dubai’s major commercial districts.</p>
          <address>Offices 203–208, 2nd Floor<br />Barsha Valley Building<br />Al Barsha 1, Dubai, UAE</address>
          <a 
          href="https://maps.app.goo.gl/WbjsEvxunLHeqoZi6?g_st=ac" 
          target="_blank" 
          rel="noreferrer"
          >
          Open in Google Maps <span>↗</span>
          </a>
        </div>
      </section>

      <section className="steps section-pad">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">A simple next step</p><h2>Your new office,<br /><em>without the runaround.</em></h2></div>
          <p>Start with a conversation. We’ll help narrow down the options and arrange a visit around your schedule.</p>
        </div>
        <div className="step-grid">
          {[
            ["Tell us what you need", "Share your team size, preferred setup and expected move-in date."],
            ["Visit your best options", "Tour the available spaces and get a feel for the BVS environment."],
            ["Choose and move in", "Confirm the details, bring your team and get down to business."],
          ].map(([title, text], index) => (
            <div className="step" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>{index < 2 && <i>→</i>}</div>
          ))}
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="faq-intro"><p className="eyebrow">Good to know</p><h2>Questions,<br /><em>answered.</em></h2><p>Need something specific? Speak directly with the BVS team on <a href="tel:+97144478808">+971 4 447 8808</a>.</p></div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={faq.q}>
                <button onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                  <span>0{index + 1}</span><strong>{faq.q}</strong><b>{isOpen ? "−" : "+"}</b>
                </button>
                {isOpen && <p>{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="enquire" id="enquire">
        <div className="enquire-copy">
          <p className="eyebrow">Start a conversation</p>
          <h2>Find your place<br />at BVS.</h2>
          <p>Tell us what you’re looking for and the team can help you find the right workspace.</p>
          <div className="enquire-details">
            <span>Prefer to call?</span><a href="tel:+97144478808">+971 4 447 8808</a>
            <span>Visit us</span><p>Barsha Valley Building, Al Barsha 1</p>
          </div>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="form-success" role="status"><span>Thank you</span>
        <h3>Your enquiry has been received.</h3>
        <p>Thank you for contacting BVS Business Center. Our team will get back to you shortly.</p><button type="button" onClick={() => setSubmitted(false)}>Return to form</button></div>
          ) : (
            <>
              <div className="form-row"><label>Full name<input name="name" type="text" placeholder="Your name" required /></label><label>Phone number<input name="phone" type="tel" placeholder="+971" required /></label></div>
              <div className="form-row"><label>Work email<input name="email" type="email" placeholder="name@company.com" required /></label><label>Team size<select name="teamSize" defaultValue=""><option value="" disabled>Select</option><option>Just me</option><option>2–5 people</option><option>6–12 people</option><option>13+ people</option></select></label></div>
              <label>What are you looking for?<select name="workspace" defaultValue=""><option value="" disabled>Select a workspace</option><option>Private office</option><option>Meeting room</option><option>Flexible desk</option><option>Virtual office</option><option>Not sure yet</option></select></label>
              <label>Anything else?<textarea name="message" placeholder="Move-in date, preferred setup or questions" rows={4} /></label>
              <button className="submit-button" type="submit">Request a viewing <span>↗</span></button>
              <small>Design preview only—this form is not connected and will not send your information.</small>
            </>
          )}
        </form>
      </section>

      <footer>
        <div className="footer-top"><Brand inverse /><p>Professional workspace for modern business in the heart of Al Barsha.</p><a href="#top">Back to top ↑</a></div>
        <div className="footer-grid">
          <div><span>Explore</span><a href="#workspaces">Workspaces</a><a href="#experience">Why BVS</a><a href="#location">Location</a><a href="#faq">FAQs</a></div>
          <div><span>Workspaces</span><a href="#workspaces">Private offices</a><a href="#workspaces">Meeting rooms</a><a href="#workspaces">Flexible desks</a><a href="#workspaces">Virtual office</a></div>
          <div><span>Contact</span><a href="tel:+97144478808">+971 4 447 8808</a><p>Offices 203–208, 2nd Floor<br />Barsha Valley Building<br />Al Barsha 1, Dubai</p></div>
        </div>
        <div className="footer-bottom"><span>© 2026 BVS Business Center</span><span>Custom website design preview</span></div>
      </footer>
    </main>
  );
}
