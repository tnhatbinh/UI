import React, { useEffect } from 'react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { theme } from './antDesign';
import { useAntdLocale, syncDayjsLocale } from './antd-locale';

export interface AntdLocaleProviderProps {
  children: React.ReactNode;
}

export function AntdLocaleProvider({ children }: AntdLocaleProviderProps) {
  const { locale, dayjsLocale } = useAntdLocale();

  useEffect(() => {
    syncDayjsLocale(dayjsLocale);
  }, [dayjsLocale]);

  return (
    <AntdConfigProvider theme={theme} locale={locale}>
      {children}
    </AntdConfigProvider>
  );
}

export default AntdLocaleProvider;

