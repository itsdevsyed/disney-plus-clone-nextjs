// Import types and modules from Next.js and custom components
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import { ThemeProvider } from "@/components/ThemeProvider"

// Load the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] })

// Define the metadata for the page
export const metadata: Metadata = {
  title: 'Disney+ Clone',           // Title of the page
  description: 'Education purposes', // Description of the page
}

// Define the root layout component
export default function RootLayout({
  children, // Children components to be rendered inside the layout
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        {/* ThemeProvider component to handle dark/light mode with system preference */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header component to be displayed at the top of the page */}
          <Header />
          {/* Render the children components */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
