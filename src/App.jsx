import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-amber-300/40 selection:text-amber-100">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Contact />
      </main>
    </div>
  );
}
