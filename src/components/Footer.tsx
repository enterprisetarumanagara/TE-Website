"use client";

import Image from "next/image";

const LocationIcon = () => (
  <svg
    className="h-5 w-5 mt-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21s-6-5.373-6-10a6 6 0 1 1 12 0c0 4.627-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.4" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="h-5 w-5 mt-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v2a2.5 2.5 0 0 1-2.72 2.5A19.79 19.79 0 0 1 3.58 7.72 2.5 2.5 0 0 1 6.06 5h2a1 1 0 0 1 1 .78l.7 3a1 1 0 0 1-.46 1.06l-1.2.8a1 1 0 0 0-.3 1.37 11.55 11.55 0 0 0 4.63 4.63 1 1 0 0 0 1.37-.3l.8-1.2a1 1 0 0 1 1.06-.46l3 .7a1 1 0 0 1 .78 1z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#e3e3e3]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 lg:px-10 pt-8 pb-6 md:pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logos/TE-Logo.svg"
                alt="Tarumanagara Enterprise Logo"
                width={90}
                height={90}
                className="h-12 w-auto"
              />
            </div>

            <div className="flex items-start gap-3 mb-2">
              <LocationIcon />
              <div className="text-sm text-neutral-900 leading-relaxed">
                <p className="font-medium">
                  Kampus I Universitas Tarumanagara Gedung Utama Lantai 5
                </p>
              </div>
            </div>

            <div className="pl-8 text-sm text-neutral-900 leading-relaxed">
              <p>
                Jl. Letjen S. Parman No. 1, RT.6/RW.16<br />
                Tomang, Kec. Grogol Petamburan, Kota Jakarta Barat<br />
                Daerah Khusus Ibukota Jakarta 11470
              </p>
            </div>
          </div>

          <div className="text-sm text-neutral-900 leading-relaxed sm:mt-2 md:mt-18 lg:mt-18">
            <div className="flex items-start gap-3 mb-4">
              <PhoneIcon />
              <div>
                <p>(021) 5695-8728</p>
              </div>
            </div>

            <div className="pl-8">
              <p className="font-semibold">Jam Operasional:</p>
              <p>Senin–Jumat (08.00–16.45)</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-neutral-700 pt-3">
          <p className="text-[11px] md:text-xs text-neutral-900">
            © 2025 Tarumanagara Enterprise, All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
