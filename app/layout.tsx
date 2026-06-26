import type { Metadata } from "next"
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Kunal Das — Developer Advocate & Cloud Native Consultant",
  description:
    "Kunal Das is a Developer Advocate APAC at CAST AI, specializing in Kubernetes cost optimization, FinOps, and CNCF community leadership.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="font-body bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
