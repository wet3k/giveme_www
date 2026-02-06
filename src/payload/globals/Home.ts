import type { GlobalConfig } from 'payload';
import { isAdminOrEditor } from '../access';

export const Home: GlobalConfig = {
  slug: 'home',
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
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'eyebrow', type: 'text', localized: true },
        { name: 'headline', type: 'text', localized: true },
        { name: 'subheading', type: 'textarea', localized: true },
        { name: 'primaryCtaLabel', type: 'text', localized: true },
        { name: 'primaryCtaHref', type: 'text' },
        { name: 'secondaryCtaLabel', type: 'text', localized: true },
        { name: 'secondaryCtaHref', type: 'text' },
        { name: 'heroImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'highlights',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', localized: true, required: true },
        { name: 'description', type: 'textarea', localized: true },
        { name: 'icon', type: 'text' },
      ],
    },
  ],
};
