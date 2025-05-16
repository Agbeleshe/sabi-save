import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";
import PageBanner from "../components/PageBanner";
import bannerImg from "../assets/PictureBg.png";

function Contact() {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: "Office Address",
      details: "123 Financial District, Victoria Island, Lagos, Nigeria",
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: "Phone Number",
      details: "+234 123 456 7890",
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: "Email Address",
      details: "info@sabisave.com",
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <>
      <PageBanner
        title="Contact us"
        subtitle="We are here to help and get you in contact with our team"
        backgroundImage={bannerImg}
      />
      <Section className="">
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
            <div className=" relative w-full h-full">
              <iframe
                className="absolute top-0 left-0 bottom-0 right-0 w-[100%] h-[100%] border-none"
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=123+Financial+District%2C+Victoria+Island%2C+Lagos%2C+Nigeria&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </Section>

      <FAQ />
      <Newsletter />
    </>
  );
}

export default Contact;
