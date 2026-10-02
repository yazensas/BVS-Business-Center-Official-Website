import Link from "next/link";

export const metadata = {
  title: "Private Offices in Al Barsha, Dubai | BVS Business Center",
  description:
    "Furnished private offices in Al Barsha 1, Dubai, from AED 29,000 to AED 35,000 per year. Annual contracts with Ejari, internet, DEWA, AC, water and receptionist support included.",
};

export default function PrivateOfficesPage() {
  return (
    <main>
      <header style={{ padding: "24px", borderBottom: "1px solid #ddd" }}>
        <Link href="/">← BVS Business Center</Link>
      </header>

      <section style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
        <p>AL BARSHA 1 · DUBAI</p>

        <h1>Private Offices in Al Barsha, Dubai</h1>

        <p>
          Furnished private offices for businesses looking for a professional
          Dubai address, a ready-to-use workspace and straightforward annual
          arrangements.
        </p>

        <p>
          <strong>From AED 29,000–35,000 per year</strong>
        </p>

        <a href="tel:+97144478808">
          Call +971 4 447 8808
        </a>

        <h2>What's included</h2>

        <ul>
          <li>Furnished office</li>
          <li>Ejari</li>
          <li>Internet / Wi-Fi</li>
          <li>DEWA</li>
          <li>Air conditioning</li>
          <li>Water</li>
          <li>Receptionist support</li>
        </ul>

        <h2>Office sizes</h2>

        <p>
          Office capacity depends on the size and availability of the unit.
          Contact the BVS team to discuss the options currently available for
          your business.
        </p>

        <h2>Contract</h2>

        <p>Private offices are available on annual contracts.</p>

        <h2>Parking</h2>

        <p>Parking is not included.</p>

        <h2>Arrange a viewing</h2>

        <p>
          Tell us about your team and we'll help you find the private office
          that fits your requirements.
        </p>

        <a href="/#enquire">
          Request a viewing →
        </a>

        <p style={{ marginTop: "40px" }}>
          <Link href="/">← Back to BVS Business Center</Link>
        </p>
      </section>
    </main>
  );
}
