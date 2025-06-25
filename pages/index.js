import { useRouter } from 'next/router';
import Script from 'next/script';

export default function Home() {
  const router = useRouter();

  const handleClick = (role) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'select_role', {
        role: role,
      });
    }
    router.push('/catalog');
  };

  return (
    <>
      {/* Google Analytics script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TPH1VDFXZW"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TPH1VDFXZW', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>คุณคือใคร?</h1>
        <div style={{ marginTop: '1.5rem' }}>
          <button onClick={() => handleClick('ช่าง')} style={{ margin: '0 0.5rem' }}>ช่าง</button>
          <button onClick={() => handleClick('เจ้าของกิจการ')} style={{ margin: '0 0.5rem' }}>เจ้าของกิจการ</button>
          <button onClick={() => handleClick('ผู้สนใจทั่วไป')} style={{ margin: '0 0.5rem' }}>ผู้สนใจทั่วไป</button>
        </div>
      </div>
    </>
  );
}
