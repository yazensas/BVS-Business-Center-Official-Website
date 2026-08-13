"use client";

import { useState } from "react";
import { units, type Unit } from "../data/units";

const WHATSAPP_NUMBER = "971525189306";

export default function AvailableUnits() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const openUnit = (unit: Unit) => {
    setSelectedUnit(unit);
    setSelectedPhoto(0);
    document.body.style.overflow = "hidden";
  };

  const closeUnit = () => {
    setSelectedUnit(null);
    document.body.style.overflow = "";
  };

  const whatsappMessage = selectedUnit
    ? encodeURIComponent(
        `Hello BVS Business Center, I am interested in ${selectedUnit.name}. Please send me more information about this unit and its availability.`
      )
    : "";

  return (
    <>
      {/* =========================
          AVAILABLE UNITS SECTION
          ========================= */}
      <section
        id="available-units"
        className="bg-white py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              BVS Business Center
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Available Units
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our currently available furnished office units.
              View photos, videos, facilities and unit details.
            </p>
          </div>

          {/* =========================
              UNIT CARDS
              ========================= */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {units.map((unit) => (
              <article
                key={unit.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Main Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

                  <img
                    src={unit.photos[0]}
                    alt={`${unit.name} at BVS Business Center`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Available Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow">
                      {unit.status}
                    </span>
                  </div>

                  {/* Video Badge */}
                  {unit.video && (
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                        ▶ Video
                      </span>
                    </div>
                  )}

                </div>

                {/* Card Content */}
                <div className="p-6">

                  {/* Floor */}
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {unit.location}
                  </p>

                  {/* Unit Name */}
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    {unit.name}
                  </h3>

                  {/* Unit Information */}
                  <div className="mt-5 space-y-3 border-y border-gray-100 py-5">

                    {/* Size */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        Size
                      </span>

                      <span className="font-semibold text-gray-900">
                        {unit.size}
                      </span>
                    </div>

                    {/* Suggested Capacity */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        Suggested Capacity
                      </span>

                      <span className="font-semibold text-gray-900">
                        {unit.suggestedCapacity}
                      </span>
                    </div>

                  </div>

                  {/* Price */}
                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Rental Price
                    </p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      {unit.price}
                    </p>
                  </div>

                  {/* View Button */}
                  <button
                    type="button"
                    onClick={() => openUnit(unit)}
                    className="mt-6 w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    View Unit Details
                  </button>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================
          UNIT DETAILS POPUP
          ========================= */}
      {selectedUnit && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 p-4 sm:p-6"
          onClick={closeUnit}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedUnit.name} details`}
        >

          {/* Popup Container */}
          <div
            className="mx-auto my-4 max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:my-8"
            onClick={(event) => event.stopPropagation()}
          >

            {/* =========================
                PHOTO GALLERY
                ========================= */}
            <div className="bg-gray-100 p-3 sm:p-4">

              {/* Main Photo */}
              <div className="relative overflow-hidden rounded-xl bg-black">

                <img
                  src={selectedUnit.photos[selectedPhoto]}
                  alt={`${selectedUnit.name} photo ${selectedPhoto + 1}`}
                  className="h-[280px] w-full object-cover sm:h-[450px]"
                />

                {/* Previous Photo */}
                {selectedUnit.photos.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPhoto(
                        (selectedPhoto - 1 + selectedUnit.photos.length) %
                          selectedUnit.photos.length
                      )
                    }
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                )}

                {/* Next Photo */}
                {selectedUnit.photos.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPhoto(
                        (selectedPhoto + 1) % selectedUnit.photos.length
                      )
                    }
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white transition hover:bg-black/80"
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                )}

                {/* Photo Counter */}
                <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                  {selectedPhoto + 1} / {selectedUnit.photos.length}
                </div>

              </div>

              {/* Photo Thumbnails */}
              {selectedUnit.photos.length > 1 && (
                <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">

                  {selectedUnit.photos.map((photo, index) => (
                    <button
                      key={photo}
                      type="button"
                      onClick={() => setSelectedPhoto(index)}
                      className={`overflow-hidden rounded-lg border-2 ${
                        selectedPhoto === index
                          ? "border-blue-600"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={photo}
                        alt={`${selectedUnit.name} thumbnail ${index + 1}`}
                        className="h-16 w-full object-cover"
                      />
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* =========================
                VIDEO
                ========================= */}
            {selectedUnit.video && (
              <div className="bg-black px-3 pb-3 sm:px-4 sm:pb-4">

                <div className="overflow-hidden rounded-xl">

                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="max-h-[600px] w-full"
                  >
                    <source
                      src={selectedUnit.video}
                      type="video/mp4"
                    />

                    Your browser does not support video playback.
                  </video>

                </div>

              </div>
            )}

            {/* =========================
                UNIT DETAILS
                ========================= */}
            <div className="p-6 sm:p-8">

              {/* Title + Price */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>

                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    {selectedUnit.location}
                  </p>

                  <h3 className="mt-1 text-3xl font-bold text-gray-900 sm:text-4xl">
                    {selectedUnit.name}
                  </h3>

                </div>

                <div className="sm:text-right">

                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Rental Price
                  </p>

                  <p className="mt-1 text-2xl font-bold text-gray-900">
                    {selectedUnit.price}
                  </p>

                </div>

              </div>

              {/* Unit Information */}
              <div className="mt-8 grid gap-4 border-y border-gray-200 py-6 sm:grid-cols-3">

                {/* Location */}
                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {selectedUnit.location}
                  </p>

                </div>

                {/* Size */}
                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Size
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {selectedUnit.size}
                  </p>

                </div>

                {/* Capacity */}
                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Suggested Capacity
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {selectedUnit.suggestedCapacity}
                  </p>

                </div>

              </div>

              {/* Description */}
              <div className="mt-7">

                <h4 className="text-lg font-bold text-gray-900">
                  About This Unit
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  {selectedUnit.description}
                </p>

              </div>

              {/* Facilities */}
              <div className="mt-7">

                <h4 className="text-lg font-bold text-gray-900">
                  Included Facilities
                </h4>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                  {selectedUnit.facilities.map((facility) => (
                    <div
                      key={facility}
                      className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3"
                    >

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                        ✓
                      </span>

                      <span className="text-sm font-medium text-gray-700">
                        {facility}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* =========================
                  CONTACT BUTTONS
                  ========================= */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-[#25D366] px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
                >
                  WhatsApp About This Unit
                </a>

                {/* Phone */}
                <a
                  href="tel:+97144478808"
                  className="flex-1 rounded-xl border border-gray-300 px-6 py-4 text-center text-sm font-bold text-gray-900 transition hover:bg-gray-50"
                >
                  Call BVS Business Center
                </a>

                {/* Close */}
                <button
                  type="button"
                  onClick={closeUnit}
                  className="rounded-xl border border-gray-300 px-6 py-4 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Close
                </button>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
