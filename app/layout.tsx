'use client';
import type React from "react"
import { Inter } from "next/font/google"
import { Montserrat } from 'next/font/google';
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const initEmailJS = () => {
      try {
        if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
          emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        }
      } catch (error) {
        console.error('EmailJS initialization error:', error);
      }
    };

    initEmailJS();
  }, []);

  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}