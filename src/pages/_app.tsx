import type { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/tailwind.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <div className="google-analytics">
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-JBCW123JRC`}
                    strategy="afterInteractive"
                />

                <Script id="google-analytics" strategy="afterInteractive">
                    {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-JBCW123JRC');
            `}
                </Script>
            </div>

            <Component {...pageProps} />
        </div>
    );
}

export default App;
