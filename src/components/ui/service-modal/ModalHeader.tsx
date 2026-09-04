import React from 'react';
import type { ServiceModalData } from '../../../data/servicesModalData';
import { ChevronRight } from 'lucide-react';

interface ModalHeaderProps {
  data: ServiceModalData['modalHeader'];
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ data }) => {
  return (
    <div className="px-12 pt-12 pb-10 max-md:px-6 max-md:pt-12 max-md:pb-8">
      <h2 className="text-h3 font-medium text-[#0F172A] leading-[1.3] mb-5 max-w-[750px]">
        {data.title}
      </h2>
      <p className="text-h6 font-normal leading-[1.6] text-[#454751] mb-8 max-w-[650px]">
        {data.desc}
      </p>
      <div className="flex gap-4 flex-wrap">
        {data.ctas.filter(cta => cta.href !== '/askAI').map((cta, index) => {
          const cleanText = cta.text.replace(/\s*>\s*$/, '');
          return (
            <a
              key={index}
              href={cta.href}
              className={`group inline-flex items-center gap-1.5 px-6 py-2 rounded-[8px] text-[15px] font-medium no-underline transition-all duration-200 cursor-pointer
                ${cta.primary
                  ? 'bg-[#387EC1] text-white hover:bg-[#2B6196]'
                  : 'bg-white text-[#387EC1] border border-slate-300 hover:bg-slate-50'
                }`}
            >
              {cleanText}
              <ChevronRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
