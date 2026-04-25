"use client";

import PageWrapper from "../../components/PageWrapper";

export default function RefundPage() {
  return (
    <PageWrapper>
      <div className="w-full pt-[140px] md:pt-[180px] pb-20 md:pb-32 px-6">
        <div className="max-w-[800px] mx-auto bg-white p-8 md:p-16 rounded-[32px] shadow-sm">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold [font-family:var(--font-playfair)] text-[#2b2b2b]">
              Refund Policy
            </h1>
            <p className="mt-4 text-[#6c6c6c]">Last updated: October 2023</p>
          </div>

          <div className="space-y-8 text-[#6c6c6c] text-[15px] md:text-[16px] leading-[1.8]">
            
            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Return Eligibility</h2>
              <p>
                To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Several types of goods are exempt from being returned, such as custom-made or personalized items.
              </p>
            </section>

            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Time Limits</h2>
              <p>
                Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.
              </p>
            </section>

            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Refund Process</h2>
              <p>
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p className="mt-4">
                If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Non-refundable Items</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Gift cards</li>
                <li>Downloadable software products</li>
                <li>Some health and personal care items</li>
                <li>Items on final sale or clearance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl [font-family:var(--font-playfair)] text-[#2b2b2b] mb-4">Late or Missing Refunds</h2>
              <p>
                If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at support@example.com.
              </p>
            </section>

          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
