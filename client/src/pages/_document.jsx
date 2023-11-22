import { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <html lang='en'>
        <Head />
        <body>
            <Main />
            <NextScript />
            <div id="photo-picker-element">

            </div>
        </body>

    </html>
  )
}

