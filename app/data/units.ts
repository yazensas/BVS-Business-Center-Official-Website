export type Unit = {
  id: string;
  name: string;
  location: string;
  status: string;
  size: number;
  suggestedCapacity: string;
  price: string;
  description: string;
  photos: string[];
  video: string;
  facilities: string[];
};

export const units: Unit[] = [
  {
    id: "unit-09",
    name: "Unit 09",
    location: "1st Floor",
    status: "Available",
    size: 107,
    suggestedCapacity: "2–3 people",
    price: "AED 28,000 / year",

    description:
      "A professionally furnished private office suitable for small teams and growing businesses.",

    photos: [
      "/units/unit-09/01.jpeg",
      "/units/unit-09/02.jpeg",
      "/units/unit-09/03.jpeg",
      "/units/unit-09/04.jpeg",
    ],

    video: "/units/unit-09/video.mp4",

    facilities: [
      "Furnished office",
      "High-speed internet",
      "Business address",
      "Reception service",
      "Utilities included",
      "Meeting room access",
    ],
  },

  {
    id: "unit-10",
    name: "Unit 10",
    location: "1st Floor",
    status: "Available",
    size: 132,
    suggestedCapacity: "3–4 people",
    price: "AED 30,000 / year",

    description:
      "A comfortable furnished office designed for businesses looking for a professional workspace.",

    photos: [
      "/units/unit-10/01.jpeg",
      "/units/unit-10/02.jpeg",
      "/units/unit-10/03.jpeg",
      "/units/unit-10/04.jpeg",
    ],

    video: "/units/unit-10/video.mp4",

    facilities: [
      "Furnished office",
      "High-speed internet",
      "Business address",
      "Reception service",
      "Utilities included",
      "Meeting room access",
    ],
  },

  {
    id: "unit-04",
    name: "Unit 04",
    location: "2nd Floor",
    status: "Available",
    size: 212,
    suggestedCapacity: "5–7 people",
    price: "AED 39,000 / year",

    description:
      "A spacious furnished private office offering a professional environment for established teams.",

    photos: [
      "/units/unit-04/01.jpeg",
      "/units/unit-04/02.jpeg",
      "/units/unit-04/03.jpeg",
      "/units/unit-04/04.jpeg",
    ],

    video: "/units/unit-04/video.mp4",

    facilities: [
      "Furnished office",
      "High-speed internet",
      "Business address",
      "Reception service",
      "Utilities included",
      "Meeting room access",
    ],
  },

  {
    id: "unit-08",
    name: "Unit 08",
    location: "2nd Floor",
    status: "Available",
    size: 215,
    suggestedCapacity: "5–7 people",
    price: "AED 39,000 / year",

    description:
      "A spacious furnished office ideal for teams that need a professional and flexible workspace.",

    photos: [
      "/units/unit-08/01.jpeg",
      "/units/unit-08/02.jpeg",
      "/units/unit-08/03.jpeg",
      "/units/unit-08/04.jpeg",
    ],

    video: "/units/unit-08/video.mp4",

    facilities: [
      "Furnished office",
      "High-speed internet",
      "Business address",
      "Reception service",
      "Utilities included",
      "Meeting room access",
    ],
  },
];
