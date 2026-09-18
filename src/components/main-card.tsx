import React from "react";
import DiscordIcon from "./icons/discord-icon.svg";
import ExternalIcon from "./icons/external-icon.svg";
import GitHubIcon from "./icons/github-icon.svg";
import SocialDropdown, { DropdownLink } from "./social-dropdown";
import LinkButton from "./link-button";
import MailIcon from "./icons/mail-icon.svg";
import TwitterIcon from "./icons/twitter-icon.svg";
import GlobeIcon from "./icons/globe-icon.svg";
import { minify } from "../tools/minify.macro" with { type: "macro" };

export const MainCard: React.FC = () => (
  <main
    id="main-card"
    className="z-10 flex flex-col items-center rounded-3xl bg-card p-4 shadow-md md:flex-row md:p-6 max-lg:pt-6 gap-5"
    itemScope itemType="https://schema.org/Person"
  >
      <picture className="h-32 w-32 rounded-2xl bg-placeholder" id="avatar-container">
        <img
          fetchPriority="high"
          itemProp="image"
          src="/avatar.png"
          alt="ry8h"
          height={128}
          width={128}
          title="ry8h"
          style={{ animation: "fadeInWhite 0.5s 0.5s forwards", color: "transparent" }}
          className="rounded-2xl"
        />
        <style>{`@keyframes fadeInWhite{to{color:white}}`}</style>
      </picture>
    <div className="flex flex-col gap-2 md:mr-2">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold leading-9" itemProp="name">ry8h</h1>
        <p className="text-text-secondary" itemProp="description">@ Founder Of Vyrron</p>
        <p className="text-text-secondary-2 text-sm">Discord Bot Developer.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <ul className="flex flex-row gap-2 w-full *:flex-1 list-none">
          <LinkButton
            url="https://github.com/J3lk5d0x3l"
            text="GitHub"
            Icon={GitHubIcon}
            itemProp="sameAs"
          />
          <LinkButton
            url="https://discord.vyrron.net"
            text="Discord Server"
            Icon={DiscordIcon}
            itemProp="sameAs"
          />
          <LinkButton
            url="mailto:v3lk5d0x3l@vyrron.net"
            text="Email"
            Icon={MailIcon}
            itemProp="sameAs"
          />
        </ul>
        <SocialDropdown>
          <DropdownLink
            key="dropdown-github"
            url="https://github.com/J3lk5d0x3l"
            text="GitHub"
            Icon={GitHubIcon}
          />
          <DropdownLink
            key="dropdown-discord"
            url="https://discord.vyrron.net"
            text="Discord Server"
            Icon={DiscordIcon}
          />
          <DropdownLink
            key="dropdown-email"
            url="mailto:v3lk5d0x3l@vyrron.net"
            text="Email"
            Icon={MailIcon}
          />
          <DropdownLink
            key="dropdown-twitter"
            url="https://x.com/j3lk5d0x3l"
            text="Twitter (X)"
            Icon={TwitterIcon}
          />
          <li key="dropdown-separator" className="py-1"><hr className="border-dropdown-hover border-t" /></li>
          <DropdownLink
            key="dropdown-website"
            url="https://vyrron.net"
            text="This Website"
            Icon={GlobeIcon}
          />
        </SocialDropdown>
      </div>
    </div>
  </main>
);

export default MainCard;
