import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY",
  description: "Get in touch with ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY for investment opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
