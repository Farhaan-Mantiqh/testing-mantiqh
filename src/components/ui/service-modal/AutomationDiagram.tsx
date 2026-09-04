import React from 'react';
import automationSvg from '/home_lead_ai/automation.svg?url';

export const AutomationDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1104px] mx-auto aspect-[1104/320] bg-transparent select-none overflow-hidden rounded-xl">
      {/* Background static SVG */}
      <img
        src={automationSvg}
        alt="Automation Flow Diagram"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes dashFlow {
          to {
            stroke-dashoffset: -20;
          }
        }
        .flow-path-overlay {
          stroke: #171925;
          stroke-width: 1.5;
          stroke-dasharray: 6, 4;
          animation: dashFlow 1.2s linear infinite;
          opacity: 0.85;
        }
      `}} />

      {/* SVG Animation Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1104 320" fill="none">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#171925" />
          </marker>
        </defs>

        {/* 1. Process Trigger -> Automation Engine (Horizontal Right) */}
        <path d="M 209 160.5 L 252 160.5" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 2. Automation Engine -> Task Routing (Right, Up, Right) */}
        <path d="M 458 135.5 L 520 135.5 A 10 10 0 0 0 530 125.5 L 530 55.5" className="flow-path-overlay" markerEnd="url(#arrow)" />
        <path d="M 530 55.5 A 10 10 0 0 1 540 45.5 L 569 45.5" className="flow-path-overlay" />

        {/* 3. Automation Engine -> Approvals (Horizontal Right) */}
        <path d="M 462 160.5 L 569 160.5" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 4. Automation Engine -> Execution (Right, Down, Right) */}
        <path d="M 462 185.5 L 521 185.5 A 10 10 0 0 1 531 195.5 L 531 265.5" className="flow-path-overlay" markerEnd="url(#arrow)" />
        <path d="M 531 265.5 A 10 10 0 0 0 541 275.5 L 569 275.5" className="flow-path-overlay" />

        {/* 5. Task Routing -> Workflow Complete */}
        <path d="M 742 45.5 L 805 45.5" className="flow-path-overlay" />
        <path d="M 805 45.5 A 10 10 0 0 1 815 55.5 L 815 160.5" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 6. Approvals -> Workflow Complete */}
        <path d="M 746 160.5 L 853 160.5" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 7. Execution -> Workflow Complete */}
        <path d="M 746 275.5 L 805 275.5" className="flow-path-overlay" />
        <path d="M 805 275.5 A 10 10 0 0 0 815 265.5 L 815 160.5" className="flow-path-overlay" markerEnd="url(#arrow)" />
      </svg>
    </div>
  );
};
