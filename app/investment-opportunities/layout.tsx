import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment Opportunities | ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY",
  description: "Explore our investment opportunities with secure, high-yield mortgage investments.",
};

export default function InvestmentOpportunitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
