"use client";
import React, { useState } from 'react';
import { AiOutlineGithub, AiFillInstagram } from 'react-icons/ai';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github.css';


export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSend = () => {
    // Call your function here with the input text
    // For example:
    // const result = yourFunction(input);
    setOutput("const dwfw = yourFunction(input);");
  };

  return (
    <div className="min-h-screen bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center">
      <nav className="absolute top-0 w-full flex justify-between p-5">
      <div className="flex items-center space-x-2 justify-between">
    <a href="YOUR_INSTAGRAM_LINK" target="_blank">
      <AiFillInstagram size={24} />
     
    </a>
    <span className="text-white">Instagram</span>
  </div>
        <div className="flex items-center space-x-2 ">
          <AiOutlineGithub size={24} />
          <a href="YOUR_GITHUB_LINK" target="_blank">Source Code</a>
        </div>
      </nav>
      <main className="flex flex-col items-center space-y-4">
      <div className="w-full min-w-mid p-4 bg-gray-700 rounded-lg">
  <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ background: 'rgba(0, 0, 0, 0)' }}>
    {output}
  </SyntaxHighlighter>
</div>
        <div className="w-full max-w-xl flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 rounded-lg"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 rounded-lg"
          >
            Send
          </button>
        </div>
      </main>
      <footer className="absolute bottom-0 w-full flex justify-center p-5">
        Made with love by PRANAV K DILEEP
        <a href="YOUR_INSTAGRAM_LINK" target="_blank">
          <AiFillInstagram size={24} />
        </a>
      </footer>
    </div>
  );
}
