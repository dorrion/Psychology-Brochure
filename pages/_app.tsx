import '../styles/globals.css';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  // GA 설정 시작
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  // GA 설정 끝
  return (
    <ThemeProvider attribute="class">
      {/* GA 설정 시작 */}
      <Script
        // 해당 페이지의 상호작용 이후에 가져오고 실행되는 스크립트
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* 뷰저블 코드 */}
      <Script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w, d, a){
                w.__beusablerumclient__ = {
                  load : function(src){
                    var b = d.createElement("script");
                    b.src = src; b.async=true; b.type = "text/javascript";
                    d.getElementsByTagName("head")[0].appendChild(b);
                  }
                };w.__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
              })(window, document, "//rum.beusable.net/load/b230218e164817u247");
            `,
        }}
      />
      {/* GA 설정 끝 */}
      <Component {...pageProps} />
      {/* Vercel Analytics */}
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
