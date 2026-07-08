import broilerFeedImg from "../assets/broiler_feed.jpg";
import livestockFeedImg from "../assets/pigcattleFeed.jpg";

export const farmProduce = [
  { name: "Onions", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=900&q=80" },
  { name: "Covo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7xbh-MJTq2UF4dJtdA79Zbf-vNCe9lpNiEYioP8JvA&s=10" },
  { name: "Sweet potatoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0afeHZoLBy0OoIHYxR6KYIgae6zSW5mV4uww9fq_w5g&s" },
  { name: "Green maize", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=80" },
  { name: "Carrots", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhGYZ4FVk6xyIVGlgXDWjIEm1DCR3I9ZTPIDsv0QDiw&s=10" },
  { name: "Potatoes", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80" },
  { name: "Soyabeans", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2HftCZ48PmdTxX9-eIZKlZr7v30PTNRlaw&s" },
  { name: "Beef", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3uBZaTX8BGO0ZR_Rq0YYP-PGEnZQNoSM1PkT3Hcu6qA&s=10" },
  { name: "Pork", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jjqkP_KPQc8hM_Z4_JmGQLnZ-nsEHDKNFe4hDsZuOg&s=10" },
  { name: "Chicken / Live Broilers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSedAXtK6d9gka8qjYWSMCf_gQIUEvB4irZNJoQtK3yDw&s=10" },
];

export const processingProducts = [
  { name: "Cooking oil", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFeoyacSos1j44SS1vbLF8RcS4mJTPKOuAw&s" },
  { name: "Mealie Meal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BispsgtDCnII-HcEwtGnLp49dnpnvjmSKs3SYVFUbg&s=10" },
  { name: "Sweet Potato NutriLoaf", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIIL3F_JPNC0ngHOgfC5MFSsr6cPRpdTFHrbdML-Ysw&s=10" },
  { name: "Pies", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsmBYKVmdyfl3779HTIy8QqWqh2-QllDoe31u7QEJlA&s=10" },
  { name: "Broiler Feed", image: broilerFeedImg },
  { name: "Cattle & Pigs Stock Feed", image: livestockFeedImg },  
  { name: "Sweet Potato Buns", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXLfinxUzmxN7iYLhjdIssp24V6gW1dpZjDI1wc2i3w&s=10" },
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