import SectionTitle from "./SectionTitle";
import FAQItem from "./FAQItem";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import MotionAnimation from "../motion/MotionAnimation";

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const faqItems = [
    {
      question: "What is SabiSave?",
      answer:
        "SabiSave is a mobile application software that has been built for petty traders, artisans and small business owners in the largely unbanked informal sector. Our solution is simple, accessible and secure, and enables users save, process cash deposit, receive and send transfers, verify account balances and reconcile banking transactions in real time. Individuals can also register as agents and earn income from onboarding and managing other users on the platform.",
    },
    {
      question: "How can I register as a trader, artisan or agent?",
      answer:
        "Download the mobile app on play store or app store, and register your details as a Trader or Agent. Alternatively, you can visit the nearest SabiSave authorized agent to register.",
    },
    {
      question: "Is SabiSave free?",
      answer: "Yes, registration on SabiSave is absolutely free.",
    },
    {
      question: "How can I register as an agent on SabiSave?",
      answer:
        "Download our mobile app on playstore or appstore. Click on 'Sign Up', next, under 'What type of Account do you want to Open?', select 'Agent' then follow the prompt to register. Once registered, your request will be approved within 24-48 hours.",
    },
    {
      question: "What qualifies me to be an agent?",
      answer:
        "You must have operated as a collector at a major market in your city for at least one year. Additionally, you must have at least 50 customers that make savings with you.",
    },
    {
      question: "How do I save and perform other transactions on the app?",
      answer:
        "To save, simply select your preferred saving plan and make your savings via an agent or through your digital account. You can also access other services real time on the app, or through authorized agents closest to you.",
    },
    {
      question: "How can I access my savings?",
      answer:
        "You can verify your saved money anytime. However, you will only be able to access your savings while keeping a minimum amount once a month upon request.",
    },
    {
      question: "How do I register as an agent?",
      answer:
        "To register as an agent, download the app and fill in the necessary information including the guarantor's form. You can also register through an authorized agent.",
    },
    {
      question: "How can I identify and locate a registered agent?",
      answer:
        "All our authorized agents will have a unique company identity and can be accessed at your local market or a designated office closest to you.",
    },
    {
      question: "Do you have a contact center to resolve issues?",
      answer:
        "Yes, our authorized agents are the first point of call for the resolution of any challenge by a user. Our contact center is also fully equipped to provide help and support when required.",
    },
  ];

  // Display only first 3 items initially, or all if showAll is true
  const displayedItems = showAll ? faqItems : faqItems.slice(0, 3);

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionAnimation>
          <SectionTitle
            title="Everything you need to know about SabiSave"
            subtitle="Find answers to common questions about SabiSave"
            centered
          />
        </MotionAnimation>

        <div className="max-w-3xl mx-auto space-y-4">
          {displayedItems.map((item, index) => (
            <MotionAnimation delay={0.2 * index} motion="slide-up">
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={index === 0}
              />
            </MotionAnimation>
          ))}

          {!showAll && faqItems.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-none text-black rounded-lg font-medium flex items-center mx-auto hover:text-red transition-colors duration-300"
              >
                <MotionAnimation>
                  <span>See All FAQs</span>
                </MotionAnimation>
                <ArrowDown size={16} className="ml-2" />
              </button>
            </div>
          )}

          {showAll && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(false)}
                className="px-6 py-3 text-gray-600  rounded-lg font-medium flex items-center mx-auto hover:text-primary transition-colors duration-300"
              >
                <span>Show Less</span>
                <ArrowUp size={16} className="ml-2" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
