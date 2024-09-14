"'use client'"

import { Button } from "@/components/ui/button"
import { Music, Zap, Headphones, CreditCard, Banknote } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-200 to-white relative overflow-hidden flex flex-col">
      <div className="mt-8 px-4">
        <header className="py-3 px-6 bg-white shadow-md relative z-10 rounded-full mx-auto max-w-4xl border-4 border-dashed border-blue-300">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-700 flex items-center">
              credit<span className="text-blue-500">JAM</span>
              <Music className="inline-block ml-2 text-blue-600 w-6 h-6" />
            </h1>
            <nav className="space-x-4 flex items-center">
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold rounded-full group transition-all duration-300 ease-in-out text-lg px-4 py-2">
                About
                <CreditCard className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold rounded-full group transition-all duration-300 ease-in-out text-lg px-4 py-2">
                Features
                <Music className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold rounded-full group transition-all duration-300 ease-in-out text-lg px-4 py-2">
                Contact
                <Headphones className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
            </nav>
          </div>
        </header>
      </div>

      <main className="flex-grow container mx-auto px-4 relative z-10 flex items-center">
        <div className="flex items-center justify-between">
          <div className="w-1/2 space-y-6">
            <h2 className="text-6xl font-bold text-blue-800 leading-tight">
              Find Your <span className="text-blue-500 bg-yellow-200 px-2 py-1 rounded-lg transform -rotate-2 inline-block">Perfect</span> Credit Card Match!
            </h2>
            <p className="text-2xl text-blue-700 mb-8">
              Let creditJAM help you discover the ideal credit card for your lifestyle and needs. It's time to make your finances groove!
            </p>
            <div className="space-x-6">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg transform transition hover:scale-105 hover:rotate-3">
                Start Jamming! 🎵
                <Zap className="ml-2 inline-block" />
              </Button>
              <Button className="bg-white hover:bg-blue-100 text-blue-500 px-8 py-4 rounded-full text-2xl font-bold shadow-lg transform transition hover:scale-105 hover:-rotate-3 border-2 border-blue-500">
                Resources
                <Banknote className="ml-2 inline-block" />
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center relative">
            <div className="group relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-z8BaxQCdvbDawLEFKBksqScOr2XLIY.png"
                alt="Stylized hands holding multiple credit cards"
                className="relative w-full max-w-lg transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-200 text-blue-700 py-3 relative z-10 border-t-4 border-dashed border-blue-300">
        <div className="container mx-auto text-center">
          <p className="text-sm font-semibold">
            &copy; 2023 creditJAM. All rights reserved. Keep on jammin'! 🎶
          </p>
        </div>
      </footer>
    </div>
  )
}