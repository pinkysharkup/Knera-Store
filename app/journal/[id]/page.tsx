import { getArticleById, journalArticles } from "../../../data/journal";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../../../components/PageWrapper";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return journalArticles.map((article) => ({
    id: article.id,
  }));
}

export default async function JournalArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <PageWrapper>
      <article className="w-full bg-[#f5f3ef] pb-32">
        
        {/* 1) HERO BLOCK */}
        <div className="relative w-full h-[60vh] md:h-[75vh]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          {/* Soft overlay (very subtle) */}
          <div className="absolute inset-0 bg-black/15" />

          {/* Title positioned elegantly */}
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16 md:pb-24 px-6">
            <h1 className="text-3xl md:text-5xl font-normal [font-family:var(--font-playfair)] text-white max-w-[700px] leading-[1.3] drop-shadow-sm">
              {article.title}
            </h1>
            <p className="mt-8 text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-white/90 font-light">
              {article.category} <span className="mx-3">|</span> {article.date}
            </p>
          </div>
        </div>

        {/* 2) CONTENT WRAPPER */}
        <div className="max-w-[760px] mx-auto px-6 mt-20 md:mt-32">
          
          {/* 3) TYPOGRAPHY SYSTEM & 4) EDITORIAL FLOW */}
          <div className="text-[#4a4a4a] text-[16px] md:text-[17px] leading-[2.2] font-light">
            
            {/* Elegant intro */}
            <p className="text-xl md:text-2xl leading-[1.9] text-[#6a6a6a] [font-family:var(--font-playfair)] italic text-center mb-16 md:mb-24 px-4">
              Exploring the intricate details and thoughtful process behind our signature aesthetic. A journey through craftsmanship and natural materials.
            </p>

            {/* Paragraph */}
            <p className="mb-12">
              {article.content}
            </p>

            {/* Paragraph */}
            <p className="mb-20">
              Maecenas accumsan lacus vel facilisis. Pellentesque id nibh tortor id aliquet lectus proin nibh. Convallis posuere morbi leo urna molestie at elementum eu facilisis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Tincidunt augue interdum velit euismod in pellentesque massa.
            </p>

            {/* 5) INLINE VISUAL BREAK */}
            <div className="my-24 relative w-[100vw] left-1/2 -translate-x-1/2 max-w-[1200px] h-[400px] md:h-[650px]">
              <Image 
                src="/images/post-img-1.jpg" 
                alt="Editorial visual break" 
                fill 
                className="object-cover" 
              />
            </div>

            {/* Paragraph */}
            <p className="mb-20">
              Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Ornare aenean euismod elementum nisi quis. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Volutpat consequat mauris nunc congue nisi. Nunc pulvinar sapien et ligula ullamcorper.
            </p>

            {/* 6) FEATURED QUOTE BLOCK */}
            <div className="my-28 py-20 px-8 bg-[#efede8] text-center mx-auto relative w-[100vw] left-1/2 -translate-x-1/2 max-w-[1000px]">
              <p className="text-3xl md:text-4xl [font-family:var(--font-playfair)] text-[#2b2b2b] italic leading-[1.6] max-w-[600px] mx-auto">
                "Handmade is not just craft, it's emotion."
              </p>
            </div>

            {/* Paragraph */}
            <p className="mb-16">
              Volutpat consequat mauris nunc congue nisi. Nunc pulvinar sapien et ligula ullamcorper. Pellentesque id nibh tortor id aliquet lectus proin nibh. Convallis posuere morbi leo urna molestie at elementum eu facilisis.
            </p>

            {/* 7) MICRO DETAILS & 8) NAVIGATION ELEMENT */}
            <div className="mt-32 pt-12 border-t border-[#d7d2cc]/60 flex items-center justify-between">
              <Link href="/" className="text-[#6c6c6c] hover:text-[#2b2b2b] transition text-[11px] md:text-[12px] tracking-[0.2em] uppercase flex items-center gap-3">
                <span className="text-lg mb-[2px] font-light">&larr;</span> Back to Journal
              </Link>
              <span className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-[#6c6c6c]">Share</span>
            </div>

          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
