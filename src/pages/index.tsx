import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>0xceased</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </Head>

      {/* Social Links Sidebar */}
      <div className="social-sidebar">
        <div className="follow-text">Follow Me</div>
        <div className="social-links">
          <a href="#instagram" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#discord" aria-label="Discord">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="centered-content">
          <h2 className="subtitle">
            <span className="highlight">0xceased</span>
          </h2>
          
          <div className="image-container">
            <div className="profile-image">
              <Image 
                src="/profile-image.png" 
                alt="Profile" 
                width={400} 
                height={400}
                className="glow-effect"
              />
            </div>
          </div>

          {/* Navigation links */}
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About Me</Link>
            <a 
              href="https://www.instagram.com/0xceased/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 