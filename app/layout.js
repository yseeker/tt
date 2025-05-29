import Header from './parts/Header'
import Footer from './parts/Footer'
import './sass/index.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: 'AIデータ生成基盤 | Anomaly Generator',
  keywords: "不良品画像生成AI,不良品画像生成,不良品データ生成,不良画像生成,生成AI,特許,外観検査,データ生成",
  description: '不良品画像生成AIを活用した多様な学習データ、網羅的な評価データにより、外観検査システムの早期立ち上げと精度向上を実現します',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-77G2BY9JJF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-77G2BY9JJF');
        `,
          }}
        />
      </head>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
