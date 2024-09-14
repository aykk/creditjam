"'use client'"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Music, Star, Headphones, CreditCard, ChevronLeft } from "lucide-react"

export function Resources() {
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
              <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 border-4 border-dashed border-blue-200">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-blue-600 hover:text-blue-500">What is creditJAM?</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                creditJAM is a service that helps you find the perfect credit card match for your lifestyle and financial needs. We use a groovy algorithm to analyze your preferences and spending habits to recommend the best credit cards for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-blue-600 hover:text-blue-500">How does creditJAM work?</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                Simply answer a few questions about your spending habits, credit score, and preferences. Our algorithm will then analyze this information and provide you with personalized credit card recommendations that best suit your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-blue-600 hover:text-blue-500">Is creditJAM free to use?</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                Yes! creditJAM is completely free for users. We make money through partnerships with credit card companies when users successfully apply for a card through our recommendations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-blue-600 hover:text-blue-500">How accurate are creditJAM's recommendations?</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                Our recommendations are highly accurate as they are based on your individual profile and up-to-date information from our partner banks. However, final approval for any credit card is always subject to the issuing bank's decision.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-blue-600 hover:text-blue-500">Can I trust creditJAM with my information?</AccordionTrigger>
              <AccordionContent className="text-blue-700">
                We take your privacy and security seriously. We use bank-level encryption to protect your data and never share your personal information with third parties without your explicit consent.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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