import React from "react";

export default function BorrowersPage() {
  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Borrowers</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Flexible and tailored mortgage solutions to meet your unique needs.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 text-primary flex-shrink-0 mt-0.5">✔</div>
            <div>
              <span className="font-semibold">Fast Approvals:</span> Get quick decisions on your mortgage application.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 text-primary flex-shrink-0 mt-0.5">✔</div>
            <div>
              <span className="font-semibold">Flexible Terms:</span> Customized mortgage terms to suit your financial goals.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 text-primary flex-shrink-0 mt-0.5">✔</div>
            <div>
              <span className="font-semibold">Competitive Rates:</span> Affordable interest rates for all borrowers.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-6 w-6 text-primary flex-shrink-0 mt-0.5">✔</div>
            <div>
              <span className="font-semibold">Expert Guidance:</span> Work with our experienced mortgage advisors.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <ol className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-lg">Apply Online</h3>
              <p>Fill out our simple online application form to get started.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-lg">Get Approved</h3>
              <p>Receive a decision quickly with our streamlined approval process.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-lg">Access Funds</h3>
              <p>Secure the funding you need for your property or project.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="bg-muted p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Ready to Get Started?</h2>
        <p className="text-center text-muted-foreground mb-8">
          Contact us today to discuss your borrowing needs and explore your options.
        </p>
        <div className="text-center">
          <a href="/contact" className="text-blue-500 hover:underline font-semibold">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

