export const COMPANY_INFO = {
  name: 'Giveme Cloud Sp. z o.o.',
  address: 'ul. Example 123, 00-001 Warszawa, Poland',
  krs: '0000000000',
  nip: '0000000000',
  regon: '000000000',
  email: 'hello@giveme.cloud',
  support: 'support@giveme.cloud',
  privacy: 'privacy@giveme.cloud',
  abuse: 'abuse@giveme.cloud',
};

export const EXTERNAL_LINKS = {
  billing: 'https://billing.giveme.cloud',
  login: 'https://billing.giveme.cloud/login',
  register: 'https://billing.giveme.cloud/register',
  status: 'https://status.giveme.cloud',
  docs: 'https://docs.giveme.cloud',
};

export const VPS_PLANS = [
  { name: 'VPS-1', vcpu: 1, ram: 2, storage: 40, bandwidth: 2, price: 4, popular: false },
  { name: 'VPS-2', vcpu: 2, ram: 4, storage: 80, bandwidth: 4, price: 8, popular: false },
  { name: 'VPS-4', vcpu: 4, ram: 8, storage: 160, bandwidth: 8, price: 16, popular: true },
  { name: 'VPS-8', vcpu: 8, ram: 16, storage: 320, bandwidth: 16, price: 32, popular: false },
  { name: 'VPS-16', vcpu: 16, ram: 32, storage: 640, bandwidth: 32, price: 64, popular: false },
];

export const DEDICATED_CPU_PLANS = [
  { name: 'CPU-2', vcpu: 2, ram: 8, storage: 80, bandwidth: 4, price: 24 },
  { name: 'CPU-4', vcpu: 4, ram: 16, storage: 160, bandwidth: 8, price: 48 },
  { name: 'CPU-8', vcpu: 8, ram: 32, storage: 320, bandwidth: 16, price: 96 },
  { name: 'CPU-16', vcpu: 16, ram: 64, storage: 640, bandwidth: 32, price: 192 },
];

export const DEDICATED_SERVERS = [
  { name: 'DS-E1', cpu: 'AMD Ryzen 5', cores: 6, ram: 64, storage: '2x 1TB NVMe', bandwidth: 'Unmetered', price: 69 },
  { name: 'DS-E2', cpu: 'AMD Ryzen 7', cores: 8, ram: 128, storage: '2x 2TB NVMe', bandwidth: 'Unmetered', price: 99 },
  { name: 'DS-P1', cpu: 'AMD EPYC 7313P', cores: 16, ram: 128, storage: '2x 1TB NVMe', bandwidth: 'Unmetered', price: 149 },
  { name: 'DS-P2', cpu: 'AMD EPYC 7443P', cores: 24, ram: 256, storage: '2x 2TB NVMe', bandwidth: 'Unmetered', price: 249 },
  { name: 'DS-P3', cpu: 'AMD EPYC 7543P', cores: 32, ram: 512, storage: '4x 2TB NVMe', bandwidth: 'Unmetered', price: 399 },
];

export const STORAGE_PLANS = [
  { id: 'payg', name: 'Pay-as-you-go', storage: 'Pay per use', egress: '€0.01/GB', price: '€0.01/GB/mo' },
  { id: 'bundle1', name: '1 TB Bundle', storage: '1 TB', egress: '2 TB', price: 9 },
  { id: 'bundle5', name: '5 TB Bundle', storage: '5 TB', egress: '10 TB', price: 39 },
  { id: 'bundle10', name: '10 TB Bundle', storage: '10 TB', egress: '25 TB', price: 69 },
  { id: 'bundle50', name: '50 TB Bundle', storage: '50 TB', egress: '100 TB', price: 299 },
];

export const INCLUDED_FEATURES = [
  'ddosProtection',
  'support247',
  'uptimeSla',
  'freeBandwidth',
  'apiAccess',
  'teamAccess',
  'monitoring',
] as const;
