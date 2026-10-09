import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مركز BVS للأعمال | مكاتب ومساحات عمل في دبي",
  description:
    "اكتشف المكاتب الخاصة وغرف الاجتماعات ومساحات العمل المرنة في مركز BVS للأعمال، البرشاء الأولى، دبي.",
  alternates: {
    canonical: "https://bvsbusinesscenter.com/ar/",
    languages: {
      en: "https://bvsbusinesscenter.com/",
      ar: "https://bvsbusinesscenter.com/ar/",
      "x-default": "https://bvsbusinesscenter.com/",
    },
  },
  openGraph: {
    title: "مركز BVS للأعمال — مساحتك لتحقيق النجاح",
    description:
      "مكاتب احترافية ومساحات عمل مرنة في البرشاء الأولى، دبي.",
    url: "https://bvsbusinesscenter.com/ar/",
    locale: "ar_AE",
    type: "website",
    images: ["/og.png"],
  },
};

const services = [
  {
    number: "01",
    title: "مكاتب خاصة",
    description:
      "مكاتب مؤثثة توفر الخصوصية والراحة لفرق العمل والشركات.",
    image: "/bvs-corridor.jpg",
    href: "/private-offices",
  },
  {
    number: "02",
    title: "غرف اجتماعات",
    description:
      "مساحات احترافية للاجتماعات وعروض الأعمال والمقابلات.",
    image: "/bvs-meeting.jpg",
    href: "/meeting-room",
  },
  {
    number: "03",
    title: "مساحات عمل مرنة",
    description:
      "مساحات جاهزة للاستخدام تناسب احتياجات يوم عملك.",
    image: "/bvs-lounge.jpg",
    href: "#contact",
  },
  {
    number: "04",
    title: "مكاتب افتراضية",
    description:
      "عزز حضور أعمالك في دبي بعنوان مهني وخيارات دعم مناسبة.",
    image: "/bvs-sign.jpg",
    href: "#contact",
  },
];

const benefits = [
  "مكاتب مؤثثة وجاهزة للاستخدام",
  "موقع مميز في البرشاء الأولى، دبي",
  "خيارات مرنة تناسب احتياجات أعمالك",
  "إمكانية ترتيب زيارة للتعرف على المساحات",
];

const faqs = [
  {
    question: "هل يمكنني زيارة المكاتب قبل اتخاذ القرار؟",
    answer:
      "نعم، اتصل بفريقنا لترتيب زيارة والتعرف على المساحات المتاحة.",
  },
  {
    question: "أين يقع مركز BVS للأعمال؟",
    answer:
      "يقع المركز في مبنى برشا فالي، البرشاء الأولى، دبي.",
  },
  {
    question: "ما أنواع مساحات العمل المتاحة؟",
    answer:
      "نوفر مكاتب خاصة وغرف اجتماعات ومساحات عمل مرنة، ويمكنك التواصل معنا للاستفسار عن الخيارات الأخرى.",
  },
];

