import type { Metadata } from 'next';
import { AdminView } from '@payloadcms/next/views';
import { getPayload } from 'payload';
import config from '@payload-config';

type AdminPageProps = {
  params: { segments?: string[] };
  searchParams: Promise<Record<string, string>>;
};

export default async function AdminPage({ params, searchParams }: AdminPageProps) {
  const payload = await getPayload({ config });
  const resolvedSearchParams = await searchParams;

  return AdminView({
    payload,
    params,
    searchParams: resolvedSearchParams,
  });
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const suffix = payload.config.admin?.meta?.titleSuffix;
  return {
    title: suffix ? `Admin ${suffix}` : 'Admin',
  };
}
