import path from 'path';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { Users } from './src/payload/collections/Users';
import { Media } from './src/payload/collections/Media';
import { Pages } from './src/payload/collections/Pages';
import { FAQs } from './src/payload/collections/FAQs';
import { LegalPages } from './src/payload/collections/LegalPages';
import { SiteSettings } from './src/payload/globals/SiteSettings';
import { Pricing } from './src/payload/globals/Pricing';
import { Home } from './src/payload/globals/Home';

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(process.cwd()),
    },
  },
  collections: [Users, Media, Pages, FAQs, LegalPages],
  globals: [SiteSettings, Pricing, Home],
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  localization: {
    locales: ['en', 'pl', 'uk'],
    defaultLocale: 'en',
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(process.cwd(), 'payload-types.ts'),
  },
});
