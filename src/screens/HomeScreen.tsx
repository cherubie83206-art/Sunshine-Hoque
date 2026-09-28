import React from 'react';
import { ScreenId } from '../data/portalData';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenLedgerModal: () => void;
  onOpenApiModal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenLedgerModal,
  onOpenApiModal,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Top Protocol Breadcrumb & Status Pill */}
      <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-wider">
              INITIATIVE PROTOCOL // 01
            </span>
            <span className="text-outline-variant font-label-code text-label-code">/</span>
            <span className="font-label-code text-label-code text-secondary font-medium">
              MoST · NIB · BARC · DGHS NATIONAL COMMAND
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-label-code text-label-code text-on-surface uppercase tracking-widest font-semibold">
                Sovereign Bio-Grid: 8 Divisions Online
              </span>
            </div>
            <div className="h-4 w-px bg-outline-variant hidden sm:block"></div>
            <span className="font-label-code text-label-code text-on-surface-variant hidden sm:inline">
              Delta Bio-Vision 2030
            </span>
          </div>
        </div>
      </div>

      {/* Primary Hero Asymmetric Mosaic */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-4 pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          <div className="lg:col-span-8 flex flex-col justify-between bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary w-fit">
                <span className="material-symbols-outlined text-base text-secondary">hub</span>
                <span className="font-label-code text-label-code uppercase tracking-wider font-semibold">
                  Centralized National Bio-Intelligence
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight max-w-2xl">
                Engineering Deltaic Resilience Through Genomics &amp; Bio-Sovereignty
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Unifying Bangladesh’s molecular geneticists, agricultural breeders, and clinical surveillance networks under a single open-science infrastructure from the Sundarbans coast to the Haor wetlands.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('healthcare-and-dna')}
                  className="px-5 py-3 rounded-lg bg-primary text-on-primary font-headline-sm text-sm hover:bg-primary-container transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">biotech</span>
                  Explore Healthcare &amp; DNA
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('agriculture-and-environment')}
                  className="px-5 py-3 rounded-lg bg-surface-container-high text-primary font-headline-sm text-sm hover:bg-surface-container-highest transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">eco</span>
                  Agro-Genomic Programs
                </button>
              </div>
            </div>
            <div className="mt-8 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-gutter bg-surface-container-low/70 p-6 rounded-lg">
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Genomes Archived
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  118,400+
                </span>
                <span className="font-label-code text-label-code text-secondary block mt-0.5">
                  Pathogen, Crop &amp; Human
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Saline-Tolerant Acreage
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  1.42M Ha
                </span>
                <span className="font-label-code text-label-code text-secondary block mt-0.5">
                  Southern Delta Belt
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Accredited BSL Labs
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  28 Nodes
                </span>
                <span className="font-label-code text-label-code text-tertiary-container block mt-0.5">
                  BSL-2+ &amp; BSL-3 Active
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Bio-Economy Impact
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  $4.8B
                </span>
                <span className="font-label-code text-label-code text-primary-container block mt-0.5">
                  Import substitution
                </span>
              </div>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="lg:col-span-4 relative rounded-xl overflow-hidden shadow-sm flex flex-col justify-end min-h-[360px] bg-primary">
            <img
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 hover:opacity-50 transition-opacity duration-500"
              alt="BioTech Bangladesh National Genomic Discovery Center"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlF5g7MbPuAJHmtoam9wjEfQx2NKRm2awxKIvtE3XqjuHuJPTciStt71OPmqIrocxksNsxkMpemaZPBky8J0FVWh0woTU-UCs4T0gW3vI5rX7q7f3GJX3mKp18WRKMX0BpT52fO0oZG_LdwZbMpJtlTJTvKyjUdhL0-2yKO25t78jE-P6588F1h1YJa5JOZMB4cPzLPkK7yRLQ55ng9b1n5_8kZrrQ5uNsFdlYfmbWUPdIXSxPOku"
            />
            <div className="relative z-10 p-8 bg-gradient-to-t from-primary via-primary/85 to-transparent flex flex-col gap-3">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary-container">
                Sovereign Data Core
              </span>
              <h2 className="font-title-lg text-title-lg text-on-primary">
                National Genomic Repository (NGR-BD)
              </h2>
              <p className="font-body-sm text-body-sm text-surface-variant">
                Direct high-speed fiber link connecting Savar NIB Supercomputing Cluster with 64 District Civil Surgeon surveillance terminals.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={onOpenLedgerModal}
                  className="px-3 py-1.5 rounded bg-secondary-fixed text-primary font-label-code text-label-code font-bold cursor-pointer hover:bg-secondary-fixed-dim transition-colors"
                >
                  Inspect Live Ledger
                </button>
                <button
                  type="button"
                  onClick={onOpenApiModal}
                  className="px-3 py-1.5 rounded bg-surface-container-highest/20 text-on-primary font-label-code text-label-code cursor-pointer hover:bg-surface-container-highest/30 transition-colors"
                >
                  Request API Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Strategic Pillars Directory */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-secondary mb-2">
            <span className="material-symbols-outlined text-lg">layers</span>
            <span className="font-label-badge text-label-badge uppercase tracking-widest">
              National Architecture
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
            Four Pillars of Bangladesh Bio-Innovation
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Select a national directive below to inspect live genomic feeds, clinical trials, and agricultural cultivar releases:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
          {/* Pillar 1: Healthcare & DNA */}
          <div
            onClick={() => onNavigate('healthcare-and-dna')}
            className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">biotech</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-widest">
                  Protocol // 03
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Healthcare, Vaccines &amp; DNA Research
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Real-time Whole-Genome Sequencing for Dengue, Nipah, and AMR superbugs paired with sovereign mRNA vaccine and insulin synthesis.
                </p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant">
                  Active Isolates: 42,890+
                </span>
                <span className="font-label-code text-label-code text-secondary font-bold">
                  &lt; 36 Hrs Turnaround
                </span>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between">
              <span className="font-label-code text-label-code text-primary uppercase font-semibold">
                Open Surveillance &amp; Biologics Portal
              </span>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Pillar 2: Agriculture & Environment */}
          <div
            onClick={() => onNavigate('agriculture-and-environment')}
            className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">psychiatry</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-widest">
                  Protocol // 02
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Agriculture &amp; Deltaic Environment
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  CRISPR-edited saline and submergence-tolerant rice cultivars (BRRI dhan97/99), golden fiber jute genomics, and arsenic bioremediation.
                </p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant">
                  Salinity Tolerance: 12 dS/m
                </span>
                <span className="font-label-code text-label-code text-secondary font-bold">
                  +28% Coastal Yield
                </span>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between">
              <span className="font-label-code text-label-code text-primary uppercase font-semibold">
                Open Agro-Genomic Atlas
              </span>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Pillar 3: Research Hubs */}
          <div
            onClick={() => onNavigate('research-hubs')}
            className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">domain_verification</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-widest">
                  Protocol // 04
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  National Research Hubs &amp; BSL Network
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Live operational directory of NIB Savar, CHRF, IEDCR, BRRI, BINA, and icddr,b sequencing cores, bioreactor banks, and cold-chain hubs.
                </p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant">
                  Sequencer Fleet: 64 Units
                </span>
                <span className="font-label-code text-label-code text-tertiary font-bold">
                  ISO 17025 Validated
                </span>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between">
              <span className="font-label-code text-label-code text-primary uppercase font-semibold">
                Inspect Lab Infrastructure
              </span>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Pillar 4: Roadmap & Get Involved */}
          <div
            onClick={() => onNavigate('roadmap-and-get-involved')}
            className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">flag</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-widest">
                  Protocol // 05
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  2025–2030 Roadmap &amp; Researcher Grants
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Apply for MoST biotechnology fellowships, submit university sequencing proposals, and track national bio-sovereignty milestones.
                </p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant">
                  FY 2025-26 Grant Pool
                </span>
                <span className="font-label-code text-label-code text-secondary font-bold">
                  BDT 640 Crore Open
                </span>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between">
              <span className="font-label-code text-label-code text-primary uppercase font-semibold">
                View Grants &amp; Fellowships
              </span>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
