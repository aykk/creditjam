// src/components/complete-page.tsx

"use client";

import { useState, useEffect } from "react";
import { useFormData } from "../contexts/FormDataContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Music,
  CreditCard,
  Banknote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { finalCards } from "../../src/app/complete/algorithm"; // Import finalCards

// Mock card information (unchanged)
const cardInfo = {
  "Catch-All Card":
    "This versatile card offers rewards on a wide range of purchases, making it an excellent choice for everyday spending. With no category restrictions, you'll earn points or cashback on all your transactions.",
  "Hotel Card":
    "Designed for frequent travelers, this hotel-branded card provides exceptional benefits for hotel stays. Enjoy free nights, room upgrades, and accelerated points earning on bookings and other travel-related expenses.",
  "Airline Card":
    "Perfect for jet-setters, this airline-affiliated card offers miles on your purchases, priority boarding, free checked bags, and other travel perks. Rack up miles quickly and redeem them for flights or upgrades.",
};

export function CompletePageComponent() {
  const { formData } = useFormData(); // Get formData from context
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Use the actual selected categories
  const selectedCategories = formData?.topCategories || [];

  // Handle case when no categories are selected or formData is null
  if (!formData || selectedCategories.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-blue-800">
          No categories selected. Please go back and complete the form.
        </p>
        <Link href="/form" passHref>
          <Button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-lg font-bold shadow-md transition-all duration-300 hover:shadow-lg">
            Go to Form
          </Button>
        </Link>
      </div>
    );
  }

  // Get recommended cards using finalCards function
  const recommendedCards = finalCards(formData);

  const nextCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === selectedCategories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCategory = () => {
    setCurrentCategoryIndex((prevIndex) =>
      prevIndex === 0 ? selectedCategories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-200 to-white relative overflow-hidden flex flex-col">
      <header className="bg-white shadow-lg relative z-10 border-b-4 border-blue-300 rounded-b-[2rem]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <Link
              href="/"
              className="text-3xl font-bold text-blue-700 flex items-center"
            >
              credit<span className="text-blue-500">JAM</span>
              <Music className="inline-block ml-2 text-blue-600 w-8 h-8" />
            </Link>
            <nav className="space-x-2 flex items-center">
              <Link href="/about" passHref>
                <Button
                  variant="ghost"
                  className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100"
                >
                  About
                  <CreditCard className="w-0 h-0 group-hover:w-6 group-hover:h-6 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
                </Button>
              </Link>
              <Link href="/guide" passHref>
                <Button
                  variant="ghost"
                  className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100"
                >
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

      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">
            Your Recommended Credit Cards
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Top Cards for {selectedCategories[currentCategoryIndex]}
            </h3>
            <div className="flex items-center justify-between">
              <Button
                onClick={prevCategory}
                variant="ghost"
                className="p-2 text-blue-700 hover:text-blue-900"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="flex space-x-4">
                {[0, 1, 2].map((index) => {
                  const cardIndex = currentCategoryIndex * 3 + index;
                  const card = recommendedCards[cardIndex] || null;
                  return (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <Card className="w-64 h-40 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <CardContent>
                            <p className="text-lg font-semibold text-blue-600">
                              {card && card.Name ? card.Name : "N/A"}
                            </p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="bg-white">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-blue-800">
                            {card && card.Name ? card.Name : "N/A"}
                          </DialogTitle>
                        </DialogHeader>
                        <p className="text-blue-900">
                          {card && card.Description
                            ? card.Description
                            : "No description available."}
                        </p>
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
              <Button
                onClick={nextCategory}
                variant="ghost"
                className="p-2 text-blue-700 hover:text-blue-900"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Additional Recommended Cards
            </h3>
            <div className="flex justify-between space-x-4">
              {[
                { type: "Catch-All", index: 9 },
                { type: "Hotel", index: 10 },
                { type: "Airline", index: 11 },
              ].map(({ type, index }) => {
                const card = recommendedCards[index] || null;
                return (
                  <div key={type} className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {type}
                    </h4>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="w-64 h-40 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                          <CardContent>
                            <p className="text-lg font-semibold text-blue-600">
                              {card && card.Name ? card.Name : "N/A"}
                            </p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="bg-white">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-blue-800">
                            {card && card.Name ? card.Name : "N/A"}
                          </DialogTitle>
                        </DialogHeader>
                        <p className="text-blue-900">
                          {card && card.Description
                            ? card.Description
                            : "No description available."}
                        </p>
                      </DialogContent>
                    </Dialog>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}