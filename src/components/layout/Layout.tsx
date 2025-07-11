import { motion } from "framer-motion";
import type { LayoutProps } from "../../constant";

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="!min-h-screen !bg-gray-50 !pt-24">
      <div className="!max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !py-12">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="!text-center !mb-16"
          >
            <h1 className="!text-4xl md:!text-5xl !font-bold !text-gray-900 !mb-4">
              {title}
            </h1>
            {description && (
              <p className="!text-xl !text-gray-600 !max-w-3xl !mx-auto">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </div>
  );
} 