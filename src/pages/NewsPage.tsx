import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import Layout from "../components/layout/Layout";
import { newsData } from "../constant";

export default function NewsPage() {
  return (
    <Layout 
      title="Latest News & Updates"
      description="Stay informed about the latest developments, innovations, and achievements at TerrTwenty Farms"
    >
      {/* News Grid */}
      <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-8">
        {newsData.map((news, index) => (
          <motion.article
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="!bg-white !rounded-lg !shadow-lg !overflow-hidden hover:!shadow-xl !transition-shadow !duration-300"
          >
            <div className="!relative !h-48 !overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="!w-full !h-full !object-cover hover:!scale-105 !transition-transform !duration-300"
              />
              <div className="!absolute !top-4 !left-4">
                <span className="!bg-orange-500 !text-white !px-3 !py-1 !rounded-full !text-sm !font-medium">
                  {news.category}
                </span>
              </div>
            </div>
            
            <div className="!p-6">
              <h3 className="!text-xl !font-semibold !text-gray-900 !mb-3 hover:!text-orange-500 !transition-colors">
                {news.title}
              </h3>
              <p className="!text-gray-600 !mb-4 !line-clamp-3">
                {news.excerpt}
              </p>
              
              <div className="!flex !items-center !justify-between !text-sm !text-gray-500">
                <div className="!flex !items-center !space-x-4">
                  <div className="!flex !items-center !space-x-1">
                    <Calendar className="!w-4 !h-4" />
                    <span>{new Date(news.date).toLocaleDateString()}</span>
                  </div>
                  <div className="!flex !items-center !space-x-1">
                    <User className="!w-4 !h-4" />
                    <span>{news.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="!mt-16 !bg-orange-500 !rounded-lg !p-8 !text-center"
      >
        <h3 className="!text-2xl !font-bold !text-white !mb-4">
          Stay Updated
        </h3>
        <p className="!text-orange-100 !mb-6 !max-w-2xl !mx-auto">
          Subscribe to our newsletter to receive the latest news, farming tips, and updates directly to your inbox.
        </p>
        <div className="!flex !flex-col sm:!flex-row !gap-4 !max-w-md !mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="!flex-1 !px-4 !py-3 !rounded-lg !border-0 focus:!ring-2 focus:!ring-white focus:!ring-offset-2 focus:!ring-offset-orange-500"
          />
          <button className="!bg-white !text-orange-500 !px-6 !py-3 !rounded-lg !font-semibold hover:!bg-gray-100 !transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </Layout>
  );
} 