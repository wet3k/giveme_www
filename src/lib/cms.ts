import 'server-only';
import { cache } from 'react';
import { getPayloadClient } from './payload';
import {
  VPS_PLANS,
  DEDICATED_CPU_PLANS,
  DEDICATED_SERVERS,
  STORAGE_PLANS,
  INCLUDED_FEATURES,
} from './constants';
import type { PricingContent } from './cms-types';

export const getPricingContent = cache(async (locale: string): Promise<PricingContent> => {
  const payload = await getPayloadClient();

  try {
    const data = await payload.findGlobal({
      slug: 'pricing',
      locale,
      fallbackLocale: 'en',
    });

    return {
      title: data?.title ?? undefined,
      subtitle: data?.subtitle ?? undefined,
      vatNote: data?.vatNote ?? undefined,
      vpsPlans: (data?.vpsPlans?.length ? data.vpsPlans : VPS_PLANS) as PricingContent['vpsPlans'],
      dedicatedCpuPlans: (data?.dedicatedCpuPlans?.length
        ? data.dedicatedCpuPlans
        : DEDICATED_CPU_PLANS) as PricingContent['dedicatedCpuPlans'],
      dedicatedServers: (data?.dedicatedServers?.length
        ? data.dedicatedServers
        : DEDICATED_SERVERS) as PricingContent['dedicatedServers'],
      storagePlans: (data?.storagePlans?.length
        ? data.storagePlans.map((plan) => ({
            ...plan,
            id: plan.labelKey ?? plan.id,
          }))
        : STORAGE_PLANS) as PricingContent['storagePlans'],
      includedFeatures: (data?.includedFeatures?.length
        ? data.includedFeatures.map((item) => item.featureKey)
        : INCLUDED_FEATURES) as PricingContent['includedFeatures'],
      faqTitle: data?.faqTitle ?? undefined,
      faqItems: (data?.faqItems?.length ? data.faqItems : []) as PricingContent['faqItems'],
    };
  } catch (error) {
    console.error('Failed to load pricing content from Payload:', error);
    return {
      vpsPlans: VPS_PLANS,
      dedicatedCpuPlans: DEDICATED_CPU_PLANS,
      dedicatedServers: DEDICATED_SERVERS,
      storagePlans: STORAGE_PLANS,
      includedFeatures: INCLUDED_FEATURES,
      faqItems: [],
    };
  }
});
