import QualityProductsSlider from './QualityProductsSlider'
import { motion } from "framer-motion";

export const QualityProducts = () => {
    return (
        <div className='flex flex-col items-center justify-center !py-36 custom-bg-pale-white'>
            <motion.h1
                className='!text-3xl md:!text-6xl text-center !font-normal text-black !leading-[72px]'
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Quality Products
            </motion.h1>
            <motion.p
                className='!text-base md:!text-2xl !text-center custom-text-gray w-full !px-8 md:w-xl mb-24'
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </motion.p>
            <QualityProductsSlider />
        </div>
    )
}
