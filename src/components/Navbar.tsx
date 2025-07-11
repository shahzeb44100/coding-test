import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "../constant";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="z-30 left-0 md:left-5 top-0 md:top-5 fixed w-full md:width-95per bg-white backdrop-blur-sm height-6rem">
            <div className="mx-auto px-6 h-full flex items-center">
                <div className="flex items-center justify-between w-full !mx-8">
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="hidden md:flex items-center !space-x-6">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.6 }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.08,
                                        },
                                    },
                                }}
                                className="flex items-center !space-x-6"
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <Link to="/" className={`animated-underline text-black text-sm hover:text-gray-900 transition-colors ${location.pathname === '/' ? 'active text-orange-500' : ''}`}>About</Link>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                                >
                                    <Link to="/news" className={`animated-underline text-black text-sm hover:text-gray-900 transition-colors ${location.pathname === '/news' ? 'active text-orange-500' : ''}`}>News</Link>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                >
                                    <Link to="/services" className={`animated-underline text-black text-sm hover:text-gray-900 transition-colors ${location.pathname === '/services' ? 'active text-orange-500' : ''}`}>Services</Link>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                                >
                                    <Link to="/team" className={`animated-underline text-black text-sm hover:text-gray-900 transition-colors ${location.pathname === '/team' ? 'active text-orange-500' : ''}`}>Our Team</Link>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                >
                                    <Link to="/enquiry" className={`animated-underline text-black text-sm hover:text-gray-900 transition-colors ${location.pathname === '/enquiry' ? 'active text-orange-500' : ''}`}>Make Enquiry</Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.07, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="flex"
                    >
                        <Link to="/contact" className="flex gap-4 !border !border-black items-center space-x-2 !px-4 !py-[10px] rounded hover:bg-gray-50 transition-colors">
                            <p className="text-black">Contact us</p>
                            <ArrowRight className="w-4 h-4 text-black" />
                        </Link>
                    </motion.div>

                    {/* Hamburger Icon */}
                    <motion.button
                        className="md:hidden ml-4 p-3 rounded bg-gray-100"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        initial={false}
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="md:hidden h-screen absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-2xl z-50"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        <motion.ul
                            className="flex flex-col items-center py-12 space-y-10"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.13,
                                    },
                                },
                            }}
                        >
                            {navigationItems.map((item) => (
                                <motion.li
                                    key={item.to}
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                    whileHover={{ scale: 1.07, y: -2 }}
                                    className="w-full flex justify-center"
                                >
                                    <Link
                                        to={item.to}
                                        className={`animated-underline text-black text-2xl font-light tracking-wide px-6 py-2 rounded transition-all duration-300 hover:text-orange-500 hover:bg-orange-50 ${location.pathname === item.to ? 'active text-orange-500' : ''}`}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}