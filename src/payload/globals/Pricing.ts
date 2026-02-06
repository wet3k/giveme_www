import type { GlobalConfig } from 'payload';
import { isAdminOrEditor } from '../access';

export const Pricing: GlobalConfig = {
  slug: 'pricing',
  access: {
    read: () => true,
    update: isAdminOrEditor,
  },
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'vatNote',
      type: 'text',
      localized: true,
    },
    {
      name: 'vpsPlans',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'vcpu', type: 'number', required: true },
        { name: 'ram', type: 'number', required: true },
        { name: 'storage', type: 'number', required: true },
        { name: 'bandwidth', type: 'number', required: true },
        { name: 'price', type: 'number', required: true },
        { name: 'popular', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'dedicatedCpuPlans',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'vcpu', type: 'number', required: true },
        { name: 'ram', type: 'number', required: true },
        { name: 'storage', type: 'number', required: true },
        { name: 'price', type: 'number', required: true },
      ],
    },
    {
      name: 'dedicatedServers',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'cpu', type: 'text', required: true },
        { name: 'cores', type: 'number', required: true },
        { name: 'ram', type: 'number', required: true },
        { name: 'storage', type: 'text', required: true },
        { name: 'bandwidth', type: 'text', required: true },
        { name: 'price', type: 'number', required: true },
      ],
    },
    {
      name: 'storagePlans',
      type: 'array',
      fields: [
        { name: 'labelKey', type: 'text' },
        { name: 'name', type: 'text', required: true },
        { name: 'storage', type: 'text', required: true },
        { name: 'egress', type: 'text', required: true },
        { name: 'price', type: 'text', required: true },
      ],
    },
    {
      name: 'includedFeatures',
      type: 'array',
      fields: [
        {
          name: 'featureKey',
          type: 'select',
          required: true,
          options: [
            { label: 'DDoS Protection', value: 'ddosProtection' },
            { label: '24/7 Support', value: 'support247' },
            { label: 'Uptime SLA', value: 'uptimeSla' },
            { label: 'Free Bandwidth', value: 'freeBandwidth' },
            { label: 'API Access', value: 'apiAccess' },
            { label: 'Team Access', value: 'teamAccess' },
            { label: 'Monitoring', value: 'monitoring' },
          ],
        },
      ],
    },
    {
      name: 'faqTitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'faqItems',
      type: 'array',
      fields: [
        { name: 'question', type: 'text', localized: true, required: true },
        { name: 'answer', type: 'textarea', localized: true, required: true },
      ],
    },
  ],
};
