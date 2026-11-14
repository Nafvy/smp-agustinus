/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IdentitySection } from './components/IdentitySection';
import { Navbar } from './components/Navbar';
import { StatisticsSection } from './components/StatisticsSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <IdentitySection />
          <StatisticsSection />
          <FacilitiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
