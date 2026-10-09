import type { Metadata } from "next";
import ArabicHome from "./ArabicHome";

const siteUrl = "https://bvsbusinesscenter.com";

export const metadata: Metadata = {
  title: "مركز BVS للأعمال | مكاتب ومساحات عمل في دبي",
  description:
    "اكتشف المكاتب الخاصة وغرف الاجتماعات ومساحات العمل المرنة في مركز BVS للأعمال، البرشاء الأولى، دبي.",
  alternates: {
    canonical: `${siteUrl}/ar/`,
    languages: {
      en: `${siteUrl}/`,
      ar: `${siteUrl}/ar/`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    title: "مركز BVS للأعمال — مساحتك لتحقيق النجاح",
    description:
      "مكاتب احترافية ومساحات عمل مرنة في البرشاء الأولى، دبي.",
    url: `${siteUrl}/ar/`,
    locale: "ar_AE",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "مركز BVS للأعمال في دبي",
      },
    ],
  },
};

export default function ArabicPage() {
  return <ArabicHome />;
}
