import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Layout from "../components/layout/Layout";
import { teamData } from "../constant";

export default function TeamPage() {
  return (
    <Layout 
      title="Meet Our Team"
      description="Dedicated professionals committed to excellence in agriculture and sustainable farming practices"
    >
      {/* Team Grid */}
      <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-8 !mb-16">
        {teamData.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="!bg-white !rounded-lg !shadow-lg !overflow-hidden hover:!shadow-xl !transition-shadow !duration-300"
          >
            <div className="!relative !h-64 !overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="!w-full !h-full !object-cover"
              />
              <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/50 !to-transparent"></div>
            </div>
            
            <div className="!p-6">
              <h3 className="!text-xl !font-semibold !text-gray-900 !mb-1">
                {member.name}
              </h3>
              <p className="!text-orange-500 !font-medium !mb-4">
                {member.role}
              </p>
              
              <p className="!text-gray-600 !mb-4 !text-sm !leading-relaxed">
                {member.bio}
              </p>
              
              <div className="!flex !items-center !space-x-2 !mb-4 !text-sm !text-gray-500">
                <MapPin className="!w-4 !h-4" />
                <span>{member.location}</span>
              </div>
              
              <div className="!flex !items-center !space-x-2 !mb-4">
                <Mail className="!w-4 !h-4 !text-gray-400" />
                <a 
                  href={`mailto:${member.email}`}
                  className="!text-sm !text-orange-500 hover:!text-orange-600 !transition-colors"
                >
                  {member.email}
                </a>
              </div>
              
              <div className="!space-y-2">
                <h4 className="!text-sm !font-semibold !text-gray-900">Expertise:</h4>
                <div className="!flex !flex-wrap !gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="!bg-orange-100 !text-orange-700 !px-2 !py-1 !rounded-full !text-xs !font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join Our Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="!bg-gradient-to-r !from-orange-500 !to-orange-600 !rounded-lg !p-8 !text-center !text-white"
      >
        <h3 className="!text-2xl !font-bold !mb-4">
          Join Our Growing Team
        </h3>
        <p className="!text-orange-100 !mb-6 !max-w-2xl !mx-auto">
          We're always looking for passionate individuals who share our commitment to sustainable agriculture and innovation.
        </p>
        <button className="!bg-white !text-orange-500 !px-8 !py-3 !rounded-lg !font-semibold hover:!bg-gray-100 !transition-colors">
          View Open Positions
        </button>
      </motion.div>
    </Layout>
  );
} 