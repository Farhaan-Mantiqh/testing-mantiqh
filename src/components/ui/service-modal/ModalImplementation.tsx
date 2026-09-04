import React from 'react';
import type { ServiceModalData } from '../../../data/servicesModalData';

interface ModalImplementationProps {
  data: ServiceModalData['implementation'];
}

export const ModalImplementation: React.FC<ModalImplementationProps> = ({ data }) => {
  if (!data.steps || data.steps.length === 0) return null;

  return (
    <div className="px-12 py-2 max-md:px-6 max-md:py-2">
      <h3 className="text-h4 font-medium text-[#0F172A] mb-8 text-center">
        {data.title}
      </h3>
      <div className="border border-slate-200 bg-slate-100 gap-[1px] grid grid-cols-6 max-md:grid-cols-1">
        {data.steps.map((step, index) => {
          const isFiveItems = data.steps.length === 5;
          const colSpan = isFiveItems
            ? (index < 3 ? 'md:col-span-2' : 'md:col-span-3')
            : 'md:col-span-2';

          return (
            <div
              key={index}
              className={`p-4 md:p-6 bg-white col-span-1 max-md:col-span-1 ${colSpan}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-body-l font-normal text-[#000000] pr-4">
                  {step.title}
                </h4>
                <div className="bg-[#EBF2F9] text-[#3373B0] text-[12px] font-medium px-3 py-0.5 rounded shrink-0">
                  {step.number || `0${index + 1}`}
                </div>
              </div>
              <p className="text-body-s font-normal text-[#454751] leading-relaxed pr-2">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
