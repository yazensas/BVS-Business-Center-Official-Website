import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مركز BVS للأعمال | دبي",
  description:
    "مكاتب خاصة ومساحات عمل مرنة في البرشاء الأولى، دبي.",
  alternates: {
    canonical: "https://bvsbusinesscenter.com/ar/",
  },
};

export default function ArabicHome() {
  return (
    <main
      lang="ar"
      dir="rtl"
      style={{
        fontFamily: "Tahoma, Arial, sans-serif",
        textAlign: "right",
        padding: "40px 24px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <p>
        <a href="/">English</a>
      </p>

      <h1>مرحبًا بكم في مركز BVS للأعمال</h1>

      <p>
        مساحات عمل احترافية ومكاتب خاصة في البرشاء الأولى، دبي.
      </p>

      <h2>مساحات العمل لدينا</h2>

      <ul>
        <li>مكاتب خاصة</li>
        <li>غرف اجتماعات</li>
        <li>مساحات عمل مرنة</li>
        <li>مكاتب افتراضية</li>
      </ul>

      <h2>تواصل معنا</h2>

      <p>
        الهاتف:{" "}
        <a href="tel:+97144478808" dir="ltr">
          +971 4 447 8808
        </a>
      </p>

      <p>
        <a href="https://wa.me/971525189306">
          تواصل معنا عبر واتساب
        </a>
      </p>

      <p>
        <a href="/#enquire">احجز زيارة لمكتبك</a>
      </p>
    </main>
  );
}
