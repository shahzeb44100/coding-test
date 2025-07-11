import type { ContactInfo, FAQItem } from "./types";

export const contactInfo: ContactInfo = {
  phone: "+1 (555) 123-4567",
  email: "info@terrtwenty.com",
  address: "123 Farm Road, Agricultural District, Green Valley, CA 90210",
  businessHours: "Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 4:00 PM"
};

export const faqData: FAQItem[] = [
  {
    question: "How can I schedule a farm visit?",
    answer: "Contact us via phone or email to schedule a guided tour of our facilities. We offer tours Monday through Friday."
  },
  {
    question: "Do you offer consulting services?",
    answer: "Yes, we provide comprehensive agricultural consulting services. Contact us to discuss your specific needs."
  },
  {
    question: "What are your business hours?",
    answer: "We're open Monday-Friday 8AM-6PM and Saturday 9AM-4PM. Sunday we're closed."
  },
  {
    question: "How quickly do you respond to inquiries?",
    answer: "We aim to respond to all inquiries within 24 hours during business days."
  }
]; 