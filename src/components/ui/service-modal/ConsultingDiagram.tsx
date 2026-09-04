import React from 'react';
import consultingSvg from '/home_lead_ai/consultant.svg?url';

export const ConsultingDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1104px] mx-auto aspect-[1104/350] bg-transparent select-none overflow-hidden rounded-xl">
      {/* Background static SVG */}
      <img
        src={consultingSvg}
        alt="Consulting Flow Diagram"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes dashFlowConsult {
          to {
            stroke-dashoffset: -20;
          }
        }
        .consult-path {
          stroke: #171925;
          stroke-width: 1.5;
          stroke-dasharray: 6, 4;
          animation: dashFlowConsult 1.2s linear infinite;
          opacity: 0.85;
        }
      `}} />

      {/* SVG Animation Overlay - matching consultant.svg paths perfectly with blue arrows and no double lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1104 350" fill="none">
        <defs>
          <marker id="arrow-c" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171925" />
          </marker>
        </defs>

        {/* 1. Business Assessment → Opportunity Discovery */}
        <path d="M 209 163 L 241 163" className="consult-path" markerEnd="url(#arrow-c)" />

        {/* 2. Opportunity Discovery → AI Strategy Hub */}
        <path d="M 418 163 L 450 163" className="consult-path" markerEnd="url(#arrow-c)" />

        {/* 3. AI Strategy Hub → Implementation (straight horizontal path) */}
        <path d="M 664 163.75 L 711 163.75" className="consult-path" markerEnd="url(#arrow-c)" />

        {/* 4. AI Strategy Hub → AI Strategy (Branching up) */}
        <path d="M 685.4 163.75 L 685.4 77.75 L 711 77.75" className="consult-path" markerEnd="url(#arrow-c)" />

        {/* 5. AI Strategy Hub → Architecture (Branching down) */}
        <path d="M 685.4 163.75 L 685.4 250.75 L 711 250.75" className="consult-path" markerEnd="url(#arrow-c)" />

        {/* 6. AI Strategy → Fork point (at x=917) */}
        <path d="M 884 75 L 917 75" className="consult-path" />

        {/* 7. Architecture → Fork point (at x=917) */}
        <path d="M 884 250.75 L 917 250.75" className="consult-path" />

        {/* 8. AI Strategy & Architecture converging vertical lines (at x=917) */}
        <path d="M 917 75 L 917 250.75" className="consult-path" />

        {/* 9. Implementation → Deployment & Optimization */}
        <path d="M 884 163.75 L 930 163.75" className="consult-path" markerEnd="url(#arrow-c)" />

        {/* 10. Return loop from Deployment & Optimization back to Business Assessment */}
        <path d="M 1013 184 L 1013 327 L 113 327 L 113 184" className="consult-path" markerEnd="url(#arrow-c)" />
      </svg>
    </div>
  );
};
