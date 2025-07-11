import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Layout from "../components/layout/Layout";
import { contactInfo, faqData } from "../constant";
import type { ContactFormData } from "../constant";

export default function ContactPage() {
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <Layout 
      title="Contact Us"
      description="Get in touch with our team for any questions, support, or collaboration opportunities"
    >
      <div className="!grid !grid-cols-1 lg:!grid-cols-2 !gap-12 !mb-16">
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
              We're here to help you with all your agricultural needs. Whether you have questions about our services, want to schedule a visit, or need technical support, our team is ready to assist you.
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

          {/* Emergency Contact */}
          <div className="!bg-orange-50 !rounded-lg !p-6">
            <h3 className="!font-semibold !text-gray-900 !mb-3">Emergency Contact</h3>
            <p className="!text-sm !text-gray-600 !mb-3">
              For urgent agricultural issues or after-hours support:
            </p>
            <div className="!flex !items-center !space-x-2">
              <Phone className="!w-4 !h-4 !text-orange-500" />
              <span className="!text-orange-600 !font-medium">+1 (555) 999-8888</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="!bg-white !rounded-lg !shadow-lg !p-8"
        >
          <h2 className="!text-2xl !font-bold !text-gray-900 !mb-6">
            Send us a Message
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
                  value={contactForm.name}
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
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                  className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={contactForm.subject}
                onChange={handleChange}
                required
                className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500"
              />
            </div>

            <div>
              <label className="!block !text-sm !font-medium !text-gray-700 !mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us how we can help you..."
                className="!w-full !px-4 !py-3 !border !border-gray-300 !rounded-lg focus:!ring-2 focus:!ring-orange-500 focus:!border-orange-500 !resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="!w-full !bg-orange-500 !text-white !py-3 !px-6 !rounded-lg !font-semibold hover:!bg-orange-600 !transition-colors !flex !items-center !justify-center !space-x-2"
            >
              <Send className="!w-5 !h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="!bg-white !rounded-lg !shadow-lg !overflow-hidden"
      >
        <div className="!h-96 !bg-gray-200 !flex !items-center !justify-center">
          <div className="!text-center">
            <MapPin className="!w-12 !h-12 !text-gray-400 !mx-auto !mb-4" />
            <p className="!text-gray-600">Interactive Map Coming Soon</p>
            <p className="!text-sm !text-gray-500 !mt-2">
              {contactInfo.address}
            </p>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="!mt-16"
      >
        <h2 className="!text-2xl !font-bold !text-gray-900 !mb-8 !text-center">
          Frequently Asked Questions
        </h2>
        <div className="!grid !grid-cols-1 md:!grid-cols-2 !gap-8">
          {faqData.map((faq, index) => (
            <div key={index} className="!bg-white !rounded-lg !p-6 !shadow-lg">
              <h3 className="!font-semibold !text-gray-900 !mb-3">{faq.question}</h3>
              <p className="!text-gray-600 !text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
} 