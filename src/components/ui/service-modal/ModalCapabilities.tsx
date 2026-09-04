import React from 'react';
import type { ServiceModalData } from '../../../data/servicesModalData';
import * as LucideIcons from 'lucide-react';

interface ModalCapabilitiesProps {
  data: ServiceModalData['capabilities'];
}

export const ModalCapabilities: React.FC<ModalCapabilitiesProps> = ({ data }) => {
  return (
    <div className="px-12 py-2 max-md:px-6 max-md:py-2">
      <h3 className="text-h4 font-medium text-[#0F172A] mb-8">
        {data.title}
      </h3>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-4 gap-y-8">
        {data.items.map((item, index) => {
          const IconName = item.icon as keyof typeof LucideIcons;
          const IconComponent = (LucideIcons[IconName] as React.ElementType) || LucideIcons.CheckCircle;

          return (
            <div key={index} className="flex flex-col items-start">
              <div className="w-12 h-12 rounded-lg border border-[#2B7A4B]/20 bg-white text-[#2B7A4B] flex items-center justify-center mb-5">
                <IconComponent style={{ width: 24, height: 24 }} strokeWidth={1.5} />
              </div>
              <h4 className="text-h6 font-medium text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-body-s text-[#454751] font-normal leading-relaxed pr-4">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
