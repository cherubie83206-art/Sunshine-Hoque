/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId } from './data/portalData';
import { HealthcareDnaScreen } from './screens/HealthcareDnaScreen';
import { HomeScreen } from './screens/HomeScreen';
import { AgricultureScreen } from './screens/AgricultureScreen';
import { ResearchHubsScreen } from './screens/ResearchHubsScreen';
import { RoadmapScreen } from './screens/RoadmapScreen';
import {
  GenomicLedgerModal,
  ApiTokenModal,
  BioEthicsModal,
  SearchPortalModal,
} from './components/PortalModals';

const NAV_ITEMS: { id: ScreenId; label: string; labelBn: string }[] = [
  { id: 'home', label: 'Home', labelBn: 'হোম' },
  {
    id: 'agriculture-and-environment',
    label: 'Agriculture & Environment',
    labelBn: 'কৃষি ও পরিবেশ',
  },
  { id: 'healthcare-and-dna', label: 'Healthcare & DNA', labelBn: 'স্বাস্থ্যসেবা ও ডিএনএ' },
  { id: 'research-hubs', label: 'Research Hubs', labelBn: 'গবেষণা কেন্দ্র' },
  {
    id: 'roadmap-and-get-involved',
    label: 'Roadmap & Get Involved',
    labelBn: 'রোডম্যাপ ও যুক্ত হোন',
  },
];

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('healthcare-and-dna');
  const [lang, setLang] = useState<'EN' | 'BN'>('EN');
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);
  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [isEthicsModalOpen, setIsEthicsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [bulletinEmail, setBulletinEmail] = useState('');
  const [bulletinSubscribed, setBulletinSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bulletinEmail.trim()) return;
    setBulletinSubscribed(true);
    setBulletinEmail('');
  };

  const handleNavigate = (screen: ScreenId) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-body-md text-on-surface antialiased">
      {/* Fixed Top Header matching HTML */}
      <header className="fixed top-0 left-0 w-full z-40 bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-gutter">
          <div
            onClick={() => handleNavigate('healthcare-and-dna')}
            className="flex items-center gap-space-md cursor-pointer"
          >
            <img
              alt="BioTech BD Logo"
              referrerPolicy="no-referrer"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1VAo35n3519_BNs1Z4xxfffi2mZzCGIIciNZ_QsGIn7vx0m2cW3tneviA1E8yWDp42_upi3HzN4gEdsFXr6Ynh2RsjfcoAvhH4AN-fWLEi0Y3VcGI6xR7fA4vUQUfMWGE7Vg9xhABKvEvB7Lywno7vxOwzdmVaoWT6yWwhcJGNH9rIJiwExOXdZwx1fh4EOgn9W1Y6p3XXFkz31brLW772Ub5jgA6EpQTODyre5iNSC3ts3_-nCdrj9xbU"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">
                {lang === 'EN' ? 'BioTech Bangladesh' : 'বায়োটেক বাংলাদেশ'}
              </span>
              <span className="font-label-code text-label-code text-secondary tracking-widest uppercase">
                {lang === 'EN'
                  ? 'National Genomic & Agro-Tech Portal'
                  : 'জাতীয় জিনোমিক ও এগ্রো-টেক পোর্টাল'}
              </span>
            </div>
            <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              {lang === 'EN' ? 'National Initiatives' : 'জাতীয় উদ্যোগ'}
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-space-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    isActive
                      ? 'px-3 py-2 transition-colors bg-primary-container text-on-primary-container font-headline-sm rounded-lg cursor-pointer text-left'
                      : 'px-3 py-2 rounded-lg font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer text-left'
                  }
                >
                  {lang === 'EN' ? item.label : item.labelBn}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-space-md">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search portal"
              className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
            <div className="hidden sm:flex items-center bg-surface-container-high rounded-full p-0.5">
              <button
                type="button"
                onClick={() => setLang('EN')}
                className={`px-2 py-0.5 rounded-full font-label-code text-label-code transition-all cursor-pointer ${
                  lang === 'EN'
                    ? 'bg-surface-container-lowest text-primary shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('BN')}
                className={`px-2 py-0.5 rounded-full font-label-code text-label-code transition-all cursor-pointer ${
                  lang === 'BN'
                    ? 'bg-surface-container-lowest text-primary shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                BN
              </button>
            </div>
            <div
              onClick={() => setIsApiModalOpen(true)}
              title="Researcher Credentials & API Token"
              className="flex items-center gap-2 pl-space-sm cursor-pointer"
            >
              <img
                alt="Profile"
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-surface-variant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAppPGGReWjih1IXZIXdVDnpwpOwD9vEH7R1dNEIUvoI3ZlR9x5hfcMgtrGMs983NfFIX39OCre4cT-5hEpN_FGhEHpj_CuS4fd1btNw9D5kW9cWOI-DnLgGbu2lRpi7m35l4Wf_3-QHEFo4bB7NAeEQih366q_WGTXAX7xpbDAmesIShu6nhnpU-EtO18361UQpvltl3uQ9SZSY4FSOdPxUP2ZGUJ2OvAMN5Rfp8shU0VbBq_BzA8I"
              />
            </div>
          </div>
        </div>

        {/* Mobile Secondary Screen Switcher */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto px-margin-mobile py-2 bg-surface-container-low border-t border-outline-variant/20">
          {NAV_ITEMS.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-1 rounded-lg font-label-code text-label-code whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-on-surface-variant'
                }`}
              >
                {lang === 'EN' ? item.label : item.labelBn}
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full pt-28 lg:pt-20 bg-surface flex-1">
        {activeScreen === 'healthcare-and-dna' && (
          <HealthcareDnaScreen
            onOpenApiModal={() => setIsApiModalOpen(true)}
            onOpenEthicsModal={() => setIsEthicsModalOpen(true)}
            onOpenLedgerModal={() => setIsLedgerOpen(true)}
          />
        )}
        {activeScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenLedgerModal={() => setIsLedgerOpen(true)}
            onOpenApiModal={() => setIsApiModalOpen(true)}
          />
        )}
        {activeScreen === 'agriculture-and-environment' && <AgricultureScreen />}
        {activeScreen === 'research-hubs' && (
          <ResearchHubsScreen onOpenApiModal={() => setIsApiModalOpen(true)} />
        )}
        {activeScreen === 'roadmap-and-get-involved' && <RoadmapScreen />}
      </main>

      {/* Footer matching HTML */}
      <footer className="w-full bg-surface-container-low mt-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter mb-12">
            <div className="lg:col-span-2 flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <img
                  alt="BioTech BD Logo"
                  referrerPolicy="no-referrer"
                  className="h-8 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VAo35n3519_BNs1Z4xxfffi2mZzCGIIciNZ_QsGIn7vx0m2cW3tneviA1E8yWDp42_upi3HzN4gEdsFXr6Ynh2RsjfcoAvhH4AN-fWLEi0Y3VcGI6xR7fA4vUQUfMWGE7Vg9xhABKvEvB7Lywno7vxOwzdmVaoWT6yWwhcJGNH9rIJiwExOXdZwx1fh4EOgn9W1Y6p3XXFkz31brLW772Ub5jgA6EpQTODyre5iNSC3ts3_-nCdrj9xbU"
                />
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  BioTech Bangladesh
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                The centralized national portal unifying biotechnology research, genome sequencing directives, deltaic food security programs, and public health genetics across the People's Republic of Bangladesh.
              </p>
              <div className="flex items-center gap-space-sm mt-space-sm">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                  Accredited by:
                </span>
                <span className="px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-code text-label-code">
                  MoST / BARC / NIB
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-space-sm">
              <span className="font-title-lg text-title-lg text-primary font-semibold mb-2">
                National Hubs
              </span>
              <button
                type="button"
                onClick={() => handleNavigate('research-hubs')}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                National Institute of Biotechnology (NIB)
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('agriculture-and-environment')}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                BRRI Plant Genomics Division
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('healthcare-and-dna')}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Child Health Research Foundation (CHRF)
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('agriculture-and-environment')}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                BINA Nuclear Bio-Agriculture
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('roadmap-and-get-involved')}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Ministry of Science and Technology
              </button>
            </div>

            <div className="flex flex-col gap-space-sm">
              <span className="font-title-lg text-title-lg text-primary font-semibold mb-2">
                Open Resources
              </span>
              <button
                type="button"
                onClick={() => setIsLedgerOpen(true)}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                National Genomic Repository
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('agriculture-and-environment')}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Delta Saline Crop Data Archive
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('healthcare-and-dna')}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Pathogen Genomic Surveillance
              </button>
              <button
                type="button"
                onClick={() => setIsEthicsModalOpen(true)}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                National Biosafety Clearing House
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('roadmap-and-get-involved')}
                className="text-left font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Scientific Protocols &amp; Grants
              </button>
            </div>

            <div className="flex flex-col gap-space-md">
              <span className="font-title-lg text-title-lg text-primary font-semibold">
                Scientific Bulletins
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Subscribe for peer-reviewed disclosures, clinical trials, and climate-resilient genomic milestones.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  className="w-full px-3 py-2 bg-surface-container-lowest rounded text-on-surface font-body-sm text-body-sm outline-none shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
                  placeholder="academic.director@edu.bd"
                  type="email"
                  value={bulletinEmail}
                  onChange={(e) => setBulletinEmail(e.target.value)}
                />
                <button
                  className="w-full px-4 py-2 bg-primary text-on-primary font-headline-sm text-sm rounded hover:bg-primary-container transition-colors cursor-pointer"
                  type="submit"
                >
                  {bulletinSubscribed ? '✓ Subscribed to Dispatch' : 'Subscribe to Dispatch'}
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-space-md bg-surface-container-high/40 px-space-lg py-space-md rounded-lg">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              © 2025 BioTech Bangladesh • Government of the People's Republic of Bangladesh. All rights reserved.
            </span>
            <div className="flex items-center gap-space-lg">
              <button
                type="button"
                onClick={() => setIsEthicsModalOpen(true)}
                className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Bio-Ethics Charter
              </button>
              <button
                type="button"
                onClick={() => setIsLedgerOpen(true)}
                className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Data Governance
              </button>
              <button
                type="button"
                onClick={() => setIsApiModalOpen(true)}
                className="font-label-code text-label-code text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Security &amp; Compliance
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Modals */}
      <GenomicLedgerModal isOpen={isLedgerOpen} onClose={() => setIsLedgerOpen(false)} />
      <ApiTokenModal isOpen={isApiModalOpen} onClose={() => setIsApiModalOpen(false)} />
      <BioEthicsModal isOpen={isEthicsModalOpen} onClose={() => setIsEthicsModalOpen(false)} />
      <SearchPortalModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
