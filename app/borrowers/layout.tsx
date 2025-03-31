import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Borrowers | ACCESS CAPITAL MORTGAGE INVESTMENT COMPANY",
  description: "Explore flexible and tailored mortgage solutions for borrowers.",
};

export default function BorrowersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
