import React, { useState } from 'react';

const NATIONAL_HUBS = [
  {
    id: 'NIB-SAVAR',
    name: 'National Institute of Biotechnology (NIB)',
    location: 'Ganakbari, Ashulia, Savar, Dhaka',
    biosafety: 'BSL-3 & National Genome Center',
    platforms: 'Illumina NovaSeq 6000, PromethION 24, 500-TFLOPS Bio-Cluster',
    focus: 'National Genomic Repository (NGR-BD) host, pharmacogenomics, and recombinant biologics.',
    activeRuns: 18,
    utilization: '94%',
  },
  {
    id: 'CHRF-DHAKA',
    name: 'Child Health Research Foundation (CHRF)',
    location: 'Shyamoli / Mirpur, Dhaka',
    biosafety: 'BSL-2+ Clinical Metagenomics',
    platforms: 'Illumina NextSeq 2000, iSeq 100, Mobile MinION Fleet',
    focus: 'Pediatric meningitis, Dengue serotype shifts, Streptococcus pneumoniae & typhoid WGS.',
    activeRuns: 14,
    utilization: '91%',
  },
  {
    id: 'IEDCR-MOHAKHALI',
    name: 'Institute of Epidemiology, Disease Control & Research (IEDCR)',
    location: 'Mohakhali, Dhaka',
    biosafety: 'BSL-3 Reference Outbreak Core',
    platforms: 'MiSeq, Ion GeneStudio S5, Oxford Nanopore GridION',
    focus: 'Nipah virus (NiV-BD) rapid outbreak containment, H5N1 zoonotic watch, and national PHEOC alerts.',
    activeRuns: 11,
    utilization: '88%',
  },
  {
    id: 'BRRI-GAZIPUR',
    name: 'Bangladesh Rice Research Institute (BRRI) Genomics Division',
    location: 'Joydebpur, Gazipur',
    biosafety: 'Transgenic & CRISPR Containment',
    platforms: 'PacBio Sequel IIe, High-Throughput SNP Genotyping Array',
    focus: 'Saltol & Sub1A rice marker-assisted breeding, C4 photosynthetic pathway engineering.',
    activeRuns: 9,
    utilization: '85%',
  },
  {
    id: 'BINA-MYMENSINGH',
    name: 'Bangladesh Institute of Nuclear Agriculture (BINA)',
    location: 'BAU Campus, Mymensingh',
    biosafety: 'Gamma Phytotron & Molecular Lab',
    platforms: 'Cobalt-60 Irradiation Chamber, ABI 3500 Genetic Analyzer',
    focus: 'Mutation breeding for drought/saline oilseeds, pulses, and high-yield rice cultivars.',
    activeRuns: 7,
    utilization: '79%',
  },
  {
    id: 'EDCL-GOPALGANJ',
    name: 'Essential Drugs Company Limited (EDCL) Vaccine Complex',
    location: 'Gopalganj Bio-Industrial Zone',
    biosafety: 'WHO cGMP Cleanroom Class A/B',
    platforms: '2,000L Single-Use Bioreactors, Tangential Flow Filtration, LNP Encapsulation',
    focus: 'Sovereign mRNA & viral-vector vaccine fill-finish, pentavalent and cholera immunization.',
    activeRuns: 5,
    utilization: '89%',
  },
];

export const ResearchHubsScreen: React.FC<{ onOpenApiModal: () => void }> = ({ onOpenApiModal }) => {
  const [selectedHubId, setSelectedHubId] = useState<string>('NIB-SAVAR');

  return (
    <div className="flex flex-col w-full">
      {/* Top Protocol Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-wider">
              INITIATIVE PROTOCOL // 04
            </span>
            <span className="text-outline-variant font-label-code text-label-code">/</span>
            <span className="font-label-code text-label-code text-secondary font-medium">
              SOVEREIGN SEQUENCING &amp; BIOMANUFACTURING GRID
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
              <span className="font-label-code text-label-code text-on-surface uppercase tracking-widest font-semibold">
                64 Active Sequencers Online
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-4 pb-8">
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary w-fit mb-4">
            <span className="material-symbols-outlined text-base text-secondary">domain</span>
            <span className="font-label-code text-label-code uppercase tracking-wider font-semibold">
              National Laboratory Infrastructure
            </span>
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight max-w-2xl">
            Accredited Research Hubs &amp; Sequencing Cores
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-3">
            Direct telemetry and equipment registry across Bangladesh’s premier biotechnology institutes, BSL-3 reference laboratories, and cGMP vaccine manufacturing plants.
          </p>
        </div>
      </section>

      {/* Hub Cards Grid */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {NATIONAL_HUBS.map((hub) => {
            const isSelected = selectedHubId === hub.id;
            return (
              <div
                key={hub.id}
                onClick={() => setSelectedHubId(hub.id)}
                className={`p-6 rounded-xl shadow-sm flex flex-col justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-surface-container-lowest ring-2 ring-primary'
                    : 'bg-surface-container-lowest hover:bg-surface-container-low'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-code text-label-code text-secondary font-bold">
                      {hub.id}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-code text-label-code">
                      {hub.biosafety}
                    </span>
                  </div>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">
                    {hub.name}
                  </h3>
                  <p className="font-label-code text-label-code text-on-surface-variant">
                    {hub.location}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {hub.focus}
                  </p>
                  <div className="bg-surface-container-low p-3 rounded-lg mt-2">
                    <span className="font-label-code text-label-code text-on-surface-variant block uppercase">
                      Core Instrumentation
                    </span>
                    <span className="font-body-sm text-body-sm text-primary font-medium">
                      {hub.platforms}
                    </span>
                  </div>
                </div>
                <div className="pt-5 mt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="font-label-code text-label-code text-secondary font-bold">
                    Active Flow-Cells: {hub.activeRuns} ({hub.utilization})
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenApiModal();
                    }}
                    className="font-label-code text-label-code text-primary underline hover:text-secondary cursor-pointer"
                  >
                    Book Beamtime
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
