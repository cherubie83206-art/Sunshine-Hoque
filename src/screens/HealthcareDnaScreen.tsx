import React, { useState } from 'react';
import { PATHOGEN_TELEMETRY_DATA, GENOMIC_LEDGER_RECORDS, GenomicLedgerRecord } from '../data/portalData';

interface HealthcareDnaScreenProps {
  onOpenApiModal: () => void;
  onOpenEthicsModal: () => void;
  onOpenLedgerModal: () => void;
}

const WORKFLOW_STEPS = [
  {
    step: '01',
    code: '01 // SAMPLE CAPTURE',
    title: 'Field Collection & Cold-Chain',
    description:
      'Specimens acquired from sentinel hospitals, community clinics, and veterinary outposts transported in -20°C dry-shipper canisters.',
    icon: 'thermostat',
    metric: 'Transit Time: < 8 hrs',
    sopDetail:
      'SOP-NIB-101: Dual-barcoded viral transport media (VTM) logged via GPS field telemetry across 64 district civil surgeon hubs.',
  },
  {
    step: '02',
    code: '02 // EXTRACTION',
    title: 'Automated Library Prep',
    description:
      'Magnetic-bead nucleic acid purification, enzymatic shearing, and molecular barcode tagging executed on automated liquid handlers.',
    icon: 'tune',
    metric: 'Yield: 99.4% Purity',
    sopDetail:
      'SOP-NIB-204: 96-well KingFisher magnetic extraction paired with Nextera XT / Rapid Barcoding kits (A260/A280 ratio 1.88±0.03).',
  },
  {
    step: '03',
    code: '03 // NGS SEQUENCING',
    title: 'Deep Nanopore & SBS Reads',
    description:
      'Parallel high-throughput flow-cells reading 100x coverage depth per isolate, identifying single nucleotide polymorphisms (SNPs).',
    icon: 'memory',
    metric: 'Run Duration: 12 hrs',
    sopDetail:
      'SOP-NIB-309: Hybrid Illumina NovaSeq 6000 & Oxford Nanopore PromethION 24 runs achieving Q30 > 94.2% phred score.',
  },
  {
    step: '04',
    code: '04 // DISCLOSURE',
    title: 'Bioinformatic Broadcast',
    description:
      'Automated phylodynamic assembly, AMR resistance determinant scoring, and instant transmission to the WHO and Bangladesh DGHS portals.',
    icon: 'cloud_done',
    metric: 'GISAID Instant Push',
    sopDetail:
      'SOP-NIB-412: Nextflow + Kraken2 + Nextstrain phylogenetic tree compilation pushed to DGHS HEOC within 90 minutes of basecalling.',
  },
];

