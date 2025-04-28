import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';

function Contact() {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Office Address',
      details: '123 Financial District, Victoria Island, Lagos, Nigeria'
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Phone Number',
      details: '+234 123 456 7890'
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email Address',
      details: 'info@sabisave.com'
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <>
      <Section className="pt-32">
        <SectionTitle
          title="Contact Us"
          subtitle="We're here to help. Get in touch with our team."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-light p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
          
          <div>
            <div className="bg-light p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-bold">{info.title}</h4>
                      <p>{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-light p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Location</h3>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center h-[400px]">
            <p className="text-gray-500">Interactive map coming soon</p>
          </div>
        </div>
      </Section>
      
      <FAQ />
      <Newsletter />
    </>
  );
}

export default Contact;