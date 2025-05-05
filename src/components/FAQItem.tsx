import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import MotionAnimation from "../motion/MotionAnimation";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQItem = ({ question, answer, isOpen = false }: FAQItemProps) => {
  const [expanded, setExpanded] = useState(isOpen);

  return (
    <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
      >
        <span className="font-medium text-lg text-gray-800">{question}</span>
        <span className="text-primary ml-2">
          {expanded ? (
            <Minus size={20} className="text-red-600" />
          ) : (
            <Plus size={20} className="text-red-600" />
          )}
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden bg-gray-50 ${
          expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <MotionAnimation>
          <p className="p-4 text-gray-700">{answer}</p>
        </MotionAnimation>
      </div>
    </div>
  );
};

export default FAQItem;
