import { Hono } from "hono";
import {
  Script,
  Link,
  ViteClient,
  ReactRefresh,
} from "vite-ssr-components/react";
import { renderToString } from "react-dom/server";
import App from "./App";

const app = new Hono();

app.get("/", (c) => {
  const appHtml = renderToString(<App />);

  return c.html(
    renderToString(
      <html>
        <head>
          <title>CV - Jonathan Peña</title>
          <link rel="icon" type="image/svg+xml" href="/pdf.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <ReactRefresh />
          <ViteClient />
          <Script src="/src/main.tsx" />
          <Link href="/src/index.css" rel="stylesheet" />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: appHtml }} />
        </body>
      </html>
    )
  );
});

export default app;
