import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { bannerImages } from "../constant/constant"
import Navbar from "./Navbar"

const SLIDE_DURATION = 4000 // 2 seconds

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const progressRef = useRef<number | null>(null)
  const [prevImageIndex, setPrevImageIndex] = useState(currentImageIndex);

  useEffect(() => {
    // Main image slider interval
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
    }, SLIDE_DURATION)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    // Progress bar animation
    setProgress(0)
    if (progressRef.current) clearInterval(progressRef.current)
    const start = Date.now()
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1))
    }, 16)
    return () => {
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [currentImageIndex])

  useEffect(() => {
    if (currentImageIndex !== prevImageIndex) {
      setPrevImageIndex(currentImageIndex);
    }
  }, [currentImageIndex, prevImageIndex]);

  const currentImage = bannerImages[currentImageIndex]
  const nextImage = bannerImages[(currentImageIndex + 1) % bannerImages.length]

  return (
    <div className="relative w-screen">
      <Navbar />
      <div className="min-h-screen relative overflow-hidden">
        {/* Main background image */}
        <div className="absolute inset-0 z-0">
          {/* Persistent background image: always the current image */}
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full min-h-screen object-cover absolute inset-0"
            style={{ zIndex: 0 }}
            draggable={false}
          />
          {/* Split animation on top: only for the previous image */}
          <AnimatePresence mode="wait">
            {prevImageIndex !== currentImageIndex && (
              <motion.div
                key={prevImageIndex}
                className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              >
                {/* Top Half */}
                <motion.div
                  className="absolute left-0 top-0 w-full h-1/2 overflow-hidden"
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  style={{
                    clipPath: "inset(0 0 5% 0)",
                    background: "transparent"
                  }}
                >
                  <img
                    src={bannerImages[prevImageIndex].src}
                    alt={bannerImages[prevImageIndex].alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.div>
                {/* Bottom Half */}
                <motion.div
                  className="absolute left-0 bottom-0 w-full h-1/2 overflow-hidden"
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  style={{
                    clipPath: "inset(5% 0 0 0)",
                    background: "transparent"
                  }}
                >
                  <img
                    src={bannerImages[prevImageIndex].src}
                    alt={bannerImages[prevImageIndex].alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/30 z-20" />
        </div>

        {/* Navbar */}


        {/* Hero Content */}
        <div className="relative z-20 flex items-center justify-start min-h-[calc(100vh-80px)] !mx-8 md:w-xl">
          <div className="text-left text-white px-6">
            <motion.p
              key={`subtitle-${currentImageIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base !mb-6 font-normal custom-pale-blue"
            >
              Welcome To TerrTwenty Farms
            </motion.p>
            <motion.h1
              key={`title-${currentImageIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-64px text-46px font-normal custom-pale-blue"
              style={{
                lineHeight: "1"
              }}
            >
              {currentImage.title}
              <br />
              {currentImage.subtitle}
            </motion.h1>
          </div>
        </div>

        {/* Next Image Preview & Slider - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-20">
          <div className="flex items-center justify-center !space-x-4">
            {/* Next Image Preview with Animated Border */}
            <div className="relative" style={{ width: 120, height: 120 }}>
              {/* Animated Border */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 120 120" fill="none">
                <motion.rect
                  x="4"
                  y="4"
                  width="112"
                  height="112"
                  rx="0"
                  stroke="white"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="448"
                  strokeDashoffset={448 - 448 * progress}
                  animate={{ strokeDashoffset: [448, 0] }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear", repeat: Infinity }}
                />
              </svg>
              {/* Next Image */}
              <div className="absolute inset-0 flex items-center justify-center  !border !border-[#EEF4F9]">
                <motion.img
                  key={nextImage.src}
                  src={nextImage.src}
                  alt={nextImage.alt}
                  className="!rounded-none"
                  style={{ width: 96, height: 96 }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">Next</span>
              </div>
            </div>

            {/* Image Counter & Progress Indicators */}
            <div className="flex flex-col items-center justify-center !space-y-2">
              <div className="flex items-center justify-center !space-x-4">
                <motion.span
                  key={`current-${currentImageIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white text-base font-normal"
                >
                  {String(currentImageIndex + 1).padStart(2, "0")}
                </motion.span>
                <div className="w-12 h-px bg-white/50" />
                <span className="text-white/70 text-base font-normal">{String(bannerImages.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
