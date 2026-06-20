"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Upload,
  ChevronLeft,
  ChevronRight,
  X,
  ImageIcon,
  Camera,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  imageUrl: string;
  timestamp: Date;
}

const initialGallery: GalleryItem[] = [
  {
    id: "g1",
    imageUrl: "/assets/cold-drinks/ice-matcha-latte.jpeg",
    timestamp: new Date(),
  },
  {
    id: "g2",
    imageUrl: "/assets/sweets/wow-choklate-cookies.jpeg",
    timestamp: new Date(),
  },
  {
    id: "g3",
    imageUrl: "/assets/hot-drinks/cappacino.jpeg",
    timestamp: new Date(),
  },
  {
    id: "g4",
    imageUrl: "/assets/cold-drinks/blu-mojito.jpeg",
    timestamp: new Date(),
  },
  {
    id: "g5",
    imageUrl: "/assets/sweets/zafran-cake.jpeg",
    timestamp: new Date(),
  },
];

export default function GallerySection() {
  const [gallery, setGallery] = useState<GalleryItem[]>(initialGallery);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleImageChange = useCallback((file: File | null) => {
    if (!file) return;
    setImageFile(file);
    setImageError(false);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) handleImageChange(file);
    },
    [handleImageChange],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !previewUrl) {
      setImageError(true);
      return;
    }
    const newItem: GalleryItem = {
      id: Date.now().toString(),
      imageUrl: previewUrl,
      timestamp: new Date(),
    };
    setGallery((prev) => [newItem, ...prev]);
    setImageFile(null);
    setPreviewUrl(null);
    setSubmitted(true);
    setIsUploadOpen(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: dir === "right" ? 300 : -300,
      behavior: "smooth",
    });
  };

  const openLightbox = (url: string) => {
    setLightboxImage(url);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "";
  };

  return (
    <section className="bg-soft-bg pt-6 pb-16 lg:pt-10 lg:pb-20">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-5 lg:mb-10 p-2 lg:p-8 gap-2">
        <div className="">
          <h2
            className="text-2xl md:text-4xl font-bold text-primary mb-2"
            style={{ fontFamily: "var(--font-dm-serif)" }}
          >
            <span className="text-5xl align-middle">و</span> Cafe Gallery
          </h2>
          <p
            className="w-2/3 lg:w-full text-[12px] lg:text-[14px] text-gray-500"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Explore our cafe's most beautiful moments.
          </p>
        </div>
        <div>
          <button
            onClick={() => setIsUploadOpen(true)}
            className="text-[12px] lg:text-[16px] bg-primary text-white p-4 lg:p-6 rounded-lg hover:bg-primary/80 transition-colors duration-300"
          >
            Upload Photo
          </button>
        </div>
      </div>
      <div className="w-full">
        {/* ─── PART 2: CAROUSEL ─── */}
        <div className="w-full p-4 lg:p-8">
          <div className="flex items-center justify-between lg:mt-10">
            <h2
              className="text-xl md:text-2xl font-bold text-primary mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              Gallery Showcase
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll left"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll right"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {gallery.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <ImageIcon className="w-14 h-14 mb-4 opacity-30" />
              <p style={{ fontFamily: "var(--font-nunito)" }}>
                No photos yet. Be the first to add one!
              </p>
            </div>
          ) : (
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto lg:pt-4 scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {gallery.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex-none rounded-lg shadow-lg border border-primary/10 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                  style={{
                    scrollSnapAlign: "start",
                    width: "220px",
                    minWidth: "220px",
                  }}
                  onClick={() => openLightbox(item.imageUrl)}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ width: "220px", height: "220px" }}
                  >
                    <Image
                      src={item.imageUrl}
                      alt="Gallery photo"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>
        </div>
      </div>
      {/* ─── LIGHTBOX ─── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{
              backgroundColor: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
            }}
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full max-h-[90vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative w-full" style={{ height: "80vh" }}>
                <Image
                  src={lightboxImage}
                  alt="Gallery full view"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ─── UPLOAD MODAL ───*/}
      <AnimatePresence>
        {isUploadOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsUploadOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl shadow-2xl w-full max-w-xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsUploadOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition"
              >
                <X className="w-5 h-5 mx-auto" />
              </button>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <h2
                    className="text-2xl font-bold text-primary"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    Add Cafe Photos
                  </h2>
                </div>

                <p
                  className="text-sm text-gray-500 mb-6"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  Upload a photo to add it to the live gallery showcase.
                </p>

                <form
                  onSubmit={handleSubmit}
                  autoComplete="off"
                  className="space-y-4"
                >
                  {/* Image Upload */}
                  <div>
                    <label
                      className="block text-sm font-semibold text-gray-600 mb-2"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      Upload Photo
                    </label>

                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      className={`relative cursor-pointer rounded-lg border-2 border-dashed transition-all duration-300 overflow-hidden ${
                        dragOver
                          ? "border-primary bg-primary/5 scale-[1.01]"
                          : imageError
                            ? "border-red-400 bg-red-50"
                            : "border-gray-300 bg-gray-50 hover:border-primary hover:bg-primary/5"
                      }`}
                      style={{ minHeight: "180px" }}
                    >
                      {previewUrl ? (
                        <div className="relative w-full h-52">
                          <Image
                            src={previewUrl}
                            alt="Preview"
                            fill
                            className="object-cover"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p
                              className="text-white text-sm font-semibold"
                              style={{ fontFamily: "var(--font-nunito)" }}
                            >
                              Click to change
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-3 py-10">
                          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                            <Upload className="w-6 h-6 text-primary" />
                          </div>
                          <div className="text-center">
                            <p
                              className="text-sm font-semibold text-primary"
                              style={{ fontFamily: "var(--font-nunito)" }}
                            >
                              Click to upload or drag &amp; drop
                            </p>
                            <p
                              className="text-xs text-gray-400 mt-1"
                              style={{ fontFamily: "var(--font-nunito)" }}
                            >
                              PNG, JPG, WEBP up to 10MB
                            </p>
                          </div>
                        </div>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          handleImageChange(e.target.files?.[0] ?? null)
                        }
                      />
                    </div>
                    {imageError && (
                      <p
                        className="text-red-500 text-xs mt-1"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        Please upload a photo.
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 lg:py-4 rounded-lg bg-primary text-white font-bold text-sm tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_30px_rgba(74,89,82,0.4)] active:scale-95"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {submitted ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Photo Added!
                      </span>
                    ) : (
                      "Add to Gallery"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
