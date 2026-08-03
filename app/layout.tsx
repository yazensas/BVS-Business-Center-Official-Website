import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host") ?? "bvs-homepage-concepts.workspace-384730.chatgpt.site";
  const protocol = headerList.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "BVS Business Center | Offices & Workspace in Al Barsha, Dubai",
    description: "Private offices, meeting rooms, flexible desks and virtual office solutions at BVS Business Center in Al Barsha 1, Dubai.",
    openGraph: {
      title: "BVS Business Center — Space to do serious business.",
      description: "Professional workspace and flexible office solutions in Al Barsha 1, Dubai.",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "BVS Business Center in Al Barsha, Dubai" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "BVS Business Center — Space to do serious business.",
      description: "Professional workspace and flexible office solutions in Al Barsha 1, Dubai.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
