 export default function AboutPage() {
  return (
    <section className="space-y-32">

      {/* Hero */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          About Knera
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed">
          Knera is a handmade brand inspired by calm spaces,
          slow living, and thoughtful craftsmanship.
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Knera began with a love for handmade details and
            a belief that beauty lives in slow, intentional work.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every piece is created with patience, care,
            and attention to the smallest details.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/images/craft.jpg"
            alt="Craft"
            className="w-full h-[450px] object-cover"
          />
        </div>

      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto space-y-16">

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          What We Believe In
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Handmade Quality",
              text: "Every item is handcrafted with care and precision.",
            },
            {
              title: "Natural Materials",
              text: "Inspired by nature and warm, neutral textures.",
            },
            {
              title: "Timeless Design",
              text: "Pieces designed to last and never feel trendy.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-10 text-center shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="font-semibold text-lg mb-4">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Closing */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-500 leading-relaxed">
          Knera is more than a brand — it’s a story told through
          handmade details and timeless design.
        </p>
      </div>

    </section>
  );
}
