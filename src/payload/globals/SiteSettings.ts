import type { GlobalConfig } from 'payload';
import { isAdminOrEditor } from '../access';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: 'company',
      type: 'group',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'address', type: 'textarea' },
        { name: 'krs', type: 'text' },
        { name: 'nip', type: 'text' },
        { name: 'regon', type: 'text' },
      ],
    },
    {
      name: 'contacts',
      type: 'group',
      fields: [
        { name: 'email', type: 'email' },
        { name: 'support', type: 'email' },
        { name: 'privacy', type: 'email' },
        { name: 'abuse', type: 'email' },
      ],
    },
    {
      name: 'legal',
      type: 'group',
      fields: [
        { name: 'dataController', type: 'text' },
        { name: 'dpoEmail', type: 'email' },
        { name: 'lastUpdated', type: 'date', admin: { date: { pickerAppearance: 'dayOnly' } } },
      ],
    },
  ],
};
