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
    description: "مكاتب احترافية ومساحات عمل مرنة في البرشاء الأولى، دبي.",
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
    description: "مكاتب مؤثثة توفر الخصوصية والراحة لفرق العمل والشركات.",
    image: "/bvs-corridor.jpg",
    href: "/private-offices",
  },
  {
    number: "02",
    title: "غرف اجتماعات",
    description: "مساحات احترافية للاجتماعات وعروض الأعمال والمقابلات.",
    image: "/bvs-meeting.jpg",
    href: "/meeting-room",
  },
  {
    number: "03",
    title: "مساحات عمل مرنة",
    description: "مساحات جاهزة للاستخدام تناسب احتياجات يوم عملك.",
    image: "/bvs-lounge.jpg",
    href: "#contact",
  },
  {
    number: "04",
    title: "مكاتب افتراضية",
    description: "عزز حضور أعمالك في دبي بعنوان مهني وخيارات دعم مناسبة.",
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
    answer: "نعم، اتصل بفريقنا لترتيب زيارة والتعرف على المساحات المتاحة.",
  },
  {
    question: "أين يقع مركز BVS للأعمال؟",
    answer: "يقع المركز في مبنى برشا فالي، البرشاء الأولى، دبي.",
  },
  {
    question: "ما أنواع مساحات العمل المتاحة؟",
    answer:
      "نوفر مكاتب خاصة وغرف اجتماعات ومساحات عمل مرنة، ويمكنك التواصل معنا للاستفسار عن الخيارات الأخرى.",
  },
];

const whatsappMessage = encodeURIComponent(
  "مرحبًا، أود الحصول على معلومات عن مساحات العمل في مركز BVS للأعمال."
);

const whatsappUrl = `https://wa.me/971525189306?text=${whatsappMessage}`;

const navStyle = {
  color: "#f6f1e7",
  textDecoration: "none",
};

const sectionStyle = {
  padding: "clamp(50px, 8vw, 110px) 6%",
};

const eyebrowStyle = {
  color: "#668b90",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.08em",
};

const headingStyle = {
  fontSize: "clamp(34px, 5vw, 66px)",
  lineHeight: 1.35,
  margin: "12px 0 25px",
  fontWeight: 500,
  letterSpacing: "-0.04em",
};

const paragraphStyle = {
  color: "#667572",
  fontSize: 14,
  lineHeight: 1.9,
  maxWidth: 650,
};

const linkButtonStyle = {
  display: "inline-block",
  marginTop: 20,
  padding: "15px 22px",
  background: "#12272a",
  color: "#fff",
  textDecoration: "none",
  fontSize: 13,
};

const contactButtonStyle = {
  display: "inline-block",
  padding: "15px 22px",
  background: "#f2eee3",
  color: "#12272a",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 700,
};

export default function ArabicHome() {
  return (
    <main
      id="top"
      lang="ar"
      dir="rtl"
      className="arabic-page"
      style={{
        background: "#f2eee3",
        color: "#12272a",
        minHeight: "100vh",
        textAlign: "right",
      }}
    >
      {/* شريط التواصل العلوي */}
      <div
        style={{
          background: "#12272a",
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
          dir="ltr"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          +971 4 447 8808
        </a>
      </div>

      {/* رأس الصفحة */}
      <header
        style={{
          background: "#12272a",
          color: "#f7f3e9",
          padding: "20px 6%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(255,255,255,.15)",
        }}
      >
        <a
          href="/ar/"
          dir="ltr"
          aria-label="BVS Business Center"
          style={{
            color: "#f7f3e9",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 11,
          }}
        >
          <strong
            style={{
              fontSize: 25,
              border: "2px solid currentColor",
              padding: "8px 10px",
              letterSpacing: 2,
            }}
          >
            BVS
          </strong>
          <span style={{ fontSize: 11, lineHeight: 1.3 }}>
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
            fontSize: 13,
          }}
        >
          <a href="#services" style={navStyle}>مساحات العمل</a>
          <a href="#benefits" style={navStyle}>مميزاتنا</a>
          <a href="#location" style={navStyle}>الموقع</a>
          <a href="#faq" style={navStyle}>الأسئلة الشائعة</a>
        </nav>

        <a
          href="/"
          dir="ltr"
          style={{
            color: "#cbdff8",
            fontSize: 13,
            textDecoration: "none",
          }}
        >
          English →
        </a>
      </header>

      {/* القسم الرئيسي */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          background: "#12272a",
          color: "#f6f1e7",
        }}
      >
        <div
          style={{
            padding: "clamp(32px, 6vw, 76px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={eyebrowStyle}>
            البرشاء الأولى · دبي · الإمارات العربية المتحدة
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 6vw, 76px)",
              lineHeight: 1.35,
              margin: "18px 0 26px",
              letterSpacing: "-.04em",
            }}
          >
            اعثر على مساحتك
            <br />
            <span
              style={{
                color: "#cbdff8",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              لإنجاز أعمالك.
            </span>
          </h1>

          <p
            style={{
              color: "#bdc6c2",
              maxWidth: 520,
              fontSize: 15,
              lineHeight: 1.9,
            }}
          >
            مكاتب خاصة ومساحات عمل مرنة في دبي، مع خيارات عملية تناسب
            احتياجات شركتك وتساعدك على التركيز على نمو أعمالك.
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
                background: "#f2eee3",
                color: "#12272a",
                padding: "16px 22px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              اكتشف مساحاتنا ←
            </a>

            <a
              href="#contact"
              style={{
                border: "1px solid #8b9d99",
                color: "#fff",
                padding: "16px 22px",
                textDecoration: "none",
                fontSize: 13,
              }}
            >
              تواصل معنا
            </a>
          </div>
        </div>

        <div
          style={{
            minHeight: 380,
            position: "relative",
            background: "#263c3d",
          }}
        >
          <img
            src="/bvs-reception.jpg"
            alt="استقبال مركز BVS للأعمال في دبي"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 380,
              maxHeight: 720,
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* مميزات سريعة */}
      <section
        style={{
          padding: "28px 6%",
          background: "#e6e1d7",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 18,
        }}
      >
        <strong>مكاتب في دبي</strong>
        <span>خيارات عمل مرنة</span>
        <span>موقع في البرشاء الأولى</span>
        <span>تواصل مباشر مع فريقنا</span>
      </section>
