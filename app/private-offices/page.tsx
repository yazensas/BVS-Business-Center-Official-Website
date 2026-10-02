import Link from "next/link";

export const metadata = {
  title: "Private Offices in Al Barsha, Dubai | BVS Business Center",
  description:
    "Furnished private offices in Al Barsha 1, Dubai, from AED 29,000 to AED 35,000 per year. Annual contracts with Ejari, internet, DEWA, AC, water and receptionist support included.",
};

export default function PrivateOfficesPage() {
  return (
    <main className="private-offices-page">
      {/* Header */}
      <header className="site-header">

        <Link href="/" className="brand brand-inverse">
          BVS Business Center
        </Link>

      </header>


      {/* Hero */}
      <section
        style={{
          padding: "90px 6% 70px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "20px",
            color: "#777",
          }}
        >
          Al Barsha 1 · Dubai
        </p>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 82px)",
            lineHeight: 1.02,
            fontWeight: 500,
            maxWidth: "900px",
            margin: "0 0 30px",
          }}
        >
          Private offices in Al Barsha, Dubai
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            maxWidth: "720px",
            color: "#555",
          }}
        >
          Furnished private offices for businesses looking for a professional
          Dubai address and a ready-to-use workspace.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/#enquire"
            style={{
              display: "inline-block",
              padding: "15px 24px",
              background: "#1d1d1b",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Request a viewing ↗
          </a>

          <a
            href="tel:+97144478808"
            style={{
              display: "inline-block",
              padding: "15px 24px",
              border: "1px solid #1d1d1b",
              color: "#1d1d1b",
              textDecoration: "none",
            }}
          >
            Call +971 4 447 8808
          </a>
        </div>
      </section>

      {/* Price */}
      <section
        style={{
          background: "#1d1d1b",
          color: "#fff",
          padding: "55px 6%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              color: "#bbb",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "12px",
            }}
          >
            Annual office pricing
          </p>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 500,
              margin: 0,
            }}
          >
            AED 29,000–35,000 / year
          </h2>
        </div>
      </section>

      {/* Details */}
      <section
        style={{
          padding: "80px 6%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
          }}
        >
          <div>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "12px",
                color: "#777",
              }}
            >
              What's included
            </p>

            <h2
              style={{
                fontSize: "40px",
                fontWeight: 500,
                marginTop: "15px",
              }}
            >
              Ready for business.
            </h2>
          </div>

          <div>
            <ul
              style={{
                padding: 0,
                margin: 0,
                listStyle: "none",
              }}
            >
              {[
                "Furnished office",
                "Ejari",
                "Internet / Wi-Fi",
                "DEWA",
                "Air conditioning",
                "Water",
                "Receptionist support",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    padding: "17px 0",
                    borderBottom: "1px solid #ddd8cf",
                    fontSize: "18px",
                  }}
                >
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contract and location */}
      <section
        style={{
          background: "#e9e5dd",
          padding: "70px 6%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "50px",
          }}
        >
          <div>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "12px",
                color: "#777",
              }}
            >
              Contract
            </p>
            <h3 style={{ fontSize: "26px", fontWeight: 500 }}>
              Annual contracts
            </h3>
          </div>

          <div>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "12px",
                color: "#777",
              }}
            >
              Parking
            </p>
            <h3 style={{ fontSize: "26px", fontWeight: 500 }}>
              Parking is not included
            </h3>
          </div>

          <div>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontSize: "12px",
                color: "#777",
              }}
            >
              Location
            </p>
            <h3 style={{ fontSize: "26px", fontWeight: 500 }}>
              Al Barsha 1, Dubai
            </h3>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: "90px 6%",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontSize: "12px",
            color: "#777",
          }}
        >
          Private offices at BVS
        </p>

        <h2
          style={{
            fontSize: "clamp(38px, 6vw, 64px)",
            fontWeight: 500,
            lineHeight: 1.1,
          }}
        >
          Find the right office for your team.
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          Office capacity depends on the size and availability of the unit.
          Contact the BVS team to discuss the options currently available.
        </p>

        <a
          href="/#enquire"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "16px 28px",
            background: "#1d1d1b",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Request a viewing ↗
        </a>

        <p style={{ marginTop: "35px" }}>
          <Link href="/" style={{ color: "#1d1d1b" }}>
            ← Back to BVS Business Center
          </Link>
        </p>
      </section>
    </main>
  );
}
