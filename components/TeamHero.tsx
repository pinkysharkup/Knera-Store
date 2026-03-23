import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
    

      {/* IMAGE */}
      <Image
        src="/images/post-img-1.jpg"
        alt="team hero"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">

        <h1
          className="text-[48px] md:text-[56px] italic font-normal mb-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Best of Formarta Team
        </h1>

        <p className="text-[14px] tracking-[0.2em]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>

        {/* SMALL LINE */}
        <div className="w-16 h-[1px] bg-white mt-6"></div>

      </div>
    </section>
  );
}