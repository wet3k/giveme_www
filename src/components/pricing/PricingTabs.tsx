'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VPS_PLANS, DEDICATED_CPU_PLANS, DEDICATED_SERVERS, STORAGE_PLANS } from '@/lib/constants';
import { EXTERNAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

type TabKey = 'vps' | 'dedicated' | 'storage';

export function PricingTabs() {
  const t = useTranslations('pricing');
  const tt = useTranslations('pricing.tabs');
  const [activeTab, setActiveTab] = useState<TabKey>('vps');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'vps', label: tt('vps') },
    { key: 'dedicated', label: tt('dedicated') },
    { key: 'storage', label: tt('storage') },
  ];

  const getAnnualPrice = (monthlyPrice: number) => {
    return Math.round(monthlyPrice * 12 * 0.8); // 20% discount
  };

  const getDisplayPrice = (monthlyPrice: number) => {
    if (billingCycle === 'annually') {
      return Math.round(getAnnualPrice(monthlyPrice) / 12);
    }
    return monthlyPrice;
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                'px-4 sm:px-6 py-2 text-sm font-medium rounded-md transition-colors',
                activeTab === tab.key
                  ? 'bg-white dark:bg-surface-dark text-text-primary dark:text-text-primary-dark shadow-sm'
                  : 'text-text-secondary dark:text-text-secondary-dark hover:text-text-primary dark:hover:text-text-primary-dark'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <span className={cn('text-sm', billingCycle === 'monthly' ? 'text-text-primary dark:text-text-primary-dark font-medium' : 'text-text-secondary dark:text-text-secondary-dark')}>
          {t('monthly')}
        </span>
        <button
          onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
          className={cn(
            'relative w-14 h-7 rounded-full transition-colors',
            billingCycle === 'annually' ? 'bg-primary-cyan dark:bg-primary-cyan-dark' : 'bg-slate-300 dark:bg-slate-600'
          )}
        >
          <span
            className={cn(
              'absolute top-1 w-5 h-5 bg-white rounded-full transition-transform',
              billingCycle === 'annually' ? 'translate-x-8' : 'translate-x-1'
            )}
          />
        </button>
        <span className={cn('text-sm flex items-center gap-2', billingCycle === 'annually' ? 'text-text-primary dark:text-text-primary-dark font-medium' : 'text-text-secondary dark:text-text-secondary-dark')}>
          {t('annually')}
          <Badge variant="success" className="text-xs">{t('annualDiscount')}</Badge>
        </span>
      </div>

      {/* VPS Plans */}
      {activeTab === 'vps' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {VPS_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative bg-white dark:bg-surface-dark rounded-2xl p-6',
                'border-2 transition-all duration-300',
                plan.popular
                  ? 'border-primary-cyan dark:border-primary-cyan-dark shadow-lg pt-10'
                  : 'border-slate-200 dark:border-slate-700 hover:border-primary-cyan/50 dark:hover:border-primary-cyan-dark/50'
              )}
            >
              {plan.popular && (
                <Badge
                  variant="info"
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-blue to-primary-cyan dark:from-primary-blue-dark dark:to-primary-cyan-dark text-white border-0"
                >
                  {t('mostPopular')}
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-text-primary dark:text-text-primary-dark">
                    €{getDisplayPrice(plan.price)}
                  </span>
                  <span className="text-text-secondary dark:text-text-secondary-dark">
                    {t('perMonth')}
                  </span>
                </div>
                {billingCycle === 'annually' && (
                  <p className="text-xs text-success mt-1">
                    €{getAnnualPrice(plan.price)}/year
                  </p>
                )}
              </div>

              <ul className="space-y-2 text-sm mb-6">
                <li className="flex justify-between">
                  <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.vcpu')}</span>
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.vcpu}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.ram')}</span>
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.ram} GB</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.nvmeSsd')}</span>
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.storage} GB</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.bandwidth')}</span>
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.bandwidth} TB</span>
                </li>
              </ul>

              <a href={EXTERNAL_LINKS.register}>
                <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full" size="sm">
                  {t('getStarted')}
                </Button>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Dedicated Servers */}
      {activeTab === 'dedicated' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-4">
              {tt('dedicatedCpuVps')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DEDICATED_CPU_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700"
                >
                  <h4 className="text-lg font-bold text-text-primary dark:text-text-primary-dark mb-2">
                    {plan.name}
                  </h4>
                  <div className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
                    €{getDisplayPrice(plan.price)}<span className="text-sm font-normal text-text-secondary">{t('perMonth')}</span>
                  </div>
                  <ul className="space-y-2 text-sm mb-4">
                    <li className="flex justify-between">
                      <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.dedicatedVcpu')}</span>
                      <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.vcpu}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.ram')}</span>
                      <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.ram} GB</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.nvmeSsd')}</span>
                      <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.storage} GB</span>
                    </li>
                  </ul>
                  <a href={EXTERNAL_LINKS.register}>
                    <Button variant="secondary" className="w-full" size="sm">
                      {t('getStarted')}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-4">
              {tt('bareMetal')}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{tt('columns.model')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{tt('columns.cpu')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{tt('columns.cores')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{tt('columns.ram')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{tt('columns.storage')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{tt('columns.price')}</th>
                    <th className="py-3 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {DEDICATED_SERVERS.map((server) => (
                    <tr key={server.name} className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-3 px-4 font-medium text-text-primary dark:text-text-primary-dark">{server.name}</td>
                      <td className="py-3 px-4 text-text-secondary dark:text-text-secondary-dark">{server.cpu}</td>
                      <td className="py-3 px-4 text-text-secondary dark:text-text-secondary-dark">{server.cores}</td>
                      <td className="py-3 px-4 text-text-secondary dark:text-text-secondary-dark">{server.ram} GB</td>
                      <td className="py-3 px-4 text-text-secondary dark:text-text-secondary-dark">{server.storage}</td>
                      <td className="py-3 px-4 font-semibold text-text-primary dark:text-text-primary-dark">€{server.price}{t('perMonth')}</td>
                      <td className="py-3 px-4">
                        <a href={EXTERNAL_LINKS.register}>
                          <Button variant="ghost" size="sm">{tt('configure')}</Button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Storage Plans */}
      {activeTab === 'storage' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {STORAGE_PLANS.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                'bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700',
                index === 0 && 'border-dashed'
              )}
            >
              <h4 className="text-lg font-bold text-text-primary dark:text-text-primary-dark mb-2">
                {plan.id ? tt(`storagePlanNames.${plan.id}`) : plan.name}
              </h4>
              <div className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
                {typeof plan.price === 'number' ? (
                  <>€{plan.price}<span className="text-sm font-normal text-text-secondary">{t('perMonth')}</span></>
                ) : (
                  <span className="text-lg">{plan.price}</span>
                )}
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex justify-between">
                  <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.storage')}</span>
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.storage}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-secondary dark:text-text-secondary-dark">{tt('labels.egress')}</span>
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.egress}</span>
                </li>
              </ul>
              <a href={EXTERNAL_LINKS.register}>
                <Button variant="secondary" className="w-full" size="sm">
                  {t('getStarted')}
                </Button>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* VAT Note */}
      <p className="mt-8 text-center text-sm text-text-secondary dark:text-text-secondary-dark">
        {t('vat')}
      </p>
    </div>
  );
}
