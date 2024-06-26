import React from 'react';
import { en_US, Web3ConfigProvider, zh_CN } from '@ant-design/web3-common';
import { useIntl, useLocation, useOutlet, usePrefersColor, useRouteMeta } from 'dumi';
import { GlobalLayout as ThemeGlobalLayout } from 'dumi-theme-antd-web3';

import SiteThemeProvider from '../SiteThemeProvider';

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [color] = usePrefersColor();
  const { locale } = useIntl();

  return (
    <ThemeGlobalLayout>
      <Web3ConfigProvider locale={locale === 'zh-CN' ? zh_CN : en_US}>
        <SiteThemeProvider themeMode={color || 'auto'}>
          <div className={pathname === '/' || pathname === '/index-cn' ? 'home' : ''}>{outlet}</div>
        </SiteThemeProvider>
      </Web3ConfigProvider>
    </ThemeGlobalLayout>
  );
};

export default GlobalLayout;
