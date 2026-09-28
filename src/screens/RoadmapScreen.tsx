import React, { useState } from 'react';

export const RoadmapScreen: React.FC = () => {
  const [institution, setInstitution] = useState('');
  const [piName, setPiName] = useState('');
  const [pillar, setPillar] = useState('Pathogen Whole-Genome Surveillance');
  const [proposalTitle, setProposalTitle] = useState('');
  const [submittedGrantId, setSubmittedGrantId] = useState<string | null>(null);

  const handleGrantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!institution.trim() || !piName.trim() || !proposalTitle.trim()) return;
    const code = `MoST-BIO-2025-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedGrantId(code);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Protocol Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-xl shadow-sm">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary uppercase font-bold tracking-wider">
              INITIATIVE PROTOCOL // 05
            </span>
            <span className="text-outline-variant font-label-code text-label-code">/</span>
            <span className="font-label-code text-label-code text-secondary font-medium">
              NATIONAL BIO-POLICY 2025–2030 &amp; FELLOWSHIP GRANTS
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="font-label-code text-label-code text-on-surface uppercase tracking-widest font-semibold">
              FY 2025–26 Call for Proposals: OPEN
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto w-full px-margin-mobile md:px-margin pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left 7 Cols: 2025-2030 Horizon Milestones */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-6">
            <div>
              <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest font-bold">
                Sovereign Bio-Roadmap
              </span>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-1">
                2025–2030 National Milestones
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Decadal targets mandated by the Ministry of Science and Technology (MoST) and Directorate General of Health Services (DGHS):
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-lg bg-surface-container-low">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code text-secondary font-bold">
                    PHASE I // 2025–2026
                  </span>
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-primary font-label-code text-label-code font-bold">
                    In Execution (78%)
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mt-1">
                  100% Domestic EPI Vaccine &amp; Insulin Self-Sufficiency
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Full commissioning of Gopalganj EDCL mRNA and viral-vector fill-finish lines alongside Munshiganj API chemical synthesis park.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-surface-container-low">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code text-tertiary font-bold">
                    PHASE II // 2026–2028
                  </span>
                  <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-code text-label-code font-bold">
                    Allocated
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mt-1">
                  100,000 Bangladeshi Reference Genome Cohort (100K-BD)
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Population-scale pharmacogenomic mapping to eliminate adverse drug reactions and tailor oncology &amp; cardiac dosing for South Asian alleles.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-surface-container-low">
                <div className="flex items-center justify-between">
                  <span className="font-label-code text-label-code text-primary font-bold">
                    PHASE III // 2028–2030
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-code text-label-code">
                    Strategic Horizon
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mt-1">
                  Zero-Import Biologic &amp; Climate-Proof Delta Agriculture
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  15 dS/m hypersaline coastal crop adoption and regional export of WHO-prequalified biosimilars across South &amp; Southeast Asia.
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Interactive Grant & Specimen Application Form */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <span className="font-label-badge text-label-badge text-secondary uppercase tracking-widest font-bold">
              Get Involved // Researcher Portal
            </span>
            <h2 className="font-headline-sm text-headline-sm text-primary mt-1">
              Submit Sequencing or Grant Proposal
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-6">
              Accredited Bangladeshi universities, hospitals, and agro-research stations may apply for NGR-BD compute credits and wet-lab reagents.
            </p>

            {submittedGrantId ? (
              <div className="p-6 rounded-xl bg-surface-container-low border border-secondary space-y-3">
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined">verified</span>
                  <span className="font-label-code text-label-code uppercase font-bold">
                    Proposal Logged in MoST Registry
                  </span>
                </div>
                <div className="font-title-lg text-title-lg text-primary font-bold">
                  Docket ID: {submittedGrantId}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Principal Investigator <strong>{piName}</strong> ({institution}) has been queued for NIB Peer-Review Committee evaluation under <em>{pillar}</em>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedGrantId(null);
                    setProposalTitle('');
                  }}
                  className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-code text-label-code cursor-pointer"
                >
                  Submit Another Docket
                </button>
              </div>
            ) : (
              <form onSubmit={handleGrantSubmit} className="space-y-4">
                <div>
                  <label className="font-label-code text-label-code text-primary uppercase block mb-1">
                    Principal Investigator (PI) Name &amp; Title
                  </label>
                  <input
                    type="text"
                    required
                    value={piName}
                    onChange={(e) => setPiName(e.target.value)}
                    placeholder="Dr. Farhana Rahman, Professor of Genetics"
                    className="w-full px-3.5 py-2.5 rounded bg-surface-container-low border border-outline-variant focus:border-secondary outline-none font-body-sm text-body-sm text-on-surface"
                  />
                </div>
                <div>
                  <label className="font-label-code text-label-code text-primary uppercase block mb-1">
                    Affiliated Institution / Hospital / Hub
                  </label>
                  <input
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="University of Dhaka / BSMMU / BAU"
                    className="w-full px-3.5 py-2.5 rounded bg-surface-container-low border border-outline-variant focus:border-secondary outline-none font-body-sm text-body-sm text-on-surface"
                  />
                </div>
                <div>
                  <label className="font-label-code text-label-code text-primary uppercase block mb-1">
                    Research Pillar Directive
                  </label>
                  <select
                    value={pillar}
                    onChange={(e) => setPillar(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-surface-container-low border border-outline-variant focus:border-secondary outline-none font-body-sm text-body-sm text-on-surface"
                  >
                    <option value="Pathogen Whole-Genome Surveillance">
                      Pillar 01: Pathogen Whole-Genome Surveillance
                    </option>
                    <option value="Sovereign Vaccine & Biologics Synthesis">
                      Pillar 02: Sovereign Vaccine &amp; Biologics Synthesis
                    </option>
                    <option value="Saline & Climate-Resilient Crop Editing">
                      Pillar 03: Saline &amp; Climate-Resilient Crop Editing
                    </option>
                    <option value="Clinical Pharmacogenomics (100K-BD)">
                      Pillar 04: Clinical Pharmacogenomics (100K-BD)
                    </option>
                  </select>
                </div>
                <div>
                  <label className="font-label-code text-label-code text-primary uppercase block mb-1">
                    Project Title &amp; Requested Flow-Cell Allocation
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={proposalTitle}
                    onChange={(e) => setProposalTitle(e.target.value)}
                    placeholder="e.g., Whole-genome AMR plasmid characterization of 400 neonatal sepsis isolates in Rajshahi Division..."
                    className="w-full px-3.5 py-2.5 rounded bg-surface-container-low border border-outline-variant focus:border-secondary outline-none font-body-sm text-body-sm text-on-surface"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-on-primary font-headline-sm text-sm hover:bg-primary-container transition-colors cursor-pointer"
                >
                  Transmit Proposal to NIB &amp; MoST
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
