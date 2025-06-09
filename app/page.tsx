import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-green-400 mb-4">
        Welcome to Next.js + Tailwind CSS + TypeScript Boilerplate!
      </h1>
      <p className="text-lg text-gray-300 mb-8">
        Get started by editing{" "}
        <code className="bg-gray-800 px-2 py-1 rounded">app/page.tsx</code>
      </p>
      <p className="text-lg text-gray-300 mb-8">
        Created by{" "}
        <a
          href="https://github.com/nottimnik"
          target="_blank"
          className="underline hover:text-green-400 transition"
        >
          timnik
        </a>
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/nottimnik/nextjs-tailwindcss-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700 transition"
        >
          Github Repository
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 transition"
        >
          Next.js Docs
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
        >
          Tailwind CSS Docs
        </a>
        <a
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 transition"
        >
          TypeScript Docs
        </a>
      </div>
    </main>
  );
}
