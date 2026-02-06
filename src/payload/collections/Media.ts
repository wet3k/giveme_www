import type { CollectionConfig } from 'payload';
import { isAdminOrEditor } from '../access';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  upload: {
    staticDir: 'public/media',
    staticURL: '/media',
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'filename', 'mimeType', 'updatedAt'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea',
    },
  ],
};
