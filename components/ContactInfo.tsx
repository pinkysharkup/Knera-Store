
"use client";

import Image from "next/image";

export default function ContactInfo() {
  return (
    <section className="w-full bg-white py-32 flex justify-center">

      <div className="w-[90%] max-w-[1300px] grid grid-cols-1 md:grid-cols-3 gap-24 text-center">

        {/* CONTACT */}
        <div className="flex flex-col items-center">

          <Image
            src="/icons/contact-icon-1-x2.png"
            alt="contact"
            width={80}
            height={80}
            className="mb-8"
          />

          <h3
            className="text-[26px] mb-4 text-[#2b2b2b]"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Contact Us
          </h3>

          <p className="text-[#6a6a6a] text-[15px] leading-[1.9] mb-5 max-w-[280px]">
            Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
          </p>

          <span className="text-[15px] text-[#2b2b2b]">
            formarta@example.com
          </span>

        </div>


        {/* ADDRESS */}
        <div className="flex flex-col items-center">

          <Image
            src="/icons/contact-icon-2-x2.png"
            alt="address"
            width={80}
            height={80}
            className="mb-8"
          />

          <h3
            className="text-[26px] mb-4 text-[#2b2b2b]"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Address
          </h3>

          <p className="text-[#6a6a6a] text-[15px] leading-[1.9] mb-5 max-w-[280px]">
            Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
          </p>

          <span className="text-[15px] text-[#2b2b2b]">
            New York, Linn Dr 238, NY USA
          </span>

        </div>


        {/* SUPPORT */}
        <div className="flex flex-col items-center">

          <Image
            src="/icons/contact-icon-3-x2.png"
            alt="support"
            width={80}
            height={80}
            className="mb-8"
          />

          <h3
            className="text-[26px] mb-4 text-[#2b2b2b]"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Support
          </h3>

          <p className="text-[#6a6a6a] text-[15px] leading-[1.9] mb-5 max-w-[280px]">
            Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do empor
          </p>

          <span className="text-[15px] text-[#2b2b2b]">
            formarta@example.com
          </span>

        </div>

      </div>

    </section>
  );
}