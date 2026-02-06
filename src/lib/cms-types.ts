export type VpsPlan = {
  name: string;
  vcpu: number;
  ram: number;
  storage: number;
  bandwidth: number;
  price: number;
  popular?: boolean;
};

export type DedicatedCpuPlan = {
  name: string;
  vcpu: number;
  ram: number;
  storage: number;
  price: number;
};

export type DedicatedServer = {
  name: string;
  cpu: string;
  cores: number;
  ram: number;
  storage: string;
  bandwidth: string;
  price: number;
};

export type StoragePlan = {
  id?: string;
  name: string;
  storage: string;
  egress: string;
  price: number | string;
};

export type IncludedFeatureKey =
  | 'ddosProtection'
  | 'support247'
  | 'uptimeSla'
  | 'freeBandwidth'
  | 'apiAccess'
  | 'teamAccess'
  | 'monitoring';

export type PricingFAQItem = {
  question: string;
  answer: string;
};

export type PricingContent = {
  title?: string;
  subtitle?: string;
  vatNote?: string;
  vpsPlans: VpsPlan[];
  dedicatedCpuPlans: DedicatedCpuPlan[];
  dedicatedServers: DedicatedServer[];
  storagePlans: StoragePlan[];
  includedFeatures: IncludedFeatureKey[];
  faqTitle?: string;
  faqItems: PricingFAQItem[];
};
