import React from 'react';
import type { ServiceModalData } from '../../../data/servicesModalData';
import { AgentDiagram } from './AgentDiagram';
import { AutomationDiagram } from './AutomationDiagram';
import { AnalyticsDiagram } from './AnalyticsDiagram';
import { ConsultingDiagram } from './ConsultingDiagram';

interface ModalDiagramPlaceholderProps {
  serviceId?: string;
  data: ServiceModalData['diagram'];
}

export const ModalDiagramPlaceholder: React.FC<ModalDiagramPlaceholderProps> = ({ serviceId, data }) => {
  return (
    <div className="mx-8 max-md:mx-3 mb-12">
      <div className="w-full rounded-xl border border-slate-100  bg-gradient-to-b from-white to-[#dcf0fb] p-10 max-md:p-5 flex flex-col">
        <h3 className="text-h4 font-medium text-slate-900 mb-2">
          {data.title}
        </h3>
        <p className="text-h6 font-normal text-[#454751] mb-6 max-w-[600px] leading-relaxed">
          {data.desc}
        </p>
        {/* Horizontally scrollable diagram on mobile */}
        <div className="w-full overflow-x-auto overflow-y-hidden rounded-xl no-scrollbar touch-pan-x -mx-0">
          <div className="min-w-[820px] lg:min-w-0 w-full relative">
            {serviceId === 'agent' ? (
              <AgentDiagram />
            ) : serviceId === 'automation' ? (
              <AutomationDiagram />
            ) : serviceId === 'analytics' ? (
              <AnalyticsDiagram />
            ) : serviceId === 'consulting' ? (
              <ConsultingDiagram />
            ) : (
              <div className="flex-1 w-full border-2 border-dashed border-sky-300 rounded-xl flex flex-col items-center justify-center text-slate-400 font-medium text-sm bg-white/40 py-20">
                <span>[ Diagram SVG Space ]</span>
              </div>
            )}
          </div>
        </div>
        {/* Mobile swipe hint */}
        <p className="hidden max-md:block text-[11px] text-slate-400 text-center mt-3">← Swipe to explore →</p>
      </div>
    </div>
  );
};
