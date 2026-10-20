import type { ConfigProviderProps } from 'antd';
import viVN from 'antd/locale/vi_VN';
import enUS from 'antd/locale/en_US';
import jaJP from 'antd/locale/ja_JP';
import koKR from 'antd/locale/ko_KR';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';
import 'dayjs/locale/ko';
import 'dayjs/locale/zh-cn';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export type AntdLocaleType = NonNullable<ConfigProviderProps['locale']>;

export interface LocaleMapping {
  locale: AntdLocaleType;
  dayjsLocale: string;
}

export const ANTD_LOCALES: Record<string, LocaleMapping> = {
  vi: { locale: viVN, dayjsLocale: 'vi' },
  en: { locale: enUS, dayjsLocale: 'en' },
  ja: { locale: jaJP, dayjsLocale: 'ja' },
  ko: { locale: koKR, dayjsLocale: 'ko' },
  zh: { locale: zhCN, dayjsLocale: 'zh-cn' },
};

export function getAntdLocaleConfig(langCode?: string): LocaleMapping {
  if (!langCode) return ANTD_LOCALES.vi;
  const normalized = langCode.toLowerCase();
  const prefix = normalized.split('-')[0];
  return ANTD_LOCALES[prefix] || ANTD_LOCALES[normalized] || ANTD_LOCALES.vi;
}

export function useAntdLocale(): LocaleMapping {
  const { i18n } = useTranslation();
  return useMemo(() => getAntdLocaleConfig(i18n.language), [i18n.language]);
}

export function syncDayjsLocale(dayjsLocale: string): void {
  dayjs.locale(dayjsLocale);
}

