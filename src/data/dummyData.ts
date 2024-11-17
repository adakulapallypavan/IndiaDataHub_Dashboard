// Dummy data based on the provided images
export const indiaStatesData = [
  {
    id: 1,
    title: "CPI Weight - All Commodities (2012 series)",
    category: "Banking / Accounts",
    range: "Jan 2011 - Apr 2024",
    frequency: "Quarterly",
    unit: "USD",
    coverage: { type: "S", hasR: true }
  },
  {
    id: 2,
    title: "CPI Urban Weight - All Commodities (2012 series)",
    category: "Banking / Accounts",
    range: "Jan 2011 - Apr 2024",
    frequency: "Quarterly",
    unit: "INR",
    coverage: { type: "N" }
  },
  {
    id: 3,
    title: "CPI Rural Weight - All Commodities (2012 series)",
    category: "Banking / Accounts",
    range: "Jan 2011 - Apr 2024",
    frequency: "Quarterly",
    unit: "USD",
    coverage: { type: "S" }
  },
  {
    id: 4,
    title: "Total Expenditure outstanding under NREGA (annual)",
    category: "Banking / Accounts",
    range: "Apr 2011 - Mar 2024",
    frequency: "Annually",
    unit: "INR",
    coverage: { type: "N", hasR: true }
  }
];

export const imfData = [
  {
    id: 1,
    title: "GDP Growth Rate - Australasia Region",
    category: "Economic Indicators",
    range: "Jan 2011 - Apr 2024",
    frequency: "Quarterly",
    unit: "USD",
    coverage: { type: "G" }
  },
  {
    id: 2,
    title: "Consumer Price Index - European Union",
    category: "Price Statistics",
    range: "Jan 2011 - Apr 2024",
    frequency: "Monthly",
    unit: "EUR",
    coverage: { type: "G", hasR: true }
  },
  {
    id: 3,
    title: "Foreign Exchange Reserves - Country Groups",
    category: "Financial Statistics",
    range: "Jan 2011 - Apr 2024",
    frequency: "Monthly",
    unit: "USD",
    coverage: { type: "G" }
  },
  {
    id: 4,
    title: "Balance of Payments - Australasia",
    category: "External Sector",
    range: "Jan 2011 - Apr 2024",
    frequency: "Quarterly",
    unit: "USD",
    coverage: { type: "G", hasR: true }
  }
];

export const categories = [
  {
    id: "india-states",
    name: "India & States",
    subcategories: [
      "Homepage",
      "Banking",
      "Capital Markets",
      "Climate",
      "Commodity Prices",
      "Energy",
      "External Sector",
      "FX Market",
      "Foreign Trade",
      "Global indicators",
      "Government Finances"
    ]
  },
  {
    id: "imf",
    name: "IMF",
    subcategories: [
      "Australasia",
      "Country Groups",
      "Europe"
    ]
  },
  {
    id: "global-data",
    name: "Global Data",
    subcategories: []
  },
  {
    id: "bis",
    name: "BIS",
    subcategories: []
  },
  {
    id: "world-bank",
    name: "World Bank",
    subcategories: []
  },
  {
    id: "united-nations",
    name: "United Nations",
    subcategories: []
  }
];