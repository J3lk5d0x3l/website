import React from "react";
import Layout from "../layouts/layout";

const INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1536153235113640047&permissions=8&scope=bot";

const Bot = () => (
  <Layout
    title="VIRRON — All-in-one Discord Bot"
    description="Tickets, Automod, Music, Levels and more. Protect and manage your Discord server with VIRRON."
    image="https://vyrron.net/vyrron-og.png"
    imageWidth={1200}
    imageHeight={630}
    siteName="VIRRON"
    card="summary_large_image"
    themeColor="#5865F2"
    canonical="/bot"
  >
    <div className="min-h-dvh w-screen flex items-center justify-center bg-background text-white">
      <main className="flex flex-col items-center rounded-3xl bg-card p-6 shadow-md gap-4 max-w-md w-full mx-4 text-center">
        <img src="/vyrron-bot.png" alt="VIRRON" width={96} height={96} className="rounded-2xl" />
        <h1 className="text-3xl font-bold">VIRRON</h1>
        <p className="text-text-secondary">
          The all-in-one bot for your Discord server: tickets, automod, music, levels and more.
        </p>
        <a
          href={INVITE_URL}
          className="rounded-xl bg-button px-6 h-10 flex items-center hover:bg-button-hover font-semibold transition-all"
        >
          Invite Bot
        </a>
      </main>
    </div>
  </Layout>
);

export default Bot;
