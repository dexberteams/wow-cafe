"use client";

import { useState } from "react";
import { Cake, Coffee, CupSoda } from "lucide-react";
import MenuCard, { MenuItem } from "../components/MenuCard";

const menuData: Record<string, MenuItem[]> = {
  "sweets-bakery": [
    {
      id: "s1",
      name: "Classic Croissant",
      price: "$4.50",
      description: "Freshly baked, buttery and flaky croissant.",
      rating: 4.8,
      image: "/assets/sweets/WhatsApp Image 2026-05-21 at 6.14.02 PM.jpeg",
    },
    {
      id: "s2",
      name: "Chocolate Cake",
      price: "$6.00",
      description: "Rich chocolate layer cake with fudge frosting.",
      rating: 4.9,
      image: "/assets/sweets/WhatsApp Image 2026-05-21 at 6.14.05 PM.jpeg",
    },
    {
      id: "s3",
      name: "Blueberry Muffin",
      price: "$3.75",
      description: "Moist muffin bursting with fresh blueberries.",
      rating: 4.6,
      image: "/assets/sweets/WhatsApp Image 2026-05-21 at 6.14.07 PM.jpeg",
    },
    {
      id: "s4",
      name: "Strawberry Tart",
      price: "$5.50",
      description: "Sweet crust filled with custard and topped with strawberries.",
      rating: 4.7,
      image: "/assets/sweets/WhatsApp Image 2026-05-21 at 6.14.23 PM.jpeg",
    },
  ],
  "hot-coffee": [
    {
      id: "h1",
      name: "Signature Espresso",
      price: "$3.50",
      description: "A strong and bold shot of our premium espresso.",
      rating: 4.9,
      image: "/assets/hot-drinks/WhatsApp Image 2026-05-21 at 6.14.25 PM.jpeg",
    },
    {
      id: "h2",
      name: "Creamy Cappuccino",
      price: "$4.80",
      description: "Espresso combined with velvety steamed milk and foam.",
      rating: 4.8,
      image: "/assets/hot-drinks/WhatsApp Image 2026-05-21 at 6.14.28 PM (1).jpeg",
    },
    {
      id: "h3",
      name: "Caramel Macchiato",
      price: "$5.20",
      description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle.",
      rating: 4.7,
      image: "/assets/hot-drinks/WhatsApp Image 2026-05-21 at 6.14.30 PM.jpeg",
    },
  ],
  "cold-coffee": [
    {
      id: "c1",
      name: "Iced Latte",
      price: "$4.50",
      description: "Chilled espresso served over ice with cold milk.",
      rating: 4.8,
      image: "/assets/cold-drinks/WhatsApp Image 2026-05-21 at 6.14.04 PM.jpeg",
    },
    {
      id: "c2",
      name: "Cold Brew",
      price: "$4.00",
      description: "Slow-steeped, incredibly smooth iced coffee.",
      rating: 4.9,
      image: "/assets/cold-drinks/WhatsApp Image 2026-05-21 at 6.14.24 PM (1).jpeg",
    },
    {
      id: "c3",
      name: "Frappuccino",
      price: "$5.50",
      description: "Blended iced coffee topped with whipped cream.",
      rating: 4.7,
      image: "/assets/cold-drinks/WhatsApp Image 2026-05-21 at 6.14.26 PM (1).jpeg",
    },
  ],
};

const categories = [
  { id: "sweets-bakery", label: "Sweets & Bakery", icon: Cake },
  { id: "hot-coffee", label: "Hot Coffee", icon: Coffee },
  { id: "cold-coffee", label: "Cold Coffee", icon: CupSoda },
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
        <div className="sticky top-20 z-40 bg-soft-bg/95 backdrop-blur-sm lg:py-2 lg:py-4 mb-6 -mx-4 px-4 md:mx-0 md:px-0 flex justify-center border-b border-transparent border-2 border-red-400">
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
                      ? "bg-primary text-white shadow-[0_10px_30px_rgba(74,89,82,0.35)] scale-105 rounded-[15px_10px_15px_10px]"
                      : "bg-white text-darkGray hover:bg-primary hover:text-white hover:scale-105 rounded-[10px_15px_10px_15px]"
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

                  {/* Decorative Dot */}
                  <div
                    className={`absolute top-2 right-2 w-2 h-2 rounded-full transition-all duration-500 ${
                      isActive ? "bg-white" : "bg-primary/40 group-hover:bg-white"
                    }`}
                  ></div>
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
