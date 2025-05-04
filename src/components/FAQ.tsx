import SectionTitle from "./SectionTitle";
import FAQItem from "./FAQItem";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [showAll, setShowAll] = useState(false);

  const faqItems = [
    {
      question: "What is SabiSave?",
      answer:
        "SabiSave is a mobile application software and backend solution that has been built for petty traders and high volume cash handlers. The solution is both dynamic and robust, and will enable users process cash deposit and receive instant value for same, withdraw cash, verify account balances real time and reconcile banking transactions.",
    },
    {
      question: "How can I register as a trader on SabiSave?",
      answer:
        "Download our mobile app on playstore or appstore, then click on 'Sign Up', next, under 'What type of Account do you want to Open?' select 'Trader' then follow the prompt to register. Alternatively, you can visit the nearest SabiSave authorised agent to register.",
    },
    {
      question: "Is agent registration free?",
      answer:
        "Yes, being an agent is completely free. Meet the requirements, register and get onboarded.",
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
  ];

  // Display only first 3 items initially, or all if showAll is true
  const displayedItems = showAll ? faqItems : faqItems.slice(0, 3);

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Everything you need to know about SabiSave"
          subtitle="Find answers to common questions about SabiSave"
          centered
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {displayedItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === 0}
            />
          ))}

          {!showAll && faqItems.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-none text-black rounded-lg font-medium flex items-center mx-auto hover:text-primary transition-colors duration-300"
              >
                <span>See All FAQs</span>
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
