import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

function FAQItem({ question, answer, isOpen = false }: FAQItemProps) {
  const [expanded, setExpanded] = useState(isOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
      >
        <span>{question}</span>
        <span>{expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
      </button>
      <div
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="opacity-80 pb-2">{answer}</p>
      </div>
    </div>
  );
}

export default FAQItem;