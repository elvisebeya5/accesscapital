import React from "react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for Access Capital Mortgage Investment Company</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: March 27, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Access Capital Mortgage Investment Company (“<em>Company</em>,” “we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy (“Policy”) explains how we collect, use, disclose, and safeguard your personal information when you use our website, services, or platforms (the “<em>Site</em>”). By accessing the Site, you consent to the practices described in this Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Scope</h2>
        <p>
          This Policy applies to information collected through the Site, including data provided by users, automated technologies, and third-party sources. It does not govern third-party websites or services linked to our Site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Information We Collect</h2>
        <h3 className="text-lg font-medium mb-2">A. Personal Information</h3>
        <ul className="list-disc pl-6">
          <li><strong>Identifiers</strong>: Name, email address, phone number, mailing address.</li>
          <li><strong>Financial Information</strong>: Income, credit history, mortgage preferences, investment details.</li>
          <li><strong>Technical Data</strong>: IP address, browser type, device identifiers, cookies (see Section 8).</li>
          <li><strong>Communications</strong>: Records of emails, chats, or phone calls with our team.</li>
        </ul>
        <h3 className="text-lg font-medium mt-4 mb-2">B. Non-Personal Information</h3>
        <p>Aggregated, anonymized, or de-identified data that cannot reasonably identify you.</p>
      </section>

      {/* Add similar sections for the remaining policy content */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">14. Governing Law</h2>
        <p>
          This Policy is governed by the laws of Ontario, Canada, and complies with applicable Canadian privacy legislation, including PIPEDA.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">13. Contact Us</h2>
        <p>For questions, requests, or concerns about this Policy, contact us at:</p>
        <ul className="list-none pl-0 mt-2">
          <li>(905) 580-3088</li>
          <li>info@accesscapitalmic.com</li>
          <li>300-125 Lakeshore Road East, Oakville, ON</li>
        </ul>
      </section>
    </div>
  );
}
