import broilerFeedImg from "../assets/broiler_feed.jpg";
import livestockFeedImg from "../assets/pigcattleFeed.jpg";


  export type FarmProduceCategory =
  | "Vegetables"
  | "Crops"
  | "Livestock";

export interface FarmProduce {
  name: string;
  image: string;
  category: FarmProduceCategory;
  description: string;
  status: "Available" | "Seasonal";
}




export const farmProduce: FarmProduce[] = [

  {
    name: "Onions",
    image:
      "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=900&q=80",
    category: "Vegetables",
    description:
      "Freshly harvested onions produced for household and commercial use.",
    status: "Seasonal",
  },

  {
    name: "Covo",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7xbh-MJTq2UF4dJtdA79Zbf-vNCe9lpNiEYioP8JvA&s=10",
    category: "Vegetables",
    description:
      "Fresh leafy vegetables cultivated as part of the farm's crop production.",
    status: "Seasonal",
  },

  {
    name: "Sweet Potatoes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0afeHZoLBy0OoIHYxR6KYIgae6zSW5mV4uww9fq_w5g&s",
    category: "Crops",
    description:
      "Nutritious sweet potatoes supporting food production and value addition.",
    status: "Seasonal",
  },

  {
    name: "Green Maize",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80",
    category: "Crops",
    description:
      "Fresh green maize harvested seasonally from the University of Zimbabwe Farm.",
    status: "Seasonal",
  },

  {
    name: "Carrots",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhGYZ4FVk6xyIVGlgXDWjIEm1DCR3I9ZTPIDsv0QDiw&s=10",
    category: "Vegetables",
    description:
      "Fresh farm-grown carrots suitable for household and commercial use.",
    status: "Available",
  },

  {
    name: "Potatoes",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    category: "Crops",
    description:
      "Quality potatoes grown as part of the farm's food production programme.",
    status: "Seasonal",
  },

  {
    name: "Soyabeans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2HftCZ48PmdTxX9-eIZKlZr7v30PTNRlaw&s",
    category: "Crops",
    description:
      "Soyabeans produced for food, agricultural research and value addition.",
    status: "Seasonal",
  },

  {
    name: "Beef",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uBZaTX8BGO0ZR_Rq0YYP-PGEnZQNoSM1PkT3Hcu6qA&s=10",
    category: "Livestock",
    description:
      "Quality beef production from livestock raised through the farm unit.",
    status: "Available",
  },

  {
    name: "Pork",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jjqkP_KPQc8hM_Z4_JmGQLnZ-nsEHDKNFe4hDsZuOg&s=10",
    category: "Livestock",
    description:
      "Pork production supporting the farm's livestock and commercial activities.",
    status: "Available",
  },

  {
    name: "Chicken / Live Broilers",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedAXtK6d9gka8qjYWSMCf_gQIUEvB4irZNJoQtK3yDw&s=10",
    category: "Livestock",
    description:
      "Live broiler chickens produced through the farm's poultry operations.",
    status: "Available",
  },

];

 export type ProcessingCategory =
  | "All"
  | "Food Products"
  | "Bakery Products"
  | "Animal Feed";

  export interface processingProducts{
  name:string;
  image: string;
  category: ProcessingCategory;
  description:string;

}

export const processingProducts = [
  {
    name: "Cooking Oil",
    category: "Food Products" as ProcessingCategory,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFeoyacSos1j44SS1vbLF8RcS4mJTPKOuAw&s",
       description:
      "Our Nugold cooking oil directly extracted from our own farm soyabeans from the field.",
  },

  {
    name: "Mealie Meal",
    category: "Food Products" as ProcessingCategory,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BispsgtDCnII-HcEwtGnLp49dnpnvjmSKs3SYVFUbg&s=10",
       description:
      "Our Mealie meal processed direct from our farm maize harvest.",
  },

  {
    name: "Sweet Potato NutriLoaf",
    category: "Bakery Products" as ProcessingCategory,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIIL3F_JPNC0ngHOgfC5MFSsr6cPRpdTFHrbdML-Ysw&s=10",
       description:
      "Highly nutricious nutriloaf with special mix of sweet potatoes directly harvested from our farm soil.",
  },

  {
    name: "Pies",
    category: "Bakery Products" as ProcessingCategory,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsmBYKVmdyfl3779HTIy8QqWqh2-QllDoe31u7QEJlA&s=10",
  },

  {
    name: "Sweet Potato Buns",
    category: "Bakery Products" as ProcessingCategory,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXLfinxUzmxN7iYLhjdIssp24V6gW1dpZjDI1wc2i3w&s=10",
  },

  {
    name: "Broiler Feed",
    category: "Animal Feed" as ProcessingCategory,
    image: broilerFeedImg,
     description:
      "Highly nutricious broiler feed for health chicken production",
  },

  {
    name: "Cattle & Pigs Stock Feed",
    category: "Animal Feed" as ProcessingCategory,
    image: livestockFeedImg,
     description:
      "formulated feed to nourish and grow your animal herd.",
  },
];


// src/data/siteData.ts

// 1. Export the type structure so other pages can see it
export interface HistoryContent {
  title: string;
  legacyText: string;
  modernText: string;
}

// 2. Export your actual text content safely typed
export const farmHistoryData: HistoryContent = {
  title: "Our Institutional Legacy",
  legacyText: "Established as an essential agricultural research hub...",
  modernText: "Today, through the value-addition strategies..."
};