export default function ArabicHome() {
  return (
    <main
      lang="ar"
      dir="rtl"
      style={{
        fontFamily: "Tahoma, Arial, sans-serif",
        color: "#292820",
        background: "#f8f7f3",
        lineHeight: 1.9,
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "#25251f",
          color: "#fff",
          padding: "10px 6%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 13,
        }}
      >
        <span>مساحات عمل احترافية في البرشاء الأولى، دبي</span>
        <a
          href="tel:+97144478808"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          <span dir="ltr">+971 4 447 8808</span>
        </a>
      </div>

      <header
        style={{
          background: "#fff",
          padding: "20px 6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          borderBottom: "1px solid #e8e5dc",
        }}
      >
        <a
          href="/ar/"
          style={{
            color: "#292820",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
            direction: "ltr",
          }}
        >
          <strong style={{ fontSize: 30, letterSpacing: 2 }}>BVS</strong>
          <span style={{ fontSize: 12, lineHeight: 1.3 }}>
            Business
            <br />
            Center
          </span>
        </a>

        <nav
          aria-label="التنقل الرئيسي"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            fontSize: 14,
          }}
        >
          <a href="#services" style={navStyle}>مساحات العمل</a>
          <a href="#benefits" style={navStyle}>مميزاتنا</a>
          <a href="#location" style={navStyle}>الموقع</a>
          <a href="#faq" style={navStyle}>الأسئلة الشائعة</a>
        </nav>

        <a
          href="/"
          style={{
            color: "#292820",
            fontSize: 13,
            textDecoration: "underline",
          }}
        >
          English
        </a>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          background: "#292820",
          color: "#fff",
        }}
      >
        <div style={{ padding: "clamp(32px, 6vw, 76px)" }}>
          <p style={{ color: "#d6bd8a", fontSize: 13 }}>
            البرشاء الأولى · دبي · الإمارات العربية المتحدة
          </p>

          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.45,
              margin: "18px 0",
            }}
          >
            اعثر على مساحتك
            <br />
            <span style={{ color: "#d6bd8a" }}>لإنجاز أعمالك.</span>
          </h1>

          <p style={{ color: "#e5e2d9", maxWidth: 520 }}>
            مكاتب خاصة ومساحات عمل مرنة في دبي، مع خيارات
            عملية تناسب احتياجات شركتك وتساعدك على التركيز
            على نمو أعمالك.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 28,
            }}
          >
            <a
              href="#services"
              style={{
                background: "#d6bd8a",
                color: "#292820",
                padding: "12px 20px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              اكتشف مساحاتنا
            </a>

            <a
              href="#contact"
              style={{
                border: "1px solid #aaa69a",
                color: "#fff",
                padding: "12px 20px",
                textDecoration: "none",
              }}
            >
              تواصل معنا
            </a>
          </div>
        </div>

        <div style={{ minHeight: 320, position: "relative" }}>
          <img
            src="/bvs-building.jpg"
            alt="مبنى مركز BVS للأعمال في دبي"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 320,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </section>

      <section
        style={{
          padding: "22px 6%",
          background: "#eae6dc",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 14,
        }}
      >
        <strong>مكاتب في دبي</strong>
        <span>خيارات عمل مرنة</span>
        <span>موقع في البرشاء الأولى</span>
        <span>تواصل مباشر مع فريقنا</span>
      </section>

      <section id="services" style={sectionStyle}>
        <p style={eyebrowStyle}>اختر مساحتك</p>
        <h2 style={headingStyle}>
          مساحات تناسب
          <br />
          طريقة عملك.
        </h2>
        <p style={{ maxWidth: 650, color: "#66645b" }}>
          من المكاتب الخاصة إلى غرف الاجتماعات، اكتشف
          خيارات العمل المتاحة في مركز BVS للأعمال.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 235px), 1fr))",
            gap: 22,
            marginTop: 32,
          }}
        >
          {services.map((service) => (
            <article
              key={service.number}
              style={{
                background: "#fff",
                border: "1px solid #e8e5dc",
              }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 210,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "#fff",
                    padding: "3px 10px",
                    direction: "ltr",
                  }}
                >
                  {service.number}
                </span>
              </div>

              <div style={{ padding: 22 }}>
                <h3 style={{ fontSize: 21, marginTop: 0 }}>
                  {service.title}
                </h3>
                <p style={{ color: "#66645b", fontSize: 14 }}>
                  {service.description}
                </p>
                <a
                  href={service.href}
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    color: "#655333",
                    fontWeight: 700,
                  }}
                >
                  اكتشف المزيد ←
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="benefits"
        style={{
          ...sectionStyle,
          background: "#292820",
          color: "#fff",
        }}
      >
        <p style={{ ...eyebrowStyle, color: "#d6bd8a" }}>
          تجربة BVS
        </p>
        <h2 style={headingStyle}>
          مساحة عمل تدعم طموحك.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: 20,
            marginTop: 28,
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              style={{
                padding: 22,
                border: "1px solid #555349",
              }}
            >
              <span style={{ color: "#d6bd8a" }}>
                0{index + 1}
              </span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="location" style={sectionStyle}>
        <p style={eyebrowStyle}>موقع مميز</p>
        <h2 style={headingStyle}>أعمالك في قلب البرشاء.</h2>
        <p>
          المكاتب 203–208، الطابق الثاني
          <br />
          مبنى برشا فالي، البرشاء الأولى
          <br />
          دبي، الإمارات العربية المتحدة
        </p>

        <a
          href="https://maps.app.goo.gl/WbjsEvxunLHeqoZi6?g_st=ac"
          target="_blank"
          rel="noopener noreferrer"
          style={linkButtonStyle}
        >
          افتح الموقع على خرائط Google
        </a>
      </section>

      <section
        id="faq"
        style={{ ...sectionStyle, background: "#eeece5" }}
      >
        <p style={eyebrowStyle}>معلومات مهمة</p>
        <h2 style={headingStyle}>الأسئلة الشائعة</h2>

        <div style={{ maxWidth: 850 }}>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              style={{
                background: "#fff",
                padding: 20,
                marginTop: 12,
              }}
            >
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                {faq.question}
              </summary>
              <p style={{ color: "#66645b" }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={{
          ...sectionStyle,
          background: "#d6bd8a",
        }}
      >
        <p style={eyebrowStyle}>لنبدأ الحديث</p>
        <h2 style={headingStyle}>هل تبحث عن مكتب في دبي؟</h2>
        <p>
          تواصل مع فريق BVS للتعرف على الخيارات المتاحة
          وترتيب زيارة للمركز.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 24,
          }}
        >
          <a href="tel:+97144478808" style={contactButtonStyle}>
            اتصل بنا: +971 4 447 8808
          </a>
          <a
            href={`https://wa.me/971525189306?text=${encodeURIComponent(
              "مرحبًا، أود الحصول على معلومات عن مساحات العمل في مركز BVS للأعمال."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            style={contactButtonStyle}
          >
            تواصل عبر واتساب
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 13 }}>
          للاستفسار عن الأسعار والتوفر، يرجى التواصل مع فريقنا مباشرة.
        </p>
      </section>

      <footer
        style={{
          background: "#292820",
          color: "#fff",
          padding: "28px 6%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 18,
          }}
        >
          <strong style={{ fontSize: 22 }}>BVS Business Center</strong>
          <a href="#top" style={{ color: "#fff" }}>
            العودة إلى الأعلى ↑
          </a>
          <a href="/" style={{ color: "#fff" }}>
            English
          </a>
        </div>
        <p style={{ color: "#d0cdc3", fontSize: 13 }}>
          © 2026 مركز BVS للأعمال. جميع الحقوق محفوظة.
        </p>
      </footer>
    </main>
  );
}

const navStyle = {
  color: "#292820",
  textDecoration: "none",
};

const sectionStyle = {
  padding: "clamp(36px, 6vw, 76px) 6%",
};

const eyebrowStyle = {
  color: "#806b43",
  fontSize: 13,
  fontWeight: 700,
};

const headingStyle = {
  fontSize: "clamp(28px, 4vw, 42px)",
  lineHeight: 1.5,
  marginTop: 8,
};

const linkButtonStyle = {
  display: "inline-block",
  marginTop: 12,
  padding: "12px 20px",
  background: "#292820",
  color: "#fff",
  textDecoration: "none",
};

const contactButtonStyle = {
  display: "inline-block",
  padding: "12px 18px",
  background: "#292820",
  color: "#fff",
  textDecoration: "none",
};
