"use client";

import { useState } from "react";
import { Cake, Coffee, CupSoda } from "lucide-react";
import MenuCard, { MenuItem } from "../components/MenuCard";

const menuData: Record<string, MenuItem[]> = {
  "sweets-bakery": [
    // {
    //   id: "s1",
    //   name: "Wow special brownie",
    //   price: "$6.50",
    //   description: "Our signature chef's special dessert platter.",
    //   rating: 4.9,
    //   image: "/assets/sweets/WhatsApp Image 2026-05-21 at 6.14.32 PM.jpeg",
    // },
    {
      id: "s2",
      name: "Chicken cajun",
      price: "13 SAR",
      description: "Spicy cajun chicken with lettuce and house sauce in fresh bread.",
      rating: 4.8,
      image: "/assets/sweets/chiken-cajun.jpeg",
    },
    {
      id: "s3",
      name: "Croissant plain",
      price: "9 SAR",
      description: "Buttery, flaky, and golden-brown baked fresh daily.",
      rating: 4.7,
      image: "/assets/sweets/croisant-plain.jpeg",
    },
    {
      id: "s4",
      name: "Croissant almond",
      price: "11 SAR",
      description: "Filled with rich almond frangipane and topped with sliced almonds.",
      rating: 4.8,
      image: "/assets/sweets/croissant-almond.jpeg",
    },
    {
      id: "s5",
      name: "Croissant cheese",
      price: "11 SAR",
      description: "Flaky croissant baked with savory cheddar cheese filling.",
      rating: 4.6,
      image: "/assets/sweets/croissant-cheese.jpeg",
    },
    {
      id: "s6",
      name: "Hallumi sandwich",
      price: "13 SAR",
      description: "Grilled halloumi cheese with fresh vegetables and pesto spread.",
      rating: 4.7,
      image: "/assets/sweets/hallomi-sandwich.jpeg",
    },
    {
      id: "s7",
      name: "Lemon cakes",
      price: "8 SAR",
      description: "Moist lemon sponge cake with a sweet and zesty glaze.",
      rating: 4.6,
      image: "/assets/sweets/lemon-cake.jpeg",
    },
    {
      id: "s8",
      name: "Marble cake",
      price: "8 SAR",
      description: "Classic swirl of vanilla and chocolate sponge cake.",
      rating: 4.5,
      image: "/assets/sweets/marble-cake.jpeg",
    },
    {
      id: "s9",
      name: "Mix brownies bites",
      price: "11 SAR",
      description: "Assorted bite-sized chocolate fudge and walnut brownies.",
      rating: 4.9,
      image: "/assets/sweets/mix-brownies-bites.jpeg",
    },
    {
      id: "s10",
      name: "Tuna sandwich",
      price: "13 SAR",
      description: "Creamy tuna salad with herbs and greens on freshly baked bread.",
      rating: 4.6,
      image: "/assets/sweets/sandwich-tuna.jpeg",
    },
    {
      id: "s11",
      name: "Turkey sandwich",
      price: "13 SAR",
      description: "Smoked turkey breast with cheese, lettuce, and honey mustard.",
      rating: 4.8,
      image: "/assets/sweets/smoke-turkey-sandwich.jpeg",
    },
    {
      id: "s12",
      name: "Mexican sandwich",
      price: "13 SAR",
      description: "Tender chicken with spicy jalapenos, salsa, and melted cheese.",
      rating: 4.9,
      image: "/assets/sweets/spicy-chicken-maxican.jpeg",
    },
    {
      id: "s13",
      name: "Triple chocolate cake",
      price: "14 SAR",
      description: "Rich chocolate cake layered with milk, dark, and white chocolate.",
      rating: 4.9,
      image: "/assets/sweets/triple-choklate.jpeg",
    },
    {
      id: "s14",
      name: "Wow chocolate cookies",
      price: "11 SAR",
      description: "Soft-baked cookies loaded with premium dark chocolate chunks.",
      rating: 4.8,
      image: "/assets/sweets/wow-choklate-cookies.jpeg",
    },
    {
      id: "s15",
      name: "Zafran cake",
      price: "16 SAR",
      description: "Decadent sponge cake soaked in aromatic saffron-infused milk.",
      rating: 4.9,
      image: "/assets/sweets/zafran-cake.jpeg",
    },
  ],
  "hot-coffee": [
    {
      id: "h1",
      name: "Cappuccino",
      price: "14 SAR",
      description: "Rich espresso topped with steamed milk and a thick layer of foam.",
      rating: 4.8,
      image: "/assets/hot-drinks/cappacino.jpeg",
    },
    {
      id: "h2",
      name: "Coffee day hot",
      price: "7/10/12 SAR",
      description: "Our signature smooth and aromatic daily hot brew.",
      rating: 4.7,
      image: "/assets/hot-drinks/coffee-day-hot.jpeg",
    },
    {
      id: "h3",
      name: "English tea",
      price: "5 SAR",
      description: "Premium black tea served hot with or without milk.",
      rating: 4.6,
      image: "/assets/hot-drinks/english-tea.jpeg",
    },
    {
      id: "h4",
      name: "Flat white",
      price: "14 SAR",
      description: "Double shot of espresso with microfoam for a smooth texture.",
      rating: 4.8,
      image: "/assets/hot-drinks/flat-white.jpeg",
    },
    {
      id: "h5",
      name: "Hot chocolate",
      price: "16 SAR",
      description: "Rich, creamy cocoa topped with marshmallows or whipped cream.",
      rating: 4.9,
      image: "/assets/hot-drinks/hot-choklate.jpeg",
    },
    {
      id: "h6",
      name: "Hot latte",
      price: "14 SAR",
      description: "Classic espresso combined with steamed milk and a thin layer of foam.",
      rating: 4.7,
      image: "/assets/hot-drinks/latte-hot.jpeg",
    },
    {
      id: "h7",
      name: "Hot mocha",
      price: "19 SAR",
      description: "Espresso blended with dark chocolate and velvety steamed milk.",
      rating: 4.8,
      image: "/assets/hot-drinks/mocha-hot.jpeg",
    },
    // {
    //   id: "h8",
    //   name: "Signature hot blend",
    //   price: "16 SAR",
    //   description: "A premium blend of select beans crafted for a rich flavor profile.",
    //   rating: 4.9,
    //   image: "/assets/hot-drinks/signature-hot.jpeg",
    // },
    {
      id: "h9",
      name: "Spanish hot",
      price: "16 SAR",
      description: "Sweet and creamy hot latte sweetened with condensed milk.",
      rating: 4.9,
      image: "/assets/hot-drinks/spanish-hot.jpeg",
    },
  ],
  "cold-coffee": [
    {
      id: "c1",
      name: "Blue mojito",
      price: "17 SAR",
      description: "Refreshing blue curacao mixed with fresh mint, lime, and soda.",
      rating: 4.8,
      image: "/assets/cold-drinks/blu-mojito.jpeg",
    },
    {
      id: "c2",
      name: "Coffee day cold",
      price: "7/10/12 SAR",
      description: "Our classic iced coffee blend served over ice.",
      rating: 4.7,
      image: "/assets/cold-drinks/coffee-day-cold.jpeg",
    },
    {
      id: "c3",
      name: "Ice karkade",
      price: "14/16 SAR",
      description: "Chilled and sweetened hibiscus tea with a tart, refreshing flavor.",
      rating: 4.7,
      image: "/assets/cold-drinks/ice-karkade.jpeg",
    },
    // {
    //   id: "c4",
    //   name: "Premium ice karkade",
    //   price: "16/19 SAR",
    //   description: "Hibiscus tea blended with berries and citrus notes.",
    //   rating: 4.8,
    //   image: "/assets/cold-drinks/ice-karkade2.jpeg",
    // },
    {
      id: "c5",
      name: "Ice matcha latte",
      price: "19 SAR",
      description: "Premium Japanese green tea matcha whisked with cold milk.",
      rating: 4.9,
      image: "/assets/cold-drinks/ice-matcha-latte.jpeg",
    },
    {
      id: "c6",
      name: "Spanish cold",
      price: "16/18 SAR",
      description: "Chilled latte sweetened with condensed milk and served over ice.",
      rating: 4.9,
      image: "/assets/cold-drinks/ice-spanish-latte.jpeg",
    },
    {
      id: "c7",
      name: "Mix mojito",
      price: "17 SAR",
      description: "Classic mint and lime mojito with a blend of sweet berry flavors.",
      rating: 4.8,
      image: "/assets/cold-drinks/mix-mojito.jpeg",
    },
    {
      id: "c8",
      name: "Cold mocha",
      price: "19 SAR",
      description: "Chilled espresso, chocolate syrup, and cold milk over ice.",
      rating: 4.8,
      image: "/assets/cold-drinks/mocha-cold.jpeg",
    },
    {
      id: "c9",
      name: "Passion mojito",
      price: "17 SAR",
      description: "Sparkling soda with fresh mint, lime, and sweet passion fruit puree.",
      rating: 4.9,
      image: "/assets/cold-drinks/passion-mojito.jpeg",
    },
    {
      id: "c10",
      name: "Strawberry mojito",
      price: "17 SAR",
      description: "Sweet strawberries muddled with fresh mint, lime, and sparkling soda.",
      rating: 4.9,
      image: "/assets/cold-drinks/strawberry-mojito.jpeg",
    },
    {
      id: "c11",
      name: "Coffee day cold",
      price: "7/10/12 SAR",
      description: "Our signature cold-brewed blend, chilled to perfection.",
      rating: 4.7,
      image: "/assets/hot-drinks/coffee-day-cold.jpeg",
    },
    {
      id: "c12",
      name: "Cold brew",
      price: "21 SAR",
      description: "Slow-steeped specialty coffee beans for an exceptionally smooth taste.",
      rating: 4.8,
      image: "/assets/hot-drinks/cold-brew.jpeg",
    },
    {
      id: "c13",
      name: "Iced Spanish Latte (Premium)",
      price: "18 SAR",
      description: "Rich espresso shot with condensed milk over custom crushed ice.",
      rating: 4.9,
      image: "/assets/hot-drinks/ice-spanish-latte.jpeg",
    },
  ],
};

