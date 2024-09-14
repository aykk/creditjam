"'use client'"

import { Button } from "@/components/ui/button"
import { Music, CreditCard, Banknote, Users, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

export function AboutPageComponent() {
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
              <Link href="/resources" passHref>
                <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100">
                  Resources
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

      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-4 border-dashed border-blue-300">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">About creditJAM</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Users className="w-12 h-12 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Diversity, Equity, and Inclusion</h3>
                <p className="text-blue-600">
                  At creditJAM, we believe that financial knowledge and opportunities should be accessible to everyone, regardless of their background, ethnicity, or socioeconomic status. We're committed to breaking down barriers and providing inclusive, unbiased credit card recommendations and financial education to empower all individuals on their financial journey.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <BookOpen className="w-12 h-12 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Financial Literacy for All</h3>
                <p className="text-blue-600">
                  We're passionate about improving financial literacy across all communities. Our platform offers easy-to-understand resources, guides, and tools to help you make informed decisions about credit cards and personal finance. We believe that knowledge is power, and we're here to empower you with the information you need to take control of your financial future.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <TrendingUp className="w-12 h-12 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Leveraging Credit Cards Responsibly</h3>
                <p className="text-blue-600">
                  Our mission is to help you leverage credit cards as powerful financial tools rather than sources of debt. We provide personalized recommendations and strategies to maximize rewards, build credit, and achieve your financial goals. With the right knowledge and approach, credit cards can be a valuable asset in your financial toolkit.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-blue-700 mb-6">
              Join us in our mission to democratize financial knowledge and empower individuals to make smart credit decisions.
            </p>
            <Link href="/form" passHref>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg transition-all duration-300 hover:shadow-xl">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}