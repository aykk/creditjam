"'use client'"

import { Button } from "@/components/ui/button"
import { Music, Zap, Headphones, CreditCard, Banknote, Sparkles, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-200 to-white relative overflow-hidden flex flex-col">
      <header className="bg-white shadow-lg relative z-10 border-b-4 border-blue-300 rounded-b-[2rem]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-3xl font-bold text-blue-700 flex items-center">
              credit<span className="text-blue-500">JAM</span>
              <Music className="inline-block ml-2 text-blue-600 w-8 h-8" />
            </Link>
            <nav className="space-x-2 flex items-center">
              <Link href="/about" passHref>
                <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100">
                  About
                  <CreditCard className="w-0 h-0 group-hover:w-6 group-hover:h-6 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
                </Button>
              </Link>
              <Link href="/guide" passHref>
                <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100">
                  Guide
                  <Banknote className="w-0 h-0 group-hover:w-6 group-hover:h-6 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
                </Button>
              </Link>
              <Link href="/form" passHref>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-bold shadow-md transition-all duration-300 hover:shadow-lg">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-between mt-16 mb-24">
          <div className="w-1/2 space-y-6">
            <h2 className="text-6xl font-bold text-blue-800 leading-tight">
              Find Your <span className="text-blue-500 bg-yellow-200 px-2 py-1 rounded-lg transform -rotate-2 inline-block">Perfect</span> Credit Card Match!
            </h2>
            <p className="text-2xl text-blue-700 mb-8">
              Let creditJAM help you discover the ideal credit card for your lifestyle. It's time to make your finances groove!
            </p>
            <div className="space-x-6">
              <Link href="/form" passHref>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg transform transition hover:scale-105 hover:rotate-3">
                  Start JAMming! 🎵
                  <Zap className="ml-2 inline-block" />
                </Button>
              </Link>
              <Link href="/guide" passHref>
                <Button className="bg-white hover:bg-blue-100 text-blue-500 px-8 py-4 rounded-full text-2xl font-bold shadow-lg transform transition hover:scale-105 hover:-rotate-3 border-2 border-blue-500">
                  Credit Guide
                  <Banknote className="ml-2 inline-block" />
                </Button>
              </Link>
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

        <div className="grid grid-cols-3 gap-8 w-full mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-4 border-dashed border-blue-300 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-400">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Personalized Recommendations</h3>
            <p className="text-blue-600 mb-4">Get tailored credit card suggestions based on your unique financial background and spending habits.</p>
            <Sparkles className="w-12 h-12 text-blue-500 mt-auto" />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border-4 border-dashed border-blue-300 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-400">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Secure and Confidential</h3>
            <p className="text-blue-600 mb-4">Your data is anonymous and never saved! All of your information will be discarded once you use our service.</p>
            <Shield className="w-12 h-12 text-blue-500 mt-auto" />
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border-4 border-dashed border-blue-300 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-400">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Maximize Your Rewards</h3>
            <p className="text-blue-600 mb-4">Discover cards that offer the best return for your spending patterns and lifestyle.</p>
            <TrendingUp className="w-12 h-12 text-blue-500 mt-auto" />
          </div>
        </div>
      </main>
    </div>
  )
}