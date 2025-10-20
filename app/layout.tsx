import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export const metadata = {
  title: 'Fathan Portfolio',
  description: 'Personal portfolio built with Next.js 14 and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        {/* ✅ Added padding top to prevent navbar overlap */}
        <main className="min-h-screen px-6 py-10 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
