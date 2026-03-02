
import Image from "next/image";

export default function HeroKnitwear() {
  return (
    <section className="relative h-[80vh] min-h-[650px] w-full flex items-center justify-center overflow-hidden">
      
      <Image
        src="/images/h1-img-8.jpg"
        alt="Handmade Knitwear"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35 z-10" />

      <div className="relative z-20 text-center text-white max-w-[900px] px-6 opacity-0 translate-y-10 animate-fadeUp">
        <h1 className="text-[56px] leading-[1.2] font-normal mb-5 [font-family:var(--font-playfair)]">
          Handmade Knitwear That Are <br />
          Made With Love
        </h1>

        <p className="text-[18px] opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sout.
        </p>
      </div>
    </section>
  );
}