// These styles apply to every route in the application
import localFont from '@next/font/local';
import './global.css';
const myFont = localFont({ src: './Inter.var.woff2' });

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={myFont.className}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <head>
        <title>CAT</title>
      </head>


      <body>
        {children}
      </body>
    </html >
  );
}