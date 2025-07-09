import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Move, ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "../constant/constant";

export default function QualityProductsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDragHint, setShowDragHint] = useState(true);
    const [x, setX] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const controls = useAnimation();
    const constraintsRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setShowDragHint(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        controls.start({ x: 0, transition: { type: "spring", stiffness: 120, damping: 20 } });
    }, [currentIndex, controls]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleDragEnd = (event, info) => {
        const threshold = 100; // Increased threshold for better detection
        console.log('Drag ended:', info.offset.x, 'Current index:', currentIndex);
        
        if (info.offset.x > threshold && currentIndex > 0) {
            // Swipe right - go to previous
            console.log('Going to previous');
            controls.start({ x: 450, transition: { type: "spring", stiffness: 120, damping: 20 } }).then(() => {
                setCurrentIndex(currentIndex - 1);
                setX(0);
            });
        } else if (info.offset.x < -threshold && currentIndex < products.length - 1) {
            // Swipe left - go to next
            console.log('Going to next');
            controls.start({ x: -450, transition: { type: "spring", stiffness: 120, damping: 20 } }).then(() => {
                setCurrentIndex(currentIndex + 1);
                setX(0);
            });
        } else {
            // Return to center
            console.log('Returning to center');
            controls.start({ x: 0, transition: { type: "spring", stiffness: 120, damping: 20 } });
        }
    };

    const handleArrow = (dir) => {
        console.log('Arrow clicked:', dir, 'Current index:', currentIndex);
        
        if (dir === "left" && currentIndex > 0) {
            controls.start({ x: 450, transition: { type: "spring", stiffness: 120, damping: 20 } }).then(() => {
                setCurrentIndex(currentIndex - 1);
                setX(0);
            });
        } else if (dir === "right" && currentIndex < products.length - 1) {
            controls.start({ x: -450, transition: { type: "spring", stiffness: 120, damping: 20 } }).then(() => {
                setCurrentIndex(currentIndex + 1);
                setX(0);
            });
        }
    };

    const getImageStyle = (index) => {
        const diff = index - currentIndex;
        const isCenter = diff === 0;
        const isLeft = diff === -1;
        const isRight = diff === 1;

        let t = 450;
        if (windowWidth < 640) t = 270;
        else if (windowWidth < 1024) t = 270;

        if (isCenter) {
            return {
                transform: "translateX(0px) rotateZ(0deg) scale(1)",
                zIndex: 30,
                opacity: 1,
                display: "block",
            };
        } else if (isLeft) {
            return {
                transform: `translateX(-${t}px) rotateZ(-15deg) scale(0.9)`,
                zIndex: 20,
                opacity: 0.9,
                display: "block",
            };
        } else if (isRight) {
            return {
                transform: `translateX(${t}px) rotateZ(15deg) scale(0.9)`,
                zIndex: 20,
                opacity: 0.9,
                display: "block",
            };
        } else {
            return {
                transform: "translateX(0px) rotateZ(0deg) scale(0)",
                zIndex: 0,
                opacity: 0,
                display: "none",
            };
        }
    };

    return (
        <div className="w-full p-4 sm:p-8 flex flex-col items-center justify-center overflow-x-hidden">
            <div className="relative w-screen h-[450px] md:h-[550px] mb-8 overflow-visible" ref={constraintsRef}>
                <button
                    className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full shadow p-2 hover:bg-gray-50 transition-colors"
                    onClick={() => handleArrow("left")}
                    disabled={currentIndex === 0}
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                    className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full shadow p-2 hover:bg-gray-50 transition-colors"
                    onClick={() => handleArrow("right")}
                    disabled={currentIndex === products.length - 1}
                >
                    <ArrowRight className="w-6 h-6" />
                </button>
                
                <motion.div
                    className="relative w-full h-full cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    onDragStart={() => {
                        setShowDragHint(false);
                        console.log('Drag started');
                    }}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    style={{ x }}
                    whileDrag={{ cursor: "grabbing" }}
                >
                    {products.map((image, index) => {
                        const style = getImageStyle(index);
                        const isCenter = index === currentIndex;
                        return (
                            <motion.div
                                key={index}
                                className="absolute left-1/2 top-1/2 w-56 h-72 sm:w-80 sm:h-96 md:w-96 md:h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl bg-white"
                                animate={style}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                    duration: 0.6,
                                }}
                                style={{
                                    transformOrigin: "center center",
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover w-full h-full select-none pointer-events-none"
                                    draggable={false}
                                />
                                
                                {/* Drag hint overlay - only on center image */}
                                {showDragHint && isCenter && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-none"
                                    >
                                        <motion.div
                                            animate={{
                                                x: [0, 15, -15, 0],
                                                scale: [1, 1.05, 1.05, 1],
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Number.POSITIVE_INFINITY,
                                                ease: "easeInOut",
                                            }}
                                            className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-2"
                                        >
                                            <Move className="w-5 h-5 text-gray-700" />
                                            <span className="text-gray-700 font-semibold text-lg">Drag</span>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
            
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-gray-900 mb-3">{products[currentIndex].title}</h2>
                <p className="text-xl text-gray-600 font-medium">{products[currentIndex].location}</p>
            </motion.div>
        </div>
    );
} 