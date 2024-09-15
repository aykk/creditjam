"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Music, CreditCard, Banknote, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// This is a mock-up of what the real data might look like
const mockSelectedCategories = ["Dining/Restaurants", "Travel", "Gas"]

const cardInfo = {
  "Catch-All Card": "This versatile card offers rewards on a wide range of purchases, making it an excellent choice for everyday spending. With no category restrictions, you'll earn points or cashback all your transactions.",
  "Hotel Card": "Designed for frequent travelers, this hotel-branded card provides exceptional benefits hotel stays. Enjoy free nights, room upgrades, and accelerated points earning on bookings other travel-related expenses.",
  "Airline Card": "Perfect for jet-setters, this airline-affiliated card offers miles your purchases, priority boarding, free checked bags, and other travel perks. Rack up quickly redeem them flights or upgrades."
}

export function CompletePageComponent() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)

  const nextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => 
      prevIndex === mockSelectedCategories.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevCategory = () => {
    setCurrentCategoryIndex((prevIndex) => 
      prevIndex === 0 ? mockSelectedCategories.length - 1 : prevIndex - 1
    )
  }

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Your Recommended Credit Cards</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Top Cards for {mockSelectedCategories[currentCategoryIndex]}
            </h3>
            <div className="flex items-center justify-between">
              <Button onClick={prevCategory} variant="ghost" className="p-2 text-blue-700 hover:text-blue-900">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="flex space-x-4">
                {[1, 2, 3].map((cardNumber) => (
                  <Dialog key={cardNumber}>
                    <DialogTrigger asChild>
                      <Card className="w-64 h-40 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <CardContent>
                          <p className="text-lg font-semibold text-blue-600">Card {cardNumber}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-blue-800">Card {cardNumber} Details</DialogTitle>
                      </DialogHeader>
                      <p className="text-blue-900">This is a great card for {mockSelectedCategories[currentCategoryIndex]}. It offers excellent rewards and benefits tailored to your spending habits.</p>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <Button onClick={nextCategory} variant="ghost" className="p-2 text-blue-700 hover:text-blue-900">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Additional Recommended Cards</h3>
            <div className="flex justify-between space-x-4">
              {Object.entries(cardInfo).map(([cardType, description]) => (
                <div key={cardType} className="flex flex-col items-center">
                  <p className="text-lg font-semibold text-blue-600 mb-2">{cardType}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="w-64 h-40 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                        <CardContent>
                          <CreditCard className="h-16 w-16 text-blue-500" />
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="bg-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-blue-800">{cardType}</DialogTitle>
                      </DialogHeader>
                      <p className="text-blue-900">{description}</p>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}