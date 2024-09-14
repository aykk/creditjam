"'use client'"

import { Button } from "@/components/ui/button"
import { Music, Zap, Star, Headphones, CreditCard, Banknote, Sparkles } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden flex flex-col">
      {/* Cartoon-style background elements */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-300 opacity-50 w-8 h-8"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
      
      {/* Music notes, headphones, and stars */}
      {[...Array(5)].map((_, i) => (
        <Music
          key={`music-${i}`}
          className="absolute text-blue-300 opacity-50 w-8 h-8"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <Headphones
          key={`headphones-${i}`}
          className="absolute text-blue-300 opacity-50 w-8 h-8"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      {[...Array(7)].map((_, i) => (
        <Star
          key={`star-${i}`}
          className="absolute text-blue-300 opacity-50 w-8 h-8"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <header className="p-4 bg-white shadow-md relative z-10 rounded-full mx-4 mt-4 border-4 border-dashed border-blue-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600 flex items-center">
            credit<span className="text-blue-500">JAM</span>
            <Music className="inline-block ml-2 text-blue-400" />
          </h1>
          <nav className="space-x-2 flex items-center">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-500 font-semibold rounded-full group transition-all duration-300 ease-in-out">
              About
              <CreditCard className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
            </Button>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-500 font-semibold rounded-full group transition-all duration-300 ease-in-out">
              Features
              <Star className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-yellow-400" />
            </Button>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-500 font-semibold rounded-full group transition-all duration-300 ease-in-out">
              Contact
              <Headphones className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-green-400" />
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 relative z-10 flex items-center">
        <div className="flex items-center justify-between">
          <div className="w-1/2 space-y-4">
            <h2 className="text-5xl font-bold text-blue-700 leading-tight">
              Find Your <span className="text-blue-500 bg-yellow-200 px-2 py-1 rounded-lg">Perfect</span> Credit Card Match!
            </h2>
            <p className="text-xl text-blue-600 mb-6">
              Let creditJAM help you discover the ideal credit card for your lifestyle and needs. It's time to make your finances groove!
            </p>
            <div className="space-x-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg transform transition hover:scale-105 hover:rotate-3">
                Start Jamming! 🎵
                <Zap className="ml-2 inline-block animate-pulse" />
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-blue-500 px-6 py-3 rounded-full text-xl font-bold shadow-lg transform transition hover:scale-105 hover:-rotate-3 border-2 border-blue-500">
                Resources
                <Banknote className="ml-2 inline-block" />
              </Button>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center relative">
            <div className="group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-z8BaxQCdvbDawLEFKBksqScOr2XLIY.png"
                alt="Stylized hands holding multiple credit cards"
                className="w-full max-w-lg transform transition-transform duration-300 group-hover:rotate-6"
              />
              <Sparkles className="absolute top-1/4 left-1/4 text-yellow-400 w-12 h-12 opacity-85 transition-transform duration-300 group-hover:rotate-6" />
              <Sparkles className="absolute bottom-1/3 right-1/4 text-yellow-400 w-12 h-12 opacity-85 transition-transform duration-300 group-hover:rotate-6" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-100 text-blue-700 py-4 relative z-10 rounded-t-3xl border-t-4 border-dashed border-blue-200">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2023 creditJAM. All rights reserved. Keep on jammin'! 🎶
          </p>
        </div>
      </footer>
    </div>
  )
}