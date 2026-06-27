"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Upload,
  User,
  Star,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react";
import { uploadImage } from "../../utils/utils";
import { createReview, getReviews } from "../../utils/reviewActions";
import { useLanguage } from "../../utils/LanguageContext";

interface Review {
  id: string;
  name: string;
  imageUrl: string;
  timestamp: Date;
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "demo1",
      name: "Fatima Al-Rashidi",
      imageUrl: "/assets/WhatsApp Image 2026-05-21 at 6.14.24 PM (2).jpeg",
      timestamp: new Date(),
    },
    {
      id: "demo2",
      name: "Ahmed Hassan",
      imageUrl: "/assets/sweets/croisant-plain.jpeg",
      timestamp: new Date(),
    },
    {
      id: "demo3",
      name: "Sara Mohammed",
      imageUrl: "/assets/hot-drinks/cappacino.jpeg",
      timestamp: new Date(),
    },
    {
      id: "demo4",
      name: "Omar Al-Farsi",
      imageUrl: "/assets/cold-drinks/blu-mojito.jpeg",
      timestamp: new Date(),
    },
    {
      id: "demo5",
      name: "Layla Nasser",
      imageUrl: "/assets/sweets/lemon-cake.jpeg",
      timestamp: new Date(),
    },
  ]);

  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxName, setLightboxName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    async function fetchReviews() {
      const res = await getReviews();
      if (res.success && res.data) {
        const dbReviews = res.data.map((r: any) => ({
          id: r.id,
          name: r.userName,
          imageUrl: r.image || "",
          timestamp: r.createdAt
        }));
        setReviews(prev => {
          const staticReviews = [
            {
              id: "demo1",
              name: "Fatima Al-Rashidi",
              imageUrl: "/assets/WhatsApp Image 2026-05-21 at 6.14.24 PM (2).jpeg",
              timestamp: new Date(),
            },
            {
              id: "demo2",
              name: "Ahmed Hassan",
              imageUrl: "/assets/sweets/croisant-plain.jpeg",
              timestamp: new Date(),
            },
            {
              id: "demo3",
              name: "Sara Mohammed",
              imageUrl: "/assets/hot-drinks/cappacino.jpeg",
              timestamp: new Date(),
            },
            {
              id: "demo4",
              name: "Omar Al-Farsi",
              imageUrl: "/assets/cold-drinks/blu-mojito.jpeg",
              timestamp: new Date(),
            },
            {
              id: "demo5",
              name: "Layla Nasser",
              imageUrl: "/assets/sweets/lemon-cake.jpeg",
              timestamp: new Date(),
            },
          ];
          return [...dbReviews, ...staticReviews];
        });
      }
    }
    fetchReviews();
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    }
    if (!imageFile || !previewUrl) {
      setImageError(true);
      hasError = true;
    }
    if (hasError) return;

    try {
      const url = await uploadImage(imageFile!);
      const res = await createReview(name.trim(), url);

      if (res.success && res.data) {
        const newReview: Review = {
          id: res.data.id,
          name: res.data.userName,
          imageUrl: res.data.image || "",
          timestamp: res.data.createdAt,
        };
        setReviews((prev) => [newReview, ...prev]);
        setName("");
        setImageFile(null);
        setPreviewUrl(null);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error(error);
      setImageError(true);
    }
  };

  const openLightbox = (imageUrl: string, reviewerName: string) => {
    setLightboxImage(imageUrl);
    setLightboxName(reviewerName);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxName("");
    document.body.style.overflow = "";
  };

  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 300;
    carouselRef.current.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="reviews" className="bg-soft-bg pt-6 pb-16 lg:pt-10 lg:pb-20">
      {/* Section Header */}
      <div className="text-center mb-5 lg:mb-10">
        <h1
          className="text-2xl md:text-4xl font-bold text-primary mb-2"
          style={{ fontFamily: "var(--font-dm-serif)" }}
        >
          {t("reviews.title")}
        </h1>
        <p
          className="text-[12px] lg:text-[14px] text-gray-500 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-nunito)" }}
        >
          {t("reviews.sub")}
        </p>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-8 p-4">
        {/* ─── PART 1: FORM ─── */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-16">
          <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border-2 border-primary">
            {/* Card top accent */}
            <div className="h-2 w-full" />

            <div className="p-3 lg:p-6 md:p-10">
              <h2
                className="text-[16px] md:text-2xl font-bold text-primary mb-1"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                {t("reviews.leaveReview")}
              </h2>
              <p
                className="text-xs text-gray-400 mb-2 lg:mb-8"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {t("reviews.leaveReviewSub")}
              </p>

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="space-y-2 lg:space-y-4"
              >
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="reviewer-name"
                    className="block text-sm font-semibold text-gray-600 mb-1 lg:mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {t("reviews.yourName")}
                  </label>
                  <div className="relative">
                    <User className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
                    <input
                      id="reviewer-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameError(false);
                      }}
                      placeholder={language === "en" ? "e.g. Sara Mohammed" : "مثال: سارة محمد"}
                      className={`w-full ps-12 pe-4 py-4 rounded-lg border-2 outline-none text-gray-700 text-sm transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_4px_rgba(74,89,82,0.1)] ${nameError
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                        }`}
                      style={{ fontFamily: "var(--font-nunito)" }}
                    />
                  </div>
                  {nameError && (
                    <p
                      className="text-red-500 text-xs mt-1"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {t("reviews.errPleaseName")}
                    </p>
                  )}
                </div>

                {/* Image Upload */}
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-600 mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    {t("reviews.uploadYourPhoto")}
                  </label>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    className={`relative cursor-pointer rounded-lg border-2 border-dashed transition-all duration-300 overflow-hidden ${dragOver
                      ? "border-primary bg-primary/5 scale-[1.01]"
                      : imageError
                        ? "border-red-400 bg-red-50"
                        : "border-gray-300 bg-gray-50 hover:border-primary hover:bg-primary/5"
                      }`}
                    style={{ minHeight: "150px" }}
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
                            {t("gallery.clickToChange")}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 py-4 lg:py-10">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                          <Upload className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-center">
                          <p
                            className="text-sm font-semibold text-primary"
                            style={{ fontFamily: "var(--font-nunito)" }}
                          >
                            {t("gallery.dragDrop")}
                          </p>
                          <p
                            className="text-xs text-gray-400 mt-1"
                            style={{ fontFamily: "var(--font-nunito)" }}
                          >
                            {t("gallery.formatsLimit")}
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
                      {t("reviews.errPleasePhoto")}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-2 lg:py-4 rounded-lg bg-primary text-white font-bold text-sm tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_30px_rgba(74,89,82,0.4)] active:scale-95 relative overflow-hidden cursor-pointer"
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
                      {t("reviews.reviewSubmitted")}
                    </span>
                  ) : (
                    t("reviews.submitReview")
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ─── PART 2: REVIEW CARDS ─── */}
        <div className=" w-full lg:w-2/3 ">
          <div className="flex items-center justify-between lg:mt-10">
            <h2
              className="text-xl md:text-2xl font-bold text-primary mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              {t("reviews.whatCustomersSay")}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll left"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll right"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary shadow hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {reviews.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-5 lg:py-20 text-gray-400">
              <ImageIcon className="w-14 h-14 mb-4 opacity-30" />
              <p style={{ fontFamily: "var(--font-nunito)" }}>
                {t("reviews.noReviews")}
              </p>
            </div>
          ) : (
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto lg:pt-10 scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex-none bg-white rounded-lg shadow-lg border border-primary/10 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                  style={{
                    scrollSnapAlign: "start",
                    width: "220px",
                    minWidth: "220px",
                  }}
                >
                  {/* Image Area */}
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    style={{ width: "220px", height: "220px" }}
                    onClick={() => openLightbox(review.imageUrl, review.name)}
                  >
                    <Image
                      src={review.imageUrl}
                      alt={`${review.name}'s review photo`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
                      unoptimized
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Name Area */}
                  <div
                    className="px-4 py-4 flex items-center gap-1 lg:gap-3"
                    style={{ height: "72px" }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="font-bold text-sm text-primary truncate"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        {review.id.startsWith("demo") ? t(`reviews.demoReviewers.${review.id}`) : review.name}
                      </p>
                      {/* <div className="flex gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Hide scrollbar CSS */}
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>
        </div>
      </div>

      {/* ─── LIGHTBOX ─── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
          }}
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Full image */}
            <div className="relative w-full h-screen rounded-lg">
              <Image
                src={lightboxImage}
                alt={`${lightboxName}'s photo`}
                fill
                unoptimized
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
