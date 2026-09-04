import React from 'react';
import analyticsSvg from '/home_lead_ai/analytics.svg?url';

export const AnalyticsDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1104px] mx-auto aspect-[1104/335] bg-transparent select-none overflow-hidden rounded-xl">
      {/* Background static SVG */}
      <img
        src={analyticsSvg}
        alt="Analytics Flow Diagram"
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
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1104 335" fill="none">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#171925" />
          </marker>
        </defs>

        {/* Left Boxes (5) -> Analytics Engine (Circle) */}
        <path d="M 209 44 L 273 44 A 10 10 0 0 1 283 54 L 283 151.5 A 10 10 0 0 0 293 161.5 L 308 161.5" className="flow-path-overlay" markerEnd="url(#arrow)" />
        <path d="M 209 102 L 273 102 A 10 10 0 0 1 283 112 L 283 151.5 A 10 10 0 0 0 293 161.5 L 308 161.5" className="flow-path-overlay" markerEnd="url(#arrow)" />
        <path d="M 209 161.5 L 308 161.5" className="flow-path-overlay" markerEnd="url(#arrow)" />
        <path d="M 209 221 L 273 221 A 10 10 0 0 0 283 211 L 283 171.5 A 10 10 0 0 1 293 161.5 L 308 161.5" className="flow-path-overlay" markerEnd="url(#arrow)" />
        <path d="M 209 279.5 L 273 279.5 A 10 10 0 0 0 283 269.5 L 283 171.5 A 10 10 0 0 1 293 161.5 L 308 161.5" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* Analytics Engine -> AI Analysis */}
        <path d="M 518 161.5 L 617 161.5" className="flow-path-overlay" markerEnd="url(#arrow)" />

        {/* AI Analysis -> Far Right Boxes (3) */}
        <path d="M 789 146 L 853 146 A 10 10 0 0 0 863 136 L 863 109 A 10 10 0 0 1 873 99 L 884 99" className="flow-path-overlay" markerEnd="url(#arrow)" />
        <path d="M 789 161.5 L 884 161.5" className="flow-path-overlay" markerEnd="url(#arrow)" />
        <path d="M 789 178 L 853 178 A 10 10 0 0 1 863 188 L 863 215 A 10 10 0 0 0 873 225 L 884 225" className="flow-path-overlay" markerEnd="url(#arrow)" />
      </svg>
    </div>
  );
};
