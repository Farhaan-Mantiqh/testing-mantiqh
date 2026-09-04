import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full faq-wrapper">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[#D9DDE3]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-start gap-5 py-4 md:py-8 text-left cursor-pointer transition-all"
              aria-expanded={isOpen}
            >
              <span
                className={`shrink-0 text-[24px] leading-none text-[#111827] transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>

              <div className="flex-1 w-full">
                <h3 className="text-h6 font-medium text-[#111827]">
                  {item.question}
                </h3>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 pb-2">
                      <p className="max-w-3xl text-body-m font-normal leading-relaxed text-[#454751]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
