import React from 'react';
import type { ServiceModalData } from '../../../data/servicesModalData';
import * as LucideIcons from 'lucide-react';

interface ModalOutcomesProps {
  data: ServiceModalData['outcomes'];
}

export const ModalOutcomes: React.FC<ModalOutcomesProps> = ({ data }) => {
  if (!data.items || data.items.length === 0) return null;

  return (
    <div className="px-12 py-12 max-md:px-6 max-md:py-10">
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-8 mb-10">
        <h3 className="text-h4 font-medium text-[#0F172A] lg:w-6/12">
          {data.title}
        </h3>
        <p className="text-body-m font-normal text-[#454751] leading-relaxed lg:w-7/12">
          {data.desc}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mb-10">
        {data.items.map((item, index) => {
          const IconName = item.icon as keyof typeof LucideIcons;
          const IconComponent = (LucideIcons[IconName] as React.ElementType) || LucideIcons.CheckCircle;

          return (
            <div
              key={index}
              className="p-4 sm:p-6 border border-slate-200 rounded-[2px] bg-white"
            >
              <div className="mb-4 text-[#4B88C6]">
                <IconComponent style={{ width: 24, height: 24 }} strokeWidth={1.5} />
              </div>
              <h4 className="text-h6 font-medium text-[#171925] mb-2">
                {item.title}
              </h4>
              <p className="text-body-s font-normal text-[#454751] leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="w-full h-[0.5px] bg-slate-200 mb-10"></div>

      {/* Bottom CTA */}
      <div className="text-center pb-0 pt-2 px-6">
        <h3 className="text-h3 font-medium text-slate-900 mb-6">
          {data.ctaTitle}
        </h3>
        <a
          href={data.ctaButtonHref}
          className="group inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-[#3E7CB1] text-white rounded-[6px] text-cta-primary font-medium font-medium no-underline cursor-pointer hover:bg-[#326795] transition-colors duration-200"
        >
          {data.ctaButtonText}
          <LucideIcons.ChevronRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
};
