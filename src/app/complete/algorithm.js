const cards = require("./finalcreditcard.json");

// Function to filter by credit score
function filterByCreditScore(cards, creditScore) {
  const allowedTiers = {
    "Poor": ["0", "1", "2"],
    "Fair": ["0", "1", "2"],
    "Good": ["1", "2", "3"],
    "Very Good": ["1", "2", "3"],
    "Excellent": ["1", "2", "3"],
  };

  let matchedCreditLevel = null;
  let poor = false;

  if (creditScore.includes("Poor")) {
    matchedCreditLevel = "Poor";
    poor = true;
  } else if (creditScore.includes("Fair")) {
    matchedCreditLevel = "Fair";
    poor = true;
  } else if (creditScore.includes("Good")) {
    matchedCreditLevel = "Good";
  } else if (creditScore.includes("Very good")) {
    matchedCreditLevel = "Very Good";
  } else if (creditScore.includes("Excellent")) {
    matchedCreditLevel = "Excellent";
  }

  // Filter cards by checking if the card's tier is allowed for the user's credit score
  const filteredCards = cards.filter(card =>
    allowedTiers[matchedCreditLevel].includes(card.Tier)
  );

  return { filteredCards, poor };
}

// Function to apply user preferences (nuking)
function applyPreferences(cards, preferences) {
  return cards.filter(card => {
    if (preferences.isStudent === "No" && card.Name.toLowerCase().includes("student")) {
      return false;
    }
    if (preferences.isBusinessOwner === "No" && card.Category.toLowerCase().includes("business")) {
      return false;
    }
    if (preferences.interestedInHotelCards === "No" && card.Category.toLowerCase().includes("hotel")) {
      return false;
    }
    if (preferences.interestedInAirlineCards === "No" && card.Category.toLowerCase().includes("airline")) {
      return false;
    }
    return true;
  });
}

function calculateScores(cards, preferences) {
  return cards.map(card => {
    let score = +card.Score || 50;

    // Split categories
    const cardCategories = card.Category ? card.Category.toLowerCase().split('/') : [];
    const cardName = card.Name ? card.Name.toLowerCase() : "";

    // Apply scoring rules
    if (preferences.topCategories && preferences.topCategories.length > 0) {
      // Check if any topCategory matches any of the card's categories
      const matchesTopCategory = preferences.topCategories.some(category =>
        cardCategories.some(cardCategory => cardCategory.trim() === category.toLowerCase())
      );
      if (matchesTopCategory) {
        score += 15; // Add 15 points if card's category matches any topCategory
      }
    }

    if (preferences.isStudent === "Yes" && cardName.includes("student")) score += 15;
    if (preferences.isBusinessOwner === "Yes" && cardCategories.includes("business")) score += 10;
    if (preferences.inCreditCardDebt === "Yes" && cardCategories.includes("balance")) score += 10;
    if (preferences.interestedInHotelCards === "Yes" && cardCategories.includes("hotel")) score += 5;
    if (preferences.interestedInAirlineCards === "Yes" && cardCategories.includes("airline")) score += 5;

    if (preferences.preferredAirline) {
      if (cardName.includes(preferences.preferredAirline.toLowerCase())) {
        score += 10;
      }
    }

    if (preferences.currentBanks && preferences.currentBanks.length > 0) {
      preferences.currentBanks.forEach(bank => {
        if (cardName.includes(bank.toLowerCase())) {
          score += 10;
        }
      });
    }

    return { ...card, score }; // Return card with updated score
  });
}

// Function to sort and tier cards
function sortAndTierCards(cards) {
  const tiers = { tier0: [], tier1: [], tier2: [], tier3: [] };

  cards.forEach(card => {
    if (card.Tier === "0") tiers.tier0.push(card);
    else if (card.Tier === "1") tiers.tier1.push(card);
    else if (card.Tier === "2") tiers.tier2.push(card);
    else if (card.Tier === "3") tiers.tier3.push(card);
  });

  // Sort each tier by the updated score
  for (const tier in tiers) {
    tiers[tier].sort((a, b) => b.score - a.score);
  }

  return tiers;
}

// Function to sort by both category and tier, returning only the top card
function sortByCategoryAndTier(recommendedCards, category, tier) {
  const cardsInTier = recommendedCards[`tier${tier}`];

  if (!cardsInTier) {
    console.log(`No cards found for tier: ${tier}`);
    return null;
  }

  // Filter and organize cards by category
  const sortedByCategory = {};

  cardsInTier.forEach(card => {
    const cardCategory = card.Category.toLowerCase();

    // Perform partial match for category
    if (cardCategory.includes(category.toLowerCase())) {
      if (!sortedByCategory[cardCategory]) {
        sortedByCategory[cardCategory] = [];
      }
      sortedByCategory[cardCategory].push(card);
    }
  });

  if (Object.keys(sortedByCategory).length === 0) {
    console.log(`No cards found for categories containing: ${category}`);
    return null;
  }

  let topCard = null;

  // Find the top card by score across all matching categories
  for (const matchedCategory in sortedByCategory) {
    const sortedCards = [...sortedByCategory[matchedCategory]].sort((a, b) => b.score - a.score);

    // Take the first card (highest score) if there is no topCard yet or if the current card has a higher score
    if (!topCard || sortedCards[0].score > topCard.score) {
      topCard = sortedCards[0];
    }
  }

  if (!topCard) {
    console.log(`No top card found for category containing: ${category} and tier: ${tier}`);
    return null;
  }

  return topCard;
}

// Main function to get recommended cards
function getRecommendedCards(userPreferences) {
  const { filteredCards, poor } = filterByCreditScore(cards, userPreferences.creditScore);
  const adjustedCards = applyPreferences(filteredCards, userPreferences);
  const scoredCards = calculateScores(adjustedCards, userPreferences);
  const sortedCards = sortAndTierCards(scoredCards);
  return { sortedCards, poor }; // Return poor flag as well
}

// Function to get final recommended cards
function finalCards(userInput) {
  const { sortedCards: recommendedCards, poor } = getRecommendedCards(userInput);
  const returnCard = [];
  const cardCategories = userInput.topCategories.map(category => category.toLowerCase());
  let index = 1;

  if (poor) {
    index--;
  }

  for (let i = 0; i < cardCategories.length; i++) {
    const category = cardCategories[i];
    const card1 = sortByCategoryAndTier(recommendedCards, category, 0 + index);
    const card2 = sortByCategoryAndTier(recommendedCards, category, 1 + index);
    const card3 = sortByCategoryAndTier(recommendedCards, category, 2 + index);
    if (card1) returnCard.push(card1);
    if (card2) returnCard.push(card2);
    if (card3) returnCard.push(card3);
  }

  const cardM = sortByCategoryAndTier(recommendedCards, "Catch All", 1);
  if (cardM) returnCard.push(cardM);

  if (userInput.interestedInHotelCards === "Yes") {
    const card = sortByCategoryAndTier(recommendedCards, "Hotel", 1);
    if (card) returnCard.push(card);
  }
  if (userInput.interestedInAirlineCards === "Yes") {
    const card = sortByCategoryAndTier(recommendedCards, "Airline", 1);
    if (card) returnCard.push(card);
  }

  return returnCard;
}

module.exports = { finalCards };
console.log(finalCards);