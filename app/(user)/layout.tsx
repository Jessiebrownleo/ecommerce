
import { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";
import NavbarComponent from "@/components/navbar/NavbarComponent"

export const metadata: Metadata = {
  title: 'Ecommerce Web',
  description: 'Ecommerce Website is the web application for selling product',
  openGraph: {
      title: 'Ecommerce Web',
      description:
          'Ecommerce Website is the web application for selling product',
      images: 'https://store.istad.co/media/brand_images/image.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Providers>
        <header className="sticky top-0 z-50">
          <NavbarComponent />
        </header>
        {children}</Providers>
      </body>
    </html>
  )
}
