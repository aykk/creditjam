// src/components/FormPageComponent.tsx

"use client";

import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useFormData } from "../contexts/FormDataContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Music, CreditCard, Banknote } from "lucide-react";
import Link from "next/link";

interface FormData {
  age: string;
  income: string;
  creditScore: string;
  isStudent: string;
  isBusinessOwner: string;
  topCategories: string[];
  interestedInHotelCards: string;
  preferredHotel: string;
  currentBanks: string[];
  inCreditCardDebt: string;
  interestedInAirlineCards: string;
  preferredAirline: string;
}

type FormDataKey = keyof FormData;

export function FormPageComponent() {
  const router = useRouter();
  const { setFormData } = useFormData(); // Get setFormData from context

  const [localFormData, setLocalFormData] = useState<FormData>({
    age: "",
    income: "",
    creditScore: "",
    isStudent: "",
    isBusinessOwner: "",
    topCategories: [],
    interestedInHotelCards: "",
    preferredHotel: "",
    currentBanks: [],
    inCreditCardDebt: "",
    interestedInAirlineCards: "",
    preferredAirline: "",
  });

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLocalFormData((prev) => ({
        ...prev,
        [name as FormDataKey]: value,
      }));
    },
    []
  );

  const handleSelectChange = useCallback(
    (name: FormDataKey, value: string) => {
      setLocalFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleCheckboxChange = useCallback(
    (name: FormDataKey, value: string, checked: boolean) => {
      setLocalFormData((prev) => {
        const prevValue = prev[name];
        if (Array.isArray(prevValue)) {
          if (checked) {
            return { ...prev, [name]: [...prevValue, value] };
          } else {
            return {
              ...prev,
              [name]: prevValue.filter((item) => item !== value),
            };
          }
        }
        return prev;
      });
    },
    []
  );

  const handleRadioChange = useCallback(
    (name: FormDataKey, value: string) => {
      setLocalFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", localFormData);
    setFormData(localFormData); // Update the context with the form data
    router.push("/complete");
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
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-4 border-dashed border-blue-300">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">
            Let us get to know you!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Age Input */}
            <div>
              <Label htmlFor="age" className="text-blue-800 font-semibold">
                What is your age?
              </Label>
              <Input
                type="number"
                id="age"
                name="age"
                value={localFormData.age}
                onChange={handleInputChange}
                className="mt-1 text-blue-900"
              />
            </div>

            {/* Income Input */}
            <div>
              <Label htmlFor="income" className="text-blue-800 font-semibold">
                What is your gross annual income?
              </Label>
              <Input
                type="number"
                id="income"
                name="income"
                value={localFormData.income}
                onChange={handleInputChange}
                className="mt-1 text-blue-900"
              />
            </div>

            {/* Credit Score Radio Group */}
            <div>
              <Label className="text-blue-800 font-semibold">
                What is your credit score?
              </Label>
              <RadioGroup
                value={localFormData.creditScore}
                onValueChange={(value) =>
                  handleRadioChange("creditScore", value)
                }
                className="mt-1"
              >
                {[
                  "Excellent: 800-850",
                  "Very good: 740-799",
                  "Good: 670-739",
                  "Fair: 580-669",
                  "Poor: 300-579",
                ].map((score) => (
                  <div key={score} className="flex items-center space-x-2">
                    <RadioGroupItem value={score} id={score} />
                    <Label htmlFor={score} className="text-blue-900">
                      {score}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Student Status Radio Group */}
            <div>
              <Label className="text-blue-800 font-semibold">
                Are you currently a student?
              </Label>
              <RadioGroup
                value={localFormData.isStudent}
                onValueChange={(value) =>
                  handleRadioChange("isStudent", value)
                }
                className="mt-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="student-yes" />
                  <Label htmlFor="student-yes" className="text-blue-900">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="student-no" />
                  <Label htmlFor="student-no" className="text-blue-900">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Business Owner Radio Group */}
            <div>
              <Label className="text-blue-800 font-semibold">
                Do you own a business/Are you interested in business credit
                cards?
              </Label>
              <RadioGroup
                value={localFormData.isBusinessOwner}
                onValueChange={(value) =>
                  handleRadioChange("isBusinessOwner", value)
                }
                className="mt-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="business-yes" />
                  <Label htmlFor="business-yes" className="text-blue-900">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="business-no" />
                  <Label htmlFor="business-no" className="text-blue-900">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Top Categories Checkbox Group */}
            <div>
              <Label className="text-blue-800 font-semibold">
                What are the top 3 categories that you spend the most on?
              </Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {[
                  "Dining",
                  "Grocery",
                  "Travel",
                  "Gas",
                  "Entertainment",
                  "Rent",
                  "Transit",
                ].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={localFormData.topCategories.includes(category)}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(
                          "topCategories",
                          category,
                          checked === true
                        )
                      }
                    />
                    <Label htmlFor={category} className="text-blue-900">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Interested in Hotel Cards Radio Group */}
            <div>
              <Label className="text-blue-800 font-semibold">
                Are you interested in hotel branded credit cards?
              </Label>
              <RadioGroup
                value={localFormData.interestedInHotelCards}
                onValueChange={(value) =>
                  handleRadioChange("interestedInHotelCards", value)
                }
                className="mt-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="hotel-yes" />
                  <Label htmlFor="hotel-yes" className="text-blue-900">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="hotel-no" />
                  <Label htmlFor="hotel-no" className="text-blue-900">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Preferred Hotel Select */}
            <div
              className={
                localFormData.interestedInHotelCards === "no"
                  ? "opacity-50 pointer-events-none"
                  : ""
              }
            >
              <Label
                htmlFor="preferredHotel"
                className="text-blue-800 font-semibold"
              >
                If so, which of these hotels do you prefer to stay at?
              </Label>
              <Select
                value={localFormData.preferredHotel}
                onValueChange={(value) =>
                  handleSelectChange("preferredHotel", value)
                }
                disabled={localFormData.interestedInHotelCards === "no"}
              >
                <SelectTrigger className="w-full mt-1 bg-white text-blue-900 border-blue-300">
                  <SelectValue placeholder="Select a hotel brand" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Mariott",
                    "Hilton",
                    "Hyatt",
                    "IHG",
                    "Choice Hotels",
                    "Wyndham",
                  ].map((hotel) => (
                    <SelectItem
                      key={hotel}
                      value={hotel.toLowerCase()}
                      className="text-blue-900"
                    >
                      {hotel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Current Banks Checkbox Group */}
            <div>
              <Label className="text-blue-800 font-semibold">
                Do you currently have any credit cards or a checking account
                with any of these banks?
              </Label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {[
                  "American Express",
                  "Chase",
                  "Capital One",
                  "Citi",
                  "Discover",
                  "US Bank",
                  "Wells Fargo",
                  "Bank of America",
                  "PNC Bank",
                  "None of these",
                ].map((bank) => (
                  <div key={bank} className="flex items-center space-x-2">
                    <Checkbox
                      id={bank}
                      checked={localFormData.currentBanks.includes(bank)}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange(
                          "currentBanks",
                          bank,
                          checked === true
                        )
                      }
                    />
                    <Label htmlFor={bank} className="text-blue-900">
                      {bank}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* In Credit Card Debt Radio Group */}
            <div>
              <Label className="text-blue-800 font-semibold">
                Are you in credit card debt?
              </Label>
              <RadioGroup
                value={localFormData.inCreditCardDebt}
                onValueChange={(value) =>
                  handleRadioChange("inCreditCardDebt", value)
                }
                className="mt-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="debt-yes" />
                  <Label htmlFor="debt-yes" className="text-blue-900">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="debt-no" />
                  <Label htmlFor="debt-no" className="text-blue-900">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Interested in Airline Cards Radio Group */}
            <div>
              <Label className="text-blue-800 font-semibold">
                Are you interested in airline branded credit cards?
              </Label>
              <RadioGroup
                value={localFormData.interestedInAirlineCards}
                onValueChange={(value) =>
                  handleRadioChange("interestedInAirlineCards", value)
                }
                className="mt-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="airline-yes" />
                  <Label htmlFor="airline-yes" className="text-blue-900">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="airline-no" />
                  <Label htmlFor="airline-no" className="text-blue-900">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Preferred Airline Select */}
            <div
              className={
                localFormData.interestedInAirlineCards === "no"
                  ? "opacity-50 pointer-events-none"
                  : ""
              }
            >
              <Label
                htmlFor="preferredAirline"
                className="text-blue-800 font-semibold"
              >
                If so, which of these airlines do you prefer to fly with?
              </Label>
              <Select
                value={localFormData.preferredAirline}
                onValueChange={(value) =>
                  handleSelectChange("preferredAirline", value)
                }
                disabled={localFormData.interestedInAirlineCards === "no"}
              >
                <SelectTrigger className="w-full mt-1 bg-white text-blue-900 border-blue-300">
                  <SelectValue placeholder="Select an airline" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Delta",
                    "United",
                    "Southwest",
                    "American Airlines",
                    "Air Canada",
                    "JetBlue",
                    "Alaska Airlines",
                    "Hawaiian Airlines",
                    "Spirit",
                    "Frontier",
                    "Allegiant",
                    "British Airways/Aer Lingus/Iberia Airlines",
                    "Air France/KLM",
                    "Emirates",
                    "Lufthansa",
                  ].map((airline) => (
                    <SelectItem
                      key={airline}
                      value={airline
                        .toLowerCase()
                        .replace(/\s+/g, "_")
                        .replace(/\//g, "_")}
                      className="text-blue-900"
                    >
                      {airline}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-xl font-bold transition-all duration-300 hover:shadow-lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}