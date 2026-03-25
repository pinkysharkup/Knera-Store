"use client";

export default function ContactMap() {
  return (
    <section className="w-full bg-[#f5f3ef]">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* MAP */}
        <div className="w-full h-[600px]">

          <iframe
            src="https://www.google.com/maps?q=New+York&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

        </div>


        {/* FORM */}
        <div className="flex items-center justify-center px-10 py-20">

          <div className="w-full max-w-[520px]">

            <h2
              className="text-[34px] mb-8 text-[#2b2b2b]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Get in Touch
            </h2>


            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#dcdcdc] bg-transparent px-4 py-4 mb-5 outline-none"
            />


            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#dcdcdc] bg-transparent px-4 py-4 mb-5 outline-none"
            />


            {/* Message */}
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full border border-[#dcdcdc] bg-transparent px-4 py-4 mb-6 outline-none"
            ></textarea>


            {/* Button */}
            <button className="bg-[#e9e6e2] px-8 py-3 text-[13px] tracking-wide hover:bg-[#dcd8d3] transition">
              Send
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}