export const HealthcareDnaScreen: React.FC<HealthcareDnaScreenProps> = ({
  onOpenApiModal,
  onOpenEthicsModal,
  onOpenLedgerModal,
}) => {
  const [filterFeedsActive, setFilterFeedsActive] = useState(false);
  const [selectedDivisionFilter, setSelectedDivisionFilter] = useState<string>('All 8 Divisions');
  const [activePathogenTab, setActivePathogenTab] = useState<string>('Dengue DENV-2/3');
  const [hoveredMarkerIndex, setHoveredMarkerIndex] = useState<number | null>(null);
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState<number | null>(null);
  const [milestoneFilter, setMilestoneFilter] = useState<'all' | 'completed' | 'verification' | 'target'>('all');
  const [activeFeatureDetail, setActiveFeatureDetail] = useState<'superbug' | 'virus' | null>(null);

  const currentTelemetry = PATHOGEN_TELEMETRY_DATA[activePathogenTab] || PATHOGEN_TELEMETRY_DATA['Dengue DENV-2/3'];

  return (
    <div className="flex flex-col w-full">
      {/* Top Protocol Breadcrumb & Status Pill */}
      <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-wider">
              INITIATIVE PROTOCOL // 03
            </span>
            <span className="text-outline-variant font-label-code text-label-code">/</span>
            <span className="font-label-code text-label-code text-secondary font-medium">
              IEDCR · CHRF · NIB CONSORTIUM
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-label-code text-label-code text-on-surface uppercase tracking-widest font-semibold">
                Active Genomic Feed: 64 Districts
              </span>
            </div>
            <div className="h-4 w-px bg-outline-variant hidden sm:block"></div>
            <span className="font-label-code text-label-code text-on-surface-variant hidden sm:inline">
              ISO/IEC 17025 Certified
            </span>
          </div>
        </div>
      </div>

      {/* Primary Header & Overview Asymmetric Mosaic */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-4 pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          <div className="lg:col-span-8 flex flex-col justify-between bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary w-fit">
                <span className="material-symbols-outlined text-base text-secondary">strikethrough_s</span>
                <span className="font-label-code text-label-code uppercase tracking-wider font-semibold">
                  National Bio-Defense &amp; Precision Health
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight max-w-2xl">
                Healthcare, Vaccines &amp; DNA Research
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Deploying high-throughput next-generation sequencing, autonomous pathogen surveillance grids, and national sovereign biologic pipelines to guarantee health security across the Bengal Basin.
              </p>
            </div>
            <div className="mt-8 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-gutter bg-surface-container-low/70 p-6 rounded-lg">
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Isolates Sequenced
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  42,890+
                </span>
                <span className="font-label-code text-label-code text-secondary block mt-0.5">
                  ↑ 34% YoY
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Target Pathogens
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  18 Viri
                </span>
                <span className="font-label-code text-label-code text-tertiary-container block mt-0.5">
                  Real-time alert
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Domestic Biologics
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  78.4%
                </span>
                <span className="font-label-code text-label-code text-secondary block mt-0.5">
                  Price reduction
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Sequencing Turnaround
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  &lt; 36 Hrs
                </span>
                <span className="font-label-code text-label-code text-primary-container block mt-0.5">
                  From field swab
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Image Card */}
          <div className="lg:col-span-4 relative rounded-xl overflow-hidden shadow-sm flex flex-col justify-end min-h-[360px] bg-primary">
            <img
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 hover:opacity-50 transition-opacity duration-500"
              alt="Modern clinical genomics laboratory in Dhaka, Bangladesh, with a female lead molecular geneticist inspecting high-density DNA microarrays and illumina sequencing reagents illuminated in crisp emerald and teal fluorescent lighting, sterile bio-safety level 3 research setting."
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlF5g7MbPuAJHmtoam9wjEfQx2NKRm2awxKIvtE3XqjuHuJPTciStt71OPmqIrocxksNsxkMpemaZPBky8J0FVWh0woTU-UCs4T0gW3vI5rX7q7f3GJX3mKp18WRKMX0BpT52fO0oZG_LdwZbMpJtlTJTvKyjUdhL0-2yKO25t78jE-P6588F1h1YJa5JOZMB4cPzLPkK7yRLQ55ng9b1n5_8kZrrQ5uNsFdlYfmbWUPdIXSxPOku"
            />
            <div className="relative z-10 p-8 bg-gradient-to-t from-primary via-primary/80 to-transparent flex flex-col gap-3">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary-container">
                Infrastructure Alert
              </span>
              <h2 className="font-title-lg text-title-lg text-on-primary">
                Center for Genomic Discovery
              </h2>
              <p className="font-body-sm text-body-sm text-surface-variant">
                Unifying 8 regional sequencing divisions with 2.4 Petabytes of local pathogen DNA archive to shield 170M+ people.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-surface-container-highest/20 text-on-primary font-label-code text-label-code">
                  MOHFW Validated
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container-highest/20 text-on-primary font-label-code text-label-code">
                  Open Access DB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Genome Tracking & Disease Prevention */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-secondary mb-2">
              <span className="material-symbols-outlined text-lg">biotech</span>
              <span className="font-label-badge text-label-badge uppercase tracking-widest">
                Surveillance Pillar 01
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
              Genome Tracking &amp; Disease Prevention
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              High-tech DNA sequencing (Whole-Genome Sequencing) is transforming public health surveillance across the country:
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterFeedsActive((prev) => !prev)}
              className={`px-4 py-2 rounded-lg font-label-code text-label-code uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                filterFeedsActive
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-primary hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined text-sm">
                {filterFeedsActive ? 'check' : 'tune'}
              </span>
              {filterFeedsActive ? 'All Feeds Visible' : 'Filter Feeds'}
            </button>
            <button
              type="button"
              onClick={onOpenLedgerModal}
              className="px-4 py-2 rounded-lg bg-primary text-on-primary font-headline-sm text-sm hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-sm">download</span> Full Genomic Ledger
            </button>
          </div>
        </div>

        {/* Interactive Feed Filter Bar when toggled */}
        {filterFeedsActive && (
          <div className="mb-8 p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-base">radar</span>
              <span className="font-label-code text-label-code text-primary uppercase font-bold">
                Active Division Feed Filter:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                'All 8 Divisions',
                'Dhaka Central',
                'Chattogram Port',
                'Rajshahi (Nipah Belt)',
                'Gazipur Agro-Hub',
                'Sylhet Haor Basin',
              ].map((div) => (
                <button
                  key={div}
                  type="button"
                  onClick={() => setSelectedDivisionFilter(div)}
                  className={`px-3 py-1 rounded-lg font-label-code text-label-code transition-colors cursor-pointer ${
                    selectedDivisionFilter === div
                      ? 'bg-primary text-on-primary font-bold'
                      : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {div}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Verbatim Features Cards (Superbug & Rapid Virus Response) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
          {/* Superbug Surveillance */}
          <div
            onClick={() =>
              setActiveFeatureDetail(activeFeatureDetail === 'superbug' ? null : 'superbug')
            }
            className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">coronavirus</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-badge text-label-badge uppercase tracking-widest">
                  High AMR Threat
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Superbug Surveillance
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Tracking multidrug-resistant bacteria in poultry, livestock, and healthcare settings to prevent dangerous antibiotic-resistant infections.
                </p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-center text-body-sm">
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    NDM-1 &amp; mcr-1 Resistance Index:
                  </span>
                  <span className="font-label-code text-label-code font-bold text-error">
                    Contained (3.4% Field Margin)
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-tertiary-container h-full rounded-full" style={{ width: '28%' }}></div>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Surveillance nodes live in Gazipur, Bogura, and Chattogram agro-industrial hubs.
                </span>
              </div>
              {activeFeatureDetail === 'superbug' && (
                <div className="p-4 rounded-lg bg-surface-container-high/60 text-body-sm text-on-surface space-y-1.5 border-l-2 border-tertiary">
                  <div className="font-label-code text-label-code text-primary font-bold uppercase">
                    Active AMR Stewardship Readout ({selectedDivisionFilter})
                  </div>
                  <p className="text-on-surface-variant">
                    • 8,420 clinical &amp; veterinary isolates screened via ResFinder 4.4 pipeline.
                  </p>
                  <p className="text-on-surface-variant">
                    • Colistin resistance plasmid <code className="font-label-code">mcr-1.1</code> reduced by 41% in commercial broiler flocks since 2023 directive.
                  </p>
                </div>
              )}
            </div>
            <div className="pt-6 flex items-center justify-between">
              <span className="font-label-code text-label-code text-secondary uppercase font-semibold">
                Active Isolate Library: 8,420
              </span>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Rapid Virus Response */}
          <div
            onClick={() =>
              setActiveFeatureDetail(activeFeatureDetail === 'virus' ? null : 'virus')
            }
            className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">query_stats</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-widest">
                  Rapid Response
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  Rapid Virus Response
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Adapting COVID-19 genomic infrastructure to monitor Dengue variants, Nipah virus outbreaks, and avian influenza.
                </p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-center text-body-sm">
                  <span className="font-label-code text-label-code text-on-surface-variant">
                    Dengue Serotype-2 / Nipah Clade Tracking:
                  </span>
                  <span className="font-label-code text-label-code font-bold text-secondary">
                    99.2% Lineage Accuracy
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Direct mobile-lab sequencing in Meherpur, Rajshahi, and Dhaka South.
                </span>
              </div>
              {activeFeatureDetail === 'virus' && (
                <div className="p-4 rounded-lg bg-surface-container-high/60 text-body-sm text-on-surface space-y-1.5 border-l-2 border-secondary">
                  <div className="font-label-code text-label-code text-primary font-bold uppercase">
                    Mobile BSL-3 Deployment Status ({selectedDivisionFilter})
                  </div>
                  <p className="text-on-surface-variant">
                    • 14 rapid-response MinION Mk1C units stationed at district hospital fever wards.
                  </p>
                  <p className="text-on-surface-variant">
                    • Early detection of DENV-2 Cosmopolitan clade guided targeted vector larviciding across 54 wards.
                  </p>
                </div>
              )}
            </div>
            <div className="pt-6 flex items-center justify-between">
              <span className="font-label-code text-label-code text-secondary uppercase font-semibold">
                24hr Sequence Turnaround
              </span>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>

        {/* Visual Pathogen Surveillance Dashboard Preview */}
        <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm mb-12">
          <div className="flex flex-wrap items-center justify-between gap-space-sm pb-6">
            <div>
              <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest font-bold">
                Interactive Telemetry
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                National Pathogen Surveillance Dashboard
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm bg-surface-container-low p-1 rounded-lg">
              {Object.keys(PATHOGEN_TELEMETRY_DATA).map((tabKey) => {
                const isActive = activePathogenTab === tabKey;
                return (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => {
                      setActivePathogenTab(tabKey);
                      setHoveredMarkerIndex(null);
                    }}
                    className={`px-3 py-1.5 rounded font-label-code text-label-code transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-surface-container-lowest text-primary shadow-sm font-semibold'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {tabKey}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* SVG Interactive Cluster & Curve Map */}
            <div className="lg:col-span-8 bg-surface-container-low p-6 rounded-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="font-label-code text-label-code text-on-surface font-medium">
                  {currentTelemetry.chartTitle}
                </span>
                <span className="font-label-code text-label-code text-secondary">
                  • Live Vector Stream
                </span>
              </div>

              {/* Inline Chart SVG */}
              <div className="w-full h-56 relative flex items-end">
                {hoveredMarkerIndex !== null && currentTelemetry.markers[hoveredMarkerIndex] && (
                  <div className="absolute top-2 left-4 z-10 bg-surface-container-lowest/95 backdrop-blur px-3 py-2 rounded-lg shadow-sm border border-outline-variant/40 pointer-events-none">
                    <div className="font-label-code text-label-code text-primary font-bold">
                      {currentTelemetry.markers[hoveredMarkerIndex].week} — {currentTelemetry.markers[hoveredMarkerIndex].value}
                    </div>
                    <div className="font-label-code text-label-code text-secondary">
                      {currentTelemetry.markers[hoveredMarkerIndex].clade}
                    </div>
                  </div>
                )}
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 700 200"
                >
                  <defs>
                    <linearGradient id="primaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#006a61" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#006a61" stopOpacity="0.0"></stop>
                    </linearGradient>
                    <linearGradient id="secondaryAreaGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#753d00" stopOpacity="0.25"></stop>
                      <stop offset="100%" stopColor="#753d00" stopOpacity="0.0"></stop>
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line
                    stroke="#bfc9c2"
                    strokeDasharray="4 4"
                    strokeOpacity="0.3"
                    x1="0"
                    x2="700"
                    y1="40"
                    y2="40"
                  ></line>
                  <line
                    stroke="#bfc9c2"
                    strokeDasharray="4 4"
                    strokeOpacity="0.3"
                    x1="0"
                    x2="700"
                    y1="90"
                    y2="90"
                  ></line>
                  <line
                    stroke="#bfc9c2"
                    strokeDasharray="4 4"
                    strokeOpacity="0.3"
                    x1="0"
                    x2="700"
                    y1="140"
                    y2="140"
                  ></line>
                  {/* Shaded Areas */}
                  <path d={currentTelemetry.primaryAreaPath} fill="url(#primaryAreaGrad)"></path>
                  <path d={currentTelemetry.secondaryAreaPath} fill="url(#secondaryAreaGrad)"></path>
                  {/* Smooth Data Paths */}
                  <path
                    d={currentTelemetry.primaryPath}
                    fill="none"
                    stroke="#006a61"
                    strokeLinecap="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d={currentTelemetry.secondaryPath}
                    fill="none"
                    stroke="#753d00"
                    strokeDasharray="6 3"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  ></path>
                  {/* Markers */}
                  {currentTelemetry.markers.map((marker, idx) => (
                    <g
                      key={idx}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredMarkerIndex(idx)}
                      onMouseLeave={() => setHoveredMarkerIndex(null)}
                    >
                      <circle
                        cx={marker.cx}
                        cy={marker.cy}
                        r={hoveredMarkerIndex === idx ? marker.r + 3 : marker.r}
                        fill={marker.fill}
                        stroke={marker.stroke}
                        strokeWidth={marker.strokeWidth}
                      ></circle>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="flex items-center justify-between pt-4 mt-2 text-on-surface-variant font-label-code text-label-code">
                <span>WK 01 (Jan)</span>
                <span>WK 12 (Apr)</span>
                <span>WK 24 (Jul - Peak Monsoon)</span>
                <span>WK 36 (Oct)</span>
                <span className="text-primary font-bold">WK 48 (Current)</span>
              </div>
            </div>

            {/* Real-time Cluster Readout */}
            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="bg-surface-container-low p-4 rounded-lg">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                  Primary Vector In Focus
                </span>
                <div className="flex items-center justify-between mt-1 gap-2">
                  <span className="font-title-lg text-title-lg text-primary font-bold">
                    {currentTelemetry.vectorFocus.name}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed-variant font-label-code text-label-code font-bold whitespace-nowrap">
                    {currentTelemetry.vectorFocus.badge}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {currentTelemetry.vectorFocus.description}
                </p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                  Sentinel Sampling Density
                </span>
                <div className="flex items-center justify-between mt-1 gap-2">
                  <span className="font-title-lg text-title-lg text-primary font-bold tabular-nums">
                    {currentTelemetry.samplingDensity.count}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-code text-label-code whitespace-nowrap">
                    {currentTelemetry.samplingDensity.scope}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {currentTelemetry.samplingDensity.description}
                </p>
              </div>
              <div className="bg-primary p-4 rounded-lg text-on-primary flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-fixed">security</span>
                  <div>
                    <span className="font-label-code text-label-code uppercase tracking-wider block font-semibold">
                      Biosafety Status
                    </span>
                    <span className="font-body-sm text-body-sm text-surface-container-low">
                      {currentTelemetry.biosafety.level}
                    </span>
                  </div>
                </div>
                <span className="font-label-code text-label-code text-secondary-fixed font-bold">
                  {currentTelemetry.biosafety.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Genomic Sequencing Workflow Graphic */}
        <div className="mb-12">
          <div className="mb-6">
            <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest font-bold">
              Standardized National Pipeline
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
              End-to-End Genomic Sequencing Workflow
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              How clinical and environmental biospecimens move from remote delta communities into nationwide health policy within 36 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
            {WORKFLOW_STEPS.map((item, idx) => {
              const isSelected = selectedWorkflowStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setSelectedWorkflowStep(isSelected ? null : idx)}
                  className={`p-6 rounded-xl shadow-sm flex flex-col justify-between relative group transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-surface-container-low ring-2 ring-secondary'
                      : 'bg-surface-container-lowest hover:bg-surface-container-low'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-label-code text-label-code font-bold text-secondary">
                        {item.code}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold font-label-code text-label-code">
                        {item.step}
                      </span>
                    </div>
                    <h4 className="font-title-lg text-title-lg text-primary mb-2">{item.title}</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {item.description}
                    </p>
                    {isSelected && (
                      <div className="mt-3 p-3 rounded bg-surface-container-lowest text-body-sm text-primary font-label-code text-xs border border-outline-variant/40">
                        {item.sopDetail}
                      </div>
                    )}
                  </div>
                  <div className="mt-6 pt-4 flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm text-secondary">
                      {item.icon}
                    </span>
                    <span className="font-label-code text-label-code">{item.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: Local Vaccine & Medicine Production */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-8">
        <div className="bg-surface-container-low p-8 md:p-12 rounded-xl mb-12">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-secondary mb-2">
              <span className="material-symbols-outlined text-lg">vaccines</span>
              <span className="font-label-badge text-label-badge uppercase tracking-widest">
                Sovereignty Pillar 02
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
              Local Vaccine &amp; Medicine Production
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Reducing dependence on foreign imports ensures every citizen has access to lifesaving treatments:
            </p>
          </div>

          {/* Verbatim Features Cards (National Vaccine & Affordable Therapeutics) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-8">
            {/* National Vaccine Manufacturing */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">domain</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-widest">
                    G2P Initiative
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    National Vaccine Manufacturing
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Public and private investments building local facilities for cell-culture and mRNA vaccines.
                  </p>
                </div>
                <ul className="flex flex-col gap-2 pt-2 text-body-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check_circle
                    </span>
                    <span>
                      Gopalganj Essential Drugs Co. Limited (EDCL) mRNA facility underway.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check_circle
                    </span>
                    <span>
                      Cholera, Tetanus, and Pentavalent vaccine domestic fill-finish operational.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check_circle
                    </span>
                    <span>
                      WHO Good Manufacturing Practices (cGMP) pre-qualification pending Q4.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                    Target Capacity
                  </span>
                  <span className="font-title-lg text-title-lg text-primary font-bold">
                    350 Million Doses / Yr
                  </span>
                </div>
                <span className="px-2 py-1 rounded bg-secondary-fixed text-primary font-label-code text-label-code font-bold">
                  Self-Sufficient
                </span>
              </div>
            </div>

            {/* Affordable Therapeutics */}
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">medication</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase tracking-widest">
                    Price Parity
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Affordable Therapeutics
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    Producing low-cost domestic insulin, cancer therapies, and biologic medications right here in Bangladesh.
                  </p>
                </div>
                <ul className="flex flex-col gap-2 pt-2 text-body-sm text-on-surface">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check_circle
                    </span>
                    <span>
                      Recombinant human insulin synthesized at 1/5th global commercial cost.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check_circle
                    </span>
                    <span>
                      Monoclonal antibody biosimilars (Trastuzumab &amp; Rituximab) in clinical stage.
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check_circle
                    </span>
                    <span>
                      Active Pharmaceutical Ingredient (API) Industrial Park in Munshiganj online.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 bg-surface-container-low p-4 rounded-lg flex items-center justify-between">
                <div>
                  <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                    Out-of-Pocket Savings
                  </span>
                  <span className="font-title-lg text-title-lg text-primary font-bold">
                    BDT 14,800 Cr / Year
                  </span>
                </div>
                <span className="px-2 py-1 rounded bg-secondary-fixed text-primary font-label-code text-label-code font-bold">
                  Subsidized Rx
                </span>
              </div>
            </div>
          </div>

          {/* Domestic Pharmaceutical Production Milestone Tracker */}
          <div className="bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-space-sm mb-6">
              <div>
                <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest font-bold">
                  Strategic Roadmap
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mt-1">
                  Domestic Pharmaceutical Production Milestone Tracker
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setMilestoneFilter(milestoneFilter === 'completed' ? 'all' : 'completed')
                  }
                  className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer transition-colors ${
                    milestoneFilter === 'completed' ? 'bg-surface-container-high' : ''
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="font-label-code text-label-code text-on-surface font-medium">
                    Completed
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setMilestoneFilter(
                      milestoneFilter === 'verification' ? 'all' : 'verification'
                    )
                  }
                  className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer transition-colors ${
                    milestoneFilter === 'verification' ? 'bg-surface-container-high' : ''
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim ml-1"></span>
                  <span className="font-label-code text-label-code text-on-surface font-medium">
                    In Verification
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setMilestoneFilter(milestoneFilter === 'target' ? 'all' : 'target')
                  }
                  className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer transition-colors ${
                    milestoneFilter === 'target' ? 'bg-surface-container-high' : ''
                  }`}
                >
                  <span className="w-3 h-3 rounded-full bg-surface-variant ml-1"></span>
                  <span className="font-label-code text-label-code text-on-surface font-medium">
                    Target 2026-2028
                  </span>
                </button>
              </div>
            </div>

            {/* Timeline / Milestone Stepper */}
            <div className="space-y-4">
              {/* Item 1: Complete */}
              {(milestoneFilter === 'all' || milestoneFilter === 'completed') && (
                <div className="p-4 rounded-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start md:items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">
                      <span className="material-symbols-outlined text-base">done</span>
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-title-lg text-title-lg text-primary font-bold">
                          API Synthesis: Small Molecule Sovereignty
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-code text-label-code">
                          Milestone Q2 2023
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Domestic chemical synthesis of 42 critical molecules including Paracetamol, Ciprofloxacin, and Azithromycin base APIs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 min-w-[200px] justify-between md:justify-end">
                    <div className="text-right">
                      <span className="font-label-code text-label-code text-on-surface-variant block uppercase">
                        Import Reduction
                      </span>
                      <span className="font-title-lg text-title-lg text-secondary font-bold">
                        -48% Foreign Spend
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary">verified</span>
                  </div>
                </div>
              )}

              {/* Item 2: Complete */}
              {(milestoneFilter === 'all' || milestoneFilter === 'completed') && (
                <div className="p-4 rounded-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start md:items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">
                      <span className="material-symbols-outlined text-base">done</span>
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-title-lg text-title-lg text-primary font-bold">
                          Recombinant DNA Human Insulin Formulation
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-code text-label-code">
                          Milestone Q4 2024
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Three domestic biologics labs achieved Pichia pastoris fermentation scale yielding 100% human-matched insulin glargine.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 min-w-[200px] justify-between md:justify-end">
                    <div className="text-right">
                      <span className="font-label-code text-label-code text-on-surface-variant block uppercase">
                        Domestic Cost
                      </span>
                      <span className="font-title-lg text-title-lg text-secondary font-bold">
                        BDT 420 / 10ml
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary">verified</span>
                  </div>
                </div>
              )}

              {/* Item 3: In Verification */}
              {(milestoneFilter === 'all' || milestoneFilter === 'verification') && (
                <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start md:items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-bold text-sm shrink-0">
                      <span className="material-symbols-outlined text-base">sync</span>
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-title-lg text-title-lg text-primary font-bold">
                          Cell-Culture Viral Vector Facilities
                        </span>
                        <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-code text-label-code font-bold">
                          Verification Phase
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Bioreactor banks (2,000L capacity) undergoing cleanroom HVAC calibration and media sterilization validation trials.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 min-w-[200px] justify-between md:justify-end">
                    <div className="text-right">
                      <span className="font-label-code text-label-code text-on-surface-variant block uppercase">
                        Vaccine Yield
                      </span>
                      <span className="font-title-lg text-title-lg text-tertiary font-bold">
                        85M Units / Run
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-tertiary">hourglass_top</span>
                  </div>
                </div>
              )}

              {/* Item 4: Target 2026-2028 */}
              {(milestoneFilter === 'all' || milestoneFilter === 'target') && (
                <div className="p-4 rounded-lg bg-surface-container-high/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start md:items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-sm shrink-0">
                      04
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-title-lg text-title-lg text-on-surface-variant font-bold">
                          Oncology Biosimilars &amp; CAR-T Regional Hub
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-code text-label-code">
                          Projected 2026
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Establishment of national antibody drug conjugate (ADC) manufacturing line with technology transfer from East Asian partners.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 min-w-[200px] justify-between md:justify-end">
                    <div className="text-right">
                      <span className="font-label-code text-label-code text-on-surface-variant block uppercase">
                        Cancer Rx Cost
                      </span>
                      <span className="font-title-lg text-title-lg text-on-surface-variant font-bold">
                        -72% Projected
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant">
                      pending
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Affordability & Universal Access KPI Matrix */}
            <div className="mt-8 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-low p-5 rounded-lg flex flex-col justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                  Public Tier Insulin Pricing
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    ৳420
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant line-through">
                    ৳2,400 (Imported)
                  </span>
                </div>
                <span className="font-label-badge text-label-badge text-secondary uppercase mt-2">
                  • 82.5% Direct Household Relief
                </span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-lg flex flex-col justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                  Universal Child Immunization Self-Reliance
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    91.4%
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary font-bold">
                    Target 100% by 2026
                  </span>
                </div>
                <span className="font-label-badge text-label-badge text-secondary uppercase mt-2">
                  • EPI Coverage in All Upazilas
                </span>
              </div>
              <div className="bg-surface-container-low p-5 rounded-lg flex flex-col justify-between">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                  Essential Drug National Buffer Reserve
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-headline-md text-headline-md text-primary font-bold">
                    180 Days
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Strategic Stock
                  </span>
                </div>
                <span className="font-label-badge text-label-badge text-secondary uppercase mt-2">
                  • Weather &amp; Sanction Resistant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Action Drawer / Data Access Banner */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pb-16">
        <div className="bg-primary text-on-primary rounded-xl p-8 md:p-12 relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl flex flex-col gap-3">
            <span className="font-label-code text-label-code text-secondary-container uppercase tracking-widest font-bold">
              Researcher Collaboration &amp; Specimen Grants
            </span>
            <h3 className="font-headline-md text-headline-md text-on-primary">
              Access the National Genomic Repository (NGR-BD)
            </h3>
            <p className="font-body-md text-body-md text-surface-variant">
              Accredited universities, clinical trialists, and molecular biologists can query indexed BAM, VCF, and FASTA records for local pathogen isolates and pharmacogenomic reference datasets.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-space-sm w-full md:w-auto">
            <button
              type="button"
              onClick={onOpenApiModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-secondary-fixed text-primary font-headline-sm text-sm hover:bg-secondary-fixed-dim transition-colors font-bold shadow-sm text-center cursor-pointer whitespace-nowrap"
            >
              Request API Token
            </button>
            <button
              type="button"
              onClick={onOpenEthicsModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-surface-container-highest/20 text-on-primary hover:bg-surface-container-highest/30 transition-colors font-headline-sm text-sm text-center cursor-pointer whitespace-nowrap"
            >
              Review Bio-Ethics Guidelines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
