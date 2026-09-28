import React, { useState } from 'react';

const CULTIVAR_TRIALS = [
  {
    code: 'BRRI dhan97 & dhan99',
    trait: 'Saltol QTL + OsNHX1 Antiporter',
    zone: 'Satkhira, Khulna & Bagerhat Coastal Belt',
    salinityLimit: '12.4 dS/m (EC)',
    yieldMetric: '6.8 Metric Tons / Ha',
    status: 'Commercial Release',
    progress: 92,
  },
  {
    code: 'BINA dhan-24 (Sub1A-Plus)',
    trait: 'Flash-Flood Submergence (21 Days)',
    zone: 'Sunamganj, Sylhet & Netrokona Haor Basin',
    salinityLimit: 'Freshwater / Silt',
    yieldMetric: '7.4 Metric Tons / Ha',
    status: 'Field Expansion',
    progress: 84,
  },
  {
    code: 'Tossa Jute Genome (CVL-1 CRISPR)',
    trait: 'Low-Lignin Cellulose Fiber Synthesis',
    zone: 'Faridpur, Jessore & Rangpur Plains',
    salinityLimit: '6.0 dS/m Tolerance',
    yieldMetric: '+31% Tensile Fiber',
    status: 'Sonali Bag Feedstock',
    progress: 78,
  },
  {
    code: 'BARI Bt-Brinjal Line-05',
    trait: 'Cry1Ac Endotoxin Fruit & Shoot Borer Shield',
    zone: 'All 64 Districts Smallholder Plots',
    salinityLimit: '4.5 dS/m Tolerance',
    yieldMetric: '-89% Pesticide Use',
    status: 'Nationwide Adoption',
    progress: 96,
  },
];

