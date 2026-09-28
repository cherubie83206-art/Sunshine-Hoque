import React, { useState } from 'react';
import { GENOMIC_LEDGER_RECORDS, ScreenId } from '../data/portalData';

interface LedgerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GenomicLedgerModal: React.FC<LedgerModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadedAccession, setDownloadedAccession] = useState<string | null>(null);

  if (!isOpen) return null;

  const filtered = GENOMIC_LEDGER_RECORDS.filter(
    (r) =>
      r.accession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.organism.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.lineage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.division.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/50 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden border border-outline-variant/40 flex flex-col max-h-[85vh]">
        <div className="bg-primary text-on-primary px-6 py-4 flex items-center justify-between">
          <div>
            <span className="font-label-code text-label-code text-secondary-fixed uppercase block">
              NGR-BD // WHOLE-GENOME SEQUENCING ARCHIVE
            </span>
            <h3 className="font-headline-sm text-headline-sm">
              Full National Genomic Ledger (FASTA / VCF / BAM)
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-surface-container-highest/20 text-on-primary cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by accession (NGR-BD-2025...), organism, lineage, or division..."
              className="flex-1 px-4 py-2 rounded-lg bg-surface-container-low border border-outline-variant focus:border-secondary outline-none font-body-sm text-body-sm"
            />
            {downloadedAccession && (
              <span className="px-3 py-1.5 rounded-lg bg-secondary-fixed text-primary font-label-code text-label-code font-bold">
                ✓ Bundle {downloadedAccession}.vcf.gz Queued
              </span>
            )}
          </div>

          <div className="overflow-x-auto rounded-lg border border-outline-variant/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-code text-label-code uppercase">
                  <th className="py-3 px-4">Accession</th>
                  <th className="py-3 px-4">Organism &amp; Clade</th>
                  <th className="py-3 px-4">Division / Node</th>
                  <th className="py-3 px-4">Depth</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">FASTA/VCF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30 font-body-sm text-body-sm">
                {filtered.map((rec) => (
                  <tr key={rec.accession} className="hover:bg-surface-container-low/60">
                    <td className="py-3 px-4 font-label-code text-label-code text-primary font-bold whitespace-nowrap">
                      {rec.accession}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-on-surface">{rec.organism}</div>
                      <div className="font-label-code text-label-code text-on-surface-variant">
                        {rec.lineage}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-on-surface">{rec.division}</div>
                      <div className="font-label-code text-label-code text-on-surface-variant">
                        {rec.facility}
                      </div>
                    </td>
                    <td className="py-3 px-4 font-label-code text-label-code tabular-nums">
                      {rec.coverage}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded font-label-code text-label-code font-bold whitespace-nowrap ${
                          rec.status === 'AMR Alert'
                            ? 'bg-error-container text-on-error-container'
                            : 'bg-secondary-fixed text-primary'
                        }`}
                      >
                        {rec.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => setDownloadedAccession(rec.accession)}
                        className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-code text-label-code hover:bg-primary-container cursor-pointer"
                      >
                        Export
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ApiTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiTokenModal: React.FC<ApiTokenModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('researcher@nib.gov.bd');
  const [scope, setScope] = useState('Read-Only FASTA/VCF + Lineage Telemetry');
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratedToken('ngrbd_live_99482a7f1c03e88d4b2025bd_savar');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/50 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-2xl overflow-hidden border border-outline-variant/40">
        <div className="bg-primary text-on-primary px-6 py-4 flex items-center justify-between">
          <div>
            <span className="font-label-code text-label-code text-secondary-fixed uppercase block">
              NGR-BD CREDENTIAL PROVISIONING
            </span>
            <h3 className="font-headline-sm text-headline-sm">Request Institutional API Token</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-surface-container-highest/20 text-on-primary cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="font-label-code text-label-code text-primary uppercase block mb-1">
                Institutional Email (.gov.bd / .ac.bd / .edu.bd)
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded bg-surface-container-low border border-outline-variant font-body-sm text-body-sm outline-none"
              />
            </div>
            <div>
              <label className="font-label-code text-label-code text-primary uppercase block mb-1">
                Dataset Scope
              </label>
              <select
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                className="w-full px-3.5 py-2 rounded bg-surface-container-low border border-outline-variant font-body-sm text-body-sm outline-none"
              >
                <option>Read-Only FASTA/VCF + Lineage Telemetry</option>
                <option>BSL-3 Clinical Isolate Upload &amp; GISAID Relay</option>
                <option>Agro-Genomic QTL &amp; Soil Salinity Stream</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary text-on-primary font-headline-sm text-sm hover:bg-primary-container transition-colors cursor-pointer"
            >
              Provision Bearer Token
            </button>
          </form>

          {generatedToken && (
            <div className="p-4 rounded-lg bg-surface-container-low border border-secondary space-y-2">
              <span className="font-label-code text-label-code text-secondary uppercase font-bold block">
                Active Bearer Token Generated:
              </span>
              <code className="block p-2 rounded bg-surface-container-lowest font-label-code text-label-code text-primary break-all">
                {generatedToken}
              </code>
              <span className="font-body-sm text-body-sm text-on-surface-variant block">
                Endpoint: https://api.ngr.gov.bd/v2/isolates
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface EthicsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BioEthicsModal: React.FC<EthicsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/50 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest w-full max-w-xl rounded-xl shadow-2xl overflow-hidden border border-outline-variant/40">
        <div className="bg-primary text-on-primary px-6 py-4 flex items-center justify-between">
          <div>
            <span className="font-label-code text-label-code text-secondary-fixed uppercase block">
              BMRC · NIB · NAGOYA PROTOCOL
            </span>
            <h3 className="font-headline-sm text-headline-sm">
              National Bio-Ethics &amp; Data Governance Charter
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-surface-container-highest/20 text-on-primary cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 space-y-4 font-body-sm text-body-sm text-on-surface-variant">
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h4 className="font-title-lg text-title-lg text-primary font-bold">
              1. Patient De-Identification &amp; Clinical Privacy
            </h4>
            <p className="mt-1">
              All clinical biospecimens sequenced under IEDCR, CHRF, and NIB protocols strip personally identifiable metadata at the point of collection, retaining only Upazila-level epidemiological coordinates.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h4 className="font-title-lg text-title-lg text-primary font-bold">
              2. Sovereign Genetic Resource Protection
            </h4>
            <p className="mt-1">
              In compliance with the Nagoya Protocol and Bangladesh Biodiversity Act, indigenous crop germplasm (Saline Rice, Tossa Jute) and local pathogen isolates remain sovereign property of the People’s Republic of Bangladesh.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-container-low">
            <h4 className="font-title-lg text-title-lg text-primary font-bold">
              3. Dual-Use &amp; BSL-3 Biosecurity Auditing
            </h4>
            <p className="mt-1">
              High-consequence pathogens (Nipah virus, H5N1, carbapenem-resistant Enterobacterales) require two-person cryptographic authorization for raw FASTQ download.
            </p>
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-primary text-on-primary font-headline-sm text-sm cursor-pointer"
            >
              Acknowledge Charter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const SearchPortalModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks: { title: string; subtitle: string; screen: ScreenId }[] = [
    {
      title: 'Dengue DENV-2/3 Cosmopolitan Clade Telemetry',
      subtitle: 'Healthcare & DNA // Surveillance Pillar 01',
      screen: 'healthcare-and-dna',
    },
    {
      title: 'Gopalganj EDCL mRNA & Viral-Vector Vaccine Facility',
      subtitle: 'Healthcare & DNA // Sovereignty Pillar 02',
      screen: 'healthcare-and-dna',
    },
    {
      title: 'BRRI dhan97 & dhan99 Saltol Coastal Rice Cultivars',
      subtitle: 'Agriculture & Environment // Protocol 02',
      screen: 'agriculture-and-environment',
    },
    {
      title: 'National Institute of Biotechnology (NIB) Savar BSL-3 Core',
      subtitle: 'Research Hubs // Protocol 04',
      screen: 'research-hubs',
    },
    {
      title: 'FY 2025–26 MoST Biotechnology Fellowship & Sequencing Grants',
      subtitle: 'Roadmap & Get Involved // Protocol 05',
      screen: 'roadmap-and-get-involved',
    },
  ].filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-on-surface/50 backdrop-blur-sm p-4 pt-24">
      <div className="bg-surface-container-lowest w-full max-w-xl rounded-xl shadow-2xl overflow-hidden border border-outline-variant/40">
        <div className="p-4 border-b border-outline-variant/30 flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search isolates, pathogens, rice cultivars, BSL hubs, or grants..."
            className="flex-1 bg-transparent outline-none font-body-md text-body-md text-on-surface"
          />
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded bg-surface-container-high font-label-code text-label-code text-on-surface-variant cursor-pointer"
          >
            ESC
          </button>
        </div>
        <div className="p-3 divide-y divide-outline-variant/20 max-h-80 overflow-y-auto">
          {quickLinks.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => {
                onNavigate(item.screen);
                onClose();
              }}
              className="w-full text-left p-3 rounded-lg hover:bg-surface-container-low flex items-center justify-between transition-colors cursor-pointer"
            >
              <div>
                <div className="font-title-lg text-sm text-primary font-bold">{item.title}</div>
                <div className="font-label-code text-label-code text-on-surface-variant">
                  {item.subtitle}
                </div>
              </div>
              <span className="material-symbols-outlined text-secondary text-base">
                arrow_forward
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
