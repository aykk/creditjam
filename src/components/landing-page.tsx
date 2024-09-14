"use client";

import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Sparkles,
  Target,
  Music,
  Zap,
  Star,
  Headphones,
} from "lucide-react";
import { ReactNode } from "react";

// Define the props type for FeatureCard
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 relative overflow-hidden">
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
          className="absolute text-blue-300 opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 20}px`,
            height: `${Math.random() * 20 + 20}px`,
          }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <Headphones
          key={`headphones-${i}`}
          className="absolute text-blue-300 opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 30 + 30}px`,
            height: `${Math.random() * 30 + 30}px`,
          }}
        />
      ))}
      {[...Array(7)].map((_, i) => (
        <Star
          key={`star-${i}`}
          className="absolute text-blue-300 opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 15 + 15}px`,
            height: `${Math.random() * 15 + 15}px`,
          }}
        />
      ))}

      <header className="p-4 bg-white shadow-md relative z-10 rounded-full mx-4 mt-4 border-4 border-dashed border-blue-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-600 flex items-center">
            credit<span className="text-blue-500">JAM</span>
            <Music className="inline-block ml-2 text-blue-400" />
          </h1>
          <nav className="space-x-2">
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-500 font-semibold rounded-full"
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-500 font-semibold rounded-full"
            >
              Features
            </Button>
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-500 font-semibold rounded-full"
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-10 px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-6xl font-bold text-blue-700 mb-4 leading-tight">
              Find Your{" "}
              <span className="text-blue-500 bg-yellow-200 px-2 py-1 rounded-lg">
                Perfect
              </span>{" "}
              Credit Card Match!
            </h2>
            <p className="text-2xl text-blue-600 mb-8">
              Let creditJAM help you discover the ideal credit card for your
              lifestyle and needs. It's time to make your finances groove!
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-lg transform transition hover:scale-110 hover:rotate-3">
              Start Jamming! 🎵
              <Zap className="ml-2 inline-block animate-pulse" />
            </Button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-z8BaxQCdvbDawLEFKBksqScOr2XLIY.png"
              alt="Stylized hands holding multiple credit cards"
              className="w-full max-w-xl transform rotate-6 hover:rotate-0 transition-transform duration-300"
            />
            <Star className="absolute top-1/4 left-1/4 text-blue-400 w-12 h-12 animate-spin" />
            <Star className="absolute bottom-1/4 right-1/4 text-blue-400 w-12 h-12 animate-spin delay-150" />
          </div>
        </div>

        <section className="mt-20 grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CreditCard className="w-16 h-16 text-blue-400" />}
            title="Wide Selection"
            description="Browse through hundreds of funky credit card options tailored to your needs."
          />
          <FeatureCard
            icon={<Target className="w-16 h-16 text-blue-500" />}
            title="Personalized Matches"
            description="Our groovy algorithm finds the perfect credit card match for your unique style."
          />
          <FeatureCard
            icon={<Sparkles className="w-16 h-16 text-blue-600" />}
            title="Exclusive Offers"
            description="Get access to special deals and promotions that'll make your wallet dance!"
          />
        </section>
      </main>

      <footer className="mt-20 bg-blue-100 text-blue-700 py-8 relative z-10 rounded-t-3xl">
        <div className="container mx-auto text-center">
          <p className="text-xl">
            &copy; 2023 creditJAM. All rights reserved. Keep on jammin'! 🎶
          </p>
        </div>
      </footer>
    </div>
  );
}

// FeatureCard component
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md transform transition hover:scale-105 hover:shadow-lg hover:rotate-3 border-4 border-dashed border-blue-200">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-blue-600 mb-2">{title}</h3>
      <p className="text-blue-500 text-lg">{description}</p>
    </div>
  );
}