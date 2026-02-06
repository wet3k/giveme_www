import type { CollectionConfig } from 'payload';
import { isAdminOrEditor } from '../access';

export const LegalPages: CollectionConfig = {
  slug: 'legal-pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['type', 'title', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  versions: {
    drafts: true,
    maxPerDoc: 50,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      unique: true,
      options: [
        { label: 'Terms of Service', value: 'terms' },
        { label: 'Privacy Policy', value: 'privacy' },
        { label: 'Cookies Policy', value: 'cookies' },
        { label: 'Acceptable Use Policy', value: 'aup' },
        { label: 'Service Level Agreement', value: 'sla' },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'intro',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
    },
    {
      name: 'lastUpdated',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],
};
