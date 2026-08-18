export type Unit = {
  id: string;
  name: string;
  location: string;
  size: string;
  suggestedCapacity: string;
  price: string;
  description: string;
  facilities: string[];
  status: "Available" | "Reserved" | "Leased";
  photos: string[];
  video?: string;
};

export const units: Unit[] = [
  {
    id: "unit-09",
    name: "Unit 09",
    location: "1st Floor",
    size: "107",
    suggestedCapacity: "2–3 people",
    price: "AED 28,000.00",
    status: "Available",
    description:
      "Furnished with new furniture. No window and no balcony.",
    facilities: [
      "DEWA",
      "Wi-Fi",
      "Receptionist",
      "Water",
    ],
    photos: [
      "/units/unit-09/01.jpeg",
      "/units/unit-09/02.jpeg",
      "/units/unit-09/03.jpeg",
      "/units/unit-09/04.jpeg",
    ],
    video: "/units/unit-09/video.mp4",
  },

  {
    id: "unit-10",
    name: "Unit 10",
    location: "1st Floor",
    size: "132",
    suggestedCapacity: "3–4 people",
    price: "AED 30,000.00",
    status: "Available",
    description:
      "Furnished with window and balcony.",
    facilities: [
      "DEWA",
      "Wi-Fi",
      "Receptionist",
      "Water",
    ],
    photos: [
      "/units/unit-10/01.jpg",
      "/units/unit-10/02.jpg",
      "/units/unit-10/03.jpg",
      "/units/unit-10/04.jpg",
    ],
    video: "/units/unit-10/video.mp4",
  },

  {
    id: "unit-04",
    name: "Unit 04",
    location: "2nd Floor",
    size: "212",
    suggestedCapacity: "5–7 people",
    price: "AED 39,000.00",
    status: "Available",
    description:
      "Furnished with window. No balcony.",
    facilities: [
      "DEWA",
      "Wi-Fi",
      "Receptionist",
      "Water",
    ],
    photos: [
      "/units/unit-04/01.jpg",
      "/units/unit-04/02.jpg",
      "/units/unit-04/03.jpg",
      "/units/unit-04/04.jpg",
    ],
    video: "/units/unit-04/video.mp4",
  },

  {
    id: "unit-08",
    name: "Unit 08",
    location: "2nd Floor",
    size: "215",
    suggestedCapacity: "5–7 people",
    price: "AED 39,000.00",
    status: "Available",
    description:
      "Furnished with window. No balcony.",
    facilities: [
      "DEWA",
      "Wi-Fi",
      "Receptionist",
      "Water",
    ],
    photos: [
      "/units/unit-08/01.jpg",
      "/units/unit-08/02.jpg",
      "/units/unit-08/03.jpg",
      "/units/unit-08/04.jpg",
    ],
    video: "/units/unit-08/video.mp4",
  },
];
