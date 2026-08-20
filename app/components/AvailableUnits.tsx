"use client";

import { useEffect, useState } from "react";
import { units, type Unit } from "../data/units";

const WHATSAPP_NUMBER = "971525189306";

export default function AvailableUnits() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState(0);

 function openUnit(unit: Unit) {
  console.log("UNIT BUTTON CLICKED:", unit.id);
  setSelectedUnit(unit);
  setSelectedPhoto(0);
  document.body.style.overflow = "hidden";
}

  function closeUnit() {
    setSelectedUnit(null);
    setSelectedPhoto(0);
    document.body.style.overflow = "";
  }

  function nextPhoto() {
    if (!selectedUnit) return;

    setSelectedPhoto(
      (current) => (current + 1) % selectedUnit.photos.length
    );
  }

  function previousPhoto() {
    if (!selectedUnit) return;

    setSelectedPhoto(
      (current) =>
        (current - 1 + selectedUnit.photos.length) %
        selectedUnit.photos.length
    );
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const whatsappMessage = selectedUnit
    ? encodeURIComponent(
        `Hello BVS Business Center, I am interested in ${selectedUnit.name}. Please send me more information about this unit and its availability.`
      )
    : "";

  return (
    <>
      {/* =====================================================
          AVAILABLE UNITS
          ===================================================== */}

      <section
        id="available-units"
        className="bg-[#f7f7f5] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* SECTION HEADER */}

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
              Available at BVS
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Find your next office.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore our currently available furnished offices.
              View photos, facilities, pricing and availability for
              each unit.
            </p>

          </div>


          {/* =================================================
              UNIT CARDS
              ================================================= */}

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {units.map((unit) => (

              <article
                key={unit.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

               {/* PHOTO GALLERY */}

             <button
             type="button"
             onClick={() => openUnit(unit)}
             className="relative block w-full overflow-hidden bg-gray-100 text-left"
             aria-label={`View ${unit.name} photos`}
             >
             <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-0.5 bg-white">
             {unit.photos.slice(0, 4).map((photo, index) => (
             <div
             key={photo}
             className="min-h-0 overflow-hidden bg-gray-200"
            >
            <img
            src={photo}
            alt={`${unit.name} photo ${index + 1}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            </div>
            ))}
            </div>

            <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
            {unit.status}
            </span>

           <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
           📷 {unit.photos.length} Photos
           </span>

           {unit.video && (
           <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
           ▶ Video
           </span>
           )}
           </button>

                {/* CARD INFORMATION */}

                <div className="p-5">

                  {/* FLOOR */}

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                    {unit.location}
                  </p>


                  {/* UNIT NAME */}

                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {unit.name}
                  </h3>


                  {/* SIZE / CAPACITY */}

                  <div className="mt-4 grid grid-cols-2 gap-3 border-y border-gray-100 py-4">

                    <div>

                      <p className="text-xs text-gray-500">
                        Office size
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-900">
                        {unit.size} sq ft
                      </p>

                    </div>


                    <div>

                      <p className="text-xs text-gray-500">
                        Capacity
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-900">
                        {unit.suggestedCapacity}
                      </p>

                    </div>

                  </div>


                  {/* PRICE */}

                  <div className="mt-4">

                    <p className="text-[11px] font-medium uppercase tracking-wider text-gray-500">
                      Annual rental
                    </p>

                    <p className="mt-1 text-lg font-semibold text-gray-900">
                      {unit.price}
                    </p>

                  </div>


                  {/* VIEW BUTTON */}

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


      {/* =====================================================
          UNIT DETAILS MODAL
          ===================================================== */}

      {selectedUnit && (

        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 px-4 py-6 sm:px-6"
          onClick={closeUnit}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedUnit.name} details`}
        >

          <div
            className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* =================================================
                GALLERY
                ================================================= */}

            <div className="bg-[#f5f5f3] p-4 sm:p-6">

              {/* MAIN PHOTO */}

              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-gray-900">

                <img
                  src={selectedUnit.photos[selectedPhoto]}
                  alt={`${selectedUnit.name} photo ${selectedPhoto + 1}`}
                  className="h-[260px] w-full object-cover sm:h-[450px]"
                />


                {/* PREVIOUS */}

                {selectedUnit.photos.length > 1 && (

                  <button
                    type="button"
                    onClick={previousPhoto}
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white shadow-lg transition hover:bg-black/80"
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>

                )}


                {/* NEXT */}

                {selectedUnit.photos.length > 1 && (

                  <button
                    type="button"
                    onClick={nextPhoto}
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white shadow-lg transition hover:bg-black/80"
                    aria-label="Next photo"
                  >
                    ›
                  </button>

                )}


                {/* PHOTO NUMBER */}

                <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  {selectedPhoto + 1} / {selectedUnit.photos.length}
                </div>

              </div>


              {/* THUMBNAILS */}

              <div className="mx-auto mt-4 grid max-w-4xl grid-cols-4 gap-2 sm:gap-3">

                {selectedUnit.photos.map((photo, index) => (

                  <button
                    key={photo}
                    type="button"
                    onClick={() => setSelectedPhoto(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition ${
                      selectedPhoto === index
                        ? "border-blue-600 ring-2 ring-blue-100"
                        : "border-transparent hover:border-gray-300"
                    }`}
                    aria-label={`View photo ${index + 1}`}
                  >

                    <img
                      src={photo}
                      alt={`${selectedUnit.name} thumbnail ${index + 1}`}
                      className="h-16 w-full object-cover sm:h-24"
                    />

                  </button>

                ))}

              </div>

            </div>


            {/* =================================================
                DETAILS
                ================================================= */}

            <div className="p-6 sm:p-8">

              {/* HEADER */}

              <div className="flex flex-col gap-5 border-b border-gray-200 pb-6 sm:flex-row sm:items-start sm:justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {selectedUnit.location}
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    {selectedUnit.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Furnished private office at BVS Business Center
                  </p>

                </div>


                <div className="sm:text-right">

                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Annual rental
                  </p>

                  <p className="mt-1 text-2xl font-semibold text-gray-900">
                    {selectedUnit.price}
                  </p>

                </div>

              </div>


              {/* KEY INFORMATION */}

              <div className="mt-6 grid gap-3 sm:grid-cols-3">

                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {selectedUnit.location}
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Office size
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {selectedUnit.size} sq ft
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-4">

                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Capacity
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {selectedUnit.suggestedCapacity}
                  </p>

                </div>

              </div>


              {/* DESCRIPTION */}

              <div className="mt-8">

                <h4 className="text-lg font-semibold text-gray-900">
                  About the office
                </h4>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  {selectedUnit.description}
                </p>

              </div>


              {/* FACILITIES */}

              <div className="mt-8">

                <h4 className="text-lg font-semibold text-gray-900">
                  Included facilities
                </h4>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">

                  {selectedUnit.facilities.map((facility) => (

                    <div
                      key={facility}
                      className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3"
                    >

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                        ✓
                      </span>

                      <span className="text-sm font-medium text-gray-700">
                        {facility}
                      </span>

                    </div>

                  ))}

                </div>

              </div>


              {/* =================================================
                  VIDEO
                  ================================================= */}

              {selectedUnit.video && (

                <div className="mt-8">

                  <div className="mb-3">

                    <h4 className="text-lg font-semibold text-gray-900">
                      Office video
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      Take a closer look at this available office.
                    </p>

                  </div>


                  <div className="overflow-hidden rounded-xl bg-black">

                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="max-h-[450px] w-full"
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


              {/* =================================================
                  CONTACT
                  ================================================= */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#25D366] px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                >
                  WhatsApp About This Office
                </a>


                <a
                  href="tel:+97144478808"
                  className="rounded-xl border border-gray-300 px-6 py-4 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  Call BVS Business Center
                </a>

              </div>


              {/* CLOSE */}

              <button
                type="button"
                onClick={closeUnit}
                className="mt-3 w-full rounded-xl px-6 py-3 text-sm font-medium text-gray-500 transition hover:bg-gray-50 hover:text-gray-900"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}
