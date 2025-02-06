import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for client-side navigation

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>0xceased</title>
        <meta name="description" content="About 0xceased" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </Head>

      <main className="main-content">
        <div className="centered-content">
          <div className="about-section">
            <h1 className="about-title">
              <span className="highlight">About Me</span>
            </h1>
            
            <div className="about-content">
              <p>
                
                {/* Add your personal description here */}
              </p>
              
              <div className="skills-section">
                <h2></h2>
                <ul>
                  <li>Why you wanna know me 🤨</li>
                  <li>But really heres some stuff about me</li>
                  <li>Why you still reading 🤨</li>
                  {/* Add more skills */}
                </ul>
              </div>
            </div>

            {/* Navigation */}
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about"></Link>
              <a 
                href="https://www.instagram.com/0xceased/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 