export const AgricultureScreen: React.FC = () => {
  const [selectedCoastalZone, setSelectedCoastalZone] = useState<'Satkhira' | 'Khulna' | 'Patuakhali' | 'Sunamganj'>('Satkhira');

  const zoneMetrics = {
    Satkhira: { ec: '11.8 dS/m', pH: '7.6', moisture: '68%', activeCultivar: 'BRRI dhan97', yieldDelta: '+34.2% vs Baseline' },
    Khulna: { ec: '9.4 dS/m', pH: '7.4', moisture: '72%', activeCultivar: 'BRRI dhan99', yieldDelta: '+29.8% vs Baseline' },
    Patuakhali: { ec: '10.6 dS/m', pH: '7.8', moisture: '75%', activeCultivar: 'BINA dhan-10', yieldDelta: '+31.5% vs Baseline' },
    Sunamganj: { ec: '1.2 dS/m', pH: '6.5', moisture: '94%', activeCultivar: 'BINA dhan-24 Sub1A', yieldDelta: '+41.0% Post-Flood' },
  }[selectedCoastalZone];

  return (
    <div className="flex flex-col w-full">
      {/* Top Protocol Breadcrumb & Status Pill */}
      <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-wider">
              INITIATIVE PROTOCOL // 02
            </span>
            <span className="text-outline-variant font-label-code text-label-code">/</span>
            <span className="font-label-code text-label-code text-secondary font-medium">
              BRRI · BINA · BARC · BJRI CONSORTIUM
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-label-code text-label-code text-on-surface uppercase tracking-widest font-semibold">
                Deltaic Soil &amp; Gene Sensors: 412 Upazilas
              </span>
            </div>
            <div className="h-4 w-px bg-outline-variant hidden sm:block"></div>
            <span className="font-label-code text-label-code text-on-surface-variant hidden sm:inline">
              Cartagena Biosafety Compliant
            </span>
          </div>
        </div>
      </div>

      {/* Header Mosaic */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-4 pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          <div className="lg:col-span-8 flex flex-col justify-between bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary w-fit">
                <span className="material-symbols-outlined text-base text-secondary">eco</span>
                <span className="font-label-code text-label-code uppercase tracking-wider font-semibold">
                  Deltaic Food Security &amp; Climate Genetics
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight max-w-2xl">
                Agriculture &amp; Environmental Biotechnology
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Engineering salt-tolerant rice lines, submergence-resilient cultivars, and biodegradable jute biopolymers to safeguard 170 million citizens against rising sea levels and erratic monsoon cycles.
              </p>
            </div>
            <div className="mt-8 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-gutter bg-surface-container-low/70 p-6 rounded-lg">
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Salinity Tolerance
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  12.4 dS/m
                </span>
                <span className="font-label-code text-label-code text-secondary block mt-0.5">
                  ±0.04% Error Margin
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Edited Cultivars
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  34 Lines
                </span>
                <span className="font-label-code text-label-code text-secondary block mt-0.5">
                  BRRI &amp; BINA Certified
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Pesticide Reduction
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  -82.0%
                </span>
                <span className="font-label-code text-label-code text-tertiary-container block mt-0.5">
                  Bt-Brinjal &amp; Biopesticide
                </span>
              </div>
              <div>
                <span className="font-label-code text-label-code text-on-surface-variant uppercase block">
                  Jute Genome Loci
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold tabular-nums">
                  30,096
                </span>
                <span className="font-label-code text-label-code text-primary-container block mt-0.5">
                  Corchorus olitorius
                </span>
              </div>
            </div>
          </div>

          {/* Right Highlight Card */}
          <div className="lg:col-span-4 bg-primary text-on-primary rounded-xl p-8 shadow-sm flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <span className="font-label-badge text-label-badge uppercase tracking-wider text-secondary-container">
                Coastal Zone Telemetry
              </span>
              <h2 className="font-title-lg text-title-lg text-on-primary">
                Live Delta Salinity &amp; QTL Performance
              </h2>
              <p className="font-body-sm text-body-sm text-surface-variant">
                Select a sentinel agro-ecological zone to inspect real-time soil electrical conductivity and gene-edited crop yield:
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2">
                {(['Satkhira', 'Khulna', 'Patuakhali', 'Sunamganj'] as const).map((zone) => (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => setSelectedCoastalZone(zone)}
                    className={`px-3 py-2 rounded-lg font-label-code text-label-code text-left transition-colors cursor-pointer ${
                      selectedCoastalZone === zone
                        ? 'bg-secondary-fixed text-primary font-bold'
                        : 'bg-surface-container-highest/15 text-on-primary hover:bg-surface-container-highest/25'
                    }`}
                  >
                    {zone}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-surface-container-highest/20 space-y-2">
              <div className="flex justify-between font-label-code text-label-code">
                <span className="text-surface-variant">Soil Salinity (EC):</span>
                <span className="text-secondary-fixed font-bold">{zoneMetrics.ec}</span>
              </div>
              <div className="flex justify-between font-label-code text-label-code">
                <span className="text-surface-variant">Deployed Cultivar:</span>
                <span className="text-on-primary font-bold">{zoneMetrics.activeCultivar}</span>
              </div>
              <div className="flex justify-between font-label-code text-label-code">
                <span className="text-surface-variant">Harvest Yield Delta:</span>
                <span className="text-secondary-fixed font-bold">{zoneMetrics.yieldDelta}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultivar Matrix */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin py-8 pb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-secondary mb-2">
            <span className="material-symbols-outlined text-lg">grass</span>
            <span className="font-label-badge text-label-badge uppercase tracking-widest">
              Agro-Genomic Ledger
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
            Genomic Crop Improvement &amp; Bio-Remediation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {CULTIVAR_TRIALS.map((item) => (
            <div
              key={item.code}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code text-secondary font-bold uppercase">
                    {item.trait}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-badge text-label-badge uppercase">
                    {item.status}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">{item.code}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Deployment Region: {item.zone}
                </p>
                <div className="bg-surface-container-low p-4 rounded-lg mt-2 space-y-2">
                  <div className="flex justify-between font-label-code text-label-code">
                    <span className="text-on-surface-variant">Threshold / Trait Metric:</span>
                    <span className="text-primary font-bold">{item.salinityLimit}</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-secondary h-full rounded-full"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between font-label-code text-label-code">
                    <span className="text-on-surface-variant">Verified Field Output:</span>
                    <span className="text-secondary font-bold">{item.yieldMetric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
