"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Music, CreditCard, Banknote, Search, X } from "lucide-react"
import Link from "next/link"

const creditCards = [
  "Chase Sapphire Preferred",
  "Chase Sapphire Reserve",
  "American Express Gold Card",
  "American Express Platinum Card",
  "Capital One Venture",
  "Capital One Quicksilver",
  "Citi Double Cash",
  "Citi Premier",
  "Discover it Cash Back",
  "Bank of America Cash Rewards",
  "Wells Fargo Active Cash",
  "U.S. Bank Altitude Reserve",
  "Marriott Bonvoy Boundless",
  "Hilton Honors American Express Surpass",
  "Delta SkyMiles Gold American Express",
  "United Explorer Card",
  "Southwest Rapid Rewards Priority",
  "Amazon Prime Rewards Visa Signature",
  "Apple Card",
  "Costco Anywhere Visa by Citi"
]

export function FormPageComponent() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    creditScore: "",
    currentCards: [],
    isStudent: "",
    isBusinessOwner: "",
    topCategories: [],
    interestedInHotelCards: "",
    preferredHotel: "",
    currentBanks: [],
    inCreditCardDebt: "",
    interestedInAirlineCards: "",
    preferredAirline: "",
  })
  const [searchTerm, setSearchTerm] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }))
  }

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data submitted:", formData)
    router.push("/complete")
  }

  const filteredCreditCards = creditCards.filter(card =>
    card.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreditCardSelect = (card) => {
    setFormData((prev) => ({
      ...prev,
      currentCards: prev.currentCards.includes(card)
        ? prev.currentCards.filter((c) => c !== card)
        : [...prev.currentCards, card],
    }))
  }

  const handleRemoveCreditCard = (card) => {
    setFormData((prev) => ({
      ...prev,
      currentCards: prev.currentCards.filter((c) => c !== card),
    }))
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

      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-4 border-dashed border-blue-300">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Find Your Perfect Credit Card</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="age" className="text-blue-800 font-semibold">What is your age?</Label>
              <Input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} className="mt-1 text-blue-900" />
            </div>
            <div>
              <Label htmlFor="income" className="text-blue-800 font-semibold">What is your gross annual income?</Label>
              <Input type="number" id="income" name="income" value={formData.income} onChange={handleInputChange} className="mt-1 text-blue-900" />
            </div>
            <div>
              <Label className="text-blue-800 font-semibold">What is your credit score?</Label>
              <RadioGroup name="creditScore" onValueChange={(value) => handleRadioChange("creditScore", value)} className="mt-1">
                {["Excellent: 800-850", "Very good: 740-799", "Good: 670-739", "Fair: 580-669", "Poor: 300-579"].map((score) => (
                  <div key={score} className="flex items-center space-x-2">
                    <RadioGroupItem value={score} id={score} />
                    <Label htmlFor={score} className="text-blue-900">{score}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="currentCards" className="text-blue-800 font-semibold">What credit cards do you currently have?</Label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search credit cards..."
                  className="pl-10 pr-4 py-2 w-full border border-neutral-200 rounded-md text-blue-900 placeholder-blue-400 dark:border-neutral-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="mt-2 max-h-40 overflow-y-auto border border-neutral-200 rounded-md dark:border-neutral-800">
                {filteredCreditCards.map((card) => (
                  <div
                    key={card}
                    className={`p-2 cursor-pointer hover:bg-blue-50 ${
                      formData.currentCards.includes(card) ? "'bg-blue-100'" : "''"
                    }`}
                    onClick={() => handleCreditCardSelect(card)}
                  >
                    <Checkbox
                      checked={formData.currentCards.includes(card)}
                      onCheckedChange={() => handleCreditCardSelect(card)}
                      id={`card-${card}`}
                      className="mr-2"
                    />
                    <Label htmlFor={`card-${card}`} className="text-blue-900 cursor-pointer">
                      {card}
                    </Label>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.currentCards.map((card) => (
                  <div key={card} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full flex items-center">
                    <span className="mr-1">{card}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveCreditCard(card)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-blue-800 font-semibold">Are you currently a student?</Label>
              <RadioGroup name="isStudent" onValueChange={(value) => handleRadioChange("isStudent", value)} className="mt-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="student-yes" />
                  <Label htmlFor="student-yes" className="text-blue-900">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="student-no" />
                  <Label htmlFor="student-no" className="text-blue-900">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="text-blue-800 font-semibold">Do you own a business/Are you interested in business credit cards?</Label>
              <RadioGroup name="isBusinessOwner" onValueChange={(value) => handleRadioChange("isBusinessOwner", value)} className="mt-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="business-yes" />
                  <Label htmlFor="business-yes" className="text-blue-900">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="business-no" />
                  <Label htmlFor="business-no" className="text-blue-900">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="text-blue-800 font-semibold">What are the top 3 categories that you spend the most on?</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {["Dining/Restaurants", "Grocery/Supermarkets", "Travel", "Gas", "Entertainment", "Rent", "Transit"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={formData.topCategories.includes(category)}
                      onCheckedChange={() => handleCheckboxChange("topCategories", category)}
                    />
                    <Label htmlFor={category} className="text-blue-900">{category}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-blue-800 font-semibold">Are you interested in hotel branded credit cards?</Label>
              <RadioGroup name="interestedInHotelCards" onValueChange={(value) => handleRadioChange("interestedInHotelCards", value)} className="mt-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="hotel-yes" />
                  <Label htmlFor="hotel-yes" className="text-blue-900">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="hotel-no" />
                  <Label htmlFor="hotel-no" className="text-blue-900">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="preferredHotel" className="text-blue-800 font-semibold">If so, which of these hotels do you prefer to stay at?</Label>
              <Select name="preferredHotel" onValueChange={(value) => handleSelectChange("preferredHotel", value)}>
                <SelectTrigger className="w-full mt-1 bg-white text-blue-900 border-blue-300">
                  <SelectValue placeholder="Select a hotel brand" />
                </SelectTrigger>
                <SelectContent>
                  {["Mariott", "Hilton", "Hyatt", "IHG", "Choice Hotels", "Wyndham"].map((hotel) => (
                    <SelectItem key={hotel} value={hotel.toLowerCase()} className="text-blue-900">{hotel}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-blue-800 font-semibold">Do you currently have any credit cards or a checking account with any of these banks?</Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {["American Express", "Chase", "Capital One", "Citi", "Discover", "US Bank", "Wells Fargo", "Bank of America", "PNC Bank", "None of these"].map((bank) => (
                  <div key={bank} className="flex items-center space-x-2">
                    <Checkbox
                      id={bank}
                      checked={formData.currentBanks.includes(bank)}
                      onCheckedChange={() => handleCheckboxChange("currentBanks", bank)}
                    />
                    <Label htmlFor={bank} className="text-blue-900">{bank}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-blue-800 font-semibold">Are you in credit card debt?</Label>
              <RadioGroup name="inCreditCardDebt" onValueChange={(value) => handleRadioChange("inCreditCardDebt", value)} className="mt-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="debt-yes" />
                  <Label htmlFor="debt-yes" className="text-blue-900">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="debt-no" />
                  <Label htmlFor="debt-no" className="text-blue-900">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="text-blue-800 font-semibold">Are you interested in airline branded credit cards?</Label>
              <RadioGroup name="interestedInAirlineCards" onValueChange={(value) => handleRadioChange("interestedInAirlineCards", value)} className="mt-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="airline-yes" />
                  <Label htmlFor="airline-yes" className="text-blue-900">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="airline-no" />
                  <Label htmlFor="airline-no" className="text-blue-900">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="preferredAirline" className="text-blue-800 font-semibold">If so, which of these airlines do you prefer to fly with?</Label>
              <Select name="preferredAirline" onValueChange={(value) => handleSelectChange("preferredAirline", value)}>
                <SelectTrigger className="w-full mt-1 bg-white text-blue-900 border-blue-300">
                  <SelectValue placeholder="Select an airline" />
                </SelectTrigger>
                <SelectContent>
                  {["Delta", "United", "Southwest", "American Airlines", "Air Canada", "JetBlue", "Alaska Airlines", "Hawaiian Airlines", "Spirit", "Frontier", "Allegiant", "British Airways/Aer Lingus/Iberia Airlines", "Air France/KLM", "Emirates", "Lufthansa"].map((airline) => (
                    <SelectItem key={airline} value={airline.toLowerCase().replace(/\s+/g, "'_'")} className="text-blue-900">{airline}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-xl font-bold transition-all duration-300 hover:shadow-lg">
              Submit
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}