"use client";

import PageWrapper from "../../components/PageWrapper";
import JournalSection from "../../components/JournalSection";

export default function BlogPage() {
  return (
    <PageWrapper>
      <div className="pt-[140px] md:pt-[180px] bg-[#f5f3ef] min-h-screen">
        <div className="max-w-[1320px] mx-auto px-6 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold [font-family:var(--font-playfair)] text-[#2b2b2b]">
            The Journal
          </h1>
          <p className="mt-4 text-[#6c6c6c]">Stories, techniques, and inspiration.</p>
        </div>
        <JournalSection />
      </div>
    </PageWrapper>
  );
}
