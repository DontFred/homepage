"use client";

import Link from "next/link";
import React from "react";
import { ReactNode, useRef, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("");

  const welcome: ReactNode[] = [
    " _____              _   ______            _",
    "|  __ \\            | | |  ____|          | |",
    "| |  | | ___  _ __ | |_| |__ _ __ ___  __| |",
    "| |  | |/ _ \\| '_ \\| __|  __| '__/ _ \\/ _` |",
    "| |__| | (_) | | | | |_| |  | | |  __/ (_| |",
    "|_____/ \\___/|_| |_|\\__|_|  |_|  \\___|\\__,_|",
    " ",
    "Welcome to my homepage!",
    "I'm Frederik W. Grimm, an IT-Freelancer for Web & Backend Development, AI and Automation Solutions.",
    " ",
    "---------------------------------------------------------- ",
    " ",
    <div key="heading">
      {"  "}type or click{" "}
      <button
        onClick={() => {
          setInputValue("help");
          runCommand("help");
          inputRef.current?.focus();
        }}
        className="cursor-pointer"
      >
        <u>help</u>
      </button>{" "}
      to see what you could do.
    </div>,
    " ",
    <span key="legal-links" className="flex flex-row">
      <div key="imprint">
        {"  "}
        <u>
          <Link href="/imprint">Impressum | Imprint</Link>
        </u>{" "}
      </div>
      ⌁
      <div key="privacy-policy">
        {"  "}
        <u>
          <Link href="/privacy-policy">
            Datenschutzerklärung | Privacy Policy
          </Link>
        </u>{" "}
      </div>
      ⌁
      <div key="terms-and-conditions">
        {"  "}
        <u>
          <Link href="/terms-and-conditions">AGB | Terms and Conditions</Link>
        </u>{" "}
      </div>
    </span>,
    " ",
    "---------------------------------------------------------- ",
    " ",
    " ",
  ];

  const [displayedItems, setDisplayedItems] = useState<ReactNode[]>([
    ...welcome,
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const runCommand = async (raw: string) => {
    const input = raw.trim().toLowerCase();
    setInputValue("");
    switch (input) {
      case "":
        setDisplayedItems((items) => [
          ...items,
          <div className="text-green-500">
            visitor@dontfred
            <span className="text-foreground">:</span>
            <span className="text-purple-500 px-0.5">~</span>
            <span className="text-blue-500 px-0.5">$ </span>
            <span className="text-foreground">{input}</span>
          </div>,
        ]);
        return;
      case "help":
        setDisplayedItems((items) => [
          ...items,
          <div className="text-green-500">
            visitor@dontfred
            <span className="text-foreground">:</span>
            <span className="text-purple-500 px-0.5">~</span>
            <span className="text-blue-500 px-0.5">$ </span>
            <span className="text-foreground">{input}</span>
          </div>,
          "help       - Show this help message",
          "about      - About Frederik W. Grimm",
          "projects   - List some projects",
          "clear      - Clear the console",
          " ",
        ]);
        break;
      case "about":
        setDisplayedItems((items) => [
          ...items,
          <div className="text-green-500">
            visitor@dontfred
            <span className="text-foreground">:</span>
            <span className="text-purple-500 px-0.5">~</span>
            <span className="text-blue-500 px-0.5">$ </span>
            <span className="text-foreground">{input}</span>
          </div>,
          "I'm Frederik Grimm, a business-minded Full-Stack Developer and Automation Expert.",
          "My mission is to help your business scale efficiently. I do this by building custom, high-performance web applications and AI-powered workflows (using Next.js, Golang, & n8n) that automate your manual tasks and optimize your systems.",
          "As a Certified Software Project Manager (CSPM), I don't just write code—I deliver complete, organized, and impactful business solutions from start to finish.",
          <span>
            Ready to build a more efficient business?{" "}
            <Link className="underline" href="mailto:mail@fwgrimm.com">
              Contact me
            </Link>
            .
          </span>,
          " ",
        ]);
        break;
      case "projects":
        setDisplayedItems((items) => [
          ...items,
          <div className="text-green-500">
            visitor@dontfred
            <span className="text-foreground">:</span>
            <span className="text-purple-500 px-0.5">~</span>
            <span className="text-blue-500 px-0.5">$ </span>
            <span className="text-foreground">{input}</span>
          </div>,
          "Here are some of my projects:",
          <span>
            - Website: A website for a client -{" "}
            <Link
              className="underline"
              href="https://silverweb-web.vercel.app/"
            >
              Visit Website
            </Link>
          </span>,
          <span>
            - Open-Source: I contribute to various open-source projects, such
            like{" "}
            <Link
              className="underline"
              href="https://github.com/https://github.com/Dokploy/dokploy"
            >
              Dokploy
            </Link>
            .
          </span>,
          <span>
            - Open-Source: I automated a tooling that's emulates the iPod
            Accessory Protocol on an RaspberryPi Zero for Bluetooth connectivity
            -{" "}
            <Link
              className="underline"
              href="https://github.com/DontFred/pipod"
            >
              PiPod
            </Link>
          </span>,
          "",
          <span>
            See more on my{" "}
            <Link className="underline" href="https://github.com/DontFred">
              GitHub
            </Link>
            .
          </span>,
          " ",
        ]);
        break; // fixed missing break
      case "clear":
        setDisplayedItems([...welcome]);
        break;
      default:
        setDisplayedItems((items) => [
          ...items,
          <div className="text-green-500">
            visitor@dontfred
            <span className="text-foreground">:</span>
            <span className="text-purple-500 px-0.5">~</span>
            <span className="text-blue-500 px-0.5">$ </span>
            <span className="text-foreground">{input}</span>
          </div>,
          `Command not found: ${input}`,
          "Type 'help' to see the list of available commands.",
          " ",
        ]);
        break;
    }
  };

  return (
    <div
      className="font-mono font-bold absolute inset-0"
      onClick={() => inputRef.current?.focus()}
    >
      <ul className="whitespace-pre-wrap leading-tight text-md p-8">
        {displayedItems.map((line, index) => (
          <li key={index} className="flex items-center">
            {line}
          </li>
        ))}
        <li className="flex w-full items-center">
          <div className="text-green-500">
            visitor@dontfred<span className="text-foreground">:</span>
            <span className="text-purple-500 px-0.5">~</span>
            <span className="text-blue-500 px-0.5">$ </span>
          </div>
          <input
            type="text"
            className="bg-transparent focus:outline-none w-3/4 caret-transparent"
            autoFocus
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                runCommand(e.currentTarget.value);
              }
            }}
          />
          <div
            className="bg-gray-400 w-2 -translate-x-[calc(120ch-2px)] h-4"
            style={{
              marginLeft: `calc(${inputValue.length}ch)`,
            }}
          />
        </li>
      </ul>
    </div>
  );
}
