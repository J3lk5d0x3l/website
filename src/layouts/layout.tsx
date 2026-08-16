import React from "react";
import "../tailwind.css";

// You can use next/head or react-helmet if SSR/SPA, but since this is static, just output direct head
export type LayoutProps = {
  title?: string;
  canonical?: string;
  children: React.ReactNode;
};
const siteTitle = "s3lk5d0x3l";

const Layout: React.FC<LayoutProps> = ({ title = siteTitle, canonical = "/", children }) => (
  <html lang="es">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="canonical" href={`https://vyrron.net${canonical}`} />
      <meta name="generator" content="s3lk5d0x3l React layout" />
      <title>{title}</title>
      <meta name="description" content="Solo una persona random en internet" />
      <meta name="keywords" content="s3lk5d0x3l" />
      <meta name="author" content="s3lk5d0x3l" />
      {/* Discord coloring etc */}
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a1a1a" />
      <meta name="theme-color" content="#FF6723" />
      <meta name="color-scheme" content="dark" />
      {/* Fancier SEO */}
      <meta property="og:title" content="s3lk5d0x3l" />
      <meta property="og:description" content="Solo una persona random en internet" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vyrron.net/" />
      <meta property="og:image" content="https://vyrron.net/fire_anim.png" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="s3lk5d0x3l" />
      <meta property="twitter:description" content="Solo una persona random en internet" />
      <meta property="twitter:image" content="https://vyrron.net/fire_anim.png" />
      <meta name="application-name" content="s3lk5d0x3l" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://vyrron.net/#person",
                name: "s3lk5d0x3l",
                url: "https://vyrron.net/",
                image: {
                  "@type": "ImageObject",
                  "@id": "https://vyrron.net#logo",
                  url: "https://vyrron.net/fire_anim.png",
                  caption: "s3lk5d0x3l Logo"
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://vyrron.net/#website",
                name: "s3lk5d0x3l",
                url: "https://vyrron.net/",
                description: "Solo una persona random en internet.",
                publisher: {
                  "@id": "https://vyrron.net/#person"
                },
              }
            ]
          })
        }}
      />

      {/* MUST NOT REMOVE */}
      <style id="tailwind-styles">/*tailwind*/</style>
    </head>
    <body className="font-sans">
      {children}
      {process.env.EXTRA_SCRIPTS && <div dangerouslySetInnerHTML={{ __html: process.env.EXTRA_SCRIPTS }} />}
    </body>
  </html>
);

export default Layout;
