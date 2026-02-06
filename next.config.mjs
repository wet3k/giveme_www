import createNextIntlPlugin from 'next-intl/plugin';
import { withPayload } from '@payloadcms/next/withPayload';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const withPayloadConfig = withPayload({
  configPath: '@payload-config',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(withPayloadConfig(nextConfig));
