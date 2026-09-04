export interface CapabilityItem {
  title: string;
  desc: string;
  icon: string;
}

export interface CarouselItem {
  title: string;
  desc: string;
  image: string;
}

export interface ImplementationStep {
  title: string;
  desc: string;
  number: string;
}

export interface OutcomeItem {
  title: string;
  desc: string;
  icon: string;
}

export interface ServiceModalData {
  id: string;
  modalHeader: {
    title: string;
    desc: string;
    ctas: {
      text: string;
      href: string;
      primary: boolean;
    }[];
  };
  diagram: {
    title: string;
    desc: string;
  };
  capabilities: {
    title: string;
    items: CapabilityItem[];
  };
  carousel: {
    title: string;
    items: CarouselItem[];
  };
  implementation: {
    title: string;
    steps: ImplementationStep[];
  };
  outcomes: {
    title: string;
    desc: string;
    items: OutcomeItem[];
    ctaTitle: string;
    ctaButtonText: string;
    ctaButtonHref: string;
  };
}

import { agentModalData } from './services/agent';
import { automationModalData } from './services/automation';
import { analyticsModalData } from './services/analytics';
import { consultingModalData } from './services/consulting';

export const servicesModalDataMap: Record<string, ServiceModalData> = {
  agent: agentModalData,
  automation: automationModalData,
  analytics: analyticsModalData,
  consulting: consultingModalData,
};
