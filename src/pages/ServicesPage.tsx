import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";
import { servicesData } from "../constant";

export default function ServicesPage() {
  return (
    <Layout 
      title="Our Services"
      description="Comprehensive agricultural solutions designed to meet the diverse needs of modern farming and food production"
    >
      {/* Services Grid */}
      <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-8 !mb-16">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="!bg-white !rounded-lg !shadow-lg !p-8 hover:!shadow-xl !transition-shadow !duration-300"
          >
            <div className="!flex !items-center !mb-6">
              <div className="!bg-orange-100 !p-3 !rounded-lg">
                <service.icon className="!w-8 !h-8 !text-orange-500" />
              </div>
              <h3 className="!text-xl !font-semibold !text-gray-900 !ml-4">
                {service.title}
              </h3>
            </div>
            
            <p className="!text-gray-600 !mb-6">
              {service.description}
            </p>
            
            <ul className="!space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="!flex !items-center !text-sm !text-gray-600">
                  <div className="!w-2 !h-2 !bg-orange-500 !rounded-full !mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="!bg-gradient-to-r !from-orange-500 !to-orange-600 !rounded-lg !p-8 !text-center !text-white"
      >
        <h3 className="!text-2xl !font-bold !mb-4">
          Ready to Get Started?
        </h3>
        <p className="!text-orange-100 !mb-6 !max-w-2xl !mx-auto">
          Contact us today to discuss your agricultural needs and discover how our services can help you achieve your farming goals.
        </p>
        <div className="!flex !flex-col sm:!flex-row !gap-4 !justify-center">
          <button className="!bg-white !text-orange-500 !px-8 !py-3 !rounded-lg !font-semibold hover:!bg-gray-100 !transition-colors">
            Get a Quote
          </button>
          <button className="!border-2 !border-white !text-white !px-8 !py-3 !rounded-lg !font-semibold hover:!bg-white hover:!text-orange-500 !transition-colors">
            Learn More
          </button>
        </div>
      </motion.div>
    </Layout>
  );
} 