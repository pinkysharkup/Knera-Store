"use client";

import PageWrapper from "../../components/PageWrapper";

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="w-full pt-[140px] md:pt-[180px] pb-20 md:pb-32 px-6">
        <div className="max-w-[800px] mx-auto bg-white p-8 md:p-16 rounded-[32px] shadow-sm">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold [font-family:var(--font-playfair)] text-[#2b2b2b]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-[#6c6c6c]">Last updated: October 2023</p>
          </div>

          <div className="space-y-8 text-[#6c6c6c] text-[15px] md:text-[16px] leading-[1.8]">
            
            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Introduction</h2>
              <p>
                Welcome to our Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Data Collection</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
                <li>Financial Data includes payment card details (processed securely by our payment partners).</li>
                <li>Transaction Data includes details about payments to and from you and other details of products you have purchased from us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">How We Use Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Cookies</h2>
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Contact Info</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
                Email: privacy@example.com <br />
                Address: 123 Artisan Street, Creative District
              </p>
            </section>

          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
