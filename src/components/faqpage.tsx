"'use client'"

import { Button } from "@/components/ui/button"
import { Music, Headphones, CreditCard } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-200 to-white relative overflow-hidden flex flex-col">
      <header className="bg-white shadow-md relative z-10 border-b-4 border-dashed border-blue-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <h1 className="text-3xl font-bold text-blue-700 flex items-center">
              credit<span className="text-blue-500">JAM</span>
              <Music className="inline-block ml-2 text-blue-600 w-6 h-6" />
            </h1>
            <nav className="space-x-4 flex items-center">
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg">
                About
                <CreditCard className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg">
                Features
                <Music className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg">
                Contact
                <Headphones className="w-0 h-0 group-hover:w-5 group-hover:h-5 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold text-blue-700">
                What is creditJAM?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-blue-600">
                creditJAM is a revolutionary platform that helps you find the perfect credit card match for your lifestyle and financial needs. We use advanced algorithms and personalized recommendations to ensure you get the best card for your unique situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold text-blue-700">
                How does creditJAM work?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-blue-600">
                Our platform analyzes your spending habits, credit score, and financial goals to recommend credit cards that best suit your needs. We compare offers from multiple banks and credit card companies to find the most beneficial options for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold text-blue-700">
                Is creditJAM free to use?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-blue-600">
                Yes, creditJAM is completely free for users. We make money through partnerships with credit card companies when you successfully apply for a card through our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold text-blue-700">
                How secure is my information on creditJAM?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-blue-600">
                We take your privacy and security seriously. All data is encrypted and stored securely. We never share your personal information without your explicit consent. Our platform adheres to the highest industry standards for data protection.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold text-blue-700">
                Can I trust creditJAM's recommendations?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-blue-600">
                Our recommendations are based on objective data analysis and are tailored to your specific needs. We're committed to transparency and always disclose any partnerships we have with credit card companies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  )
}