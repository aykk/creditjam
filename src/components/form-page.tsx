"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Music, Headphones, CreditCard } from "lucide-react"

export function FormPageComponent() {
  const [formData, setFormData] = useState({
    age: "",
    income: "",
    creditScore: "",
    currentCards: "",
    isStudent: "",
    isBusinessOwner: "",
    topCategories: [],
    subscriptionServices: "",
    interestedInHotelCards: "",
    interestedInAirlineCards: "",
    inCreditCardDebt: "",
    preferredAirlines: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (category) => {
    setFormData((prev) => ({
      ...prev,
      topCategories: prev.topCategories.includes(category)
        ? prev.topCategories.filter((c) => c !== category)
        : [...prev.topCategories, category],
    }))
  }

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data submitted:", formData)
    // Here you would typically send the data to a server or perform further actions
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-blue-200 to-white relative overflow-hidden flex flex-col">
      <header className="bg-white shadow-lg relative z-10 border-b-4 border-blue-300 rounded-b-[2rem]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-3xl font-bold text-blue-700 flex items-center">
              credit<span className="text-blue-500">JAM</span>
              <Music className="inline-block ml-2 text-blue-600 w-8 h-8" />
            </h1>
            <nav className="space-x-2 flex items-center">
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100">
                About
                <CreditCard className="w-0 h-0 group-hover:w-6 group-hover:h-6 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100">
                Features
                <Music className="w-0 h-0 group-hover:w-6 group-hover:h-6 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
              <Button variant="ghost" className="text-blue-700 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out text-lg rounded-full px-6 py-2 hover:bg-blue-100">
                Contact
                <Headphones className="w-0 h-0 group-hover:w-6 group-hover:h-6 ml-0 group-hover:ml-2 transition-all duration-300 ease-in-out text-blue-400" />
              </Button>
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
              <Input type="text" id="age" name="age" value={formData.age} onChange={handleInputChange} className="mt-1 text-blue-900" />
            </div>
            <div>
              <Label htmlFor="income" className="text-blue-800 font-semibold">What is your gross annual income?</Label>
              <Input type="text" id="income" name="income" value={formData.income} onChange={handleInputChange} className="mt-1 text-blue-900" />
            </div>
            <div>
              <Label htmlFor="creditScore" className="text-blue-800 font-semibold">What is your credit score?</Label>
              <Input type="text" id="creditScore" name="creditScore" value={formData.creditScore} onChange={handleInputChange} className="mt-1 text-blue-900" />
            </div>
            <div>
              <Label htmlFor="currentCards" className="text-blue-800 font-semibold">What credit cards do you currently have?</Label>
              <Input type="text" id="currentCards" name="currentCards" value={formData.currentCards} onChange={handleInputChange} className="mt-1 text-blue-900" />
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
                      onCheckedChange={() => handleCheckboxChange(category)}
                    />
                    <Label htmlFor={category} className="text-blue-900">{category}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="subscriptionServices" className="text-blue-800 font-semibold">What subscription services do you use? Separate each answer with a comma.</Label>
              <Input type="text" id="subscriptionServices" name="subscriptionServices" value={formData.subscriptionServices} onChange={handleInputChange} className="mt-1 text-blue-900" />
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
              <Label htmlFor="preferredAirlines" className="text-blue-800 font-semibold">What are your preferred airlines?</Label>
              <Input type="text" id="preferredAirlines" name="preferredAirlines" value={formData.preferredAirlines} onChange={handleInputChange} className="mt-1 text-blue-900" />
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