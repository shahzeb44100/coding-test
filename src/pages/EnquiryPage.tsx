import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "../components/layout/Layout";
import { contactInfo } from "../constant";
import type { EnquiryFormData } from "../constant";

export default function EnquiryPage() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: "normal"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We'll get back to you soon.");
  };

  return (
    <Layout 
      title="Make an Enquiry"
      description="Get in touch with us to discuss your agricultural needs and discover how we can help you achieve your farming goals"
    >
      <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="!space-y-8"
        >
          <div>
            <h2 className="!text-2xl !font-bold !text-gray-900 !mb-6">
              Get in Touch
            </h2>
            <p className="!text-gray-600 !mb-8">
              We're here to help you with all your agricultural needs. Whether you're looking for consultation, services, or just want to learn more about our farm, we'd love to hear from you.
            </p>
          </div>

          <div className="!space-y-6">
            <div className="!flex !items-start !space-x-4">
              <div className="!bg-orange-100 !p-3 !rounded-lg">
                <Phone className="!w-6 !h-6 !text-orange-500" />
              </div>
              <div>
                <h3 className="!font-semibold !text-gray-900">Phone</h3>
                <p className="!text-gray-600">{contactInfo.phone}</p>
                <p className="!text-sm !text-gray-500">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>

            <div className="!flex !items-start !space-x-4">
              <div className="!bg-orange-100 !p-3 !rounded-lg">
                <Mail className="!w-6 !h-6 !text-orange-500" />
              </div>
              <div>
                <h3 className="!font-semibold !text-gray-900">Email</h3>
                <p className="!text-gray-600">{contactInfo.email}</p>
                <p className="!text-sm !text-gray-500">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="!flex !items-start !space-x-4">
              <div className="!bg-orange-100 !p-3 !rounded-lg">
                <MapPin className="!w-6 !h-6 !text-orange-500" />
              </div>
              <div>
                <h3 className="!font-semibold !text-gray-900">Address</h3>
                <p className="!text-gray-600">{contactInfo.address}</p>
              </div>
            </div>

            <div className="!flex !items-start !space-x-4">
              <div className="!bg-orange-100 !p-3 !rounded-lg">
                <Clock className="!w-6 !h-6 !text-orange-500" />
              </div>
              <div>
                <h3 className="!font-semibold !text-gray-900">Business Hours</h3>
                <p className="!text-gray-600">{contactInfo.businessHours}</p>
                <p className="!text-sm !text-gray-500">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="!bg-orange-50 !rounded-lg !p-6">
            <h3 className="!font-semibold !text-gray-900 !mb-3">Why Choose Us?</h3>
            <ul className="!space-y-2 !text-sm !text-gray-600">
              <li className="!flex !items-center">
                <div className="!w-2 !h-2 !bg-orange-500 !rounded-full !mr-3"></div>
                Expert agricultural consultation
              </li>
              <li className="!flex !items-center">
                <div className="!w-2 !h-2 !bg-orange-500 !rounded-full !mr-3"></div>
                Sustainable farming practices
              </li>
              <li className="!flex !items-center">
                <div className="!w-2 !h-2 !bg-orange-500 !rounded-full !mr-3"></div>
                Quality assurance guaranteed
              </li>
              <li className="!flex !items-center">
                <div className="!w-2 !h-2 !bg-orange-500 !rounded-full !mr-3"></div>
                Local community support
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="!bg-white !rounded-lg !shadow-lg !p-8"
        >
          <h2 className="!text-2xl !font-bold !text-gray-900 !mb-6">
            Send Your Enquiry
          </h2>
          
          <form onSubmit={handleSubmit} className="!space-y-6">
            <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-6">
              <div>
                <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500"
                />
              </div>
              
              <div>
                <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500"
                />
              </div>
            </div>

            <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-6">
              <div>
                <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500"
                />
              </div>
              
              <div>
                <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                Service of Interest *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500"
              >
                <option value="">Select a service</option>
                <option value="organic-crops">Organic Crop Production</option>
                <option value="irrigation">Irrigation Systems</option>
                <option value="greenhouse">Greenhouse Management</option>
                <option value="distribution">Distribution & Logistics</option>
                <option value="consulting">Agricultural Consulting</option>
                <option value="quality-assurance">Quality Assurance</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                Urgency Level
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500"
              >
                <option value="low">Low - General inquiry</option>
                <option value="normal">Normal - Planning phase</option>
                <option value="high">High - Urgent requirement</option>
              </select>
            </div>

            <div>
              <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Please describe your agricultural needs, requirements, or any specific questions you have..."
                className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500 !resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="!w-full !bg-orange-500 !text-white !py-3 !px-6 !rounded-lg !font-semibold hover:!bg-orange-600 !transition-colors !flex !items-center !justify-center !space-x-2"
            >
              <Send className="!w-5 !h-5" />
              <span>Send Enquiry</span>
            </button>
          </form>
        </motion.div>
      </div>
    </Layout>
  );
} 