import React from 'react';
import aiSvg from '/home_lead_ai/ai_svg.svg?url';

export const AgentDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1104px] mx-auto aspect-[1104/417] bg-transparent select-none overflow-hidden rounded-xl">
      {/* Background static SVG */}
      <img
        src={aiSvg}
        alt="Agent Flow Diagram"
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
        .flow-path-grey-overlay {
          stroke: #94a3b8;
          stroke-width: 1.2;
          stroke-dasharray: 5, 5;
          animation: dashFlow 1.8s linear infinite;
          opacity: 0.6;
        }
      `}} />

      {/* SVG Animation Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1104 417" fill="none">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#171925" />
          </marker>
          <marker id="arrow-grey" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
          </marker>
        </defs>

        {/* 1. Customer Request -> AI Agent (Vertical Down) */}
        <path d="M 544.5 75 L 544.5 148" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 2. AI Agent -> Understand Intent (Horizontal Right) */}
        <path d="M 604 208 L 677 208" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 3. Understand Intent -> Retrieve Knowledge (Horizontal Right) */}
        {/* Blue dot is at Understand Intent right edge */}
        <path d="M 854 208 L 879 208" className="flow-path-overlay" />

        {/* 4. Retrieve Knowledge -> AI Agent Loop (Down, Left) */}
        {/* Drops from gap between Understand Intent and Retrieve Knowledge at x=867.5 */}
        {/* Merges into center line at x=544.5 */}
        <path d="M 867.5 209 L 867.5 305.5 A 10 10 0 0 1 857.5 315.5 L 544.5 315.5" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 5. AI Agent -> Connect Business (Horizontal Left) */}
        <path d="M 484 208 L 411 208" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 6. Connect Business -> Execute Task (Horizontal Left) */}
        {/* Blue dot is at Connect Business left edge */}
        <path d="M 234 208 L 204 208" className="flow-path-overlay" />

        {/* 7. Connect Business -> AI Agent Loop (Down, Right) */}
        {/* Drops from gap between Execute Task and Connect Business at x=222.5 */}
        {/* Merges into center line at x=544.5 */}
        <path d="M 222.5 209 L 222.5 305.5 A 10 10 0 0 0 232.5 315.5 L 544.5 315.5" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* 8. AI Agent -> Deliver Response Direct (Vertical Down) */}
        <path d="M 544.5 268 L 544.5 342" className="flow-path-grey-overlay" markerEnd="url(#arrow-grey)" />

        {/* Restore the text that was hidden when making dashed lines transparent */}
        <text x="544.5" y="235" textAnchor="middle" fill="#171925" fontSize="14" fontWeight="500" className="font-sans" letterSpacing="0.3">
          AI Agent
        </text>
      </svg>
    </div>
  );
};
