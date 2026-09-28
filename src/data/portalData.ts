export type ScreenId =
  | 'home'
  | 'agriculture-and-environment'
  | 'healthcare-and-dna'
  | 'research-hubs'
  | 'roadmap-and-get-involved';

export interface PathogenTelemetry {
  id: string;
  label: string;
  chartTitle: string;
  primaryPath: string;
  secondaryPath: string;
  primaryAreaPath: string;
  secondaryAreaPath: string;
  markers: { cx: number; cy: number; r: number; fill: string; stroke?: string; strokeWidth?: number; week: string; value: string; clade: string }[];
  vectorFocus: {
    name: string;
    badge: string;
    description: string;
  };
  samplingDensity: {
    count: string;
    scope: string;
    description: string;
  };
  biosafety: {
    level: string;
    status: string;
  };
}

export const PATHOGEN_TELEMETRY_DATA: Record<string, PathogenTelemetry> = {
  'Dengue DENV-2/3': {
    id: 'Dengue DENV-2/3',
    label: 'Dengue DENV-2/3',
    chartTitle: 'Pathogen Lineage Shift & Genomic Mutation Density (2024-2025)',
    primaryPath: 'M0,160 Q120,130 220,140 T420,70 T550,50 T700,20',
    secondaryPath: 'M0,180 Q140,170 240,150 T450,110 T580,120 T700,90',
    primaryAreaPath: 'M0,160 Q120,130 220,140 T420,70 T550,50 T700,20 L700,190 L0,190 Z',
    secondaryAreaPath: 'M0,180 Q140,170 240,150 T450,110 T580,120 T700,90 L700,190 L0,190 Z',
    markers: [
      { cx: 220, cy: 140, r: 4, fill: '#003e2a', week: 'WK 16 (May)', value: '31.2% Cosmopolitan', clade: 'DENV-2 Early Shift' },
      { cx: 420, cy: 70, r: 4, fill: '#006a61', week: 'WK 28 (Jul)', value: '68.4% Cosmopolitan', clade: 'Monsoon Surge' },
      { cx: 550, cy: 50, r: 5, fill: '#89f5e7', stroke: '#003e2a', strokeWidth: 2, week: 'WK 38 (Oct)', value: '86.7% Cosmopolitan', clade: 'E-Gene E126K SNP' },
      { cx: 700, cy: 20, r: 5, fill: '#006a61', week: 'WK 48 (Current)', value: '94.1% Cosmopolitan', clade: 'Dominant Lineage' },
    ],
    vectorFocus: {
      name: 'Dengue Cosmopolitan Clade',
      badge: '94.1% Pos',
      description: 'Replaced Asian-II strain in central division clinical admissions within 6 months.',
    },
    samplingDensity: {
      count: '14,210 Swabs / Mo',
      scope: 'All 8 Divisions',
      description: 'Covering government tertiary clinics, riverine points of entry, and poultry farms.',
    },
    biosafety: {
      level: 'BSL-3 Strict Biocontainment',
      status: 'NORMAL',
    },
  },
  'Nipah Virus (NiV)': {
    id: 'Nipah Virus (NiV)',
    label: 'Nipah Virus (NiV)',
    chartTitle: 'Nipah Virus (NiV-BD Genotype) Spillover Surveillance & Zoonotic Index',
    primaryPath: 'M0,75 Q110,40 220,110 T420,155 T550,145 T700,85',
    secondaryPath: 'M0,130 Q140,95 240,140 T450,170 T580,160 T700,125',
    primaryAreaPath: 'M0,75 Q110,40 220,110 T420,155 T550,145 T700,85 L700,190 L0,190 Z',
    secondaryAreaPath: 'M0,130 Q140,95 240,140 T450,170 T580,160 T700,125 L700,190 L0,190 Z',
    markers: [
      { cx: 115, cy: 58, r: 5, fill: '#89f5e7', stroke: '#003e2a', strokeWidth: 2, week: 'WK 06 (Feb)', value: '99.6% Clade Match', clade: 'NiV-BD2 Winter Sap Window' },
      { cx: 220, cy: 110, r: 4, fill: '#003e2a', week: 'WK 16 (Apr)', value: '12 Active Roosts', clade: 'Pteropus medius Screen' },
      { cx: 420, cy: 155, r: 4, fill: '#006a61', week: 'WK 28 (Jul)', value: 'Baseline Dormant', clade: 'Zero Human Spillover' },
      { cx: 700, cy: 85, r: 5, fill: '#006a61', week: 'WK 48 (Current)', value: 'Pre-Winter Alert', clade: 'Rajshahi / Faridpur Corridor' },
    ],
    vectorFocus: {
      name: 'NiV-BD2 Pteropus Lineage',
      badge: '99.2% Acc',
      description: 'High-resolution N & L polymerase gene amplicon tracking across 14 date-palm belt districts.',
    },
    samplingDensity: {
      count: '3,840 Swabs / Mo',
      scope: 'Nipah Belt (14 Dist.)',
      description: 'Mobile BSL-3 field sequencing in Meherpur, Rajshahi, Faridpur, and Naogaon.',
    },
    biosafety: {
      level: 'BSL-3+ Enhanced Containment',
      status: 'HEIGHTENED',
    },
  },
  'ESBL E. coli': {
    id: 'ESBL E. coli',
    label: 'ESBL E. coli',
    chartTitle: 'AMR Plasmid Transmission (blaNDM-1 & mcr-1) Across One-Health Nodes',
    primaryPath: 'M0,140 Q130,135 220,115 T420,95 T550,82 T700,78',
    secondaryPath: 'M0,150 Q140,145 240,138 T450,132 T580,135 T700,142',
    primaryAreaPath: 'M0,140 Q130,135 220,115 T420,95 T550,82 T700,78 L700,190 L0,190 Z',
    secondaryAreaPath: 'M0,150 Q140,145 240,138 T450,132 T580,135 T700,142 L700,190 L0,190 Z',
    markers: [
      { cx: 220, cy: 115, r: 4, fill: '#003e2a', week: 'WK 14 (Apr)', value: '4.8% Margin', clade: 'IncX3 Plasmid Cluster' },
      { cx: 420, cy: 95, r: 4, fill: '#006a61', week: 'WK 26 (Jul)', value: '4.1% Margin', clade: 'Gazipur Poultry Ring' },
      { cx: 550, cy: 82, r: 5, fill: '#89f5e7', stroke: '#003e2a', strokeWidth: 2, week: 'WK 36 (Sep)', value: '3.6% Margin', clade: 'ICU Stewardship Audit' },
      { cx: 700, cy: 78, r: 5, fill: '#006a61', week: 'WK 48 (Current)', value: '3.4% Contained', clade: 'ST131 / ST410 Isolates' },
    ],
    vectorFocus: {
      name: 'blaNDM-1 & mcr-1 Plasmids',
      badge: '3.4% Margin',
      description: 'Whole-genome plasmid profiling arresting colistin and carbapenem resistance transfer.',
    },
    samplingDensity: {
      count: '8,420 Isolates / Yr',
      scope: '32 Agro & ICU Hubs',
      description: 'Integrated veterinary-clinical wastewater and poultry hatchery genomic audits.',
    },
    biosafety: {
      level: 'AMR Containment Protocol',
      status: 'CONTAINED',
    },
  },
  'H5N1 Avian': {
    id: 'H5N1 Avian',
    label: 'H5N1 Avian',
    chartTitle: 'Avian Influenza Clade 2.3.2.1a & 2.3.4.4b Hemagglutinin Drift',
    primaryPath: 'M0,95 Q120,120 220,150 T420,140 T550,90 T700,45',
    secondaryPath: 'M0,140 Q140,155 240,168 T450,162 T580,130 T700,105',
    primaryAreaPath: 'M0,95 Q120,120 220,150 T420,140 T550,90 T700,45 L700,190 L0,190 Z',
    secondaryAreaPath: 'M0,140 Q140,155 240,168 T450,162 T580,130 T700,105 L700,190 L0,190 Z',
    markers: [
      { cx: 220, cy: 150, r: 4, fill: '#003e2a', week: 'WK 12 (Apr)', value: 'Low Flyway Activity', clade: 'Clade 2.3.2.1a' },
      { cx: 420, cy: 140, r: 4, fill: '#006a61', week: 'WK 24 (Jul)', value: 'Live Bird Market Audit', clade: 'PB2-E627K Negative' },
      { cx: 550, cy: 90, r: 5, fill: '#89f5e7', stroke: '#003e2a', strokeWidth: 2, week: 'WK 36 (Oct)', value: 'Migratory Influx', clade: 'Haor Basin Sentinel' },
      { cx: 700, cy: 45, r: 5, fill: '#006a61', week: 'WK 48 (Current)', value: '98.9% HA Mapped', clade: 'Sylhet & Sunamganj' },
    ],
    vectorFocus: {
      name: 'H5N1 Clade 2.3.2.1a / 4b',
      badge: '0 Mammalian',
      description: 'Continuous HA/NA segment sequencing across Tanguar Haor wetlands and live bird markets.',
    },
    samplingDensity: {
      count: '6,190 Cloacal Swabs',
      scope: 'Wetlands & Markets',
      description: 'Real-time RT-qPCR and Oxford Nanopore MinION sequencing at migratory flyway nodes.',
    },
    biosafety: {
      level: 'BSL-3 Zoonotic Watch',
      status: 'NOMINAL',
    },
  },
};

