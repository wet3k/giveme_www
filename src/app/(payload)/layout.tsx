import type { ReactNode } from 'react';
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts';
import config from '@payload-config';
import { importMap } from './admin/importMap';
import '@payloadcms/next/css';
import './custom.scss';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunctions={handleServerFunctions({ config })}
    >
      {children}
    </RootLayout>
  );
}
