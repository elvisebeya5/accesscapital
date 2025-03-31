import React from "react";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Use for Access Capital Mortgage Investment Company</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: March 27, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          By accessing or using the website, services, or platforms (collectively, the “<em>Site</em>”) of Access Capital Mortgage Investment Company (“Company,” “we,” “us,” or “our”), you (“User” or “you”) agree to comply with and be bound by these Terms of Use (“Terms”). If you do not agree, you may not use the Site. These Terms apply to all visitors, users, and entities accessing the Site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Definitions</h2>
        <ul className="list-disc pl-6">
          <li><strong>“Content”</strong>: Text, graphics, data, software, and other materials on the Site.</li>
          <li><strong>“Services”</strong>: Mortgage investment products, informational resources, and tools provided via the Site.</li>
          <li><strong>“User”</strong>: Any individual or entity accessing the Site.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Eligibility</h2>
        <ul className="list-disc pl-6">
          <li>You must be at least 18 years old and legally permitted to use the Site in your jurisdiction.</li>
          <li>The Services may not be available in all regions; verify compliance with local laws before use.</li>
        </ul>
      </section>

      {/* Add similar sections for the remaining terms */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">14. Miscellaneous</h2>
        <ul className="list-disc pl-6">
          <li><strong>Severability</strong>: If any provision is invalid, the remainder remains enforceable.</li>
          <li><strong>Entire Agreement</strong>: These Terms supersede prior agreements.</li>
          <li><strong>Contact Us</strong>: Questions? Reach us at:
            <ul className="list-none pl-0 mt-2">
              <li>(905) 580-3088</li>
              <li>info@accesscapitalmic.com</li>
              <li>300-125 Lakeshore Road East, Oakville, ON</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}
