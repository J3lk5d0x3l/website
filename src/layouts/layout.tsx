import React from "react";
import "../tailwind.css";

// You can use next/head or react-helmet if SSR/SPA, but since this is static, just output direct head
export type LayoutProps = {
  title?: string;
  description?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  siteName?: string;
  card?: "summary" | "summary_large_image";
  themeColor?: string;
  twitterCreator?: string;
  canonical?: string;
  componentEmbed?: object;
  children: React.ReactNode;
};
const siteTitle = "ry8h";
const siteDescription = "@ Founder Of Vyrron, Discord Bot Developer.";
const siteImage = "https://vyrron.net/avatar.png";

const Layout: React.FC<LayoutProps> = ({
  title = siteTitle,
  description = siteDescription,
  image = siteImage,
  imageWidth = 512,
  imageHeight = 512,
  siteName = "ry8h",
  card = "summary",
  themeColor = "#FF7E2D",
  twitterCreator = "j3lk5d0x3l",
  canonical = "/",
  componentEmbed,
  children,
}) => (
  <html lang="es">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="canonical" href={`https://vyrron.net${canonical}`} />
      <meta name="generator" content="ry8h React layout" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="ry8h,VIRRON" />
      <meta name="author" content="ry8h" />
      {/* Discord coloring etc */}
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a1a1a" />
      <meta name="theme-color" content={themeColor} />
      <meta name="color-scheme" content="dark" />
      {/* Fancier SEO */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://vyrron.net${canonical}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="twitter:card" content={card} />
      <meta property="twitter:creator" content={twitterCreator} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="application-name" content="ry8h" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://vyrron.net/#person",
                name: "ry8h",
                url: "https://vyrron.net/",
                sameAs: [
                  "https://github.com/J3lk5d0x3l",
                  "https://x.com/j3lk5d0x3l",
                  "https://discord.vyrron.net",
                ],
                image: {
                  "@type": "ImageObject",
                  "@id": "https://vyrron.net#logo",
                  url: "https://vyrron.net/avatar.png",
                  caption: "ry8h"
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://vyrron.net/#website",
                name: "ry8h",
                url: "https://vyrron.net/",
                description: "@ Founder Of Vyrron, Discord Bot Developer.",
                publisher: {
                  "@id": "https://vyrron.net/#person"
                },
              }
            ]
          })
        }}
      />
      <script
        id="discord:component-embed"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "component": componentEmbed ?? {
              "type": 17,
              "accent_color": 0xFF7E2D,
              "components": [
                {
                  "type": 9,
                  "components": [
                    {
                      "type": 10,
                      "content": `## [ry8h](https://vyrron.net)\n@ Founder Of Vyrron, Discord Bot Developer.\nMis proyectos incluyen [VIRRON](https://vyrron.net/bot) y más!`,
                    }
                  ],
                  "accessory": {
                    "type": 11,
                    "media": {
                      "url": "https://vyrron.net/avatar.png",
                    }
                  }
                },
                {
                  "type": 1,
                  "components": [
                    {
                      "type": 2,
                      "label": "View Website",
                      "style": 5,
                      "url": "https://vyrron.net",
                      "emoji": {
                        "name": "vyrron",
                        "id": "1550509597712977930",
                        "animated": false
                      }
                    },
                    {
                      "type": 2,
                      "label": "GitHub",
                      "style": 5,
                      "url": "https://github.com/J3lk5d0x3l",
                      "emoji": {
                        "name": "github",
                        "id": "1119818837542576208",
                        "animated": false
                      }
                    },
                    {
                      "type": 2,
                      "label": "Discord Server",
                      "style": 5,
                      "url": "https://discord.vyrron.net",
                    },
                  ]
                }
              ]
            }
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
