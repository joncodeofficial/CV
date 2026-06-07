import { Hono } from 'hono';
import { Script, Link, ViteClient, ReactRefresh } from 'vite-ssr-components/react';
import { renderToString } from 'react-dom/server';
import App from './App';

const app = new Hono();

app.get('/', (c) => {
  const appHtml = renderToString(<App />);

  return c.html(
    renderToString(
      <html>
        <head>
          <title>CV - Jonathan Peña</title>
          <link rel='icon' type='image/svg+xml' href='/pdf.svg' />
          <link rel='preload' as='font' type='font/woff2' href='/fonts/poppins-400.woff2' crossOrigin='anonymous' />
          <link rel='preload' as='font' type='font/woff2' href='/fonts/poppins-700.woff2' crossOrigin='anonymous' />
          <ReactRefresh />
          <ViteClient />
          <Script src='/src/main.tsx' />
          <Link href='/src/index.css' rel='stylesheet' />
        </head>
        <body>
          <div id='root' dangerouslySetInnerHTML={{ __html: appHtml }} />
        </body>
      </html>
    )
  );
});

export default app;
