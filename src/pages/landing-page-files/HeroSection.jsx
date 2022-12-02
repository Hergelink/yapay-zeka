import React from 'react';
import {Link} from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className='section hero'>
      <div class='gradient-wrapper'>
        <div class='gradient purple'></div>
        <div class='gradient orange'></div>
        <div class='gradient yellow'></div>
      </div>

      <div class='headline'>
        <h1>Gradient Gaussian blur background</h1>
        <h3>
          Hello there, i'm keyi. This is a Headline hero example using gradient
          Gaussian blur background.
        </h3>
        <Link to='/dashboard'>Start Using</Link>
      </div>
    </section>
  );
}