export interface GenomicLedgerRecord {
  accession: string;
  organism: string;
  lineage: string;
  division: string;
  facility: string;
  coverage: string;
  turnaround: string;
  status: 'Verified' | 'AMR Alert' | 'GISAID Synced';
  date: string;
}

export const GENOMIC_LEDGER_RECORDS: GenomicLedgerRecord[] = [
  {
    accession: 'NGR-BD-2025-88412',
    organism: 'Dengue virus type 2',
    lineage: 'Cosmopolitan Genotype IVb',
    division: 'Dhaka South',
    facility: 'CHRF Sequencing Core',
    coverage: '142.8x',
    turnaround: '21.4 hrs',
    status: 'GISAID Synced',
    date: '2025-09-27',
  },
  {
    accession: 'NGR-BD-2025-88399',
    organism: 'Klebsiella pneumoniae',
    lineage: 'ST147 (blaNDM-1 + ompK36)',
    division: 'Gazipur',
    facility: 'NIB Savar BSL-3',
    coverage: '118.4x',
    turnaround: '28.0 hrs',
    status: 'AMR Alert',
    date: '2025-09-26',
  },
  {
    accession: 'NGR-BD-2025-88374',
    organism: 'Nipah henipavirus',
    lineage: 'NiV-BD2 (Sub-clade Rajshahi)',
    division: 'Rajshahi',
    facility: 'IEDCR Mobile MinION Lab',
    coverage: '210.5x',
    turnaround: '14.2 hrs',
    status: 'Verified',
    date: '2025-09-25',
  },
  {
    accession: 'NGR-BD-2025-88351',
    organism: 'Escherichia coli',
    lineage: 'ST410 (mcr-1.1 Plasmid IncX4)',
    division: 'Chattogram',
    facility: 'CVASU One-Health Node',
    coverage: '98.6x',
    turnaround: '31.5 hrs',
    status: 'AMR Alert',
    date: '2025-09-24',
  },
  {
    accession: 'NGR-BD-2025-88318',
    organism: 'Influenza A (H5N1)',
    lineage: 'Clade 2.3.2.1a (HA-S133A)',
    division: 'Sylhet (Tanguar Haor)',
    facility: 'NIB Regional Node 04',
    coverage: '164.0x',
    turnaround: '24.8 hrs',
    status: 'GISAID Synced',
    date: '2025-09-22',
  },
  {
    accession: 'NGR-BD-2025-88290',
    organism: 'Vibrio cholerae O1',
    lineage: 'El Tor 7PET Wave 3 (ctxB7)',
    division: 'Barishal',
    facility: 'icddr,b Enteric Genomics',
    coverage: '134.2x',
    turnaround: '19.6 hrs',
    status: 'Verified',
    date: '2025-09-20',
  },
];
