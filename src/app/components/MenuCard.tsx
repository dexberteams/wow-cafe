"use client"
import { useState } from "react";
import Image from "next/image";
import { Heart, Star, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  rating: number;
  image: string;
}

interface MenuCardProps {
  item: MenuItem;
}







const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const [reactions, setReactions] = useState<Record<string, number>>({});
   const [selectedMenuItem, setSelectedMenuItem] = useState<typeof item | null>(null);
const handleLove = (id: string) => {
  setReactions((prev) => {
    const alreadyLoved = prev[id];

    if (alreadyLoved) {
      return {
        ...prev,
        [id]: 0,
      };
    }

    return {
      ...prev,
      [id]: 1,
    };
  });
};


  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div
  onClick={() => setSelectedMenuItem(item)}
  className="relative w-full h-[150px] md:h-[250px] lg:h-[300px] overflow-hidden cursor-pointer"
>
  <Image
    src={item.image}
    alt={item.name}
    fill
    sizes="100vw"
    className="object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>

      {/* Content */}
      <div className=" p-2 lg:p-4 flex flex-col flex-grow relative h-28 lg:h-[188px]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-[13px] lg:text-lg font-bold text-primary font-[family-name:var(--font-dm-serif)]">{item.name}</h3>
          
        </div>
        
        {/* <p className="text-[12px] lg:text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
          {item.description}
        </p> */}

        {/* Footer (Rating) */}
        <div className="border-t border-gray-100">
          <div className="flex justify-between items-center">
           <div className="flex items-center gap-1">
            <Star className=" w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
           <span className="text-xs lg:text-sm font-medium text-foreground">{item.rating.toFixed(1)}</span>
           </div>
            <span className="text-xs lg:text-lg font-semibold text-primary shrink-0">{item.price}</span>
          </div>
          
          
          {/* Favorite Button */}
           <div className="w-full flex items-center lg:gap-2 absolute bottom-1 px-2 min-w-0">
  
                <button
                    onClick={() => handleLove(item.id)}
                    className="group/love shrink-0 h-8 px-1 lg:px-3 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={reactions[item.id] ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-5 h-5 ${
                            reactions[item.id]
                            ? "text-red-500 animate-bounce"
                            : ""
                        }`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>

                        {reactions[item.id] > 0 && (
                            <span className="text-[12px] font-bold">
                                {reactions[item.id]}
                            </span>
                        )}
                    </button>

                    {/* Dynamic Text */}
                    <p className="text-[9px] font-semibold lg:text-xs text-gray-600 break-words whitespace-normal">
                        {reactions[item.id] > 0
                            ? " You & others loved it."
                            : "Add to favorite"}
                    </p>

                </div>
       
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedMenuItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMenuItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMenuItem(null)}
                className="absolute top-3 right-3 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Large Image */}
              <div className="relative w-full aspect-square sm:aspect-[4/3] bg-gray-100">
                <Image
                  src={selectedMenuItem.image}
                  alt={selectedMenuItem.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 32rem"
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <div className="p-5 sm:p-6 bg-white flex flex-col items-center justify-center text-center shrink-0">
                <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl sm:text-3xl font-bold text-primary">
                  {selectedMenuItem.name}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuCard;