const categories = [
  { id: "sweets-bakery", label: "Sweets & Bakery", icon: Cake },
  { id: "hot-coffee", label: "Hot Drinks", icon: Coffee },
  { id: "cold-coffee", label: "Cold Drinks", icon: CupSoda },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("sweets-bakery");

  return (
    <section className="pt-4 pb-10 lg:pt-8 lg:pb-16 bg-soft-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-2 lg:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2 font-[family-name:var(--font-dm-serif)]">
            Our Menu's
          </h2>
          <p className="text-[12px] lg:text-[14px] text-gray-500 max-w-2xl mx-auto font-[family-name:var(--font-nunito)]">
            Discover our carefully crafted selection of beverages and treats.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="sticky top-20 z-40 bg-soft-bg/95 backdrop-blur-sm  lg:py-4 mb-6 -mx-4 px-4 md:mx-0 md:px-0 flex justify-center border-b border-transparent">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 w-full max-w-3xl">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`group relative overflow-hidden flex flex-row justify-center items-center lg:gap-2  px-2 py-2 md:px-6 md:py-4 text-[8px] md:text-[14px] font-medium transition-all duration-500 border border-primary/20 backdrop-blur-sm font-[family-name:var(--font-nunito)] ${
                    isActive
                      ? "bg-primary text-white shadow-[0_10px_30px_rgba(74,89,82,0.35)] scale-105 rounded-lg"
                      : "bg-white text-darkGray rounded-lg "
                  }`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"></div>

                  {/* Icon */}
                  <div
                    className={`relative z-10 p-1 transition-all duration-500 ${
                      isActive
                        ? "bg-white/20 rounded-full"
                        : "bg-lightGray group-hover:bg-white/20 rounded-full"
                    }`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  {/* Text */}
                  <span className="relative z-10 text-xs lg:text-sm md:text-base text-center font-semibold tracking-wide">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {menuData[activeTab].map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
