import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

function ShootingStar() {
  // Generate random positions for each star
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const animationDelay = Math.random() * 3; // Random delay for each star

  return (
    <div
      className="shooting-star"
      style={{
        top: `${top}vh`,
        left: `${left}vw`,
        animationDelay: `${animationDelay}s`, // Apply random delay
      }}
    ></div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Create shooting stars container */}
      <div className="shooting-stars-container">
        {/* Render multiple shooting stars using the ShootingStar component */}
        <ShootingStar />
        <ShootingStar />
        <ShootingStar />
        <ShootingStar />
        <ShootingStar />
        {/* Add as many ShootingStar components as you want */}
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 