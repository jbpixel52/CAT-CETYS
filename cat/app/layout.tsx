// These styles apply to every route in the application
"use client";
import localFont from '@next/font/local';
import { SessionProvider } from 'next-auth/react';
import './global.css';
const myFont = localFont({ src: './Inter.var.woff2' });

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={myFont.className}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <head>
        <title>Hello World🌎</title>
      </head>


      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html >
  );
}