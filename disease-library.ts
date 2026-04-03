import { DiseaseProfile } from './types';

export const EXTENDED_LIBRARY: DiseaseProfile[] = [
  {
    id: 'ida',
    name: 'Iron Deficiency Anemia',
    description: 'Common anemia caused by insufficient iron. Features microcytic, hypochromic cells.',
    type: 'Anemia',
    template: {
      diseaseName: 'Iron Deficiency Anemia',
      severity: 'Moderate',
      probability: 94.5,
      confidenceScore: 95,
      clinicalNotes: 'Patient clinical presentation and smear morphology align with microcytic anemia. Reduced hemoglobin synthesis evident.',
      morphologySummary: 'Microcytic RBCs with increased central pallor (hypochromia). Occasional pencil cells.',
      geneticMarkers: ['TMPRSS6-Var'],
      geneSequences: [
         { 
           gene: 'TMPRSS6', 
           location: 'Chromosome 22q12.3', 
           sequence: 'CCGGTACCGGTTTAAAGCTCGCTAGCTAGCTAGCATCGATCGATGCGCGCGCGATCGATCGTAGCTAGCTAGCTAGC',
           mutation: { pos: 30, from: 'C', to: 'T', type: 'SNP', desc: 'Common variant associated with iron levels' }
         }
      ],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 9.1, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'MCV', unit: 'fL', value: 72, range: '80-100', status: 'ABNORMAL' },
        { name: 'MCHC', unit: 'g/dL', value: 29, range: '32-36', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 5, plateletCount: 22, morphology: 'microcytic', cellColor: '#f87171' }, 
      stats: { totalCells: 810, normalCells: 210, abnormalCells: 600, mutationsFound: 1 }
    }
  },
  {
    id: 'sca',
    name: 'Sickle Cell Anemia',
    description: 'Genetic blood disorder characterized by sickle-shaped red blood cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'Sickle Cell Disease (HbSS)',
      severity: 'High',
      probability: 98.2,
      confidenceScore: 98,
      clinicalNotes: 'Homozygous for Hemoglobin S. Chronic hemolytic anemia signs present.',
      morphologySummary: 'Significant poikilocytosis with sickled forms and target cells.',
      geneticMarkers: ['HBB-Glu6Val', 'HbS-VAR'],
      geneSequences: [
         { 
           gene: 'HBB (Beta-globin)', 
           location: 'Chromosome 11p15.4', 
           sequence: 'GAGGCTTTTTCAGACAACTAGGTGTGACGGAGCGGCGGAATTTCCGAGTCAGGGGGGTTCTCGAAGAGGGCTCACAGTTACACTTC',
           mutation: { pos: 20, from: 'A', to: 'T', type: 'substitution', desc: 'Glu6Val Mutation' }
         },
         {
           gene: 'TP53 (Tumor protein)',
           location: 'Chromosome 17p13.1',
           sequence: 'AATACGGGGTCCCTCCCGCATAACTAACCAAATTCAACGGTGCTCCGGGAACCGGTAGGGTCGCAACATTACACTTCTCCAGGGAC'
         }
      ],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 8.2, range: '13.5-17.5', status: 'CRITICAL' },
        { name: 'Reticulocytes', unit: '%', value: 12.0, range: '0.5-2.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 8, plateletCount: 20, morphology: 'sickle', cellColor: '#dc2626' },
      stats: { totalCells: 642, normalCells: 410, abnormalCells: 232, mutationsFound: 1 }
    }
  },
  {
    id: 'aml',
    name: 'Acute Myeloid Leukemia',
    description: 'Aggressive cancer of the myeloid line of blood cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Acute Myeloid Leukemia (AML)',
      severity: 'Critical',
      probability: 89.1,
      confidenceScore: 90,
      clinicalNotes: 'Peripheral smear shows circulating blasts (>20%). Auer rods visualized in blast cytoplasm. Urgent referral required.',
      morphologySummary: 'Leukocytosis with presence of large, immature blast cells. Thrombocytopenia observed.',
      geneticMarkers: ['FLT3-ITD', 'NPM1-mut'],
      geneSequences: [
         { 
           gene: 'FLT3', 
           location: 'Chromosome 13q12', 
           sequence: 'GCTAGCGCTAGCGCTAGCGCTAGCGGCTAGCGCTAGC...ITD...GCTAGCGCTAGCGCTAGC',
           mutation: { pos: 25, from: 'G', to: 'DUP', type: 'duplication', desc: 'Internal Tandem Duplication' }
         },
         {
           gene: 'IDH1',
           location: 'Chromosome 2q34',
           sequence: 'ATGATGATGATGATGATGATGATGCCCATGATGATGATGATG',
           mutation: { pos: 15, from: 'C', to: 'T', type: 'substitution', desc: 'R132H Mutation' }
         }
      ],
      parameters: [
        { name: 'White Blood Cells', unit: 'K/mcL', value: 35.4, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Blast Count', unit: '%', value: 42, range: '0', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 45, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 120, wbcCount: 60, plateletCount: 5, morphology: 'blast', cellColor: '#991b1b' },
      stats: { totalCells: 900, normalCells: 600, abnormalCells: 300, mutationsFound: 2 }
    }
  },
  {
    id: 'all',
    name: 'Acute Lymphoblastic Leukemia',
    description: 'Aggressive cancer of the lymphoid line of blood cells, common in children.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Acute Lymphoblastic Leukemia (ALL)',
      severity: 'Critical',
      probability: 91.5,
      confidenceScore: 92,
      clinicalNotes: 'Peripheral smear shows circulating lymphoblasts. High WBC count and anemia. Pediatric patient profile.',
      morphologySummary: 'Leukocytosis with presence of small to medium-sized lymphoblasts. Scant cytoplasm and inconspicuous nucleoli.',
      geneticMarkers: ['BCR-ABL1', 'ETV6-RUNX1'],
      geneSequences: [
         { 
           gene: 'ETV6', 
           location: 'Chromosome 12p13', 
           sequence: 'GCTAGCGCTAGCGCTAGCGCTAGCGGCTAGCGCTAGC...TRANS...GCTAGCGCTAGCGCTAGC',
           mutation: { pos: 30, from: 'G', to: 'T', type: 'translocation', desc: 'ETV6-RUNX1 Fusion' }
         }
      ],
      parameters: [
        { name: 'White Blood Cells', unit: 'K/mcL', value: 45.2, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Lymphoblasts', unit: '%', value: 55, range: '0', status: 'CRITICAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 7.8, range: '13.5-17.5', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 110, wbcCount: 70, plateletCount: 8, morphology: 'blast', cellColor: '#991b1b' },
      stats: { totalCells: 920, normalCells: 400, abnormalCells: 520, mutationsFound: 1 }
    }
  },
  {
    id: 'mono',
    name: 'Infectious Mononucleosis',
    description: 'Viral illness (EBV) causing fever, sore throat, and lymphadenopathy, with characteristic atypical lymphocytes.',
    type: 'Infection',
    template: {
      diseaseName: 'Infectious Mononucleosis (EBV)',
      severity: 'Moderate',
      probability: 97.2,
      confidenceScore: 98,
      clinicalNotes: 'Lymphocytosis with a significant percentage of atypical (reactive) lymphocytes. Patient presents with classic triad of fever, pharyngitis, and lymphadenopathy. Monospot test would likely be positive.',
      morphologySummary: 'Large, reactive lymphocytes (Downey cells) with abundant, basophilic cytoplasm, often indented by adjacent red blood cells.',
      geneticMarkers: ['EBV-Positive', 'Heterophile-Ab'],
      geneSequences: [
         { 
           gene: 'EBNA-1', 
           location: 'EBV Genome', 
           sequence: 'AGATGACGAGGACGAGGAGGAGGAGGAGGAGGAGGAGACGGGGTCAGGGTCTCAGGTCAAGGTCAGGGTCACGGTCAGGGTCACAGT'
         }
      ],
      parameters: [
        { name: 'White Blood Cells', unit: 'K/mcL', value: 16.5, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Lymphocytes', unit: '%', value: 65, range: '20-40', status: 'ABNORMAL' },
        { name: 'Atypical Lymphs', unit: '%', value: 22, range: '<5', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 25, plateletCount: 18, morphology: 'infected', cellColor: '#60a5fa' }, // Use 'infected' for visual, but with a different color
      stats: { totalCells: 890, normalCells: 750, abnormalCells: 140, mutationsFound: 0 } // Viral, no host mutation
    }
  },
  {
    id: 'mal',
    name: 'Malaria (P. Falciparum)',
    description: 'Parasitic infection of red blood cells transmitted by Anopheles mosquitoes.',
    type: 'Infection',
    template: {
      diseaseName: 'Malaria (Plasmodium Falciparum)',
      severity: 'High',
      probability: 99.1,
      confidenceScore: 99,
      clinicalNotes: 'Positive rapid diagnostic test. Blood film reveals intracellular ring-form trophozoites within erythrocytes. High parasitemia.',
      morphologySummary: 'Normocytic anemia. Presence of intra-erythrocytic ring forms (headphones sign) and occasional gametocytes.',
      geneticMarkers: ['PF-Resist-Marker'],
      geneSequences: [
         { 
           gene: 'PfKelch13', 
           location: 'Parasite Genome', 
           sequence: 'ATCGATCGATCGATCGGGGGTTTTAAAACCCCTTTGGGAAATTTCCCGGGAAATTTAAACCCGGGTTT',
           mutation: { pos: 40, from: 'C', to: 'Y', type: 'missense', desc: 'C580Y (Artemisinin Resistance)' }
         }
      ],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 10.5, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 90, range: '150-450', status: 'ABNORMAL' },
        { name: 'Parasitemia', unit: '%', value: 2.5, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 12, plateletCount: 10, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 750, normalCells: 650, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'healthy-control',
    name: 'Healthy Control',
    description: 'A normal blood sample with no detected pathologies.',
    type: 'Healthy',
    template: {
      diseaseName: 'Healthy Control',
      severity: 'Low',
      probability: 100,
      confidenceScore: 99,
      clinicalNotes: 'All parameters within normal physiological ranges. No morphological abnormalities detected.',
      morphologySummary: 'Normal RBC, WBC, and platelet morphology.',
      geneticMarkers: [],
      geneSequences: [],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 14.5, range: '13.5-17.5', status: 'NORMAL' },
        { name: 'WBC', unit: 'K/mcL', value: 7.2, range: '4.5-11.0', status: 'NORMAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 250, range: '150-450', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 0 },
      diseaseAnalysis: {
        pathophysiology: "Normal physiological state. Homeostasis is maintained.",
        epidemiology: "Standard baseline for healthy individuals.",
        standardOfCare: ["Routine annual checkups", "Balanced diet", "Regular exercise"],
        recentResearch: ["Studies on longevity and baseline health markers"]
      }
    }
  },
  {
    id: 'hemophilia-a',
    name: 'Hemophilia A',
    description: 'A genetic bleeding disorder caused by a deficiency in clotting factor VIII.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hemophilia A',
      severity: 'High',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 'Factor VIII deficiency. Prolonged PTT with normal PT and platelet count.',
      morphologySummary: 'Normal blood cell morphology. Diagnosis based on factor assay.',
      geneticMarkers: ['F8 Mutation'],
      geneSequences: [{ gene: 'F8', location: 'Xq28', sequence: 'GATC...', mutation: { pos: 124, from: 'C', to: 'T', type: 'SNP', desc: 'Factor VIII Deficiency' } }],
      parameters: [
        { name: 'Factor VIII', unit: '%', value: 2, range: '50-150', status: 'CRITICAL' },
        { name: 'PTT', unit: 'sec', value: 85, range: '25-35', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 },
      diseaseAnalysis: {
        pathophysiology: "Deficiency of clotting factor VIII leads to impaired thrombin generation and defective fibrin clot formation.",
        epidemiology: "X-linked recessive disorder affecting approximately 1 in 5,000 male births worldwide.",
        standardOfCare: ["Factor VIII replacement therapy", "Emicizumab (prophylaxis)", "Desmopressin for mild cases"],
        recentResearch: ["Gene therapy (AAV-mediated) for long-term factor expression", "Non-factor replacement therapies"]
      }
    }
  },
  {
    id: 'hemophilia-b',
    name: 'Hemophilia B',
    description: 'A genetic bleeding disorder caused by a deficiency in clotting factor IX (Christmas disease).',
    type: 'Genetic',
    template: {
      diseaseName: 'Hemophilia B',
      severity: 'High',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 'Factor IX deficiency. Prolonged PTT with normal PT and platelet count.',
      morphologySummary: 'Normal blood cell morphology. Diagnosis based on factor assay.',
      geneticMarkers: ['F9 Mutation'],
      geneSequences: [{ gene: 'F9', location: 'Xq27.1', sequence: 'TTAG...', mutation: { pos: 88, from: 'G', to: 'A', type: 'SNP', desc: 'Factor IX Deficiency' } }],
      parameters: [
        { name: 'Factor IX', unit: '%', value: 4, range: '50-150', status: 'CRITICAL' },
        { name: 'PTT', unit: 'sec', value: 78, range: '25-35', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 },
      diseaseAnalysis: {
        pathophysiology: "Deficiency of clotting factor IX leads to disruption of the intrinsic pathway of coagulation.",
        epidemiology: "X-linked recessive disorder affecting approximately 1 in 25,000 male births.",
        standardOfCare: ["Factor IX replacement therapy", "Prophylactic infusions", "Gene therapy (recently FDA approved)"],
        recentResearch: ["Extended half-life factor products", "RNA interference therapies"]
      }
    }
  },
  {
    id: 'thalassemia-beta',
    name: 'Beta Thalassemia',
    description: 'A blood disorder that reduces the production of hemoglobin, leading to anemia.',
    type: 'Genetic',
    template: {
      diseaseName: 'Beta Thalassemia',
      severity: 'Moderate',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Microcytic anemia with target cells and basophilic stippling. Elevated HbA2.',
      morphologySummary: 'Microcytosis, hypochromia, target cells, and occasional nucleated RBCs.',
      geneticMarkers: ['HBB Mutation'],
      geneSequences: [{ gene: 'HBB', location: '11p15.4', sequence: 'CCAA...', mutation: { pos: 22, from: 'G', to: 'A', type: 'SNP', desc: 'Beta-Globin Mutation' } }],
      parameters: [
        { name: 'HbA2', unit: '%', value: 5.2, range: '1.5-3.5', status: 'ABNORMAL' },
        { name: 'MCV', unit: 'fL', value: 62, range: '80-100', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 220, wbcCount: 8, plateletCount: 30, morphology: 'microcytic', cellColor: '#fca5a5' },
      stats: { totalCells: 1000, normalCells: 400, abnormalCells: 600, mutationsFound: 1 },
      diseaseAnalysis: {
        pathophysiology: "Reduced synthesis of beta-globin chains leads to an imbalance with alpha-chains, causing ineffective erythropoiesis and hemolysis.",
        epidemiology: "High prevalence in Mediterranean, Middle Eastern, and Southeast Asian populations.",
        standardOfCare: ["Regular blood transfusions", "Iron chelation therapy", "Luspatercept", "Bone marrow transplant"],
        recentResearch: ["CRISPR/Cas9 gene editing (exagamglogene autotemcel)", "Base editing technologies"]
      }
    }
  },
  {
    id: 'polycythemia-vera',
    name: 'Polycythemia Vera',
    description: 'A slow-growing blood cancer in which your bone marrow makes too many red blood cells.',
    type: 'Oncology',
    template: {
      diseaseName: 'Polycythemia Vera',
      severity: 'High',
      probability: 96,
      confidenceScore: 94,
      clinicalNotes: 'JAK2 mutation present in >95% of cases. Elevated hematocrit and hemoglobin.',
      morphologySummary: 'Hypercellular bone marrow. Increased RBC mass.',
      geneticMarkers: ['JAK2 V617F'],
      geneSequences: [{ gene: 'JAK2', location: '9p24.1', sequence: 'GTGC...', mutation: { pos: 617, from: 'V', to: 'F', type: 'SNP', desc: 'JAK2 V617F Mutation' } }],
      parameters: [
        { name: 'Hematocrit', unit: '%', value: 58, range: '37-52', status: 'CRITICAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 19.5, range: '12-17', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 350, wbcCount: 12, plateletCount: 55, morphology: 'normal', cellColor: '#b91c1c' },
      stats: { totalCells: 1500, normalCells: 500, abnormalCells: 1000, mutationsFound: 1 }
    }
  },
  {
    id: 'essential-thrombocythemia',
    name: 'Essential Thrombocythemia',
    description: 'A rare disorder in which your body produces too many blood platelets.',
    type: 'Oncology',
    template: {
      diseaseName: 'Essential Thrombocythemia',
      severity: 'Moderate',
      probability: 94,
      confidenceScore: 91,
      clinicalNotes: 'Platelet count > 450,000. JAK2, CALR, or MPL mutations common.',
      morphologySummary: 'Large, atypical platelets. Megakaryocyte hyperplasia.',
      geneticMarkers: ['CALR Mutation'],
      geneSequences: [{ gene: 'CALR', location: '19p13.2', sequence: 'AGGC...', mutation: { pos: 52, from: 'Del', to: 'Ins', type: 'Indel', desc: 'CALR Type 1 Mutation' } }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 850, range: '150-450', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 10.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 9, plateletCount: 120, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1100, normalCells: 600, abnormalCells: 500, mutationsFound: 1 }
    }
  },
  {
    id: 'myelofibrosis',
    name: 'Myelofibrosis',
    description: 'A serious bone marrow cancer that disrupts your body\'s normal production of blood cells.',
    type: 'Oncology',
    template: {
      diseaseName: 'Myelofibrosis',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 89,
      clinicalNotes: 'Teardrop RBCs (dacrocytes) and leukoerythroblastic blood picture.',
      morphologySummary: 'Extensive bone marrow fibrosis. Splenomegaly common.',
      geneticMarkers: ['MPL W515L'],
      geneSequences: [{ gene: 'MPL', location: '1p34.2', sequence: 'TGGC...', mutation: { pos: 515, from: 'W', to: 'L', type: 'SNP', desc: 'MPL Mutation' } }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 8.5, range: '12-17', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 15.2, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 18, plateletCount: 15, morphology: 'schistocyte', cellColor: '#f87171' },
      stats: { totalCells: 950, normalCells: 300, abnormalCells: 650, mutationsFound: 1 }
    }
  },
  {
    id: 'multiple-myeloma',
    name: 'Multiple Myeloma',
    description: 'A cancer that forms in a type of white blood cell called a plasma cell.',
    type: 'Oncology',
    template: {
      diseaseName: 'Multiple Myeloma',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 93,
      clinicalNotes: 'M-protein spike on electrophoresis. Rouleaux formation on blood smear.',
      morphologySummary: 'Plasma cells > 10% in bone marrow. Bone lesions common.',
      geneticMarkers: ['t(11;14)'],
      geneSequences: [{ gene: 'CCND1', location: '11q13.3', sequence: 'CCGG...', mutation: { pos: 1, from: 'CCND1', to: 'IGH', type: 'Translocation', desc: 'CCND1/IGH Translocation' } }],
      parameters: [
        { name: 'Calcium', unit: 'mg/dL', value: 11.5, range: '8.5-10.2', status: 'ABNORMAL' },
        { name: 'Creatinine', unit: 'mg/dL', value: 2.1, range: '0.7-1.3', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 6, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1000, normalCells: 700, abnormalCells: 300, mutationsFound: 1 }
    }
  },
  {
    id: 'lymphoma-hodgkin',
    name: 'Hodgkin Lymphoma',
    description: 'A cancer of the immune system that is marked by the presence of Reed-Sternberg cells.',
    type: 'Oncology',
    template: {
      diseaseName: 'Hodgkin Lymphoma',
      severity: 'High',
      probability: 94,
      confidenceScore: 91,
      clinicalNotes: 'Presence of Reed-Sternberg cells. Often presents with painless lymphadenopathy.',
      morphologySummary: 'Reed-Sternberg cells (owl-eye appearance) in lymph node biopsy.',
      geneticMarkers: ['CD15+', 'CD30+'],
      geneSequences: [{ gene: 'TNFRSF8', location: '1p36.22', sequence: 'GCAA...', mutation: { pos: 1, from: 'Normal', to: 'Overexpressed', type: 'Expression', desc: 'CD30 Overexpression' } }],
      parameters: [
        { name: 'ESR', unit: 'mm/hr', value: 45, range: '0-20', status: 'ABNORMAL' },
        { name: 'LDH', unit: 'U/L', value: 350, range: '140-280', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 11, plateletCount: 28, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1000, normalCells: 800, abnormalCells: 200, mutationsFound: 0 }
    }
  },
  {
    id: 'lymphoma-non-hodgkin',
    name: 'Non-Hodgkin Lymphoma',
    description: 'A diverse group of blood cancers that include any kind of lymphoma except Hodgkin lymphoma.',
    type: 'Oncology',
    template: {
      diseaseName: 'Non-Hodgkin Lymphoma',
      severity: 'High',
      probability: 93,
      confidenceScore: 90,
      clinicalNotes: 'Diverse group of B-cell or T-cell malignancies. Lymphadenopathy and systemic symptoms.',
      morphologySummary: 'Atypical lymphocytes. Diffuse or follicular patterns in nodes.',
      geneticMarkers: ['t(14;18)'],
      geneSequences: [{ gene: 'BCL2', location: '18q21.33', sequence: 'TTGC...', mutation: { pos: 1, from: 'BCL2', to: 'IGH', type: 'Translocation', desc: 'BCL2/IGH Translocation' } }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 420, range: '140-280', status: 'ABNORMAL' },
        { name: 'WBC', unit: 'K/mcL', value: 12.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 185, wbcCount: 14, plateletCount: 26, morphology: 'leukemia', cellColor: '#ef4444' },
      stats: { totalCells: 1000, normalCells: 750, abnormalCells: 250, mutationsFound: 1 }
    }
  },
  {
    id: 'dengue',
    name: 'Dengue Fever',
    description: 'Viral infection transmitted by Aedes mosquitoes, causing severe drop in platelets.',
    type: 'Infection',
    template: {
      diseaseName: 'Dengue Fever',
      severity: 'Moderate',
      probability: 94,
      confidenceScore: 90,
      clinicalNotes: 'Severe thrombocytopenia and leukopenia. Atypical lymphocytes may be present.',
      morphologySummary: 'Atypical lymphocytes (Downey cells) and significant platelet reduction.',
      geneticMarkers: ['DENV-RNA'],
      geneSequences: [{ gene: 'NS1', location: 'Dengue Genome', sequence: 'ATGC...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 45, range: '150-450', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 2.8, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 3, plateletCount: 5, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 800, abnormalCells: 80, mutationsFound: 0 }
    }
  },
  {
    id: 'cml',
    name: 'Chronic Myeloid Leukemia',
    description: 'Myeloproliferative neoplasm characterized by the Philadelphia chromosome.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Chronic Myeloid Leukemia (CML)',
      severity: 'Moderate',
      probability: 97,
      confidenceScore: 95,
      clinicalNotes: 'Marked leukocytosis with "garden party" appearance (all stages of myeloid maturation).',
      morphologySummary: 'Increased myelocytes, metamyelocytes, and basophilia.',
      geneticMarkers: ['BCR-ABL1'],
      geneSequences: [{ gene: 'BCR-ABL1', location: 't(9;22)', sequence: 'GGTG...', mutation: { pos: 1, from: 'BCR', to: 'ABL1', type: 'Translocation', desc: 'Philadelphia Chromosome' } }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 150, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Basophils', unit: '%', value: 8, range: '0-2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 50, plateletCount: 45, morphology: 'leukemia', cellColor: '#ef4444' },
      stats: { totalCells: 1200, normalCells: 300, abnormalCells: 900, mutationsFound: 1 }
    }
  },
  {
    id: 'malaria_pf',
    name: 'Malaria (P. falciparum)',
    description: 'Severe parasitic infection of red blood cells by Plasmodium falciparum.',
    type: 'Infection',
    template: {
      diseaseName: 'Malaria (P. falciparum)',
      severity: 'Critical',
      probability: 96,
      confidenceScore: 94,
      clinicalNotes: 'Ring forms (trophozoites) seen in RBCs. Multiple infections per cell common.',
      morphologySummary: 'Delicate ring forms, appliqué forms, and crescent-shaped gametocytes.',
      geneticMarkers: ['Plasmodium-DNA'],
      geneSequences: [{ gene: '18S rRNA', location: 'P. falciparum Genome', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Parasitemia', unit: '%', value: 5.5, range: '<0.1', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 65, range: '150-450', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 8, plateletCount: 10, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 0 }
    }
  },
  {
    id: 'sc_trait',
    name: 'Sickle Cell Trait',
    description: 'Heterozygous state (HbAS) where the individual carries one sickle gene but usually has no symptoms.',
    type: 'Genetic',
    template: {
      diseaseName: 'Sickle Cell Trait (HbAS)',
      severity: 'Low',
      probability: 99,
      confidenceScore: 98,
      clinicalNotes: 'Usually asymptomatic. Target cells may be seen. Sickling only under extreme hypoxia.',
      morphologySummary: 'Mostly normal RBCs, occasional target cells. No sickle cells under normal conditions.',
      geneticMarkers: ['HBB-Glu6Val-Het'],
      geneSequences: [{ gene: 'HBB', location: '11p15.4', sequence: 'ACTC...', mutation: { pos: 6, from: 'A', to: 'T', type: 'SNP', desc: 'Heterozygous HbS' } }],
      parameters: [
        { name: 'HbS', unit: '%', value: 35, range: '0', status: 'ABNORMAL' },
        { name: 'HbA', unit: '%', value: 60, range: '95-98', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 940, abnormalCells: 10, mutationsFound: 1 }
    }
  },
  {
    id: 'b12',
    name: 'Vitamin B12 Deficiency Anemia',
    description: 'Megaloblastic anemia caused by low B12 levels, often due to pernicious anemia or diet.',
    type: 'Anemia',
    template: {
      diseaseName: 'Vitamin B12 Deficiency',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Megaloblastic changes in bone marrow. Hypersegmented neutrophils on smear.',
      morphologySummary: 'Macrocytic RBCs (MCV > 100), hypersegmented neutrophils.',
      geneticMarkers: ['GIF-mut'],
      geneSequences: [{ gene: 'GIF', location: '11q13', sequence: 'ATCG...' }],
      parameters: [
        { name: 'MCV', unit: 'fL', value: 115, range: '80-100', status: 'ABNORMAL' },
        { name: 'B12', unit: 'pg/mL', value: 120, range: '200-900', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 4, plateletCount: 15, morphology: 'elliptocyte', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 400, abnormalCells: 400, mutationsFound: 1 }
    }
  },
  {
    id: 'folate',
    name: 'Folate Deficiency Anemia',
    description: 'Megaloblastic anemia similar to B12 deficiency but caused by low folic acid.',
    type: 'Anemia',
    template: {
      diseaseName: 'Folate Deficiency',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Similar to B12 but without neurological symptoms. Often seen in alcohol use or poor diet.',
      morphologySummary: 'Macro-ovalocytes and hypersegmented neutrophils.',
      geneticMarkers: ['MTHFR-C677T'],
      geneSequences: [{ gene: 'MTHFR', location: '1p36.22', sequence: 'GCTC...', mutation: { pos: 10, from: 'C', to: 'T', type: 'SNP', desc: 'C677T variant' } }],
      parameters: [
        { name: 'Folate', unit: 'ng/mL', value: 2.1, range: '3-17', status: 'CRITICAL' },
        { name: 'MCV', unit: 'fL', value: 110, range: '80-100', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 5, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 420, abnormalCells: 400, mutationsFound: 1 }
    }
  },
  {
    id: 'aplastic',
    name: 'Aplastic Anemia',
    description: 'Rare condition where the body stops producing enough new blood cells.',
    type: 'Anemia',
    template: {
      diseaseName: 'Aplastic Anemia',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Pancytopenia with hypocellular bone marrow. Fat replacement of marrow.',
      morphologySummary: 'Normocytic, normochromic RBCs but severely reduced in number.',
      geneticMarkers: ['TERT-mut'],
      geneSequences: [{ gene: 'TERT', location: '5p15.33', sequence: 'GGCC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 1.2, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 15, range: '150-450', status: 'CRITICAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 6.5, range: '13.5-17.5', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 50, wbcCount: 1, plateletCount: 2, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 300, normalCells: 280, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'g6pd',
    name: 'G6PD Deficiency',
    description: 'Genetic disorder that causes red blood cells to break down in response to certain triggers.',
    type: 'Genetic',
    template: {
      diseaseName: 'G6PD Deficiency',
      severity: 'Moderate',
      probability: 91,
      confidenceScore: 88,
      clinicalNotes: 'Heinz bodies and bite cells seen during oxidative stress episodes.',
      morphologySummary: 'Bite cells (degmacytes) and blister cells.',
      geneticMarkers: ['G6PD-Mediterranean'],
      geneSequences: [{ gene: 'G6PD', location: 'Xq28', sequence: 'AGCT...', mutation: { pos: 25, from: 'C', to: 'T', type: 'SNP', desc: 'Mediterranean variant' } }],
      parameters: [
        { name: 'G6PD Activity', unit: 'U/g Hb', value: 0.8, range: '7-10', status: 'CRITICAL' },
        { name: 'Bilirubin', unit: 'mg/dL', value: 2.5, range: '0.1-1.2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 7, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'all',
    name: 'Acute Lymphoblastic Leukemia',
    description: 'Fast-growing cancer of the white blood cells, common in children.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Acute Lymphoblastic Leukemia (ALL)',
      severity: 'Critical',
      probability: 94,
      confidenceScore: 90,
      clinicalNotes: 'High blast count in marrow. T-cell or B-cell lineage.',
      morphologySummary: 'Small to medium blasts with scant cytoplasm and inconspicuous nucleoli.',
      geneticMarkers: ['BCR-ABL1', 'ETV6-RUNX1'],
      geneSequences: [{ gene: 'BCR-ABL1', location: 't(9;22)', sequence: 'CCGG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 45.0, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Blasts', unit: '%', value: 85, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 100, wbcCount: 70, plateletCount: 8, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 920, normalCells: 120, abnormalCells: 800, mutationsFound: 2 }
    }
  },
  {
    id: 'cml',
    name: 'Chronic Myeloid Leukemia',
    description: 'Slow-growing cancer of the bone marrow, characterized by the Philadelphia chromosome.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Chronic Myeloid Leukemia (CML)',
      severity: 'High',
      probability: 97,
      confidenceScore: 95,
      clinicalNotes: 'Philadelphia chromosome t(9;22) present in >95% of cases.',
      morphologySummary: 'Full spectrum of myeloid cells (myelocytes, metamyelocytes, bands).',
      geneticMarkers: ['BCR-ABL1 (p210)'],
      geneSequences: [{ gene: 'BCR', location: '22q11', sequence: 'GATC...' }, { gene: 'ABL1', location: '9q34', sequence: 'TTAG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 150.0, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Basophils', unit: '%', value: 8, range: '0-2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 90, plateletCount: 40, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1100, normalCells: 300, abnormalCells: 800, mutationsFound: 1 }
    }
  },
  {
    id: 'hairy',
    name: 'Hairy Cell Leukemia',
    description: 'Rare, slow-growing cancer of the blood in which the bone marrow makes too many B cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Hairy Cell Leukemia',
      severity: 'High',
      probability: 85,
      confidenceScore: 82,
      clinicalNotes: 'Characteristic "hairy" projections on B-lymphocytes. BRAF V600E mutation common.',
      morphologySummary: 'Lymphocytes with fine, hair-like cytoplasmic projections.',
      geneticMarkers: ['BRAF-V600E'],
      geneSequences: [{ gene: 'BRAF', location: '7q34', sequence: 'TGAC...', mutation: { pos: 600, from: 'V', to: 'E', type: 'substitution', desc: 'V600E' } }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 2.5, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Monocytes', unit: '%', value: 0, range: '2-8', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 3, plateletCount: 12, morphology: 'infected', cellColor: '#8b5cf6' },
      stats: { totalCells: 780, normalCells: 600, abnormalCells: 180, mutationsFound: 1 }
    }
  },
  {
    id: 'myeloma',
    name: 'Multiple Myeloma',
    description: 'Cancer that forms in a type of white blood cell called a plasma cell.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Multiple Myeloma',
      severity: 'High',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'CRAB features: Calcium elevation, Renal insufficiency, Anemia, Bone lesions.',
      morphologySummary: 'Rouleaux formation of RBCs due to high protein. Plasma cells in marrow.',
      geneticMarkers: ['t(11;14)', 'del(17p)'],
      geneSequences: [{ gene: 'FGFR3', location: '4p16.3', sequence: 'CCAA...' }],
      parameters: [
        { name: 'Calcium', unit: 'mg/dL', value: 11.5, range: '8.5-10.2', status: 'ABNORMAL' },
        { name: 'Creatinine', unit: 'mg/dL', value: 2.1, range: '0.7-1.3', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 6, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 700, abnormalCells: 140, mutationsFound: 1 }
    }
  },
  {
    id: 'hemo_a',
    name: 'Hemophilia A',
    description: 'Genetic disorder caused by missing or defective factor VIII, a clotting protein.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hemophilia A',
      severity: 'High',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 'Prolonged aPTT, normal PT and platelet count. Factor VIII activity low.',
      morphologySummary: 'Normal blood smear morphology.',
      geneticMarkers: ['F8-inv22'],
      geneSequences: [{ gene: 'F8', location: 'Xq28', sequence: 'GCTA...', mutation: { pos: 100, from: 'INV', to: 'INV', type: 'inversion', desc: 'Intron 22 inversion' } }],
      parameters: [
        { name: 'Factor VIII', unit: '%', value: 2, range: '50-150', status: 'CRITICAL' },
        { name: 'aPTT', unit: 'sec', value: 65, range: '25-35', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'vwd',
    name: 'von Willebrand Disease',
    description: 'Most common inherited bleeding disorder, caused by deficiency of vWF.',
    type: 'Genetic',
    template: {
      diseaseName: 'von Willebrand Disease',
      severity: 'Moderate',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Mucocutaneous bleeding. vWF antigen and activity reduced.',
      morphologySummary: 'Normal blood smear morphology.',
      geneticMarkers: ['VWF-Type1'],
      geneSequences: [{ gene: 'VWF', location: '12p13.31', sequence: 'TTCG...' }],
      parameters: [
        { name: 'vWF Antigen', unit: '%', value: 35, range: '50-150', status: 'ABNORMAL' },
        { name: 'Ristocetin Cofactor', unit: '%', value: 30, range: '50-150', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 875, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'itp',
    name: 'Immune Thrombocytopenic Purpura',
    description: 'Autoimmune disorder characterized by low platelet counts.',
    type: 'Healthy',
    template: {
      diseaseName: 'ITP',
      severity: 'Moderate',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Isolated thrombocytopenia. Anti-platelet antibodies often present.',
      morphologySummary: 'Large platelets (megathrombocytes) may be seen.',
      geneticMarkers: ['HLA-DRB1'],
      geneSequences: [{ gene: 'HLA-DRB1', location: '6p21.3', sequence: 'GATT...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 22, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 2, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 840, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'et',
    name: 'Essential Thrombocythemia',
    description: 'Myeloproliferative neoplasm characterized by overproduction of platelets.',
    type: 'Genetic',
    template: {
      diseaseName: 'Essential Thrombocythemia',
      severity: 'High',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'JAK2, CALR, or MPL mutations found in most patients.',
      morphologySummary: 'Large, atypical platelets and megakaryocyte fragments.',
      geneticMarkers: ['CALR-del52'],
      geneSequences: [{ gene: 'CALR', location: '19p13.2', sequence: 'AAGG...', mutation: { pos: 52, from: 'DEL', to: 'DEL', type: 'deletion', desc: '52bp deletion' } }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 850, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 9, plateletCount: 120, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1200, normalCells: 1100, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'mf',
    name: 'Primary Myelofibrosis',
    description: 'Bone marrow cancer that disrupts the normal production of blood cells, causing extensive scarring.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Primary Myelofibrosis',
      severity: 'Critical',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Teardrop RBCs (dacrocytes) and leukoerythroblastic picture.',
      morphologySummary: 'Dacrocytes (teardrop cells), nucleated RBCs, and immature myeloid cells.',
      geneticMarkers: ['MPL-W515L'],
      geneSequences: [{ gene: 'MPL', location: '1p34', sequence: 'CCGG...', mutation: { pos: 515, from: 'W', to: 'L', type: 'substitution', desc: 'W515L' } }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 8.5, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'WBC', unit: 'K/mcL', value: 18.0, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 15, plateletCount: 80, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 600, abnormalCells: 350, mutationsFound: 1 }
    }
  },
  {
    id: 'babesia',
    name: 'Babesiosis',
    description: 'Malaria-like parasitic disease caused by infection with Babesia.',
    type: 'Infection',
    template: {
      diseaseName: 'Babesiosis',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Maltese cross appearance of parasites in RBCs.',
      morphologySummary: 'Intraerythrocytic parasites, often in tetrads (Maltese cross).',
      geneticMarkers: ['Babesia-DNA'],
      geneSequences: [{ gene: '18S rRNA', location: 'Babesia Genome', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 10.2, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 85, range: '150-450', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 8, plateletCount: 12, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 750, abnormalCells: 70, mutationsFound: 0 }
    }
  },
  {
    id: 'dengue',
    name: 'Dengue Fever',
    description: 'Mosquito-borne viral infection causing high fever and severe joint pain.',
    type: 'Infection',
    template: {
      diseaseName: 'Dengue Fever',
      severity: 'High',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Leukopenia and profound thrombocytopenia. Hematocrit may rise if leaking.',
      morphologySummary: 'Reactive lymphocytes and severe lack of platelets.',
      geneticMarkers: ['DENV-NS1'],
      geneSequences: [{ gene: 'NS1', location: 'DENV Genome', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 45, range: '150-450', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 2.1, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 2, plateletCount: 4, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 800, abnormalCells: 80, mutationsFound: 0 }
    }
  },
  {
    id: 'gaucher',
    name: 'Gaucher Disease',
    description: 'Genetic disorder where fat builds up in certain organs, especially the spleen and liver.',
    type: 'Genetic',
    template: {
      diseaseName: 'Gaucher Disease Type 1',
      severity: 'High',
      probability: 80,
      confidenceScore: 75,
      clinicalNotes: 'Gaucher cells in marrow (crumpled tissue paper appearance).',
      morphologySummary: 'Large macrophages with fibrillar cytoplasm in bone marrow.',
      geneticMarkers: ['GBA-N370S'],
      geneSequences: [{ gene: 'GBA', location: '1q21', sequence: 'GGAA...', mutation: { pos: 370, from: 'N', to: 'S', type: 'substitution', desc: 'N370S' } }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 75, range: '150-450', status: 'ABNORMAL' },
        { name: 'Acid Phosphatase', unit: 'U/L', value: 15, range: '0-5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 5, plateletCount: 10, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 780, abnormalCells: 60, mutationsFound: 1 }
    }
  },
  {
    id: 'pnh',
    name: 'Paroxysmal Nocturnal Hemoglobinuria',
    description: 'Rare, acquired, life-threatening disease of the blood characterized by destruction of red blood cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'PNH',
      severity: 'Critical',
      probability: 85,
      confidenceScore: 82,
      clinicalNotes: 'Flow cytometry shows absence of CD55 and CD59 on blood cells.',
      morphologySummary: 'Evidence of hemolysis (schistocytes, polychromasia).',
      geneticMarkers: ['PIGA-mut'],
      geneSequences: [{ gene: 'PIGA', location: 'Xp22.2', sequence: 'TTCG...' }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 1200, range: '140-280', status: 'CRITICAL' },
        { name: 'Haptoglobin', unit: 'mg/dL', value: 5, range: '30-200', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 4, plateletCount: 12, morphology: 'schistocyte', cellColor: '#ef4444' },
      stats: { totalCells: 790, normalCells: 500, abnormalCells: 290, mutationsFound: 1 }
    }
  },
  {
    id: 'mds',
    name: 'Myelodysplastic Syndrome',
    description: 'Group of cancers in which immature blood cells in the bone marrow do not mature or become healthy blood cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'MDS (RAEB-2)',
      severity: 'Critical',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Dysplastic changes in at least two cell lines. Increased blasts (10-19%).',
      morphologySummary: 'Hyposegmented neutrophils (Pseudo-Pelger-Huet), ring sideroblasts.',
      geneticMarkers: ['SF3B1', 'ASXL1'],
      geneSequences: [{ gene: 'SF3B1', location: '2q33.1', sequence: 'GATA...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 7.8, range: '13.5-17.5', status: 'CRITICAL' },
        { name: 'Blasts', unit: '%', value: 12, range: '0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 130, wbcCount: 3, plateletCount: 60, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 500, abnormalCells: 380, mutationsFound: 2 }
    }
  },
  {
    id: 'sepsis',
    name: 'Sepsis',
    description: 'Life-threatening reaction to an infection.',
    type: 'Infection',
    template: {
      diseaseName: 'Sepsis / Septicemia',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Toxic granulation and Dohle bodies in neutrophils. Left shift.',
      morphologySummary: 'Neutrophilia with left shift, toxic granulation, and vacuolization.',
      geneticMarkers: ['CRP-High', 'Procalcitonin-High'],
      geneSequences: [{ gene: 'TNF-alpha', location: '6p21.33', sequence: 'CCCT...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 28.5, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Lactate', unit: 'mmol/L', value: 4.2, range: '0.5-2.2', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 45, plateletCount: 120, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1050, normalCells: 800, abnormalCells: 250, mutationsFound: 0 }
    }
  },
  {
    id: 'hiv',
    name: 'HIV/AIDS',
    description: 'Virus that attacks the body\'s immune system.',
    type: 'Infection',
    template: {
      diseaseName: 'HIV Infection',
      severity: 'High',
      probability: 98,
      confidenceScore: 95,
      clinicalNotes: 'Low CD4 count. Lymphopenia common in advanced stages.',
      morphologySummary: 'Normocytic anemia, lymphopenia, occasional reactive forms.',
      geneticMarkers: ['HIV-1 RNA'],
      geneSequences: [{ gene: 'gag', location: 'Viral Genome', sequence: 'ATGG...' }],
      parameters: [
        { name: 'CD4 Count', unit: 'cells/uL', value: 180, range: '500-1500', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 3.2, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 3, plateletCount: 140, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 700, abnormalCells: 120, mutationsFound: 0 }
    }
  },
  {
    id: 'ebola',
    name: 'Ebola Virus Disease',
    description: 'Severe, often fatal illness in humans caused by Ebola virus.',
    type: 'Infection',
    template: {
      diseaseName: 'Ebola Hemorrhagic Fever',
      severity: 'Critical',
      probability: 99,
      confidenceScore: 98,
      clinicalNotes: 'Severe lymphopenia followed by neutrophilia. Thrombocytopenia.',
      morphologySummary: 'Atypical lymphocytes, evidence of DIC (schistocytes).',
      geneticMarkers: ['EBOV-GP'],
      geneSequences: [{ gene: 'GP', location: 'Viral Genome', sequence: 'GCAA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 1.5, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 30, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 1, plateletCount: 3, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 600, abnormalCells: 200, mutationsFound: 0 }
    }
  },
  {
    id: 'zika',
    name: 'Zika Virus',
    description: 'Mosquito-borne virus that can cause fever, rash, joint pain, and red eyes.',
    type: 'Infection',
    template: {
      diseaseName: 'Zika Virus Infection',
      severity: 'Moderate',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Mild thrombocytopenia and leukopenia.',
      morphologySummary: 'Reactive lymphocytes.',
      geneticMarkers: ['ZIKV-RNA'],
      geneSequences: [{ gene: 'NS5', location: 'Viral Genome', sequence: 'AGCT...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 3.8, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 120, range: '150-450', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 4, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 860, normalCells: 800, abnormalCells: 60, mutationsFound: 0 }
    }
  },
  {
    id: 'lyme',
    name: 'Lyme Disease',
    description: 'Bacterial infection transmitted by ticks.',
    type: 'Infection',
    template: {
      diseaseName: 'Lyme Disease (Borrelia)',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Mild anemia and elevated ESR/CRP.',
      morphologySummary: 'Normal morphology, occasional reactive changes.',
      geneticMarkers: ['OspC'],
      geneSequences: [{ gene: 'ospC', location: 'Borrelia Genome', sequence: 'TTGC...' }],
      parameters: [
        { name: 'ESR', unit: 'mm/hr', value: 45, range: '0-20', status: 'ABNORMAL' },
        { name: 'CRP', unit: 'mg/L', value: 25, range: '0-5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 9, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 850, abnormalCells: 50, mutationsFound: 0 }
    }
  },
  {
    id: 'leish',
    name: 'Leishmaniasis',
    description: 'Parasitic disease found in parts of the tropics, subtropics, and southern Europe.',
    type: 'Infection',
    template: {
      diseaseName: 'Visceral Leishmaniasis (Kala-azar)',
      severity: 'High',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Pancytopenia and hypergammaglobulinemia. Amastigotes in macrophages.',
      morphologySummary: 'Leishmania-Donovan (LD) bodies within monocytes or macrophages.',
      geneticMarkers: ['kDNA'],
      geneSequences: [{ gene: 'kDNA', location: 'Parasite Genome', sequence: 'GGCG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 2.5, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 8.8, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 3, plateletCount: 8, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 810, normalCells: 700, abnormalCells: 110, mutationsFound: 0 }
    }
  },
  {
    id: 'fabry',
    name: 'Fabry Disease',
    description: 'Rare genetic lysosomal storage disease.',
    type: 'Genetic',
    template: {
      diseaseName: 'Fabry Disease',
      severity: 'High',
      probability: 75,
      confidenceScore: 70,
      clinicalNotes: 'Deficiency of alpha-galactosidase A. Mulberry cells in urine/tissues.',
      morphologySummary: 'Vacuolated lymphocytes may be present.',
      geneticMarkers: ['GLA-mut'],
      geneSequences: [{ gene: 'GLA', location: 'Xq22.1', sequence: 'CCAA...' }],
      parameters: [
        { name: 'Alpha-Gal A', unit: 'nmol/hr/mg', value: 0.5, range: '4-20', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 6, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 860, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'tay_sachs',
    name: 'Tay-Sachs Disease',
    description: 'Rare, inherited disorder that destroys nerve cells in the brain and spinal cord.',
    type: 'Genetic',
    template: {
      diseaseName: 'Tay-Sachs Disease',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Cherry-red spot on macula. Hexosaminidase A deficiency.',
      morphologySummary: 'Vacuolated lymphocytes.',
      geneticMarkers: ['HEXA-mut'],
      geneSequences: [{ gene: 'HEXA', location: '15q23', sequence: 'GATC...' }],
      parameters: [
        { name: 'Hex A', unit: '%', value: 2, range: '50-100', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 880, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'hemochrom',
    name: 'Hemochromatosis',
    description: 'Condition where the body builds up too much iron.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hereditary Hemochromatosis',
      severity: 'Moderate',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'High ferritin and transferrin saturation. HFE gene mutations.',
      morphologySummary: 'Normal morphology, but iron overload signs in tissues.',
      geneticMarkers: ['HFE-C282Y'],
      geneSequences: [{ gene: 'HFE', location: '6p22.2', sequence: 'GCTA...', mutation: { pos: 282, from: 'C', to: 'Y', type: 'SNP', desc: 'C282Y' } }],
      parameters: [
        { name: 'Ferritin', unit: 'ng/mL', value: 1200, range: '20-300', status: 'CRITICAL' },
        { name: 'Transferrin Sat', unit: '%', value: 85, range: '15-50', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 220, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 915, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'sidero',
    name: 'Sideroblastic Anemia',
    description: 'Group of blood disorders characterized by the presence of ring sideroblasts in the bone marrow.',
    type: 'Anemia',
    template: {
      diseaseName: 'Sideroblastic Anemia',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Ring sideroblasts in marrow (iron-laden mitochondria around nucleus).',
      morphologySummary: 'Dimorphic RBC population (some normal, some microcytic/hypochromic). Pappenheimer bodies.',
      geneticMarkers: ['ALAS2-mut'],
      geneSequences: [{ gene: 'ALAS2', location: 'Xp11.21', sequence: 'CCGG...' }],
      parameters: [
        { name: 'Serum Iron', unit: 'ug/dL', value: 210, range: '60-170', status: 'ABNORMAL' },
        { name: 'MCV', unit: 'fL', value: 75, range: '80-100', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 6, plateletCount: 20, morphology: 'microcytic', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 400, abnormalCells: 440, mutationsFound: 1 }
    }
  },
  {
    id: 'fanconi',
    name: 'Fanconi Anemia',
    description: 'Rare genetic disease that affects the bone marrow and results in decreased production of all types of blood cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'Fanconi Anemia',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Chromosomal instability. Increased sensitivity to DNA cross-linking agents.',
      morphologySummary: 'Macrocytic RBCs, pancytopenia.',
      geneticMarkers: ['FANCA', 'FANCC'],
      geneSequences: [{ gene: 'FANCA', location: '16q24.3', sequence: 'GGCG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 2.2, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'MCV', unit: 'fL', value: 105, range: '80-100', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 2, plateletCount: 8, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 750, normalCells: 500, abnormalCells: 250, mutationsFound: 1 }
    }
  },
  {
    id: 'diamond',
    name: 'Diamond-Blackfan Anemia',
    description: 'Rare inherited bone marrow failure syndrome characterized by a failure of the bone marrow to produce red blood cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'Diamond-Blackfan Anemia',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Pure red cell aplasia. Congenital anomalies often present.',
      morphologySummary: 'Macrocytic anemia with reticulocytopenia.',
      geneticMarkers: ['RPS19', 'RPL5'],
      geneSequences: [{ gene: 'RPS19', location: '19q13.2', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Reticulocytes', unit: '%', value: 0.1, range: '0.5-2.5', status: 'CRITICAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 7.2, range: '13.5-17.5', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 120, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 780, normalCells: 600, abnormalCells: 180, mutationsFound: 1 }
    }
  },
  {
    id: 'ellipto',
    name: 'Hereditary Elliptocytosis',
    description: 'Inherited blood disorder in which the red blood cells are abnormally shaped.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hereditary Elliptocytosis',
      severity: 'Low',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Most patients are asymptomatic. Hemolysis is usually mild.',
      morphologySummary: '>25% elliptocytes (ovalocytes) on blood smear.',
      geneticMarkers: ['SPTA1', 'SPTB'],
      geneSequences: [{ gene: 'SPTA1', location: '1q21', sequence: 'GCAA...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 13.2, range: '13.5-17.5', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 6, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 600, abnormalCells: 280, mutationsFound: 1 }
    }
  },
  {
    id: 'sphero',
    name: 'Hereditary Spherocytosis',
    description: 'Condition that affects red blood cells, causing them to be shaped like spheres instead of flattened disks.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hereditary Spherocytosis',
      severity: 'Moderate',
      probability: 94,
      confidenceScore: 90,
      clinicalNotes: 'Increased osmotic fragility. Splenomegaly common.',
      morphologySummary: 'Spherocytes (small, dense RBCs without central pallor). Polychromasia.',
      geneticMarkers: ['ANK1', 'SLC4A1'],
      geneSequences: [{ gene: 'ANK1', location: '8p11.21', sequence: 'CCGG...' }],
      parameters: [
        { name: 'MCHC', unit: 'g/dL', value: 37.5, range: '32-36', status: 'ABNORMAL' },
        { name: 'Reticulocytes', unit: '%', value: 8.5, range: '0.5-2.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 860, normalCells: 600, abnormalCells: 260, mutationsFound: 1 }
    }
  },
  {
    id: 'stoma',
    name: 'Hereditary Stomatocytosis',
    description: 'Rare group of inherited conditions that affect the red blood cell membrane.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hereditary Stomatocytosis',
      severity: 'Moderate',
      probability: 80,
      confidenceScore: 75,
      clinicalNotes: 'RBCs are leaky to sodium and potassium.',
      morphologySummary: 'Stomatocytes (RBCs with a slit-like area of central pallor, "mouth cells").',
      geneticMarkers: ['PIEZO1', 'KCNN4'],
      geneSequences: [{ gene: 'PIEZO1', location: '16q24.3', sequence: 'GATA...' }],
      parameters: [
        { name: 'MCV', unit: 'fL', value: 108, range: '80-100', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 6, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 700, abnormalCells: 140, mutationsFound: 1 }
    }
  },
  {
    id: 'pyro',
    name: 'Hereditary Pyropoikilocytosis',
    description: 'Severe form of hereditary elliptocytosis.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hereditary Pyropoikilocytosis',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Extreme thermal sensitivity of RBCs. Severe hemolytic anemia.',
      morphologySummary: 'Extreme poikilocytosis, microspherocytes, and elliptocytes.',
      geneticMarkers: ['SPTA1-double-mut'],
      geneSequences: [{ gene: 'SPTA1', location: '1q21', sequence: 'GCAA...' }],
      parameters: [
        { name: 'MCV', unit: 'fL', value: 55, range: '80-100', status: 'CRITICAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 7.5, range: '13.5-17.5', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 8, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 300, abnormalCells: 500, mutationsFound: 2 }
    }
  },
  {
    id: 'pk_def',
    name: 'Pyruvate Kinase Deficiency',
    description: 'Inherited metabolic disorder of the enzyme pyruvate kinase which affects the survival of red blood cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'Pyruvate Kinase Deficiency',
      severity: 'High',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Chronic non-spherocytic hemolytic anemia. Splenomegaly.',
      morphologySummary: 'Polychromasia, echinocytes (burr cells) may be present after splenectomy.',
      geneticMarkers: ['PKLR-mut'],
      geneSequences: [{ gene: 'PKLR', location: '1q22', sequence: 'TTGC...' }],
      parameters: [
        { name: 'PK Activity', unit: 'U/g Hb', value: 2.5, range: '10-15', status: 'CRITICAL' },
        { name: 'Bilirubin', unit: 'mg/dL', value: 3.2, range: '0.1-1.2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 830, normalCells: 650, abnormalCells: 180, mutationsFound: 1 }
    }
  },
  {
    id: 'cda',
    name: 'Congenital Dyserythropoietic Anemia',
    description: 'Rare group of inherited blood disorders characterized by ineffective erythropoiesis.',
    type: 'Genetic',
    template: {
      diseaseName: 'CDA Type II',
      severity: 'High',
      probability: 78,
      confidenceScore: 72,
      clinicalNotes: 'Binucleated erythroblasts in bone marrow. Positive acidified serum test (Ham test) in Type II.',
      morphologySummary: 'Anisocytosis, poikilocytosis, and basophilic stippling.',
      geneticMarkers: ['SEC23B'],
      geneSequences: [{ gene: 'SEC23B', location: '20p11.23', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 9.5, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 6, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 't_cell_all',
    name: 'T-cell Acute Lymphoblastic Leukemia',
    description: 'Aggressive type of ALL involving T-cell lineage.',
    type: 'Leukemia',
    template: {
      diseaseName: 'T-ALL',
      severity: 'Critical',
      probability: 90,
      confidenceScore: 85,
      clinicalNotes: 'Often presents with a mediastinal mass. High WBC count.',
      morphologySummary: 'Blasts with convoluted nuclei and scant cytoplasm.',
      geneticMarkers: ['NOTCH1-mut', 'TAL1-overexpression'],
      geneSequences: [{ gene: 'NOTCH1', location: '9q34.3', sequence: 'CCAA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 120.0, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Blasts', unit: '%', value: 92, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 110, wbcCount: 85, plateletCount: 6, morphology: 'blast', cellColor: '#7c3aed' },
      stats: { totalCells: 980, normalCells: 100, abnormalCells: 880, mutationsFound: 2 }
    }
  },
  {
    id: 'b_cell_all',
    name: 'B-cell Acute Lymphoblastic Leukemia',
    description: 'Most common type of ALL involving B-cell lineage.',
    type: 'Leukemia',
    template: {
      diseaseName: 'B-ALL',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'CD19, CD20, CD22 positive. TdT positive.',
      morphologySummary: 'Homogeneous population of lymphoblasts.',
      geneticMarkers: ['t(12;21)', 'Hyperdiploidy'],
      geneSequences: [{ gene: 'ETV6', location: '12p13.2', sequence: 'GATC...' }, { gene: 'RUNX1', location: '21q22.12', sequence: 'TTAG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 25.0, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Blasts', unit: '%', value: 75, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 130, wbcCount: 50, plateletCount: 10, morphology: 'blast', cellColor: '#8b5cf6' },
      stats: { totalCells: 940, normalCells: 240, abnormalCells: 700, mutationsFound: 1 }
    }
  },
  {
    id: 'burkitt',
    name: 'Burkitt Lymphoma',
    description: 'Highly aggressive B-cell non-Hodgkin lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Burkitt Lymphoma',
      severity: 'Critical',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 'Starry sky appearance in lymph node biopsy. MYC translocation t(8;14).',
      morphologySummary: 'Medium-sized blasts with intense basophilic cytoplasm and vacuoles.',
      geneticMarkers: ['MYC-t(8;14)'],
      geneSequences: [{ gene: 'MYC', location: '8q24.21', sequence: 'GGCG...', mutation: { pos: 10, from: 'T(8;14)', to: 'T(8;14)', type: 'translocation', desc: 'MYC/IGH' } }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 2500, range: '140-280', status: 'CRITICAL' },
        { name: 'Uric Acid', unit: 'mg/dL', value: 12.5, range: '3.5-7.2', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 12, plateletCount: 15, morphology: 'blast', cellColor: '#6d28d9' },
      stats: { totalCells: 880, normalCells: 700, abnormalCells: 180, mutationsFound: 1 }
    }
  },
  {
    id: 'follicular',
    name: 'Follicular Lymphoma',
    description: 'Common type of slow-growing non-Hodgkin lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Follicular Lymphoma',
      severity: 'Moderate',
      probability: 85,
      confidenceScore: 82,
      clinicalNotes: 't(14;18) translocation involving BCL2. Indolent course.',
      morphologySummary: 'Small cleaved cells (centrocytes) and large non-cleaved cells (centroblasts).',
      geneticMarkers: ['BCL2-t(14;18)'],
      geneSequences: [{ gene: 'BCL2', location: '18q21.33', sequence: 'TTAC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 8.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 8, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 850, abnormalCells: 50, mutationsFound: 1 }
    }
  },
  {
    id: 'mantle',
    name: 'Mantle Cell Lymphoma',
    description: 'Aggressive B-cell non-Hodgkin lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Mantle Cell Lymphoma',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 't(11;14) translocation involving Cyclin D1 (CCND1).',
      morphologySummary: 'Small to medium-sized lymphocytes with irregular nuclei.',
      geneticMarkers: ['CCND1-t(11;14)'],
      geneSequences: [{ gene: 'CCND1', location: '11q13.3', sequence: 'GCAA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 15.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 15, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 860, normalCells: 700, abnormalCells: 160, mutationsFound: 1 }
    }
  },
  {
    id: 'marginal',
    name: 'Marginal Zone Lymphoma',
    description: 'Group of slow-growing B-cell non-Hodgkin lymphomas.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Marginal Zone Lymphoma',
      severity: 'Moderate',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Associated with chronic inflammation (e.g., H. pylori in MALT lymphoma).',
      morphologySummary: 'Small lymphocytes, monocytoid B cells, and plasmacytoid cells.',
      geneticMarkers: ['t(11;18)', 'MALT1'],
      geneSequences: [{ gene: 'MALT1', location: '18q21', sequence: 'CCGG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 9.2, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 9, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 910, normalCells: 880, abnormalCells: 30, mutationsFound: 1 }
    }
  },
  {
    id: 'dlbcl',
    name: 'Diffuse Large B-cell Lymphoma',
    description: 'Most common type of non-Hodgkin lymphoma, aggressive.',
    type: 'Leukemia',
    template: {
      diseaseName: 'DLBCL',
      severity: 'High',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Large B cells with prominent nucleoli. Rapidly enlarging mass.',
      morphologySummary: 'Large, atypical lymphoid cells with vesicular nuclei.',
      geneticMarkers: ['BCL6-rearrangement', 'MYC-rearrangement'],
      geneSequences: [{ gene: 'BCL6', location: '3q27.3', sequence: 'GATA...' }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 850, range: '140-280', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 12, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'hodgkin',
    name: 'Hodgkin Lymphoma',
    description: 'Cancer of the lymphatic system, characterized by Reed-Sternberg cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Hodgkin Lymphoma (cHL)',
      severity: 'High',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Reed-Sternberg cells (owl\'s eye appearance) in a background of reactive cells.',
      morphologySummary: 'Large, multinucleated cells with prominent eosinophilic nucleoli.',
      geneticMarkers: ['CD30+', 'CD15+'],
      geneSequences: [{ gene: 'TNFRSF8', location: '1p36.22', sequence: 'TTGC...' }],
      parameters: [
        { name: 'ESR', unit: 'mm/hr', value: 85, range: '0-20', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 14.2, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 14, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 880, abnormalCells: 20, mutationsFound: 0 }
    }
  },
  {
    id: 'sezary',
    name: 'Sezary Syndrome',
    description: 'Aggressive form of cutaneous T-cell lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Sezary Syndrome',
      severity: 'High',
      probability: 80,
      confidenceScore: 75,
      clinicalNotes: 'Erythroderma, lymphadenopathy, and Sezary cells in blood.',
      morphologySummary: 'Lymphocytes with cerebriform (brain-like) nuclei.',
      geneticMarkers: ['CD4+/CD8- ratio > 10'],
      geneSequences: [{ gene: 'TCR-beta', location: '7q34', sequence: 'GCAA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 22.5, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Sezary Cells', unit: '%', value: 15, range: '0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 22, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 750, abnormalCells: 170, mutationsFound: 0 }
    }
  },
  {
    id: 'waldenstrom',
    name: 'Waldenstrom Macroglobulinemia',
    description: 'Type of non-Hodgkin lymphoma characterized by high levels of IgM.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Waldenstrom Macroglobulinemia',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Hyperviscosity syndrome. MYD88 L265P mutation in >90% of cases.',
      morphologySummary: 'Plasmacytoid lymphocytes. Rouleaux formation.',
      geneticMarkers: ['MYD88-L265P'],
      geneSequences: [{ gene: 'MYD88', location: '3p22.2', sequence: 'CCGG...', mutation: { pos: 265, from: 'L', to: 'P', type: 'substitution', desc: 'L265P' } }],
      parameters: [
        { name: 'IgM', unit: 'mg/dL', value: 4500, range: '40-230', status: 'CRITICAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 9.2, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 7, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'dic',
    name: 'Disseminated Intravascular Coagulation',
    description: 'Serious condition in which the proteins that control blood clotting become overactive.',
    type: 'Infection',
    template: {
      diseaseName: 'DIC',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Consumptive coagulopathy. High D-dimer, low fibrinogen.',
      morphologySummary: 'Schistocytes (fragmented RBCs) due to microangiopathic hemolysis.',
      geneticMarkers: ['D-Dimer-High'],
      geneSequences: [{ gene: 'FGB', location: '4q31.3', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 35, range: '150-450', status: 'CRITICAL' },
        { name: 'D-Dimer', unit: 'ng/mL', value: 8500, range: '<500', status: 'CRITICAL' },
        { name: 'Fibrinogen', unit: 'mg/dL', value: 85, range: '200-400', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 15, plateletCount: 4, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 500, abnormalCells: 320, mutationsFound: 0 }
    }
  },
  {
    id: 'ttp',
    name: 'Thrombotic Thrombocytopenic Purpura',
    description: 'Rare blood disorder characterized by clotting in small blood vessels.',
    type: 'Genetic',
    template: {
      diseaseName: 'TTP',
      severity: 'Critical',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'ADAMTS13 deficiency. Pentad: Fever, Anemia, Thrombocytopenia, Neuro, Renal.',
      morphologySummary: 'Numerous schistocytes. Severe thrombocytopenia.',
      geneticMarkers: ['ADAMTS13-low'],
      geneSequences: [{ gene: 'ADAMTS13', location: '9q34.2', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 12, range: '150-450', status: 'CRITICAL' },
        { name: 'ADAMTS13 Activity', unit: '%', value: 2, range: '50-150', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 10, plateletCount: 1, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 780, normalCells: 400, abnormalCells: 380, mutationsFound: 1 }
    }
  },
  {
    id: 'hus',
    name: 'Hemolytic Uremic Syndrome',
    description: 'Condition that can occur when the small blood vessels in your kidneys become damaged and inflamed.',
    type: 'Infection',
    template: {
      diseaseName: 'HUS (Shiga-toxin related)',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Often follows E. coli O157:H7 infection. Triad: Anemia, Thrombocytopenia, Renal failure.',
      morphologySummary: 'Schistocytes and helmet cells.',
      geneticMarkers: ['Stx1/Stx2'],
      geneSequences: [{ gene: 'stx2', location: 'Bacterial Genome', sequence: 'GCAA...' }],
      parameters: [
        { name: 'Creatinine', unit: 'mg/dL', value: 4.5, range: '0.7-1.3', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 45, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 12, plateletCount: 5, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 500, abnormalCells: 340, mutationsFound: 0 }
    }
  },
  {
    id: 'bernard',
    name: 'Bernard-Soulier Syndrome',
    description: 'Rare inherited disorder of blood platelets.',
    type: 'Genetic',
    template: {
      diseaseName: 'Bernard-Soulier Syndrome',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Giant platelets and deficiency of GP Ib-IX-V complex.',
      morphologySummary: 'Large platelets (as large as RBCs) and thrombocytopenia.',
      geneticMarkers: ['GP1BA', 'GP1BB'],
      geneSequences: [{ gene: 'GP1BA', location: '17p13.2', sequence: 'GATC...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 65, range: '150-450', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 5, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 800, abnormalCells: 80, mutationsFound: 1 }
    }
  },
  {
    id: 'glanzmann',
    name: 'Glanzmann Thrombasthenia',
    description: 'Rare genetic bleeding disorder in which platelets lack the protein that helps them stick to each other.',
    type: 'Genetic',
    template: {
      diseaseName: 'Glanzmann Thrombasthenia',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Normal platelet count but absent platelet aggregation.',
      morphologySummary: 'Normal morphology, but platelets fail to clump on smear.',
      geneticMarkers: ['ITGA2B', 'ITGB3'],
      geneSequences: [{ gene: 'ITGA2B', location: '17q21.31', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Platelet Count', unit: 'K/mcL', value: 250, range: '150-450', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 890, abnormalCells: 10, mutationsFound: 1 }
    }
  },
  {
    id: 'may_hegglin',
    name: 'May-Hegglin Anomaly',
    description: 'Rare genetic disorder of blood platelets.',
    type: 'Genetic',
    template: {
      diseaseName: 'May-Hegglin Anomaly',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Dohle-like inclusions in neutrophils and giant platelets.',
      morphologySummary: 'Large, blue-staining inclusions in neutrophils. Giant platelets.',
      geneticMarkers: ['MYH9-mut'],
      geneSequences: [{ gene: 'MYH9', location: '22q12.3', sequence: 'CCGG...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 85, range: '150-450', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 8, plateletCount: 10, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 860, normalCells: 800, abnormalCells: 60, mutationsFound: 1 }
    }
  },
  {
    id: 'chediak',
    name: 'Chediak-Higashi Syndrome',
    description: 'Rare autosomal recessive disorder that affects multiple systems of the body.',
    type: 'Genetic',
    template: {
      diseaseName: 'Chediak-Higashi Syndrome',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Giant lysosomal granules in neutrophils and other cells.',
      morphologySummary: 'Large, peroxidase-positive granules in leukocytes.',
      geneticMarkers: ['LYST-mut'],
      geneSequences: [{ gene: 'LYST', location: '1q42.2', sequence: 'GATA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 3.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 4, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 700, abnormalCells: 140, mutationsFound: 1 }
    }
  },
  {
    id: 'pelger',
    name: 'Pelger-Huet Anomaly',
    description: 'Inherited blood condition in which the nuclei of several types of white blood cells are abnormally shaped.',
    type: 'Genetic',
    template: {
      diseaseName: 'Pelger-Huet Anomaly',
      severity: 'Low',
      probability: 98,
      confidenceScore: 95,
      clinicalNotes: 'Hyposegmented neutrophils (pince-nez appearance).',
      morphologySummary: 'Neutrophils with only two lobes or no lobes at all.',
      geneticMarkers: ['LBR-mut'],
      geneSequences: [{ gene: 'LBR', location: '1q42.12', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Neutrophils', unit: '%', value: 60, range: '40-70', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 600, abnormalCells: 300, mutationsFound: 1 }
    }
  },
  {
    id: 'alder',
    name: 'Alder-Reilly Anomaly',
    description: 'Inherited condition characterized by the presence of large, coarse, dark-staining granules in all types of white blood cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'Alder-Reilly Anomaly',
      severity: 'Low',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Associated with mucopolysaccharidoses.',
      morphologySummary: 'Dense, azurophilic granules in cytoplasm of leukocytes.',
      geneticMarkers: ['IDUA', 'IDS'],
      geneSequences: [{ gene: 'IDUA', location: '4p16.3', sequence: 'GGCG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 7.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 8, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 800, abnormalCells: 80, mutationsFound: 1 }
    }
  },
  {
    id: 'hereditary_persistence_hbf',
    name: 'HPFH',
    description: 'Benign condition in which fetal hemoglobin (HbF) production continues into adulthood.',
    type: 'Genetic',
    template: {
      diseaseName: 'HPFH',
      severity: 'Low',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'High HbF levels, usually asymptomatic.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['HBB-promoter-mut'],
      geneSequences: [{ gene: 'HBB', location: '11p15.4', sequence: 'GCAA...' }],
      parameters: [
        { name: 'HbF', unit: '%', value: 25, range: '<1', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 220, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 915, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'methemoglobinemia',
    name: 'Methemoglobinemia',
    description: 'Condition in which there is an elevated level of methemoglobin in the blood.',
    type: 'Genetic',
    template: {
      diseaseName: 'Methemoglobinemia',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: '"Chocolate-colored" blood. Cyanosis unresponsive to oxygen.',
      morphologySummary: 'Normal morphology, but blood appears brown.',
      geneticMarkers: ['CYB5R3-mut'],
      geneSequences: [{ gene: 'CYB5R3', location: '22q13.2', sequence: 'TTAC...' }],
      parameters: [
        { name: 'MetHb', unit: '%', value: 15, range: '<1', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#451a03' }, // Dark brown color
      stats: { totalCells: 900, normalCells: 890, abnormalCells: 10, mutationsFound: 1 }
    }
  },
  {
    id: 'porphyria',
    name: 'Porphyria',
    description: 'Group of disorders that result from a buildup of natural chemicals that produce porphyrin in your body.',
    type: 'Genetic',
    template: {
      diseaseName: 'Acute Intermittent Porphyria',
      severity: 'High',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Abdominal pain, neurological symptoms. Urine darkens on exposure to light.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['HMBS-mut'],
      geneSequences: [{ gene: 'HMBS', location: '11q23.3', sequence: 'CCGG...' }],
      parameters: [
        { name: 'PBG', unit: 'mg/24h', value: 55, range: '0-4', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'hemo_b',
    name: 'Hemophilia B',
    description: 'Genetic disorder caused by missing or defective factor IX.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hemophilia B (Christmas Disease)',
      severity: 'High',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 'Prolonged aPTT, low Factor IX activity.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['F9-mut'],
      geneSequences: [{ gene: 'F9', location: 'Xq27.1', sequence: 'GATA...' }],
      parameters: [
        { name: 'Factor IX', unit: '%', value: 4, range: '50-150', status: 'CRITICAL' },
        { name: 'aPTT', unit: 'sec', value: 58, range: '25-35', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'factor_v_leiden',
    name: 'Factor V Leiden',
    description: 'Genetic disorder that increases the risk of developing abnormal blood clots.',
    type: 'Genetic',
    template: {
      diseaseName: 'Factor V Leiden Mutation',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Resistance to activated protein C (APC). Increased risk of DVT/PE.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['F5-G1691A'],
      geneSequences: [{ gene: 'F5', location: '1q24.2', sequence: 'TTGC...', mutation: { pos: 1691, from: 'G', to: 'A', type: 'SNP', desc: 'Leiden mutation' } }],
      parameters: [
        { name: 'APC Resistance', unit: 'ratio', value: 1.5, range: '>2.1', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 28, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 910, normalCells: 905, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'prothrombin_mut',
    name: 'Prothrombin G20210A',
    description: 'Genetic condition that causes an increase in the production of prothrombin.',
    type: 'Genetic',
    template: {
      diseaseName: 'Prothrombin G20210A Mutation',
      severity: 'Moderate',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'Elevated prothrombin levels. Increased risk of thrombosis.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['F2-G20210A'],
      geneSequences: [{ gene: 'F2', location: '11p11.2', sequence: 'CCAA...', mutation: { pos: 20210, from: 'G', to: 'A', type: 'SNP', desc: 'G20210A' } }],
      parameters: [
        { name: 'Prothrombin', unit: '%', value: 145, range: '70-130', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 28, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 910, normalCells: 905, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'protein_c_def',
    name: 'Protein C Deficiency',
    description: 'Rare genetic disorder that increases the risk of developing blood clots.',
    type: 'Genetic',
    template: {
      diseaseName: 'Protein C Deficiency',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Increased risk of venous thromboembolism and skin necrosis with warfarin.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['PROC-mut'],
      geneSequences: [{ gene: 'PROC', location: '2q14.3', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Protein C', unit: '%', value: 35, range: '70-140', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'protein_s_def',
    name: 'Protein S Deficiency',
    description: 'Genetic disorder that increases the risk of developing blood clots.',
    type: 'Genetic',
    template: {
      diseaseName: 'Protein S Deficiency',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Protein S is a cofactor for Protein C.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['PROS1-mut'],
      geneSequences: [{ gene: 'PROS1', location: '3q11.1', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Free Protein S', unit: '%', value: 42, range: '65-145', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'antithrombin_def',
    name: 'Antithrombin III Deficiency',
    description: 'Genetic disorder that increases the risk of developing blood clots.',
    type: 'Genetic',
    template: {
      diseaseName: 'Antithrombin III Deficiency',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Heparin resistance may be observed.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['SERPINC1-mut'],
      geneSequences: [{ gene: 'SERPINC1', location: '1q25.1', sequence: 'GATA...' }],
      parameters: [
        { name: 'Antithrombin III', unit: '%', value: 55, range: '80-120', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'd_dimer_high',
    name: 'Hypercoagulable State',
    description: 'Condition where the blood clots too easily.',
    type: 'Healthy',
    template: {
      diseaseName: 'Hypercoagulability',
      severity: 'Moderate',
      probability: 80,
      confidenceScore: 75,
      clinicalNotes: 'Elevated markers of thrombin generation.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['D-Dimer-Elevated'],
      geneSequences: [{ gene: 'F2', location: '11p11.2', sequence: 'CCAA...' }],
      parameters: [
        { name: 'D-Dimer', unit: 'ng/mL', value: 1200, range: '<500', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 35, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 910, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'lupus_anticoagulant',
    name: 'Antiphospholipid Syndrome',
    description: 'Autoimmune disorder that increases the risk of blood clots.',
    type: 'Healthy',
    template: {
      diseaseName: 'Antiphospholipid Syndrome (APS)',
      severity: 'High',
      probability: 85,
      confidenceScore: 82,
      clinicalNotes: 'Positive Lupus Anticoagulant, Anti-cardiolipin, or Anti-beta2-GPI.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['LA-Positive'],
      geneSequences: [{ gene: 'HLA-DQB1', location: '6p21.3', sequence: 'TTGC...' }],
      parameters: [
        { name: 'aPTT', unit: 'sec', value: 52, range: '25-35', status: 'ABNORMAL' },
        { name: 'DRVVT', unit: 'ratio', value: 1.8, range: '<1.2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 890, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'parvo_b19',
    name: 'Parvovirus B19',
    description: 'Virus that can cause a temporary halt in red blood cell production.',
    type: 'Infection',
    template: {
      diseaseName: 'Parvovirus B19 Infection',
      severity: 'Moderate',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'Can cause aplastic crisis in patients with hemolytic anemias (e.g., Sickle Cell).',
      morphologySummary: 'Giant pronormoblasts in bone marrow.',
      geneticMarkers: ['B19-DNA'],
      geneSequences: [{ gene: 'NS1', location: 'Viral Genome', sequence: 'GCAA...' }],
      parameters: [
        { name: 'Reticulocytes', unit: '%', value: 0.1, range: '0.5-2.5', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 6, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 600, abnormalCells: 200, mutationsFound: 0 }
    }
  },
  {
    id: 'cytomegalovirus',
    name: 'CMV Infection',
    description: 'Common virus that can cause symptoms similar to mononucleosis.',
    type: 'Infection',
    template: {
      diseaseName: 'Cytomegalovirus (CMV)',
      severity: 'Moderate',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Atypical lymphocytes. Monospot negative.',
      morphologySummary: 'Reactive lymphocytes. "Owl\'s eye" inclusions in tissues.',
      geneticMarkers: ['CMV-DNA'],
      geneSequences: [{ gene: 'UL54', location: 'Viral Genome', sequence: 'GATA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 12.5, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Lymphocytes', unit: '%', value: 55, range: '20-40', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 15, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 750, abnormalCells: 130, mutationsFound: 0 }
    }
  },
  {
    id: 'toxoplasmosis',
    name: 'Toxoplasmosis',
    description: 'Infection caused by the parasite Toxoplasma gondii.',
    type: 'Infection',
    template: {
      diseaseName: 'Toxoplasmosis',
      severity: 'Moderate',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Lymphadenopathy and atypical lymphocytes.',
      morphologySummary: 'Reactive lymphocytes.',
      geneticMarkers: ['Toxo-DNA'],
      geneSequences: [{ gene: 'B1', location: 'Parasite Genome', sequence: 'CCGG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 11.2, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 12, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 870, normalCells: 800, abnormalCells: 70, mutationsFound: 0 }
    }
  },
  {
    id: 'cat_scratch',
    name: 'Cat Scratch Disease',
    description: 'Infection caused by the bacterium Bartonella henselae.',
    type: 'Infection',
    template: {
      diseaseName: 'Cat Scratch Disease (Bartonella)',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Regional lymphadenopathy. Stellated granulomas in lymph nodes.',
      morphologySummary: 'Normal blood morphology, occasional reactive changes.',
      geneticMarkers: ['B. henselae DNA'],
      geneSequences: [{ gene: 'gltA', location: 'Bacterial Genome', sequence: 'TTGC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 13.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 14, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 890, normalCells: 850, abnormalCells: 40, mutationsFound: 0 }
    }
  },
  {
    id: 'brucellosis',
    name: 'Brucellosis',
    description: 'Infectious disease caused by Brucella bacteria.',
    type: 'Infection',
    template: {
      diseaseName: 'Brucellosis (Undulant Fever)',
      severity: 'High',
      probability: 80,
      confidenceScore: 75,
      clinicalNotes: 'Undulant fever, night sweats. Bone marrow granulomas.',
      morphologySummary: 'Pancytopenia or relative lymphocytosis.',
      geneticMarkers: ['Brucella-DNA'],
      geneSequences: [{ gene: 'bcsp31', location: 'Bacterial Genome', sequence: 'GGCG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 3.8, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 11.2, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 4, plateletCount: 12, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 750, abnormalCells: 70, mutationsFound: 0 }
    }
  },
  {
    id: 'typhoid',
    name: 'Typhoid Fever',
    description: 'Life-threatening infection caused by the bacterium Salmonella Typhi.',
    type: 'Infection',
    template: {
      diseaseName: 'Typhoid Fever',
      severity: 'High',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Leukopenia with relative lymphocytosis. Bradycardia with fever.',
      morphologySummary: 'Normal morphology, but severe lack of WBCs.',
      geneticMarkers: ['S. Typhi DNA'],
      geneSequences: [{ gene: 'fliC', location: 'Bacterial Genome', sequence: 'TTAC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 2.8, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 3, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 800, abnormalCells: 50, mutationsFound: 0 }
    }
  },
  {
    id: 'leishmaniasis_cut',
    name: 'Cutaneous Leishmaniasis',
    description: 'Most common form of leishmaniasis, causing skin sores.',
    type: 'Infection',
    template: {
      diseaseName: 'Cutaneous Leishmaniasis',
      severity: 'Moderate',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Skin ulcers. Parasites in skin biopsy.',
      morphologySummary: 'Normal blood morphology.',
      geneticMarkers: ['Leishmania-DNA'],
      geneSequences: [{ gene: 'ITS1', location: 'Parasite Genome', sequence: 'GATA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 7.2, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 0 }
    }
  },
  {
    id: 'trypanosomiasis',
    name: 'Chagas Disease',
    description: 'Infectious disease caused by the parasite Trypanosoma cruzi.',
    type: 'Infection',
    template: {
      diseaseName: 'Chagas Disease (American Trypanosomiasis)',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'C-shaped trypomastigotes in blood during acute phase.',
      morphologySummary: 'Extracellular trypomastigotes with a prominent kinetoplast.',
      geneticMarkers: ['T. cruzi DNA'],
      geneSequences: [{ gene: 'kDNA', location: 'Parasite Genome', sequence: 'CCGG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 10.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 10, plateletCount: 20, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 860, normalCells: 800, abnormalCells: 60, mutationsFound: 0 }
    }
  },
  {
    id: 'sleeping_sickness',
    name: 'Sleeping Sickness',
    description: 'Infection caused by the parasite Trypanosoma brucei.',
    type: 'Infection',
    template: {
      diseaseName: 'African Trypanosomiasis',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Winterbottom\'s sign (posterior cervical lymphadenopathy).',
      morphologySummary: 'Extracellular trypomastigotes in blood or CSF.',
      geneticMarkers: ['T. brucei DNA'],
      geneSequences: [{ gene: 'SRA', location: 'Parasite Genome', sequence: 'GGCG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 12.8, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 12, plateletCount: 18, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 780, abnormalCells: 60, mutationsFound: 0 }
    }
  },
  {
    id: 'kala_azar',
    name: 'Kala-azar',
    description: 'Most severe form of leishmaniasis.',
    type: 'Infection',
    template: {
      diseaseName: 'Visceral Leishmaniasis',
      severity: 'Critical',
      probability: 98,
      confidenceScore: 95,
      clinicalNotes: 'Massive splenomegaly, weight loss, and anemia.',
      morphologySummary: 'Amastigotes in bone marrow or splenic aspirate.',
      geneticMarkers: ['Leishmania-rDNA'],
      geneSequences: [{ gene: '18S', location: 'Parasite Genome', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 6.8, range: '13.5-17.5', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 1.8, range: '4.5-11', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 120, wbcCount: 2, plateletCount: 5, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 750, normalCells: 500, abnormalCells: 250, mutationsFound: 0 }
    }
  },
  {
    id: 'histoplasmosis',
    name: 'Histoplasmosis',
    description: 'Infection caused by breathing in spores of a fungus often found in bird and bat droppings.',
    type: 'Infection',
    template: {
      diseaseName: 'Disseminated Histoplasmosis',
      severity: 'High',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Fungal yeast forms within macrophages.',
      morphologySummary: 'Small, oval yeast cells with a narrow base of budding.',
      geneticMarkers: ['H. capsulatum DNA'],
      geneSequences: [{ gene: 'H-antigen', location: 'Fungal Genome', sequence: 'GATA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 3.2, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 4, plateletCount: 12, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 750, abnormalCells: 70, mutationsFound: 0 }
    }
  },
  {
    id: 'coccidioidomycosis',
    name: 'Valley Fever',
    description: 'Infection caused by the fungus Coccidioides.',
    type: 'Infection',
    template: {
      diseaseName: 'Coccidioidomycosis',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Eosinophilia common in early stages.',
      morphologySummary: 'Large spherules containing endospores in tissues.',
      geneticMarkers: ['Coccidioides-DNA'],
      geneSequences: [{ gene: 'Ag2/PRA', location: 'Fungal Genome', sequence: 'CCGG...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 12, range: '1-4', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 11, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 890, normalCells: 800, abnormalCells: 90, mutationsFound: 0 }
    }
  },
  {
    id: 'cryptococcosis',
    name: 'Cryptococcosis',
    description: 'Infection caused by the fungus Cryptococcus.',
    type: 'Infection',
    template: {
      diseaseName: 'Cryptococcosis',
      severity: 'High',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'Encapsulated yeast cells. India ink positive.',
      morphologySummary: 'Round yeast with a thick, clear capsule.',
      geneticMarkers: ['CrAg'],
      geneSequences: [{ gene: 'CAP59', location: 'Fungal Genome', sequence: 'TTGC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 4.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 5, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 850, abnormalCells: 30, mutationsFound: 0 }
    }
  },
  {
    id: 'aspergillosis',
    name: 'Aspergillosis',
    description: 'Infection, allergic reaction, or fungal growth caused by the Aspergillus fungus.',
    type: 'Infection',
    template: {
      diseaseName: 'Invasive Aspergillosis',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Septate hyphae with acute-angle branching.',
      morphologySummary: 'Fungal hyphae invading blood vessels.',
      geneticMarkers: ['Galactomannan'],
      geneSequences: [{ gene: 'cyp51A', location: 'Fungal Genome', sequence: 'GGCG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 1.2, range: '4.5-11', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 2, plateletCount: 10, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 600, abnormalCells: 200, mutationsFound: 0 }
    }
  },
  {
    id: 'candidiasis',
    name: 'Candidiasis',
    description: 'Fungal infection caused by a yeast called Candida.',
    type: 'Infection',
    template: {
      diseaseName: 'Disseminated Candidiasis',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Yeasts and pseudohyphae in blood culture.',
      morphologySummary: 'Budding yeast cells and pseudohyphae.',
      geneticMarkers: ['Candida-DNA'],
      geneSequences: [{ gene: 'ITS2', location: 'Fungal Genome', sequence: 'GATA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 18.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 20, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 750, abnormalCells: 150, mutationsFound: 0 }
    }
  },
  {
    id: 'pneumocystis',
    name: 'PCP',
    description: 'Serious infection caused by the fungus Pneumocystis jirovecii.',
    type: 'Infection',
    template: {
      diseaseName: 'Pneumocystis Pneumonia',
      severity: 'High',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Common in immunocompromised patients. LDH often elevated.',
      morphologySummary: 'Cysts in lung tissue or sputum.',
      geneticMarkers: ['P. jirovecii DNA'],
      geneSequences: [{ gene: 'mtLSU', location: 'Fungal Genome', sequence: 'CCGG...' }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 650, range: '140-280', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 4, plateletCount: 140, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 750, abnormalCells: 90, mutationsFound: 0 }
    }
  },
  {
    id: 'strongyloidiasis',
    name: 'Strongyloidiasis',
    description: 'Infection caused by the roundworm Strongyloides stercoralis.',
    type: 'Infection',
    template: {
      diseaseName: 'Strongyloidiasis (Hyperinfection)',
      severity: 'Critical',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Marked eosinophilia. Larvae in stool or sputum.',
      morphologySummary: 'Rhabditiform larvae.',
      geneticMarkers: ['Strongyloides-DNA'],
      geneSequences: [{ gene: 'SSU rRNA', location: 'Parasite Genome', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 25, range: '1-4', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 15, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 700, abnormalCells: 200, mutationsFound: 0 }
    }
  },
  {
    id: 'schistosomiasis',
    name: 'Schistosomiasis',
    description: 'Disease caused by parasitic flatworms called schistosomes.',
    type: 'Infection',
    template: {
      diseaseName: 'Schistosomiasis (Bilharzia)',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Eosinophilia and anemia. Eggs in stool or urine.',
      morphologySummary: 'Normal blood morphology, but high eosinophil count.',
      geneticMarkers: ['Schistosoma-DNA'],
      geneSequences: [{ gene: 'SmSl', location: 'Parasite Genome', sequence: 'GCAA...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 15, range: '1-4', status: 'ABNORMAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 11.5, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 12, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 910, normalCells: 850, abnormalCells: 60, mutationsFound: 0 }
    }
  },
  {
    id: 'filariasis',
    name: 'Lymphatic Filariasis',
    description: 'Parasitic disease caused by microscopic, thread-like worms.',
    type: 'Infection',
    template: {
      diseaseName: 'Lymphatic Filariasis (Elephantiasis)',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Microfilariae in blood (often nocturnal periodicity).',
      morphologySummary: 'Sheathed or unsheathed microfilariae in blood smear.',
      geneticMarkers: ['W. bancrofti DNA'],
      geneSequences: [{ gene: 'LDR', location: 'Parasite Genome', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 18, range: '1-4', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 14, plateletCount: 22, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 800, abnormalCells: 80, mutationsFound: 0 }
    }
  },
  {
    id: 'onchocerciasis',
    name: 'River Blindness',
    description: 'Disease caused by infection with the parasitic worm Onchocerca volvulus.',
    type: 'Infection',
    template: {
      diseaseName: 'Onchocerciasis',
      severity: 'High',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Microfilariae in skin snips. Eosinophilia.',
      morphologySummary: 'Normal blood morphology.',
      geneticMarkers: ['O. volvulus DNA'],
      geneSequences: [{ gene: 'O-150', location: 'Parasite Genome', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 14, range: '1-4', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 10, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 870, normalCells: 820, abnormalCells: 50, mutationsFound: 0 }
    }
  },
  {
    id: 'loiasis',
    name: 'Loiasis',
    description: 'African eye worm disease caused by the parasitic worm Loa loa.',
    type: 'Infection',
    template: {
      diseaseName: 'Loiasis',
      severity: 'Moderate',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'Calabar swellings. Worms may be seen crossing the eye.',
      morphologySummary: 'Sheathed microfilariae in blood smear (diurnal periodicity).',
      geneticMarkers: ['Loa loa DNA'],
      geneSequences: [{ gene: 'LL20', location: 'Parasite Genome', sequence: 'GATA...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 35, range: '1-4', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 18, plateletCount: 20, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 750, abnormalCells: 170, mutationsFound: 0 }
    }
  },
  {
    id: 'ascariasis',
    name: 'Ascariasis',
    description: 'Infection of the small intestine caused by Ascaris lumbricoides.',
    type: 'Infection',
    template: {
      diseaseName: 'Ascariasis',
      severity: 'Moderate',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Loffler syndrome (pulmonary eosinophilia) during larval migration.',
      morphologySummary: 'Eggs in stool.',
      geneticMarkers: ['Ascaris-DNA'],
      geneSequences: [{ gene: 'ITS1', location: 'Parasite Genome', sequence: 'CCGG...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 10, range: '1-4', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 9, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 880, abnormalCells: 20, mutationsFound: 0 }
    }
  },
  {
    id: 'hookworm',
    name: 'Hookworm Infection',
    description: 'Infection caused by blood-feeding roundworms.',
    type: 'Infection',
    template: {
      diseaseName: 'Hookworm (Ancylostoma/Necator)',
      severity: 'Moderate',
      probability: 98,
      confidenceScore: 95,
      clinicalNotes: 'Iron deficiency anemia due to chronic blood loss.',
      morphologySummary: 'Microcytic, hypochromic RBCs. Eosinophilia.',
      geneticMarkers: ['Hookworm-DNA'],
      geneSequences: [{ gene: 'ITS2', location: 'Parasite Genome', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 8.5, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'Eosinophils', unit: '%', value: 12, range: '1-4', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 10, plateletCount: 22, morphology: 'microcytic', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 600, abnormalCells: 250, mutationsFound: 0 }
    }
  },
  {
    id: 'aml_m0',
    name: 'AML-M0',
    description: 'Acute myeloid leukemia with minimal differentiation.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M0',
      severity: 'Critical',
      probability: 90,
      confidenceScore: 85,
      clinicalNotes: 'Blasts lack myeloid markers by light microscopy. Confirmed by flow cytometry (CD13, CD33).',
      morphologySummary: 'Medium-sized blasts with round to oval nuclei and scant cytoplasm.',
      geneticMarkers: ['RUNX1-mut'],
      geneSequences: [{ gene: 'RUNX1', location: '21q22.12', sequence: 'GATC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 15.0, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Blasts', unit: '%', value: 80, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 40, plateletCount: 12, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 900, normalCells: 200, abnormalCells: 700, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m1',
    name: 'AML-M1',
    description: 'Acute myeloid leukemia without maturation.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M1',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 88,
      clinicalNotes: '>90% of non-erythroid cells are blasts. Rare Auer rods may be seen.',
      morphologySummary: 'Blasts with one or more prominent nucleoli. Minimal cytoplasmic granulation.',
      geneticMarkers: ['FLT3-ITD'],
      geneSequences: [{ gene: 'FLT3', location: '13q12.2', sequence: 'TTAC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 35.0, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Blasts', unit: '%', value: 95, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 120, wbcCount: 60, plateletCount: 8, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 950, normalCells: 100, abnormalCells: 850, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m2',
    name: 'AML-M2',
    description: 'Acute myeloid leukemia with maturation.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M2',
      severity: 'Critical',
      probability: 94,
      confidenceScore: 90,
      clinicalNotes: 't(8;21) translocation is common. Blasts show some myeloid differentiation.',
      morphologySummary: 'Blasts with primary granules. Auer rods frequently present.',
      geneticMarkers: ['t(8;21)', 'RUNX1-RUNX1T1'],
      geneSequences: [{ gene: 'RUNX1', location: '21q22', sequence: 'GGCG...' }, { gene: 'RUNX1T1', location: '8q22', sequence: 'AATT...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 25.0, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Blasts', unit: '%', value: 60, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 30, plateletCount: 15, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 880, normalCells: 300, abnormalCells: 580, mutationsFound: 1 }
    }
  },
  {
    id: 'apl',
    name: 'APL (AML-M3)',
    description: 'Acute promyelocytic leukemia, characterized by t(15;17).',
    type: 'Leukemia',
    template: {
      diseaseName: 'Acute Promyelocytic Leukemia',
      severity: 'Critical',
      probability: 98,
      confidenceScore: 95,
      clinicalNotes: 'High risk of DIC. t(15;17) PML-RARA fusion. Responsive to ATRA.',
      morphologySummary: 'Hypergranular promyelocytes with multiple Auer rods (faggot cells).',
      geneticMarkers: ['t(15;17)', 'PML-RARA'],
      geneSequences: [{ gene: 'PML', location: '15q24', sequence: 'CCGG...' }, { gene: 'RARA', location: '17q21', sequence: 'TTAC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 2.5, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 25, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 5, plateletCount: 4, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 820, normalCells: 400, abnormalCells: 420, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m4',
    name: 'AML-M4',
    description: 'Acute myelomonocytic leukemia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M4',
      severity: 'Critical',
      probability: 90,
      confidenceScore: 85,
      clinicalNotes: 'Both myeloid and monocytic differentiation. inv(16) common in M4eo.',
      morphologySummary: 'Mixture of myeloblasts and monoblasts.',
      geneticMarkers: ['inv(16)', 'CBFB-MYH11'],
      geneSequences: [{ gene: 'CBFB', location: '16q22', sequence: 'GATA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 45.0, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Monocytes', unit: 'K/mcL', value: 8.5, range: '0.2-0.8', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 45, plateletCount: 10, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 920, normalCells: 300, abnormalCells: 620, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m5',
    name: 'AML-M5',
    description: 'Acute monocytic leukemia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M5',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 88,
      clinicalNotes: '>80% of non-erythroid cells are monocytic. Often associated with extramedullary disease.',
      morphologySummary: 'Large monoblasts with abundant cytoplasm and folded nuclei.',
      geneticMarkers: ['KMT2A-rearrangement'],
      geneSequences: [{ gene: 'KMT2A', location: '11q23.3', sequence: 'TTGC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 65.0, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Monoblasts', unit: '%', value: 85, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 130, wbcCount: 65, plateletCount: 12, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 940, normalCells: 140, abnormalCells: 800, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m6',
    name: 'AML-M6',
    description: 'Acute erythroid leukemia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M6 (Erythroleukemia)',
      severity: 'Critical',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: '>50% erythroid precursors in marrow. Dysplastic erythropoiesis.',
      morphologySummary: 'Bizarre, multinucleated erythroid precursors.',
      geneticMarkers: ['TP53-mut'],
      geneSequences: [{ gene: 'TP53', location: '17p13.1', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 6.5, range: '13.5-17.5', status: 'CRITICAL' },
        { name: 'NRBC', unit: '/100 WBC', value: 45, range: '0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 80, wbcCount: 12, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 400, abnormalCells: 450, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m7',
    name: 'AML-M7',
    description: 'Acute megakaryoblastic leukemia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M7',
      severity: 'Critical',
      probability: 88,
      confidenceScore: 82,
      clinicalNotes: 'Associated with Down Syndrome. Fibrosis in bone marrow.',
      morphologySummary: 'Medium to large megakaryoblasts with cytoplasmic blebs.',
      geneticMarkers: ['GATA1-mut'],
      geneSequences: [{ gene: 'GATA1', location: 'Xp11.23', sequence: 'CCAA...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 45, range: '150-450', status: 'ABNORMAL' },
        { name: 'WBC', unit: 'K/mcL', value: 12.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 12, plateletCount: 5, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 820, normalCells: 600, abnormalCells: 220, mutationsFound: 1 }
    }
  },
  {
    id: 'pv',
    name: 'Polycythemia Vera',
    description: 'Myeloproliferative neoplasm characterized by increased red blood cell mass.',
    type: 'Genetic',
    template: {
      diseaseName: 'Polycythemia Vera',
      severity: 'High',
      probability: 96,
      confidenceScore: 94,
      clinicalNotes: 'JAK2 V617F mutation present in >95% of cases. Low EPO levels.',
      morphologySummary: 'Increased RBCs, often with crowded appearance on smear.',
      geneticMarkers: ['JAK2-V617F'],
      geneSequences: [{ gene: 'JAK2', location: '9p24.1', sequence: 'GATC...', mutation: { pos: 617, from: 'V', to: 'F', type: 'substitution', desc: 'V617F' } }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 19.5, range: '13.5-17.5', status: 'CRITICAL' },
        { name: 'Hematocrit', unit: '%', value: 60, range: '41-50', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 350, wbcCount: 12, plateletCount: 45, morphology: 'normal', cellColor: '#b91c1c' },
      stats: { totalCells: 1500, normalCells: 1000, abnormalCells: 500, mutationsFound: 1 }
    }
  },
  {
    id: 'mastocytosis',
    name: 'Systemic Mastocytosis',
    description: 'Rare disorder characterized by the accumulation of abnormal mast cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'Systemic Mastocytosis',
      severity: 'High',
      probability: 80,
      confidenceScore: 75,
      clinicalNotes: 'KIT D816V mutation common. Elevated serum tryptase.',
      morphologySummary: 'Spindle-shaped mast cells in marrow or tissues.',
      geneticMarkers: ['KIT-D816V'],
      geneSequences: [{ gene: 'KIT', location: '4q12', sequence: 'TTAC...', mutation: { pos: 816, from: 'D', to: 'V', type: 'substitution', desc: 'D816V' } }],
      parameters: [
        { name: 'Tryptase', unit: 'ng/mL', value: 45, range: '<11.4', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 8, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 850, abnormalCells: 30, mutationsFound: 1 }
    }
  },
  {
    id: 'hes',
    name: 'Hypereosinophilic Syndrome',
    description: 'Group of disorders characterized by persistent eosinophilia and organ damage.',
    type: 'Healthy',
    template: {
      diseaseName: 'Hypereosinophilic Syndrome (HES)',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Absolute eosinophil count > 1500/uL for > 6 months.',
      morphologySummary: 'Marked eosinophilia with occasional degranulation.',
      geneticMarkers: ['FIP1L1-PDGFRA'],
      geneSequences: [{ gene: 'FIP1L1', location: '4q12', sequence: 'GATA...' }],
      parameters: [
        { name: 'Eosinophils', unit: 'K/mcL', value: 5.5, range: '0.0-0.4', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 15, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 600, abnormalCells: 350, mutationsFound: 1 }
    }
  },
  {
    id: 'cnl',
    name: 'Chronic Neutrophilic Leukemia',
    description: 'Rare myeloproliferative neoplasm characterized by persistent neutrophilia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Chronic Neutrophilic Leukemia',
      severity: 'High',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'CSF3R T618I mutation is highly specific.',
      morphologySummary: 'Mature neutrophils with minimal dysplasia.',
      geneticMarkers: ['CSF3R-T618I'],
      geneSequences: [{ gene: 'CSF3R', location: '1p34.3', sequence: 'CCGG...', mutation: { pos: 618, from: 'T', to: 'I', type: 'substitution', desc: 'T618I' } }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 45.0, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Neutrophils', unit: '%', value: 90, range: '40-70', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 45, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1050, normalCells: 800, abnormalCells: 250, mutationsFound: 1 }
    }
  },
  {
    id: 'cmml',
    name: 'CMML',
    description: 'Chronic myelomonocytic leukemia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'CMML-1',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Persistent monocytosis > 1000/uL. Blasts < 5% in blood.',
      morphologySummary: 'Monocytosis with dysplastic features in other lines.',
      geneticMarkers: ['TET2', 'SRSF2'],
      geneSequences: [{ gene: 'TET2', location: '4q24', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Monocytes', unit: 'K/mcL', value: 2.5, range: '0.2-0.8', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 18.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 18, plateletCount: 12, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 700, abnormalCells: 200, mutationsFound: 2 }
    }
  },
  {
    id: 'jmml',
    name: 'JMML',
    description: 'Rare, aggressive childhood leukemia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Juvenile Myelomonocytic Leukemia',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Associated with Neurofibromatosis type 1. Mutations in RAS pathway.',
      morphologySummary: 'Monocytosis and immature myeloid cells.',
      geneticMarkers: ['PTPN11', 'NRAS', 'KRAS'],
      geneSequences: [{ gene: 'PTPN11', location: '12q24.13', sequence: 'GATA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 25.0, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'HbF', unit: '%', value: 15, range: '<2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 25, plateletCount: 8, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 600, abnormalCells: 280, mutationsFound: 1 }
    }
  },
  {
    id: 'lgl',
    name: 'LGL Leukemia',
    description: 'Leukemia of large granular lymphocytes.',
    type: 'Leukemia',
    template: {
      diseaseName: 'T-LGL Leukemia',
      severity: 'Moderate',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Associated with rheumatoid arthritis and neutropenia (Felty syndrome).',
      morphologySummary: 'Large lymphocytes with prominent azurophilic granules.',
      geneticMarkers: ['STAT3-mut'],
      geneSequences: [{ gene: 'STAT3', location: '17q21.2', sequence: 'CCGG...', mutation: { pos: 661, from: 'Y', to: 'F', type: 'substitution', desc: 'Y661F' } }],
      parameters: [
        { name: 'Neutrophils', unit: 'K/mcL', value: 0.5, range: '1.5-8.0', status: 'CRITICAL' },
        { name: 'LGL Count', unit: 'K/mcL', value: 3.5, range: '<0.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 4, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 600, abnormalCells: 240, mutationsFound: 1 }
    }
  },
  {
    id: 'plasma_cell_leukemia',
    name: 'Plasma Cell Leukemia',
    description: 'Aggressive form of multiple myeloma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Plasma Cell Leukemia',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Absolute plasma cell count > 2000/uL in peripheral blood.',
      morphologySummary: 'Circulating plasma cells with eccentric nuclei and perinuclear hof.',
      geneticMarkers: ['t(11;14)', 'del(17p)'],
      geneSequences: [{ gene: 'TP53', location: '17p13', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Plasma Cells', unit: 'K/mcL', value: 5.5, range: '0', status: 'CRITICAL' },
        { name: 'LDH', unit: 'U/L', value: 1200, range: '140-280', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 15, plateletCount: 8, morphology: 'blast', cellColor: '#9333ea' },
      stats: { totalCells: 820, normalCells: 400, abnormalCells: 420, mutationsFound: 2 }
    }
  },
  {
    id: 'heavy_chain',
    name: 'Heavy Chain Disease',
    description: 'Rare B-cell proliferative disorder.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Alpha Heavy Chain Disease',
      severity: 'High',
      probability: 80,
      confidenceScore: 75,
      clinicalNotes: 'Production of truncated alpha heavy chains. Often involves GI tract.',
      morphologySummary: 'Plasmacytoid lymphocytes in tissues.',
      geneticMarkers: ['IgA-truncated'],
      geneSequences: [{ gene: 'IGHA1', location: '14q32.33', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Albumin', unit: 'g/dL', value: 2.8, range: '3.5-5.0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 6, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 800, abnormalCells: 50, mutationsFound: 0 }
    }
  },
  {
    id: 'amyloidosis',
    name: 'Amyloidosis (AL)',
    description: 'Condition where abnormal proteins build up in organs.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AL Amyloidosis',
      severity: 'High',
      probability: 85,
      confidenceScore: 82,
      clinicalNotes: 'Deposition of light chain amyloid fibrils. Macroglossia, nephrotic syndrome.',
      morphologySummary: 'Apple-green birefringence under polarized light with Congo red stain.',
      geneticMarkers: ['Lambda-light-chain'],
      geneSequences: [{ gene: 'IGLV', location: '22q11.2', sequence: 'TTAC...' }],
      parameters: [
        { name: 'NT-proBNP', unit: 'pg/mL', value: 4500, range: '<125', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 7, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 870, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'cryo',
    name: 'Cryoglobulinemia',
    description: 'Presence of abnormal proteins in the blood that thicken in cold temperatures.',
    type: 'Healthy',
    template: {
      diseaseName: 'Mixed Cryoglobulinemia',
      severity: 'Moderate',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Associated with Hepatitis C. Purpura, arthralgia, weakness (Meltzer\'s triad).',
      morphologySummary: 'Normal blood morphology, but proteins may precipitate on slide if cold.',
      geneticMarkers: ['HCV-RNA'],
      geneSequences: [{ gene: 'HCV-NS5B', location: 'Viral Genome', sequence: 'GATA...' }],
      parameters: [
        { name: 'C4 Complement', unit: 'mg/dL', value: 5, range: '15-45', status: 'CRITICAL' },
        { name: 'RF', unit: 'IU/mL', value: 150, range: '<20', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 8, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 890, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'factor_vii_def',
    name: 'Factor VII Deficiency',
    description: 'Rare bleeding disorder caused by low levels of factor VII.',
    type: 'Genetic',
    template: {
      diseaseName: 'Factor VII Deficiency',
      severity: 'High',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Isolated prolonged PT. Normal aPTT and platelet count.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['F7-mut'],
      geneSequences: [{ gene: 'F7', location: '13q34', sequence: 'CCGG...' }],
      parameters: [
        { name: 'PT', unit: 'sec', value: 45, range: '11-13.5', status: 'CRITICAL' },
        { name: 'Factor VII', unit: '%', value: 5, range: '50-150', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'factor_x_def',
    name: 'Factor X Deficiency',
    description: 'Rare bleeding disorder caused by low levels of factor X.',
    type: 'Genetic',
    template: {
      diseaseName: 'Factor X Deficiency (Stuart-Prower)',
      severity: 'High',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Prolonged PT and aPTT. Normal thrombin time.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['F10-mut'],
      geneSequences: [{ gene: 'F10', location: '13q34', sequence: 'GATA...' }],
      parameters: [
        { name: 'Factor X', unit: '%', value: 8, range: '50-150', status: 'CRITICAL' },
        { name: 'PT', unit: 'sec', value: 35, range: '11-13.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'factor_xi_def',
    name: 'Factor XI Deficiency',
    description: 'Bleeding disorder caused by low levels of factor XI.',
    type: 'Genetic',
    template: {
      diseaseName: 'Factor XI Deficiency (Hemophilia C)',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Common in Ashkenazi Jews. Bleeding risk doesn\'t always correlate with factor level.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['F11-mut'],
      geneSequences: [{ gene: 'F11', location: '4q35.2', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Factor XI', unit: '%', value: 15, range: '65-150', status: 'ABNORMAL' },
        { name: 'aPTT', unit: 'sec', value: 48, range: '25-35', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'factor_xii_def',
    name: 'Factor XII Deficiency',
    description: 'Condition where factor XII is missing, usually not causing bleeding.',
    type: 'Genetic',
    template: {
      diseaseName: 'Factor XII Deficiency (Hageman Factor)',
      severity: 'Low',
      probability: 98,
      confidenceScore: 95,
      clinicalNotes: 'Markedly prolonged aPTT but NO clinical bleeding. May have increased thrombosis risk.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['F12-mut'],
      geneSequences: [{ gene: 'F12', location: '5q35.3', sequence: 'GGCG...' }],
      parameters: [
        { name: 'aPTT', unit: 'sec', value: 150, range: '25-35', status: 'CRITICAL' },
        { name: 'Factor XII', unit: '%', value: 1, range: '50-150', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 28, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 915, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'factor_xiii_def',
    name: 'Factor XIII Deficiency',
    description: 'Rare bleeding disorder where clots form but are unstable.',
    type: 'Genetic',
    template: {
      diseaseName: 'Factor XIII Deficiency',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Normal PT, aPTT, and TT. Clot solubility test is positive.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['F13A1', 'F13B'],
      geneSequences: [{ gene: 'F13A1', location: '6p25.1', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Factor XIII', unit: '%', value: 2, range: '70-140', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'combined_v_viii',
    name: 'Combined V & VIII Def',
    description: 'Rare bleeding disorder with low levels of both factors V and VIII.',
    type: 'Genetic',
    template: {
      diseaseName: 'Combined Factor V and VIII Deficiency',
      severity: 'High',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Caused by mutations in LMAN1 or MCFD2 (transport proteins).',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['LMAN1-mut'],
      geneSequences: [{ gene: 'LMAN1', location: '18q21.32', sequence: 'GATA...' }],
      parameters: [
        { name: 'Factor V', unit: '%', value: 15, range: '50-150', status: 'ABNORMAL' },
        { name: 'Factor VIII', unit: '%', value: 12, range: '50-150', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'afibrinogenemia',
    name: 'Afibrinogenemia',
    description: 'Rare condition where fibrinogen is completely absent.',
    type: 'Genetic',
    template: {
      diseaseName: 'Congenital Afibrinogenemia',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'All clotting tests (PT, aPTT, TT) are infinitely prolonged.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['FGA-mut'],
      geneSequences: [{ gene: 'FGA', location: '4q31.3', sequence: 'CCGG...' }],
      parameters: [
        { name: 'Fibrinogen', unit: 'mg/dL', value: 0, range: '200-400', status: 'CRITICAL' },
        { name: 'TT', unit: 'sec', value: 120, range: '15-20', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'dysfibrinogenemia',
    name: 'Dysfibrinogenemia',
    description: 'Condition where fibrinogen is present but doesn\'t function correctly.',
    type: 'Genetic',
    template: {
      diseaseName: 'Congenital Dysfibrinogenemia',
      severity: 'Moderate',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Fibrinogen antigen level normal, but activity is low. Prolonged TT.',
      morphologySummary: 'Normal morphology.',
      geneticMarkers: ['FGG-mut'],
      geneSequences: [{ gene: 'FGG', location: '4q32.1', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Fibrinogen Activity', unit: 'mg/dL', value: 85, range: '200-400', status: 'ABNORMAL' },
        { name: 'TT', unit: 'sec', value: 45, range: '15-20', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 895, abnormalCells: 5, mutationsFound: 1 }
    }
  },
  {
    id: 'malaria_vivax',
    name: 'Malaria (P. vivax)',
    description: 'Infection with Plasmodium vivax parasite.',
    type: 'Infection',
    template: {
      diseaseName: 'Malaria (Plasmodium vivax)',
      severity: 'High',
      probability: 94,
      confidenceScore: 90,
      clinicalNotes: 'Schuffner\'s dots in infected RBCs. Parasite prefers reticulocytes.',
      morphologySummary: 'Enlarged RBCs with Schuffner\'s dots. Amoeboid trophozoites.',
      geneticMarkers: ['P.vivax-DNA'],
      geneSequences: [{ gene: '18S rRNA', location: 'Parasite Genome', sequence: 'GGCG...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 9.5, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 85, range: '150-450', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 6, plateletCount: 10, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 0 }
    }
  },
  {
    id: 'malaria_falciparum',
    name: 'Malaria (P. falciparum)',
    description: 'Most severe form of malaria.',
    type: 'Infection',
    template: {
      diseaseName: 'Malaria (Plasmodium falciparum)',
      severity: 'Critical',
      probability: 98,
      confidenceScore: 95,
      clinicalNotes: 'High parasitemia. Ring forms and crescent-shaped gametocytes.',
      morphologySummary: 'Multiple ring forms in one RBC. Maurer\'s clefts. Banana-shaped gametocytes.',
      geneticMarkers: ['P.falciparum-DNA', 'HRP2'],
      geneSequences: [{ gene: 'pfhrp2', location: 'Parasite Genome', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 7.2, range: '13.5-17.5', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 45, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 8, plateletCount: 5, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 500, abnormalCells: 400, mutationsFound: 0 }
    }
  },
  {
    id: 'malaria_malariae',
    name: 'Malaria (P. malariae)',
    description: 'Infection with Plasmodium malariae parasite.',
    type: 'Infection',
    template: {
      diseaseName: 'Malaria (Plasmodium malariae)',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Band-form trophozoites. 72-hour fever cycle.',
      morphologySummary: 'Band-shaped trophozoites. Rosette-shaped schizonts.',
      geneticMarkers: ['P.malariae-DNA'],
      geneSequences: [{ gene: '18S rRNA', location: 'Parasite Genome', sequence: 'GATA...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 10.5, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 7, plateletCount: 15, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 750, abnormalCells: 70, mutationsFound: 0 }
    }
  },
  {
    id: 'hered_spherocytosis',
    name: 'Hereditary Spherocytosis',
    description: 'Genetic disorder of the RBC membrane causing spherical cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hereditary Spherocytosis',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 90,
      clinicalNotes: 'Increased MCHC. Negative Coombs test. Osmotic fragility increased.',
      morphologySummary: 'Spherocytes (small, dense RBCs lacking central pallor).',
      geneticMarkers: ['ANK1-mut'],
      geneSequences: [{ gene: 'ANK1', location: '8p11.21', sequence: 'GCTA...' }],
      parameters: [
        { name: 'MCHC', unit: 'g/dL', value: 37, range: '32-36', status: 'ABNORMAL' },
        { name: 'Reticulocytes', unit: '%', value: 8, range: '0.5-2.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 6, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 600, abnormalCells: 250, mutationsFound: 1 }
    }
  },
  {
    id: 'hered_elliptocytosis',
    name: 'Hereditary Elliptocytosis',
    description: 'Genetic disorder causing oval or elliptical RBCs.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hereditary Elliptocytosis',
      severity: 'Low',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Usually asymptomatic. Elliptocytes > 25% on smear.',
      morphologySummary: 'Elliptocytes (cigar-shaped cells).',
      geneticMarkers: ['SPTA1-mut'],
      geneSequences: [{ gene: 'SPTA1', location: '1q23.1', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 13.2, range: '13.5-17.5', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 600, abnormalCells: 280, mutationsFound: 1 }
    }
  },
  {
    id: 'hered_stomatocytosis',
    name: 'Hereditary Stomatocytosis',
    description: 'Rare genetic disorder of RBC membrane permeability.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hereditary Stomatocytosis',
      severity: 'Moderate',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Mouth-shaped central pallor in RBCs.',
      morphologySummary: 'Stomatocytes (RBCs with slit-like central pallor).',
      geneticMarkers: ['SLC4A1-mut'],
      geneSequences: [{ gene: 'SLC4A1', location: '17q21.31', sequence: 'CCGA...' }],
      parameters: [
        { name: 'MCV', unit: 'fL', value: 105, range: '80-100', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 6, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 830, normalCells: 700, abnormalCells: 130, mutationsFound: 1 }
    }
  },
  {
    id: 'pnh',
    name: 'Paroxysmal Nocturnal Hemoglobinuria',
    description: 'Acquired clonal stem cell disorder causing hemolytic anemia.',
    type: 'Genetic',
    template: {
      diseaseName: 'PNH',
      severity: 'High',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'Deficiency of CD55 and CD59 on flow cytometry.',
      morphologySummary: 'Normocytic anemia. Hemoglobinuria may be present.',
      geneticMarkers: ['PIGA-mut'],
      geneSequences: [{ gene: 'PIGA', location: 'Xp22.2', sequence: 'AATT...' }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 1200, range: '140-280', status: 'CRITICAL' },
        { name: 'Haptoglobin', unit: 'mg/dL', value: 5, range: '30-200', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 4, plateletCount: 12, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 780, normalCells: 700, abnormalCells: 80, mutationsFound: 1 }
    }
  },
  {
    id: 'aiha_warm',
    name: 'Warm Autoimmune Hemolytic Anemia',
    description: 'Autoantibodies (IgG) react with RBCs at body temperature.',
    type: 'Infection',
    template: {
      diseaseName: 'Warm AIHA',
      severity: 'High',
      probability: 94,
      confidenceScore: 90,
      clinicalNotes: 'Positive direct antiglobulin test (DAT) for IgG.',
      morphologySummary: 'Spherocytes and polychromasia.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'Bilirubin', unit: 'mg/dL', value: 3.2, range: '0.1-1.2', status: 'ABNORMAL' },
        { name: 'Reticulocytes', unit: '%', value: 10, range: '0.5-2.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 8, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 650, abnormalCells: 150, mutationsFound: 0 }
    }
  },
  {
    id: 'cold_agglutinin',
    name: 'Cold Agglutinin Disease',
    description: 'Autoantibodies (IgM) react with RBCs at cold temperatures.',
    type: 'Infection',
    template: {
      diseaseName: 'Cold Agglutinin Disease',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'RBC clumping (agglutination) on smear at room temp.',
      morphologySummary: 'RBC agglutination. Spherocytes may be present.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'Cold Agglutinin Titer', unit: 'ratio', value: 512, range: '<64', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 7, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 700, abnormalCells: 120, mutationsFound: 0 }
    }
  },
  {
    id: 'maha',
    name: 'Microangiopathic Hemolytic Anemia',
    description: 'Mechanical destruction of RBCs in small vessels.',
    type: 'Anemia',
    template: {
      diseaseName: 'MAHA',
      severity: 'High',
      probability: 96,
      confidenceScore: 94,
      clinicalNotes: 'Schistocytes on peripheral smear. Often seen in TTP/HUS.',
      morphologySummary: 'Schistocytes (fragmented RBCs), helmet cells.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'Schistocytes', unit: '%', value: 3.5, range: '<0.5', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 40, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 9, plateletCount: 5, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 750, normalCells: 600, abnormalCells: 150, mutationsFound: 0 }
    }
  },
  {
    id: 'ttp',
    name: 'Thrombotic Thrombocytopenic Purpura',
    description: 'Severe MAHA with thrombocytopenia and ADAMTS13 deficiency.',
    type: 'Genetic',
    template: {
      diseaseName: 'TTP',
      severity: 'Critical',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 'ADAMTS13 activity < 10%. Medical emergency.',
      morphologySummary: 'Numerous schistocytes. Severe thrombocytopenia.',
      geneticMarkers: ['ADAMTS13-mut'],
      geneSequences: [{ gene: 'ADAMTS13', location: '9q34.2', sequence: 'GGAA...' }],
      parameters: [
        { name: 'ADAMTS13 Activity', unit: '%', value: 2, range: '70-150', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 12, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 10, plateletCount: 2, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 700, normalCells: 550, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'hus',
    name: 'Hemolytic Uremic Syndrome',
    description: 'MAHA, thrombocytopenia, and acute kidney injury.',
    type: 'Infection',
    template: {
      diseaseName: 'HUS',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Often follows Shiga toxin-producing E. coli infection.',
      morphologySummary: 'Schistocytes. Thrombocytopenia.',
      geneticMarkers: ['CFH-mut'],
      geneSequences: [{ gene: 'CFH', location: '1q31.3', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Creatinine', unit: 'mg/dL', value: 4.5, range: '0.7-1.3', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 55, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 11, plateletCount: 8, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 760, normalCells: 620, abnormalCells: 140, mutationsFound: 1 }
    }
  },
  {
    id: 'dic',
    name: 'Disseminated Intravascular Coagulation',
    description: 'Systemic activation of blood coagulation.',
    type: 'Infection',
    template: {
      diseaseName: 'DIC',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 88,
      clinicalNotes: 'Prolonged PT/PTT. Low fibrinogen. High D-dimer.',
      morphologySummary: 'Schistocytes. Low platelets.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'D-Dimer', unit: 'ng/mL', value: 8500, range: '<500', status: 'CRITICAL' },
        { name: 'Fibrinogen', unit: 'mg/dL', value: 80, range: '200-400', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 15, plateletCount: 5, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 680, abnormalCells: 120, mutationsFound: 0 }
    }
  },
  {
    id: 'itp',
    name: 'Immune Thrombocytopenic Purpura',
    description: 'Isolated low platelet count with normal bone marrow.',
    type: 'Infection',
    template: {
      diseaseName: 'ITP',
      severity: 'Moderate',
      probability: 90,
      confidenceScore: 85,
      clinicalNotes: 'Diagnosis of exclusion. Anti-platelet antibodies.',
      morphologySummary: 'Large platelets (megathrombocytes). Normal RBC/WBC.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 25, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 3, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 870, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'hit',
    name: 'Heparin-Induced Thrombocytopenia',
    description: 'Prothrombotic reaction to heparin.',
    type: 'Infection',
    template: {
      diseaseName: 'HIT',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: '4T score high. Positive PF4 antibody.',
      morphologySummary: 'Thrombocytopenia. Normal RBC morphology.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'Platelet Drop', unit: '%', value: 55, range: '<30', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 8, plateletCount: 12, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 840, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'essential_thrombocythemia',
    name: 'Essential Thrombocythemia',
    description: 'Myeloproliferative neoplasm causing high platelets.',
    type: 'Genetic',
    template: {
      diseaseName: 'Essential Thrombocythemia',
      severity: 'Moderate',
      probability: 94,
      confidenceScore: 92,
      clinicalNotes: 'JAK2, CALR, or MPL mutation often present.',
      morphologySummary: 'Large, atypical platelets. Platelet clumps.',
      geneticMarkers: ['JAK2-V617F'],
      geneSequences: [{ gene: 'JAK2', location: '9p24.1', sequence: 'GTTT...', mutation: { pos: 15, from: 'G', to: 'T', type: 'SNP', desc: 'V617F mutation' } }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 850, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 9, plateletCount: 80, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1100, normalCells: 1000, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'primary_myelofibrosis',
    name: 'Primary Myelofibrosis',
    description: 'Bone marrow scarring leading to anemia and splenomegaly.',
    type: 'Genetic',
    template: {
      diseaseName: 'Primary Myelofibrosis',
      severity: 'High',
      probability: 91,
      confidenceScore: 88,
      clinicalNotes: 'Leukoerythroblastic smear. Teardrop RBCs.',
      morphologySummary: 'Dacrocytes (teardrop cells). Nucleated RBCs.',
      geneticMarkers: ['CALR-mut'],
      geneSequences: [{ gene: 'CALR', location: '19p13.2', sequence: 'CCGA...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 9.8, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'WBC', unit: 'K/mcL', value: 18, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 15, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 600, abnormalCells: 220, mutationsFound: 1 }
    }
  },
  {
    id: 'cml',
    name: 'Chronic Myeloid Leukemia',
    description: 'Myeloproliferative neoplasm with Philadelphia chromosome.',
    type: 'Leukemia',
    template: {
      diseaseName: 'CML',
      severity: 'High',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 't(9;22) BCR-ABL1 translocation. Basophilia.',
      morphologySummary: 'Full spectrum of myeloid maturation. Increased basophils.',
      geneticMarkers: ['BCR-ABL1'],
      geneSequences: [{ gene: 'BCR-ABL1', location: 't(9;22)', sequence: 'AAGG...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 120, range: '4.5-11', status: 'CRITICAL' },
        { name: 'Basophils', unit: '%', value: 5, range: '0-1', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 100, plateletCount: 35, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1200, normalCells: 400, abnormalCells: 800, mutationsFound: 1 }
    }
  },
  {
    id: 'cmml',
    name: 'Chronic Myelomonocytic Leukemia',
    description: 'MDS/MPN overlap disorder with monocytosis.',
    type: 'Leukemia',
    template: {
      diseaseName: 'CMML',
      severity: 'High',
      probability: 89,
      confidenceScore: 85,
      clinicalNotes: 'Persistent monocytosis > 1 K/mcL.',
      morphologySummary: 'Monocytosis. Dysplastic myeloid cells.',
      geneticMarkers: ['TET2-mut'],
      geneSequences: [{ gene: 'TET2', location: '4q24', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Monocytes', unit: 'K/mcL', value: 2.5, range: '0.2-0.8', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 15, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 20, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'mds',
    name: 'Myelodysplastic Syndrome',
    description: 'Group of cancers where blood cells don\'t mature properly.',
    type: 'Leukemia',
    template: {
      diseaseName: 'MDS',
      severity: 'High',
      probability: 87,
      confidenceScore: 82,
      clinicalNotes: 'Dysplasia in one or more cell lines. Risk of AML.',
      morphologySummary: 'Pseudo-Pelger-Huet anomaly. Ring sideroblasts.',
      geneticMarkers: ['SF3B1-mut'],
      geneSequences: [{ gene: 'SF3B1', location: '2q33.1', sequence: 'CCGA...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 8.5, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 80, range: '150-450', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 5, plateletCount: 12, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 780, normalCells: 500, abnormalCells: 280, mutationsFound: 1 }
    }
  },
  {
    id: 'multiple_myeloma',
    name: 'Multiple Myeloma',
    description: 'Cancer of plasma cells in the bone marrow.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Multiple Myeloma',
      severity: 'High',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'M-protein spike. Rouleaux formation on smear.',
      morphologySummary: 'Rouleaux formation (RBCs stacked like coins).',
      geneticMarkers: ['IGH-translocation'],
      geneSequences: [{ gene: 'IGH', location: '14q32.33', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Calcium', unit: 'mg/dL', value: 11.5, range: '8.5-10.5', status: 'ABNORMAL' },
        { name: 'Creatinine', unit: 'mg/dL', value: 2.1, range: '0.7-1.3', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 6, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'mgus',
    name: 'MGUS',
    description: 'Precursor to multiple myeloma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'MGUS',
      severity: 'Low',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'M-protein < 3 g/dL. No CRAB symptoms.',
      morphologySummary: 'Normal smear. Occasional rouleaux.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'M-Protein', unit: 'g/dL', value: 1.5, range: '0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 220, wbcCount: 7, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 890, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'waldenstrom',
    name: 'Waldenström Macroglobulinemia',
    description: 'Lymphoplasmacytic lymphoma with IgM spike.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Waldenström Macroglobulinemia',
      severity: 'High',
      probability: 90,
      confidenceScore: 88,
      clinicalNotes: 'Hyperviscosity syndrome. MYD88 L265P mutation.',
      morphologySummary: 'Rouleaux. Plasmacytoid lymphocytes.',
      geneticMarkers: ['MYD88-L265P'],
      geneSequences: [{ gene: 'MYD88', location: '3p22.2', sequence: 'GGAA...', mutation: { pos: 20, from: 'T', to: 'C', type: 'SNP', desc: 'L265P mutation' } }],
      parameters: [
        { name: 'IgM', unit: 'mg/dL', value: 4500, range: '40-230', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 8, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 700, abnormalCells: 120, mutationsFound: 1 }
    }
  },
  {
    id: 'hodgkin_lymphoma',
    name: 'Hodgkin Lymphoma',
    description: 'Cancer of the lymphatic system with Reed-Sternberg cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Hodgkin Lymphoma',
      severity: 'High',
      probability: 93,
      confidenceScore: 90,
      clinicalNotes: 'Reed-Sternberg cells in lymph node biopsy.',
      morphologySummary: 'Usually normal peripheral smear. Eosinophilia possible.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'ESR', unit: 'mm/hr', value: 65, range: '<20', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 12, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 850, abnormalCells: 30, mutationsFound: 0 }
    }
  },
  {
    id: 'non_hodgkin_lymphoma',
    name: 'Non-Hodgkin Lymphoma',
    description: 'Diverse group of blood cancers that start in lymphocytes.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Non-Hodgkin Lymphoma',
      severity: 'High',
      probability: 91,
      confidenceScore: 88,
      clinicalNotes: 'B-cell or T-cell origin. Variable presentation.',
      morphologySummary: 'Circulating lymphoma cells may be seen.',
      geneticMarkers: ['BCL2-translocation'],
      geneSequences: [{ gene: 'BCL2', location: '18q21.33', sequence: 'AATT...' }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 450, range: '140-280', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 10, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 800, abnormalCells: 50, mutationsFound: 1 }
    }
  },
  {
    id: 'burkitt_lymphoma',
    name: 'Burkitt Lymphoma',
    description: 'Highly aggressive B-cell non-Hodgkin lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Burkitt Lymphoma',
      severity: 'Critical',
      probability: 96,
      confidenceScore: 94,
      clinicalNotes: 'MYC translocation t(8;14). Starry-sky pattern in biopsy.',
      morphologySummary: 'Medium-sized lymphocytes with vacuolated cytoplasm.',
      geneticMarkers: ['MYC-translocation'],
      geneSequences: [{ gene: 'MYC', location: '8q24.21', sequence: 'CCGA...' }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 2500, range: '140-280', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 15, plateletCount: 12, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 700, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'follicular_lymphoma',
    name: 'Follicular Lymphoma',
    description: 'Indolent B-cell non-Hodgkin lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Follicular Lymphoma',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 't(14;18) translocation involving BCL2.',
      morphologySummary: 'Small cleaved cells (centrocytes).',
      geneticMarkers: ['BCL2-rearrangement'],
      geneSequences: [{ gene: 'BCL2', location: '18q21.33', sequence: 'TTGC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 8.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 880, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'mantle_cell_lymphoma',
    name: 'Mantle Cell Lymphoma',
    description: 'Aggressive B-cell lymphoma with CCND1 translocation.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Mantle Cell Lymphoma',
      severity: 'High',
      probability: 92,
      confidenceScore: 89,
      clinicalNotes: 't(11;14) translocation. Cyclin D1 overexpression.',
      morphologySummary: 'Small to medium lymphocytes with irregular nuclei.',
      geneticMarkers: ['CCND1-translocation'],
      geneSequences: [{ gene: 'CCND1', location: '11q13.3', sequence: 'GGAA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 12, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 12, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 800, abnormalCells: 50, mutationsFound: 1 }
    }
  },
  {
    id: 'marginal_zone_lymphoma',
    name: 'Marginal Zone Lymphoma',
    description: 'Group of indolent B-cell lymphomas.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Marginal Zone Lymphoma',
      severity: 'Moderate',
      probability: 86,
      confidenceScore: 82,
      clinicalNotes: 'Often associated with chronic inflammation (e.g., H. pylori).',
      morphologySummary: 'Small lymphocytes, monocytoid B-cells.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 7.8, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 220, wbcCount: 6, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 900, abnormalCells: 20, mutationsFound: 0 }
    }
  },
  {
    id: 'dlbcl',
    name: 'Diffuse Large B-Cell Lymphoma',
    description: 'Most common aggressive non-Hodgkin lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'DLBCL',
      severity: 'High',
      probability: 94,
      confidenceScore: 91,
      clinicalNotes: 'Large B-cells > 2x normal lymphocyte size.',
      morphologySummary: 'Large, atypical lymphocytes with prominent nucleoli.',
      geneticMarkers: ['BCL6-rearrangement'],
      geneSequences: [{ gene: 'BCL6', location: '3q27.3', sequence: 'AATT...' }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 600, range: '140-280', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 14, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 830, normalCells: 750, abnormalCells: 80, mutationsFound: 1 }
    }
  },
  {
    id: 't_cell_lymphoma',
    name: 'T-Cell Lymphoma',
    description: 'Group of lymphomas that start in T-cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'T-Cell Lymphoma',
      severity: 'High',
      probability: 89,
      confidenceScore: 85,
      clinicalNotes: 'Often involves skin, nodes, or extranodal sites.',
      morphologySummary: 'Atypical T-cells, often with irregular nuclei.',
      geneticMarkers: ['TCR-rearrangement'],
      geneSequences: [{ gene: 'TCR', location: '7q34', sequence: 'CCGA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 11, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 11, plateletCount: 22, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 860, normalCells: 800, abnormalCells: 60, mutationsFound: 1 }
    }
  },
  {
    id: 'mycosis_fungoides',
    name: 'Mycosis Fungoides',
    description: 'Most common cutaneous T-cell lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Mycosis Fungoides',
      severity: 'Moderate',
      probability: 87,
      confidenceScore: 83,
      clinicalNotes: 'Skin patches, plaques, or tumors.',
      morphologySummary: 'Cerebriform nuclei in T-cells (Sézary cells).',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 9.2, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 9, plateletCount: 25, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 860, abnormalCells: 20, mutationsFound: 0 }
    }
  },
  {
    id: 'sezary_syndrome',
    name: 'Sézary Syndrome',
    description: 'Leukemic phase of cutaneous T-cell lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Sézary Syndrome',
      severity: 'High',
      probability: 91,
      confidenceScore: 88,
      clinicalNotes: 'Erythroderma, lymphadenopathy, and circulating Sézary cells.',
      morphologySummary: 'Sézary cells (lymphocytes with folded, cerebriform nuclei).',
      geneticMarkers: ['TCR-clonality'],
      geneSequences: [{ gene: 'TCR', location: '7q34', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Sézary Cells', unit: 'cells/mcL', value: 1500, range: '<100', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 22, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 25, plateletCount: 18, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 600, abnormalCells: 200, mutationsFound: 1 }
    }
  },
  {
    id: 'all_b_cell',
    name: 'B-Cell Acute Lymphoblastic Leukemia',
    description: 'Aggressive leukemia of B-cell precursors.',
    type: 'Leukemia',
    template: {
      diseaseName: 'B-ALL',
      severity: 'Critical',
      probability: 97,
      confidenceScore: 95,
      clinicalNotes: 'CD19, CD20, CD22 positive. t(9;22) or t(12;21) common.',
      morphologySummary: 'Lymphoblasts with scant cytoplasm and inconspicuous nucleoli.',
      geneticMarkers: ['ETV6-RUNX1'],
      geneSequences: [{ gene: 'ETV6', location: '12p13.2', sequence: 'GGAA...' }],
      parameters: [
        { name: 'Blasts', unit: '%', value: 85, range: '0', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 45, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 80, plateletCount: 10, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1000, normalCells: 150, abnormalCells: 850, mutationsFound: 1 }
    }
  },
  {
    id: 'all_t_cell',
    name: 'T-Cell Acute Lymphoblastic Leukemia',
    description: 'Aggressive leukemia of T-cell precursors.',
    type: 'Leukemia',
    template: {
      diseaseName: 'T-ALL',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Often presents with mediastinal mass. CD3, CD7 positive.',
      morphologySummary: 'Lymphoblasts, often with convoluted nuclei.',
      geneticMarkers: ['NOTCH1-mut'],
      geneSequences: [{ gene: 'NOTCH1', location: '9q34.3', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Blasts', unit: '%', value: 70, range: '0', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 150, range: '4.5-11', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 130, wbcCount: 120, plateletCount: 8, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1100, normalCells: 200, abnormalCells: 900, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m0',
    name: 'AML-M0 (Undifferentiated)',
    description: 'Acute myeloid leukemia with no myeloid differentiation.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M0',
      severity: 'Critical',
      probability: 92,
      confidenceScore: 88,
      clinicalNotes: 'Myeloperoxidase (MPO) negative by light microscopy.',
      morphologySummary: 'Primitive blasts with no granules or Auer rods.',
      geneticMarkers: ['RUNX1-mut'],
      geneSequences: [{ gene: 'RUNX1', location: '21q22.12', sequence: 'CCGA...' }],
      parameters: [
        { name: 'Blasts', unit: '%', value: 90, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 60, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 100, abnormalCells: 850, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m1',
    name: 'AML-M1 (Minimal Maturation)',
    description: 'Acute myeloid leukemia with minimal myeloid differentiation.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M1',
      severity: 'Critical',
      probability: 93,
      confidenceScore: 89,
      clinicalNotes: '> 90% blasts. Few Auer rods may be present.',
      morphologySummary: 'Blasts with rare azurophilic granules.',
      geneticMarkers: ['FLT3-ITD'],
      geneSequences: [{ gene: 'FLT3', location: '13q12.2', sequence: 'AATT...' }],
      parameters: [
        { name: 'Blasts', unit: '%', value: 92, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 135, wbcCount: 70, plateletCount: 12, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 980, normalCells: 80, abnormalCells: 900, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m2',
    name: 'AML-M2 (With Maturation)',
    description: 'Acute myeloid leukemia with significant myeloid maturation.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M2',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 't(8;21) translocation common. Auer rods frequent.',
      morphologySummary: 'Blasts with granules and Auer rods. Maturing myeloid cells.',
      geneticMarkers: ['RUNX1-RUNX1T1'],
      geneSequences: [{ gene: 'RUNX1-RUNX1T1', location: 't(8;21)', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Blasts', unit: '%', value: 45, range: '0', status: 'CRITICAL' },
        { name: 'Auer Rods', unit: 'presence', value: 1, range: '0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 40, plateletCount: 20, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 400, abnormalCells: 500, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m3',
    name: 'AML-M3 (APL)',
    description: 'Acute promyelocytic leukemia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M3 (APL)',
      severity: 'Critical',
      probability: 99,
      confidenceScore: 98,
      clinicalNotes: 't(15;17) PML-RARA. High risk of DIC. Treat with ATRA.',
      morphologySummary: 'Hypergranular promyelocytes. Faggot cells (bundles of Auer rods).',
      geneticMarkers: ['PML-RARA'],
      geneSequences: [{ gene: 'PML-RARA', location: 't(15;17)', sequence: 'CCGA...' }],
      parameters: [
        { name: 'Promyelocytes', unit: '%', value: 75, range: '0', status: 'CRITICAL' },
        { name: 'Fibrinogen', unit: 'mg/dL', value: 110, range: '200-400', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 145, wbcCount: 15, plateletCount: 35, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 200, abnormalCells: 650, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m4',
    name: 'AML-M4 (Myelomonocytic)',
    description: 'Acute leukemia with both myeloid and monocytic features.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M4',
      severity: 'Critical',
      probability: 94,
      confidenceScore: 91,
      clinicalNotes: 'inv(16) or t(16;16) common. Abnormal eosinophils.',
      morphologySummary: 'Myeloblasts and monoblasts. Eosinophilia in M4eo.',
      geneticMarkers: ['CBFB-MYH11'],
      geneSequences: [{ gene: 'CBFB-MYH11', location: 'inv(16)', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Monocytes', unit: '%', value: 25, range: '2-8', status: 'ABNORMAL' },
        { name: 'Blasts', unit: '%', value: 35, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 155, wbcCount: 30, plateletCount: 45, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 500, abnormalCells: 380, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m5',
    name: 'AML-M5 (Monocytic)',
    description: 'Acute leukemia with predominantly monocytic differentiation.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M5',
      severity: 'Critical',
      probability: 93,
      confidenceScore: 90,
      clinicalNotes: 'Extramedullary involvement (gums, skin) common.',
      morphologySummary: 'Monoblasts (M5a) or promonocytes (M5b).',
      geneticMarkers: ['KMT2A-rearrangement'],
      geneSequences: [{ gene: 'KMT2A', location: '11q23.3', sequence: 'GGAA...' }],
      parameters: [
        { name: 'Monoblasts', unit: '%', value: 82, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 55, plateletCount: 40, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 150, abnormalCells: 770, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m6',
    name: 'AML-M6 (Erythroleukemia)',
    description: 'Acute leukemia with predominant erythroid precursors.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M6',
      severity: 'Critical',
      probability: 90,
      confidenceScore: 86,
      clinicalNotes: '> 50% erythroid precursors in bone marrow.',
      morphologySummary: 'Dysplastic erythroid cells. Multinucleated RBC precursors.',
      geneticMarkers: ['TP53-mut'],
      geneSequences: [{ gene: 'TP53', location: '17p13.1', sequence: 'AATT...' }],
      parameters: [
        { name: 'Nucleated RBCs', unit: '/100WBC', value: 45, range: '0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 12, plateletCount: 50, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 400, abnormalCells: 400, mutationsFound: 1 }
    }
  },
  {
    id: 'aml_m7',
    name: 'AML-M7 (Megakaryoblastic)',
    description: 'Acute leukemia of megakaryocyte precursors.',
    type: 'Leukemia',
    template: {
      diseaseName: 'AML-M7',
      severity: 'Critical',
      probability: 88,
      confidenceScore: 84,
      clinicalNotes: 'Associated with Down syndrome in children. Bone marrow fibrosis.',
      morphologySummary: 'Megakaryoblasts with cytoplasmic blebs.',
      geneticMarkers: ['GATA1-mut'],
      geneSequences: [{ gene: 'GATA1', location: 'Xp11.23', sequence: 'CCGA...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 35, range: '150-450', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 18, plateletCount: 10, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 830, normalCells: 600, abnormalCells: 230, mutationsFound: 1 }
    }
  },
  {
    id: 'cll',
    name: 'Chronic Lymphocytic Leukemia',
    description: 'Common slow-growing leukemia of B-cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'CLL',
      severity: 'Moderate',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 'Smudge cells on smear. CD5, CD19, CD23 positive.',
      morphologySummary: 'Small, mature lymphocytes. Numerous smudge cells.',
      geneticMarkers: ['del(13q)'],
      geneSequences: [{ gene: 'RB1', location: '13q14.2', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Lymphocytes', unit: 'K/mcL', value: 45, range: '1-4', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 55, range: '4.5-11', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 60, plateletCount: 150, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1200, normalCells: 400, abnormalCells: 800, mutationsFound: 1 }
    }
  },
  {
    id: 'sll',
    name: 'Small Lymphocytic Lymphoma',
    description: 'Tissue manifestation of CLL.',
    type: 'Leukemia',
    template: {
      diseaseName: 'SLL',
      severity: 'Moderate',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Same biology as CLL but primarily in lymph nodes.',
      morphologySummary: 'Small, mature lymphocytes.',
      geneticMarkers: ['del(11q)'],
      geneSequences: [{ gene: 'ATM', location: '11q22.3', sequence: 'CCGA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 9.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 8, plateletCount: 200, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 900, abnormalCells: 50, mutationsFound: 1 }
    }
  },
  {
    id: 'hairy_cell_leukemia',
    name: 'Hairy Cell Leukemia',
    description: 'Rare B-cell leukemia with "hairy" projections.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Hairy Cell Leukemia',
      severity: 'Moderate',
      probability: 97,
      confidenceScore: 95,
      clinicalNotes: 'BRAF V600E mutation. TRAP positive. Splenomegaly.',
      morphologySummary: 'Lymphocytes with fine, hair-like cytoplasmic projections.',
      geneticMarkers: ['BRAF-V600E'],
      geneSequences: [{ gene: 'BRAF', location: '7q34', sequence: 'TTGC...', mutation: { pos: 10, from: 'T', to: 'A', type: 'SNP', desc: 'V600E mutation' } }],
      parameters: [
        { name: 'Monocytes', unit: 'K/mcL', value: 0, range: '0.2-0.8', status: 'CRITICAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 9.5, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 3, plateletCount: 80, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 600, abnormalCells: 200, mutationsFound: 1 }
    }
  },
  {
    id: 'b_pll',
    name: 'B-Cell Prolymphocytic Leukemia',
    description: 'Aggressive B-cell leukemia with prominent nucleoli.',
    type: 'Leukemia',
    template: {
      diseaseName: 'B-PLL',
      severity: 'High',
      probability: 91,
      confidenceScore: 88,
      clinicalNotes: '> 55% prolymphocytes in blood. Massive splenomegaly.',
      morphologySummary: 'Medium-sized lymphocytes with a single prominent nucleolus.',
      geneticMarkers: ['TP53-deletion'],
      geneSequences: [{ gene: 'TP53', location: '17p13.1', sequence: 'GGAA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 250, range: '4.5-11', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 180, plateletCount: 60, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1300, normalCells: 300, abnormalCells: 1000, mutationsFound: 1 }
    }
  },
  {
    id: 't_pll',
    name: 'T-Cell Prolymphocytic Leukemia',
    description: 'Very aggressive T-cell leukemia.',
    type: 'Leukemia',
    template: {
      diseaseName: 'T-PLL',
      severity: 'Critical',
      probability: 93,
      confidenceScore: 90,
      clinicalNotes: 'inv(14)(q11;q32) common. Rapidly rising WBC.',
      morphologySummary: 'Small to medium lymphocytes with nucleoli and cytoplasmic blebs.',
      geneticMarkers: ['TCL1A-overexpression'],
      geneSequences: [{ gene: 'TCL1A', location: '14q32.13', sequence: 'AATT...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 350, range: '4.5-11', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 220, plateletCount: 45, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1400, normalCells: 200, abnormalCells: 1200, mutationsFound: 1 }
    }
  },
  {
    id: 'lgl_leukemia',
    name: 'Large Granular Lymphocytic Leukemia',
    description: 'Chronic leukemia of T-cells or NK-cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'LGL Leukemia',
      severity: 'Moderate',
      probability: 89,
      confidenceScore: 85,
      clinicalNotes: 'Associated with rheumatoid arthritis (Felty syndrome). Neutropenia.',
      morphologySummary: 'Lymphocytes with abundant cytoplasm and azurophilic granules.',
      geneticMarkers: ['STAT3-mut'],
      geneSequences: [{ gene: 'STAT3', location: '17q21.2', sequence: 'CCGA...' }],
      parameters: [
        { name: 'Neutrophils', unit: 'K/mcL', value: 0.4, range: '1.8-7.7', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 6, plateletCount: 180, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 750, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'atll',
    name: 'Adult T-Cell Leukemia/Lymphoma',
    description: 'Leukemia caused by HTLV-1 virus.',
    type: 'Leukemia',
    template: {
      diseaseName: 'ATLL',
      severity: 'Critical',
      probability: 94,
      confidenceScore: 91,
      clinicalNotes: '"Flower cells" on smear. Hypercalcemia. HTLV-1 positive.',
      morphologySummary: 'Lymphocytes with highly irregular, polylobated nuclei (flower cells).',
      geneticMarkers: ['HTLV-1-Integration'],
      geneSequences: [{ gene: 'HTLV-1', location: 'Viral Genome', sequence: 'TTAC...' }],
      parameters: [
        { name: 'Calcium', unit: 'mg/dL', value: 14.5, range: '8.5-10.5', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 85, range: '4.5-11', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 70, plateletCount: 120, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 400, abnormalCells: 550, mutationsFound: 1 }
    }
  },
  {
    id: 'plasma_cell_leukemia',
    name: 'Plasma Cell Leukemia',
    description: 'Aggressive form of multiple myeloma in the blood.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Plasma Cell Leukemia',
      severity: 'Critical',
      probability: 96,
      confidenceScore: 94,
      clinicalNotes: '> 20% plasma cells in peripheral blood.',
      morphologySummary: 'Circulating plasma cells with eccentric nuclei and perinuclear hof.',
      geneticMarkers: ['TP53-deletion'],
      geneSequences: [{ gene: 'TP53', location: '17p13.1', sequence: 'CCGA...' }],
      parameters: [
        { name: 'Plasma Cells', unit: '%', value: 35, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 25, plateletCount: 90, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 500, abnormalCells: 380, mutationsFound: 1 }
    }
  },
  {
    id: 'systemic_mastocytosis',
    name: 'Systemic Mastocytosis',
    description: 'Abnormal accumulation of mast cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Systemic Mastocytosis',
      severity: 'Moderate',
      probability: 87,
      confidenceScore: 83,
      clinicalNotes: 'KIT D816V mutation. Elevated serum tryptase.',
      morphologySummary: 'Spindle-shaped mast cells in bone marrow.',
      geneticMarkers: ['KIT-D816V'],
      geneSequences: [{ gene: 'KIT', location: '4q12', sequence: 'TTGC...', mutation: { pos: 12, from: 'A', to: 'T', type: 'SNP', desc: 'D816V mutation' } }],
      parameters: [
        { name: 'Tryptase', unit: 'ng/mL', value: 150, range: '<11.5', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 10, plateletCount: 250, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 850, abnormalCells: 70, mutationsFound: 1 }
    }
  },
  {
    id: 'hypereosinophilic_syndrome',
    name: 'Hypereosinophilic Syndrome',
    description: 'Persistent high eosinophil count causing organ damage.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Hypereosinophilic Syndrome',
      severity: 'High',
      probability: 92,
      confidenceScore: 89,
      clinicalNotes: 'Eosinophils > 1.5 K/mcL for > 6 months.',
      morphologySummary: 'Increased mature eosinophils. Some may be degranulated.',
      geneticMarkers: ['FIP1L1-PDGFRA'],
      geneSequences: [{ gene: 'FIP1L1-PDGFRA', location: '4q12', sequence: 'GGAA...' }],
      parameters: [
        { name: 'Eosinophils', unit: 'K/mcL', value: 8.5, range: '0-0.5', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 15, plateletCount: 220, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 600, abnormalCells: 250, mutationsFound: 1 }
    }
  },
  {
    id: 'chronic_eosinophilic_leukemia',
    name: 'Chronic Eosinophilic Leukemia',
    description: 'Clonal proliferation of eosinophil precursors.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Chronic Eosinophilic Leukemia',
      severity: 'High',
      probability: 90,
      confidenceScore: 86,
      clinicalNotes: 'Increased blasts (< 20%). Clonal cytogenetic abnormality.',
      morphologySummary: 'Eosinophils and their precursors. Dysplastic features.',
      geneticMarkers: ['PDGFRB-rearrangement'],
      geneSequences: [{ gene: 'PDGFRB', location: '5q32', sequence: 'AATT...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 45, range: '1-4', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 25, plateletCount: 150, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 500, abnormalCells: 380, mutationsFound: 1 }
    }
  },
  {
    id: 'chronic_neutrophilic_leukemia',
    name: 'Chronic Neutrophilic Leukemia',
    description: 'Rare leukemia with high mature neutrophils.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Chronic Neutrophilic Leukemia',
      severity: 'High',
      probability: 91,
      confidenceScore: 87,
      clinicalNotes: 'CSF3R T618I mutation. No BCR-ABL1.',
      morphologySummary: 'Predominance of mature neutrophils. No dysplasia.',
      geneticMarkers: ['CSF3R-T618I'],
      geneSequences: [{ gene: 'CSF3R', location: '1p34.3', sequence: 'CCGA...', mutation: { pos: 18, from: 'C', to: 'T', type: 'SNP', desc: 'T618I mutation' } }],
      parameters: [
        { name: 'Neutrophils', unit: 'K/mcL', value: 65, range: '1.8-7.7', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 75, range: '4.5-11', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 195, wbcCount: 80, plateletCount: 300, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1100, normalCells: 400, abnormalCells: 700, mutationsFound: 1 }
    }
  },
  {
    id: 'polycythemia_vera',
    name: 'Polycythemia Vera',
    description: 'Myeloproliferative neoplasm causing high RBC mass.',
    type: 'Genetic',
    template: {
      diseaseName: 'Polycythemia Vera',
      severity: 'Moderate',
      probability: 98,
      confidenceScore: 96,
      clinicalNotes: 'JAK2 V617F mutation. Low EPO level.',
      morphologySummary: 'Increased RBCs. Large platelets. Basophilia.',
      geneticMarkers: ['JAK2-V617F'],
      geneSequences: [{ gene: 'JAK2', location: '9p24.1', sequence: 'GTTT...', mutation: { pos: 15, from: 'G', to: 'T', type: 'SNP', desc: 'V617F mutation' } }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 21, range: '13.5-17.5', status: 'CRITICAL' },
        { name: 'Hematocrit', unit: '%', value: 62, range: '41-50', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 400, wbcCount: 12, plateletCount: 500, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1500, normalCells: 1400, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'secondary_polycythemia_hypoxia',
    name: 'Secondary Polycythemia (Hypoxia)',
    description: 'High RBCs due to low oxygen (e.g., high altitude, COPD).',
    type: 'Anemia',
    template: {
      diseaseName: 'Secondary Polycythemia',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 88,
      clinicalNotes: 'High EPO level. Normal JAK2.',
      morphologySummary: 'Increased RBCs. Normal WBC and platelets.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'EPO', unit: 'mIU/mL', value: 85, range: '4-24', status: 'ABNORMAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 19.5, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 350, wbcCount: 8, plateletCount: 250, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1200, normalCells: 1180, abnormalCells: 20, mutationsFound: 0 }
    }
  },
  {
    id: 'secondary_polycythemia_tumor',
    name: 'Secondary Polycythemia (Tumor)',
    description: 'High RBCs due to EPO-secreting tumor (e.g., renal cell carcinoma).',
    type: 'Anemia',
    template: {
      diseaseName: 'Secondary Polycythemia (Tumor)',
      severity: 'High',
      probability: 88,
      confidenceScore: 84,
      clinicalNotes: 'Very high EPO level. Imaging needed to find tumor.',
      morphologySummary: 'Increased RBCs.',
      geneticMarkers: ['VHL-mut'],
      geneSequences: [{ gene: 'VHL', location: '3p25.3', sequence: 'TTAC...' }],
      parameters: [
        { name: 'EPO', unit: 'mIU/mL', value: 500, range: '4-24', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 360, wbcCount: 7, plateletCount: 240, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 1250, normalCells: 1230, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'relative_polycythemia',
    name: 'Relative Polycythemia',
    description: 'Apparent high RBCs due to low plasma volume (dehydration).',
    type: 'Anemia',
    template: {
      diseaseName: 'Relative Polycythemia',
      severity: 'Low',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Normal total RBC mass. High Hgb/Hct due to hemoconcentration.',
      morphologySummary: 'Normal RBC morphology.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'Hematocrit', unit: '%', value: 54, range: '41-50', status: 'ABNORMAL' },
        { name: 'Albumin', unit: 'g/dL', value: 5.5, range: '3.5-5.0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 250, wbcCount: 9, plateletCount: 300, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 940, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'gaisbock_syndrome',
    name: 'Gaisböck Syndrome',
    description: 'Relative polycythemia associated with stress, obesity, and hypertension.',
    type: 'Anemia',
    template: {
      diseaseName: 'Gaisböck Syndrome',
      severity: 'Low',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Pseudopolycythemia. Often seen in middle-aged men.',
      morphologySummary: 'Normal smear.',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'Hematocrit', unit: '%', value: 53, range: '41-50', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 240, wbcCount: 8, plateletCount: 280, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 910, abnormalCells: 10, mutationsFound: 0 }
    }
  },
  {
    id: 'ptld',
    name: 'Post-Transplant Lymphoproliferative Disorder',
    description: 'Lymphoma-like condition following organ transplant.',
    type: 'Leukemia',
    template: {
      diseaseName: 'PTLD',
      severity: 'High',
      probability: 89,
      confidenceScore: 85,
      clinicalNotes: 'Often EBV-driven. Occurs due to immunosuppression.',
      morphologySummary: 'Polymorphic or monomorphic lymphoid proliferation.',
      geneticMarkers: ['EBV-DNA'],
      geneSequences: [{ gene: 'EBV', location: 'Viral Genome', sequence: 'CCGA...' }],
      parameters: [
        { name: 'EBV Viral Load', unit: 'copies/mL', value: 150000, range: '0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 14, plateletCount: 160, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 750, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'castleman_disease',
    name: 'Castleman Disease',
    description: 'Rare disorder of lymph nodes and related tissues.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Castleman Disease',
      severity: 'Moderate',
      probability: 86,
      confidenceScore: 82,
      clinicalNotes: 'Unicentric or multicentric. Associated with HHV-8.',
      morphologySummary: 'Hyaline-vascular or plasma cell variants in biopsy.',
      geneticMarkers: ['HHV-8-DNA'],
      geneSequences: [{ gene: 'HHV-8', location: 'Viral Genome', sequence: 'TTGC...' }],
      parameters: [
        { name: 'IL-6', unit: 'pg/mL', value: 45, range: '<5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 12, plateletCount: 450, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 800, abnormalCells: 80, mutationsFound: 1 }
    }
  },
  {
    id: 'rosai_dorfman',
    name: 'Rosai-Dorfman Disease',
    description: 'Rare benign histiocytic disorder.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Rosai-Dorfman Disease',
      severity: 'Low',
      probability: 84,
      confidenceScore: 80,
      clinicalNotes: 'Massive painless cervical lymphadenopathy. Emperipolesis.',
      morphologySummary: 'Large histiocytes containing intact lymphocytes (emperipolesis).',
      geneticMarkers: ['None'],
      geneSequences: [{ gene: 'None', location: 'N/A', sequence: 'N/A' }],
      parameters: [
        { name: 'ESR', unit: 'mm/hr', value: 85, range: '<20', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 15, plateletCount: 350, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 880, abnormalCells: 40, mutationsFound: 0 }
    }
  },
  {
    id: 'lch',
    name: 'Langerhans Cell Histiocytosis',
    description: 'Rare disorder where the body makes too many Langerhans cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'LCH',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 84,
      clinicalNotes: 'BRAF V600E mutation in 50% of cases. Bone lesions common.',
      morphologySummary: 'Langerhans cells with coffee-bean shaped nuclei.',
      geneticMarkers: ['BRAF-V600E'],
      geneSequences: [{ gene: 'BRAF', location: '7q34', sequence: 'TTGC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 11.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 195, wbcCount: 12, plateletCount: 300, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 850, abnormalCells: 50, mutationsFound: 1 }
    }
  },
  {
    id: 'hlh',
    name: 'Hemophagocytic Lymphohistiocytosis',
    description: 'Life-threatening syndrome of excessive immune activation.',
    type: 'Infection',
    template: {
      diseaseName: 'HLH',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'High ferritin, low fibrinogen, cytopenias. Hemophagocytosis in marrow.',
      morphologySummary: 'Macrophages ingesting RBCs, WBCs, or platelets (hemophagocytosis).',
      geneticMarkers: ['PRF1-mut'],
      geneSequences: [{ gene: 'PRF1', location: '10q22.1', sequence: 'GGAA...' }],
      parameters: [
        { name: 'Ferritin', unit: 'ng/mL', value: 15000, range: '20-250', status: 'CRITICAL' },
        { name: 'Fibrinogen', unit: 'mg/dL', value: 90, range: '200-400', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 2, plateletCount: 40, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 750, normalCells: 600, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'gaucher_type1',
    name: 'Gaucher Disease (Type 1)',
    description: 'Lysosomal storage disorder causing splenomegaly and cytopenia.',
    type: 'Genetic',
    template: {
      diseaseName: 'Gaucher Disease (Type 1)',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 89,
      clinicalNotes: 'Glucocerebrosidase deficiency. Gaucher cells in marrow.',
      morphologySummary: 'Gaucher cells (macrophages with "wrinkled tissue paper" cytoplasm).',
      geneticMarkers: ['GBA-mut'],
      geneSequences: [{ gene: 'GBA', location: '1q22', sequence: 'AATT...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 65, range: '150-450', status: 'ABNORMAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 10.2, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 5, plateletCount: 65, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'niemann_pick',
    name: 'Niemann-Pick Disease',
    description: 'Genetic disorder affecting lipid metabolism.',
    type: 'Genetic',
    template: {
      diseaseName: 'Niemann-Pick Disease',
      severity: 'High',
      probability: 87,
      confidenceScore: 83,
      clinicalNotes: 'Sphingomyelinase deficiency. Foamy histiocytes.',
      morphologySummary: 'Foam cells (lipid-laden macrophages).',
      geneticMarkers: ['SMPD1-mut'],
      geneSequences: [{ gene: 'SMPD1', location: '11p15.4', sequence: 'CCGA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 4.2, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 4, plateletCount: 120, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 800, abnormalCells: 80, mutationsFound: 1 }
    }
  },
  {
    id: 'tay_sachs',
    name: 'Tay-Sachs Disease',
    description: 'Rare genetic disorder that destroys nerve cells.',
    type: 'Genetic',
    template: {
      diseaseName: 'Tay-Sachs Disease',
      severity: 'Critical',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Hexosaminidase A deficiency. Cherry-red spot on retina.',
      morphologySummary: 'Vacuolated lymphocytes may be seen.',
      geneticMarkers: ['HEXA-mut'],
      geneSequences: [{ gene: 'HEXA', location: '15q23', sequence: 'TTAC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 7.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 250, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 910, abnormalCells: 10, mutationsFound: 1 }
    }
  },
  {
    id: 'fabry_disease',
    name: 'Fabry Disease',
    description: 'X-linked lysosomal storage disorder.',
    type: 'Genetic',
    template: {
      diseaseName: 'Fabry Disease',
      severity: 'Moderate',
      probability: 89,
      confidenceScore: 85,
      clinicalNotes: 'Alpha-galactosidase A deficiency. Angiokeratomas.',
      morphologySummary: 'Vacuolated cells in urine or biopsy.',
      geneticMarkers: ['GLA-mut'],
      geneSequences: [{ gene: 'GLA', location: 'Xq22.1', sequence: 'GGAA...' }],
      parameters: [
        { name: 'Creatinine', unit: 'mg/dL', value: 1.8, range: '0.7-1.3', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 8, plateletCount: 280, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 930, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'wolman_disease',
    name: 'Wolman Disease',
    description: 'Severe lysosomal acid lipase deficiency.',
    type: 'Genetic',
    template: {
      diseaseName: 'Wolman Disease',
      severity: 'Critical',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Adrenal calcification. Hepatosplenomegaly.',
      morphologySummary: 'Vacuolated lymphocytes.',
      geneticMarkers: ['LIPA-mut'],
      geneSequences: [{ gene: 'LIPA', location: '10q23.31', sequence: 'AATT...' }],
      parameters: [
        { name: 'ALT', unit: 'U/L', value: 150, range: '7-55', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 12, plateletCount: 150, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 750, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'hurler_syndrome',
    name: 'Hurler Syndrome (MPS I)',
    description: 'Severe form of mucopolysaccharidosis type I.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hurler Syndrome',
      severity: 'High',
      probability: 86,
      confidenceScore: 82,
      clinicalNotes: 'Alpha-L-iduronidase deficiency. Coarse facial features.',
      morphologySummary: 'Alder-Reilly anomalies in WBCs (coarse granules).',
      geneticMarkers: ['IDUA-mut'],
      geneSequences: [{ gene: 'IDUA', location: '4p16.3', sequence: 'CCGA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 10.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 10, plateletCount: 300, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 800, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'hunter_syndrome',
    name: 'Hunter Syndrome (MPS II)',
    description: 'X-linked mucopolysaccharidosis type II.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hunter Syndrome',
      severity: 'High',
      probability: 88,
      confidenceScore: 84,
      clinicalNotes: 'Iduronate-2-sulfatase deficiency.',
      morphologySummary: 'Alder-Reilly granules in neutrophils.',
      geneticMarkers: ['IDS-mut'],
      geneSequences: [{ gene: 'IDS', location: 'Xq28', sequence: 'TTGC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 9.8, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 9, plateletCount: 320, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 850, abnormalCells: 70, mutationsFound: 1 }
    }
  },
  {
    id: 'sanfilippo_syndrome',
    name: 'Sanfilippo Syndrome (MPS III)',
    description: 'Mucopolysaccharidosis type III affecting the brain.',
    type: 'Genetic',
    template: {
      diseaseName: 'Sanfilippo Syndrome',
      severity: 'High',
      probability: 85,
      confidenceScore: 81,
      clinicalNotes: 'Deficiency in GAG breakdown. Progressive dementia.',
      morphologySummary: 'Coarse inclusions in lymphocytes.',
      geneticMarkers: ['SGSH-mut'],
      geneSequences: [{ gene: 'SGSH', location: '17q25.3', sequence: 'GGAA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 8.2, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 280, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 900, abnormalCells: 50, mutationsFound: 1 }
    }
  },
  {
    id: 'morquio_syndrome',
    name: 'Morquio Syndrome (MPS IV)',
    description: 'Mucopolysaccharidosis type IV affecting bones.',
    type: 'Genetic',
    template: {
      diseaseName: 'Morquio Syndrome',
      severity: 'Moderate',
      probability: 87,
      confidenceScore: 83,
      clinicalNotes: 'Short stature, skeletal dysplasia.',
      morphologySummary: 'Alder-Reilly granules in WBCs.',
      geneticMarkers: ['GALNS-mut'],
      geneSequences: [{ gene: 'GALNS', location: '16q24.3', sequence: 'AATT...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 7.5, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 220, wbcCount: 8, plateletCount: 350, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 980, normalCells: 950, abnormalCells: 30, mutationsFound: 1 }
    }
  },
  {
    id: 'maroteaux_lamy',
    name: 'Maroteaux-Lamy Syndrome (MPS VI)',
    description: 'Mucopolysaccharidosis type VI.',
    type: 'Genetic',
    template: {
      diseaseName: 'Maroteaux-Lamy Syndrome',
      severity: 'High',
      probability: 84,
      confidenceScore: 80,
      clinicalNotes: 'Arylsulfatase B deficiency.',
      morphologySummary: 'Prominent Alder-Reilly granules in neutrophils.',
      geneticMarkers: ['ARSB-mut'],
      geneSequences: [{ gene: 'ARSB', location: '5q14.1', sequence: 'CCGA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 11, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 185, wbcCount: 12, plateletCount: 200, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 860, normalCells: 750, abnormalCells: 110, mutationsFound: 1 }
    }
  },
  {
    id: 'sly_syndrome',
    name: 'Sly Syndrome (MPS VII)',
    description: 'Very rare mucopolysaccharidosis type VII.',
    type: 'Genetic',
    template: {
      diseaseName: 'Sly Syndrome',
      severity: 'High',
      probability: 81,
      confidenceScore: 77,
      clinicalNotes: 'Beta-glucuronidase deficiency.',
      morphologySummary: 'Alder-Reilly granules in all WBC types.',
      geneticMarkers: ['GUSB-mut'],
      geneSequences: [{ gene: 'GUSB', location: '7q11.21', sequence: 'TTAC...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 9.2, range: '4.5-11', status: 'NORMAL' }
      ],
      visualData: { rbcCount: 195, wbcCount: 10, plateletCount: 220, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 800, abnormalCells: 80, mutationsFound: 1 }
    }
  },
  {
    id: 'i_cell_disease',
    name: 'I-Cell Disease',
    description: 'Severe lysosomal storage disorder.',
    type: 'Genetic',
    template: {
      diseaseName: 'I-Cell Disease',
      severity: 'Critical',
      probability: 83,
      confidenceScore: 79,
      clinicalNotes: 'Inclusion cell disease. Multiple enzyme deficiencies.',
      morphologySummary: 'Large inclusions in fibroblasts and some WBCs.',
      geneticMarkers: ['GNPTAB-mut'],
      geneSequences: [{ gene: 'GNPTAB', location: '12q23.2', sequence: 'GGAA...' }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 12.5, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 175, wbcCount: 13, plateletCount: 180, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 840, normalCells: 700, abnormalCells: 140, mutationsFound: 1 }
    }
  },
  {
    id: 'pompe_disease',
    name: 'Pompe Disease',
    description: 'Glycogen storage disease type II.',
    type: 'Genetic',
    template: {
      diseaseName: 'Pompe Disease',
      severity: 'High',
      probability: 91,
      confidenceScore: 88,
      clinicalNotes: 'Acid alpha-glucosidase deficiency. Muscle weakness.',
      morphologySummary: 'Vacuolated lymphocytes containing glycogen.',
      geneticMarkers: ['GAA-mut'],
      geneSequences: [{ gene: 'GAA', location: '17q25.3', sequence: 'AATT...' }],
      parameters: [
        { name: 'CK', unit: 'U/L', value: 850, range: '22-198', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 8, plateletCount: 260, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 880, abnormalCells: 40, mutationsFound: 1 }
    }
  },
  {
    id: 'mcardle_disease',
    name: 'McArdle Disease',
    description: 'Glycogen storage disease type V.',
    type: 'Genetic',
    template: {
      diseaseName: 'McArdle Disease',
      severity: 'Moderate',
      probability: 89,
      confidenceScore: 85,
      clinicalNotes: 'Myophosphorylase deficiency. Exercise intolerance.',
      morphologySummary: 'Normal blood smear.',
      geneticMarkers: ['PYGM-mut'],
      geneSequences: [{ gene: 'PYGM', location: '11q13.1', sequence: 'CCGA...' }],
      parameters: [
        { name: 'CK', unit: 'U/L', value: 1200, range: '22-198', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 280, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 940, abnormalCells: 10, mutationsFound: 1 }
    }
  },
  {
    id: 'von_gierke',
    name: 'Von Gierke Disease',
    description: 'Glycogen storage disease type Ia.',
    type: 'Genetic',
    template: {
      diseaseName: 'Von Gierke Disease',
      severity: 'High',
      probability: 93,
      confidenceScore: 90,
      clinicalNotes: 'Glucose-6-phosphatase deficiency. Severe hypoglycemia.',
      morphologySummary: 'Normal smear. Platelet dysfunction possible.',
      geneticMarkers: ['G6PC-mut'],
      geneSequences: [{ gene: 'G6PC', location: '17q21.31', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Glucose', unit: 'mg/dL', value: 35, range: '70-99', status: 'CRITICAL' },
        { name: 'Uric Acid', unit: 'mg/dL', value: 10.5, range: '3.4-7.0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 9, plateletCount: 450, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 850, abnormalCells: 30, mutationsFound: 1 }
    }
  },
  {
    id: 'cori_disease',
    name: 'Cori Disease',
    description: 'Glycogen storage disease type III.',
    type: 'Genetic',
    template: {
      diseaseName: 'Cori Disease',
      severity: 'Moderate',
      probability: 88,
      confidenceScore: 84,
      clinicalNotes: 'Debranching enzyme deficiency.',
      morphologySummary: 'Normal smear.',
      geneticMarkers: ['AGL-mut'],
      geneSequences: [{ gene: 'AGL', location: '1p21.2', sequence: 'GGAA...' }],
      parameters: [
        { name: 'ALT', unit: 'U/L', value: 250, range: '7-55', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 8, plateletCount: 300, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 880, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'anderson_disease',
    name: 'Anderson Disease',
    description: 'Glycogen storage disease type IV.',
    type: 'Genetic',
    template: {
      diseaseName: 'Anderson Disease',
      severity: 'High',
      probability: 85,
      confidenceScore: 81,
      clinicalNotes: 'Branching enzyme deficiency. Cirrhosis.',
      morphologySummary: 'Normal smear.',
      geneticMarkers: ['GBE1-mut'],
      geneSequences: [{ gene: 'GBE1', location: '3p12.2', sequence: 'AATT...' }],
      parameters: [
        { name: 'Bilirubin', unit: 'mg/dL', value: 4.5, range: '0.1-1.2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 10, plateletCount: 150, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 820, normalCells: 800, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'hers_disease',
    name: 'Hers Disease',
    description: 'Glycogen storage disease type VI.',
    type: 'Genetic',
    template: {
      diseaseName: 'Hers Disease',
      severity: 'Low',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Liver phosphorylase deficiency. Mild hypoglycemia.',
      morphologySummary: 'Normal smear.',
      geneticMarkers: ['PYGL-mut'],
      geneSequences: [{ gene: 'PYGL', location: '14q22.1', sequence: 'CCGA...' }],
      parameters: [
        { name: 'Glucose', unit: 'mg/dL', value: 65, range: '70-99', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 210, wbcCount: 7, plateletCount: 280, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 940, normalCells: 930, abnormalCells: 10, mutationsFound: 1 }
    }
  },
  {
    id: 'tarui_disease',
    name: 'Tarui Disease',
    description: 'Glycogen storage disease type VII.',
    type: 'Genetic',
    template: {
      diseaseName: 'Tarui Disease',
      severity: 'Moderate',
      probability: 86,
      confidenceScore: 82,
      clinicalNotes: 'Phosphofructokinase deficiency. Hemolytic anemia.',
      morphologySummary: 'Normal smear.',
      geneticMarkers: ['PFKM-mut'],
      geneSequences: [{ gene: 'PFKM', location: '12q13.11', sequence: 'TTGC...' }],
      parameters: [
        { name: 'Bilirubin', unit: 'mg/dL', value: 2.5, range: '0.1-1.2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 8, plateletCount: 260, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 910, normalCells: 890, abnormalCells: 20, mutationsFound: 1 }
    }
  },
  {
    id: 'cmml',
    name: 'Chronic Myelomonocytic Leukemia',
    description: 'A clonal myeloid neoplasm with features of both MDS and MPN.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Chronic Myelomonocytic Leukemia (CMML)',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Persistent monocytosis (>1 x 10^9/L). Dysplasia in one or more myeloid lineages.',
      morphologySummary: 'Increased monocytes, often with dysplastic features. Blasts <20%.',
      geneticMarkers: ['TET2', 'SRSF2', 'ASXL1'],
      geneSequences: [{ gene: 'TET2', location: '4q24', sequence: 'GCTA...', mutation: { pos: 55, from: 'C', to: 'T', type: 'SNP', desc: 'TET2 Mutation' } }],
      parameters: [
        { name: 'Monocytes', unit: 'K/mcL', value: 2.5, range: '0.2-0.8', status: 'ABNORMAL' },
        { name: 'WBC', unit: 'K/mcL', value: 18, range: '4.5-11.0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 20, plateletCount: 140, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 950, normalCells: 700, abnormalCells: 250, mutationsFound: 1 }
    }
  },
  {
    id: 'lgl-leukemia',
    name: 'Large Granular Lymphocytic Leukemia',
    description: 'A chronic lymphoproliferative disorder of mature T cells or NK cells.',
    type: 'Leukemia',
    template: {
      diseaseName: 'LGL Leukemia',
      severity: 'Moderate',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Persistent lymphocytosis with LGL morphology. Often associated with rheumatoid arthritis.',
      morphologySummary: 'Large lymphocytes with abundant cytoplasm containing azurophilic granules.',
      geneticMarkers: ['STAT3 Mutation'],
      geneSequences: [{ gene: 'STAT3', location: '17q21.2', sequence: 'CCGG...', mutation: { pos: 92, from: 'A', to: 'G', type: 'SNP', desc: 'STAT3 Activation' } }],
      parameters: [
        { name: 'LGL Count', unit: 'K/mcL', value: 3.5, range: '<0.5', status: 'ABNORMAL' },
        { name: 'Neutrophils', unit: 'K/mcL', value: 0.8, range: '1.5-8.0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 12, plateletCount: 180, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 800, abnormalCells: 120, mutationsFound: 1 }
    }
  },
  {
    id: 't-pll',
    name: 'T-cell Prolymphocytic Leukemia',
    description: 'An aggressive T-cell leukemia involving small to medium-sized prolymphocytes.',
    type: 'Leukemia',
    template: {
      diseaseName: 'T-PLL',
      severity: 'Critical',
      probability: 90,
      confidenceScore: 85,
      clinicalNotes: 'Rapidly rising WBC count. Splenomegaly and skin lesions common.',
      morphologySummary: 'Medium-sized prolymphocytes with single prominent nucleolus and cytoplasmic protrusions.',
      geneticMarkers: ['Inv(14)(q11;q32)', 'TCL1A Overexpression'],
      geneSequences: [{ gene: 'TCL1A', location: '14q32.13', sequence: 'ATGC...', mutation: { pos: 10, from: 'G', to: 'A', type: 'rearrangement', desc: 'TCL1A Activation' } }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 250, range: '4.5-11.0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 150, wbcCount: 120, plateletCount: 90, morphology: 'blast', cellColor: '#ef4444' },
      stats: { totalCells: 1100, normalCells: 200, abnormalCells: 900, mutationsFound: 1 }
    }
  },
  {
    id: 'burkitt-lymphoma',
    name: 'Burkitt Lymphoma',
    description: 'A highly aggressive B-cell non-Hodgkin lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Burkitt Lymphoma',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 90,
      clinicalNotes: 'Starry-sky appearance on biopsy. Extremely high proliferation rate.',
      morphologySummary: 'Medium-sized B cells with basophilic cytoplasm and multiple nucleoli. Vacuoles often present.',
      geneticMarkers: ['MYC Translocation', 't(8;14)'],
      geneSequences: [{ gene: 'MYC', location: '8q24.21', sequence: 'GCTA...', mutation: { pos: 50, from: 'T', to: 'C', type: 'translocation', desc: 'MYC-IGH Fusion' } }],
      parameters: [
        { name: 'LDH', unit: 'U/L', value: 2500, range: '140-280', status: 'CRITICAL' },
        { name: 'Uric Acid', unit: 'mg/dL', value: 12, range: '3.5-7.2', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 15, plateletCount: 110, morphology: 'blast', cellColor: '#ef4444' },
      stats: { totalCells: 980, normalCells: 700, abnormalCells: 280, mutationsFound: 1 }
    }
  },
  {
    id: 'sezary-syndrome',
    name: 'Sézary Syndrome',
    description: 'A leukemic form of cutaneous T-cell lymphoma.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Sézary Syndrome',
      severity: 'High',
      probability: 88,
      confidenceScore: 82,
      clinicalNotes: 'Erythroderma, lymphadenopathy, and circulating Sézary cells.',
      morphologySummary: 'Atypical T cells with cerebriform (folded) nuclei.',
      geneticMarkers: ['CD4+/CD7-', 'TCR Rearrangement'],
      geneSequences: [{ gene: 'TCRB', location: '7q34', sequence: 'AGCT...', mutation: { pos: 120, from: 'G', to: 'C', type: 'rearrangement', desc: 'Clonal TCR Rearrangement' } }],
      parameters: [
        { name: 'Sézary Cells', unit: 'cells/mcL', value: 1500, range: '<100', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 18, plateletCount: 210, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 940, normalCells: 800, abnormalCells: 140, mutationsFound: 1 }
    }
  },
  {
    id: 'waldenstrom',
    name: 'Waldenström Macroglobulinemia',
    description: 'A B-cell neoplasm characterized by bone marrow infiltration and IgM monoclonal gammopathy.',
    type: 'Leukemia',
    template: {
      diseaseName: 'Waldenström Macroglobulinemia',
      severity: 'High',
      probability: 92,
      confidenceScore: 88,
      clinicalNotes: 'Hyperviscosity symptoms. Elevated IgM levels.',
      morphologySummary: 'Lymphoplasmacytoid cells in marrow. Rouleaux formation in peripheral blood.',
      geneticMarkers: ['MYD88 L265P'],
      geneSequences: [{ gene: 'MYD88', location: '3p22.2', sequence: 'TTGC...', mutation: { pos: 265, from: 'L', to: 'P', type: 'SNP', desc: 'MYD88 Activation' } }],
      parameters: [
        { name: 'IgM', unit: 'mg/dL', value: 4500, range: '40-230', status: 'CRITICAL' },
        { name: 'Viscosity', unit: 'cP', value: 4.5, range: '1.4-1.8', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 8, plateletCount: 130, morphology: 'rouleaux', cellColor: '#ef4444' },
      stats: { totalCells: 900, normalCells: 850, abnormalCells: 50, mutationsFound: 1 }
    }
  },
  {
    id: 'hlh',
    name: 'Hemophagocytic Lymphohistiocytosis',
    description: 'A life-threatening syndrome of excessive immune activation.',
    type: 'Infection',
    template: {
      diseaseName: 'HLH',
      severity: 'Critical',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Cytopenias, splenomegaly, and high ferritin. Hemophagocytosis in marrow.',
      morphologySummary: 'Macrophages engulfing RBCs, WBCs, or platelets (hemophagocytosis).',
      geneticMarkers: ['PRF1', 'UNC13D', 'STX11'],
      geneSequences: [{ gene: 'PRF1', location: '10q22.1', sequence: 'GCTA...', mutation: { pos: 45, from: 'G', to: 'A', type: 'SNP', desc: 'Perforin Deficiency' } }],
      parameters: [
        { name: 'Ferritin', unit: 'ng/mL', value: 15000, range: '20-250', status: 'CRITICAL' },
        { name: 'Fibrinogen', unit: 'mg/dL', value: 80, range: '200-400', status: 'CRITICAL' },
        { name: 'Triglycerides', unit: 'mg/dL', value: 450, range: '<150', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 140, wbcCount: 2, plateletCount: 40, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 600, abnormalCells: 250, mutationsFound: 1 }
    }
  },
  {
    id: 'fanconi-anemia',
    name: 'Fanconi Anemia',
    description: 'An inherited DNA repair disorder leading to progressive bone marrow failure.',
    type: 'Genetic',
    template: {
      diseaseName: 'Fanconi Anemia',
      severity: 'Critical',
      probability: 90,
      confidenceScore: 85,
      clinicalNotes: 'Physical abnormalities (thumb/radial defects). Positive chromosomal breakage test.',
      morphologySummary: 'Macrocytic RBCs. Pancytopenia as marrow failure progresses.',
      geneticMarkers: ['FANCA', 'FANCC', 'FANCG'],
      geneSequences: [{ gene: 'FANCA', location: '16q24.3', sequence: 'ATGC...', mutation: { pos: 88, from: 'C', to: 'T', type: 'SNP', desc: 'FANCA Deficiency' } }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 7.5, range: '13.5-17.5', status: 'CRITICAL' },
        { name: 'WBC', unit: 'K/mcL', value: 1.8, range: '4.5-11.0', status: 'CRITICAL' },
        { name: 'Platelets', unit: 'K/mcL', value: 25, range: '150-450', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 120, wbcCount: 2, plateletCount: 5, morphology: 'macrocytic', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 400, abnormalCells: 400, mutationsFound: 1 }
    }
  },
  {
    id: 'ttp',
    name: 'Thrombotic Thrombocytopenic Purpura',
    description: 'A rare blood disorder characterized by clotting in small blood vessels.',
    type: 'Genetic',
    template: {
      diseaseName: 'TTP',
      severity: 'Critical',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Microangiopathic hemolytic anemia (MAHA). Severe thrombocytopenia. ADAMTS13 deficiency.',
      morphologySummary: 'Numerous schistocytes (fragmented RBCs). Nucleated RBCs.',
      geneticMarkers: ['ADAMTS13 Deficiency'],
      geneSequences: [{ gene: 'ADAMTS13', location: '9q34.2', sequence: 'GATC...', mutation: { pos: 150, from: 'G', to: 'A', type: 'SNP', desc: 'ADAMTS13 Mutation' } }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 15, range: '150-450', status: 'CRITICAL' },
        { name: 'LDH', unit: 'U/L', value: 1200, range: '140-280', status: 'CRITICAL' },
        { name: 'Schistocytes', unit: '%', value: 5, range: '<0.1', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 160, wbcCount: 9, plateletCount: 2, morphology: 'schistocyte', cellColor: '#ef4444' },
      stats: { totalCells: 880, normalCells: 600, abnormalCells: 280, mutationsFound: 1 }
    }
  },
  {
    id: 'dic',
    name: 'Disseminated Intravascular Coagulation',
    description: 'A systemic process with the potential for both thrombosis and hemorrhage.',
    type: 'Infection',
    template: {
      diseaseName: 'DIC',
      severity: 'Critical',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Prolonged PT/PTT. Low fibrinogen. Elevated D-dimer.',
      morphologySummary: 'Schistocytes often present. Low platelets.',
      geneticMarkers: [],
      geneSequences: [],
      parameters: [
        { name: 'D-Dimer', unit: 'ng/mL', value: 8500, range: '<500', status: 'CRITICAL' },
        { name: 'Fibrinogen', unit: 'mg/dL', value: 90, range: '200-400', status: 'CRITICAL' },
        { name: 'PT', unit: 'sec', value: 25, range: '11-13.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 170, wbcCount: 14, plateletCount: 45, morphology: 'schistocyte', cellColor: '#ef4444' },
      stats: { totalCells: 920, normalCells: 700, abnormalCells: 220, mutationsFound: 0 }
    }
  },
  {
    id: 'diabetes-t1',
    name: 'Type 1 Diabetes Mellitus',
    description: 'Autoimmune destruction of insulin-producing beta cells in the pancreas.',
    type: 'Genetic',
    template: {
      diseaseName: 'Type 1 Diabetes',
      severity: 'High',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Hyperglycemia, glycosuria, and potential ketoacidosis. Requires lifelong insulin.',
      morphologySummary: 'Normal blood cell morphology. Diagnosis based on glucose and HbA1c.',
      geneticMarkers: ['HLA-DR3', 'HLA-DR4'],
      geneSequences: [{ gene: 'INS', location: '11p15.5', sequence: 'GATC...' }],
      parameters: [
        { name: 'Glucose', unit: 'mg/dL', value: 350, range: '70-99', status: 'CRITICAL' },
        { name: 'HbA1c', unit: '%', value: 9.5, range: '4-5.6', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 }
    }
  },
  {
    id: 'hypertension',
    name: 'Essential Hypertension',
    description: 'High blood pressure with no identifiable secondary cause.',
    type: 'Healthy',
    template: {
      diseaseName: 'Hypertension',
      severity: 'Moderate',
      probability: 90,
      confidenceScore: 85,
      clinicalNotes: 'Persistent elevation of systolic and/or diastolic blood pressure.',
      morphologySummary: 'Normal blood cell morphology unless complicated by target organ damage.',
      geneticMarkers: ['AGT-M235T'],
      geneSequences: [{ gene: 'AGT', location: '1q42.2', sequence: 'TTAG...' }],
      parameters: [
        { name: 'Systolic BP', unit: 'mmHg', value: 155, range: '90-120', status: 'ABNORMAL' },
        { name: 'Diastolic BP', unit: 'mmHg', value: 95, range: '60-80', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 }
    }
  },
  {
    id: 'asthma',
    name: 'Bronchial Asthma',
    description: 'Chronic inflammatory disease of the airways characterized by reversible airflow obstruction.',
    type: 'Genetic',
    template: {
      diseaseName: 'Asthma',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 88,
      clinicalNotes: 'Wheezing, shortness of breath, and cough. Eosinophilia common in allergic asthma.',
      morphologySummary: 'Increased eosinophils in peripheral blood smear.',
      geneticMarkers: ['ADAM33'],
      geneSequences: [{ gene: 'ADAM33', location: '20p13', sequence: 'CCGG...' }],
      parameters: [
        { name: 'Eosinophils', unit: '%', value: 8, range: '1-4', status: 'ABNORMAL' },
        { name: 'IgE', unit: 'IU/mL', value: 450, range: '<100', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 12, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 950, normalCells: 850, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'sle',
    name: 'Systemic Lupus Erythematosus',
    description: 'Chronic autoimmune disease that can affect any part of the body.',
    type: 'Genetic',
    template: {
      diseaseName: 'SLE',
      severity: 'High',
      probability: 88,
      confidenceScore: 85,
      clinicalNotes: 'Positive ANA, anti-dsDNA. Multi-organ involvement including skin, joints, and kidneys.',
      morphologySummary: 'Leukopenia and thrombocytopenia common. Normal RBC morphology.',
      geneticMarkers: ['HLA-DR2', 'HLA-DR3'],
      geneSequences: [{ gene: 'C1Q', location: '1p36.12', sequence: 'GCAA...' }],
      parameters: [
        { name: 'ANA Titer', unit: 'ratio', value: 160, range: '<40', status: 'ABNORMAL' },
        { name: 'WBC', unit: 'K/mcL', value: 3.2, range: '4.5-11', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 3, plateletCount: 12, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 700, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'cystic-fibrosis',
    name: 'Cystic Fibrosis',
    description: 'Genetic disorder that affects the lungs, pancreas, and other organs.',
    type: 'Genetic',
    template: {
      diseaseName: 'Cystic Fibrosis',
      severity: 'High',
      probability: 98,
      confidenceScore: 95,
      clinicalNotes: 'Thick, sticky mucus in lungs and digestive tract. Sweat chloride test positive.',
      morphologySummary: 'Normal blood cell morphology. Chronic inflammation signs.',
      geneticMarkers: ['CFTR-delF508'],
      geneSequences: [{ gene: 'CFTR', location: '7q31.2', sequence: 'AATT...', mutation: { pos: 508, from: 'TTT', to: 'Del', type: 'Deletion', desc: 'Phe508del' } }],
      parameters: [
        { name: 'Sweat Chloride', unit: 'mmol/L', value: 85, range: '<60', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 14, plateletCount: 35, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 1000, normalCells: 900, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'huntington',
    name: 'Huntington\'s Disease',
    description: 'Progressive brain disorder that causes uncontrolled movements and emotional problems.',
    type: 'Genetic',
    template: {
      diseaseName: 'Huntington\'s Disease',
      severity: 'Critical',
      probability: 99,
      confidenceScore: 98,
      clinicalNotes: 'CAG repeat expansion in the HTT gene. Progressive motor and cognitive decline.',
      morphologySummary: 'Normal blood cell morphology.',
      geneticMarkers: ['HTT-CAG-Repeat'],
      geneSequences: [{ gene: 'HTT', location: '4p16.3', sequence: 'CAGCAGCAGCAGCAG...', mutation: { pos: 1, from: 'CAG x 15', to: 'CAG x 45', type: 'Expansion', desc: 'CAG Repeat Expansion' } }],
      parameters: [
        { name: 'CAG Repeats', unit: 'count', value: 45, range: '<35', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 }
    }
  },
  {
    id: 'hiv-aids',
    name: 'HIV/AIDS',
    description: 'Viral infection that attacks the immune system, specifically CD4 cells.',
    type: 'Infection',
    template: {
      diseaseName: 'HIV/AIDS',
      severity: 'High',
      probability: 96,
      confidenceScore: 94,
      clinicalNotes: 'Reduced CD4+ T-lymphocyte count. Opportunistic infections may be present.',
      morphologySummary: 'Lymphopenia. Atypical lymphocytes may be seen during acute infection.',
      geneticMarkers: ['HIV-1 RNA'],
      geneSequences: [{ gene: 'gag', location: 'HIV Genome', sequence: 'ATGC...' }],
      parameters: [
        { name: 'CD4 Count', unit: 'cells/mcL', value: 180, range: '500-1500', status: 'CRITICAL' },
        { name: 'Viral Load', unit: 'copies/mL', value: 45000, range: '0', status: 'CRITICAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 2, plateletCount: 15, morphology: 'normal', cellColor: '#ef4444' },
      stats: { totalCells: 800, normalCells: 600, abnormalCells: 200, mutationsFound: 0 }
    }
  },
  {
    id: 'tuberculosis',
    name: 'Tuberculosis',
    description: 'Infectious disease caused by Mycobacterium tuberculosis, primarily affecting the lungs.',
    type: 'Infection',
    template: {
      diseaseName: 'Tuberculosis',
      severity: 'High',
      probability: 92,
      confidenceScore: 89,
      clinicalNotes: 'Chronic cough, fever, night sweats. Positive sputum culture or PCR.',
      morphologySummary: 'Monocytosis and lymphopenia common. Normal RBC morphology.',
      geneticMarkers: ['MTB-DNA'],
      geneSequences: [{ gene: 'rpoB', location: 'MTB Genome', sequence: 'CCGG...', mutation: { pos: 450, from: 'S', to: 'L', type: 'SNP', desc: 'Rifampin Resistance' } }],
      parameters: [
        { name: 'WBC', unit: 'K/mcL', value: 13.5, range: '4.5-11', status: 'ABNORMAL' },
        { name: 'ESR', unit: 'mm/hr', value: 65, range: '0-20', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 15, plateletCount: 30, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 950, normalCells: 800, abnormalCells: 150, mutationsFound: 1 }
    }
  },
  {
    id: 'malaria-vivax',
    name: 'Malaria (P. vivax)',
    description: 'Parasitic infection by Plasmodium vivax, causing recurring fever.',
    type: 'Infection',
    template: {
      diseaseName: 'Malaria (P. vivax)',
      severity: 'Moderate',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Enlarged RBCs with Schüffner\'s dots. Relapses due to hypnozoites in liver.',
      morphologySummary: 'Enlarged infected RBCs, amoeboid trophozoites, and Schüffner\'s dots.',
      geneticMarkers: ['Pv-DNA'],
      geneSequences: [{ gene: '18S rRNA', location: 'P. vivax Genome', sequence: 'GGTG...' }],
      parameters: [
        { name: 'Platelets', unit: 'K/mcL', value: 85, range: '150-450', status: 'ABNORMAL' },
        { name: 'Parasitemia', unit: '%', value: 1.2, range: '0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 195, wbcCount: 6, plateletCount: 12, morphology: 'infected', cellColor: '#ef4444' },
      stats: { totalCells: 850, normalCells: 800, abnormalCells: 50, mutationsFound: 0 }
    }
  },
  {
    id: 'alzheimer',
    name: 'Alzheimer\'s Disease',
    description: 'Progressive neurologic disorder that causes the brain to shrink and brain cells to die.',
    type: 'Genetic',
    template: {
      diseaseName: 'Alzheimer\'s Disease',
      severity: 'High',
      probability: 85,
      confidenceScore: 80,
      clinicalNotes: 'Amyloid plaques and neurofibrillary tangles. APOE-ε4 allele is a major genetic risk factor.',
      morphologySummary: 'Normal blood cell morphology. Biomarkers in CSF or PET imaging.',
      geneticMarkers: ['APOE-e4'],
      geneSequences: [{ gene: 'APOE', location: '19q13.32', sequence: 'GCTC...', mutation: { pos: 112, from: 'T', to: 'C', type: 'SNP', desc: 'ε4 allele' } }],
      parameters: [
        { name: 'Amyloid-beta 42', unit: 'pg/mL', value: 450, range: '>600', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 }
    }
  },
  {
    id: 'parkinson',
    name: 'Parkinson\'s Disease',
    description: 'Progressive nervous system disorder that affects movement.',
    type: 'Genetic',
    template: {
      diseaseName: 'Parkinson\'s Disease',
      severity: 'High',
      probability: 82,
      confidenceScore: 78,
      clinicalNotes: 'Loss of dopamine-producing neurons in the substantia nigra. Lewy bodies present.',
      morphologySummary: 'Normal blood cell morphology.',
      geneticMarkers: ['LRRK2-G2019S'],
      geneSequences: [{ gene: 'LRRK2', location: '12q12', sequence: 'AGCT...', mutation: { pos: 2019, from: 'G', to: 'S', type: 'Substitution', desc: 'G2019S Mutation' } }],
      parameters: [
        { name: 'Alpha-synuclein', unit: 'ng/mL', value: 1.5, range: '<1.0', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 }
    }
  },
  {
    id: 'rheumatoid-arthritis',
    name: 'Rheumatoid Arthritis',
    description: 'Chronic inflammatory disorder affecting many joints, including those in the hands and feet.',
    type: 'Genetic',
    template: {
      diseaseName: 'Rheumatoid Arthritis',
      severity: 'Moderate',
      probability: 90,
      confidenceScore: 85,
      clinicalNotes: 'Positive Rheumatoid Factor (RF) and anti-CCP antibodies. Symmetric joint involvement.',
      morphologySummary: 'Anemia of chronic disease may be present (normocytic).',
      geneticMarkers: ['HLA-DRB1-Shared-Epitope'],
      geneSequences: [{ gene: 'HLA-DRB1', location: '6p21.3', sequence: 'GATT...' }],
      parameters: [
        { name: 'RF', unit: 'IU/mL', value: 85, range: '<14', status: 'ABNORMAL' },
        { name: 'anti-CCP', unit: 'U/mL', value: 120, range: '<20', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 185, wbcCount: 11, plateletCount: 35, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 950, normalCells: 850, abnormalCells: 100, mutationsFound: 1 }
    }
  },
  {
    id: 'crohns-disease',
    name: 'Crohn\'s Disease',
    description: 'Type of inflammatory bowel disease (IBD) that causes inflammation of your digestive tract.',
    type: 'Genetic',
    template: {
      diseaseName: 'Crohn\'s Disease',
      severity: 'High',
      probability: 88,
      confidenceScore: 84,
      clinicalNotes: 'Transmural inflammation, skip lesions. NOD2 mutations are a significant risk factor.',
      morphologySummary: 'Normal blood cell morphology. Anemia and leukocytosis common during flares.',
      geneticMarkers: ['NOD2-1007fs'],
      geneSequences: [{ gene: 'NOD2', location: '16q12.1', sequence: 'CCGG...', mutation: { pos: 1007, from: 'C', to: 'Ins', type: 'Frameshift', desc: '1007fs Mutation' } }],
      parameters: [
        { name: 'Calprotectin', unit: 'mcg/g', value: 850, range: '<50', status: 'CRITICAL' },
        { name: 'CRP', unit: 'mg/L', value: 45, range: '<5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 180, wbcCount: 15, plateletCount: 40, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 980, normalCells: 800, abnormalCells: 180, mutationsFound: 1 }
    }
  },
  {
    id: 'ulcerative-colitis',
    name: 'Ulcerative Colitis',
    description: 'Inflammatory bowel disease that causes long-lasting inflammation and ulcers in your digestive tract.',
    type: 'Genetic',
    template: {
      diseaseName: 'Ulcerative Colitis',
      severity: 'High',
      probability: 86,
      confidenceScore: 82,
      clinicalNotes: 'Continuous inflammation of the colon, starting from the rectum. pANCA often positive.',
      morphologySummary: 'Normal blood cell morphology. Chronic blood loss can lead to iron deficiency anemia.',
      geneticMarkers: ['HLA-DRB1*0103'],
      geneSequences: [{ gene: 'HLA-DRB1', location: '6p21.3', sequence: 'GATT...' }],
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', value: 10.2, range: '13.5-17.5', status: 'ABNORMAL' },
        { name: 'pANCA', unit: 'titer', value: 80, range: '<20', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 185, wbcCount: 12, plateletCount: 38, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 960, normalCells: 820, abnormalCells: 140, mutationsFound: 1 }
    }
  },
  {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis',
    description: 'Disease in which the immune system eats away at the protective covering of nerves.',
    type: 'Genetic',
    template: {
      diseaseName: 'Multiple Sclerosis',
      severity: 'High',
      probability: 84,
      confidenceScore: 80,
      clinicalNotes: 'Demyelination in the CNS. Oligoclonal bands in CSF. HLA-DRB1*15:01 is the strongest genetic risk factor.',
      morphologySummary: 'Normal blood cell morphology.',
      geneticMarkers: ['HLA-DRB1*15:01'],
      geneSequences: [{ gene: 'HLA-DRB1', location: '6p21.3', sequence: 'GATT...' }],
      parameters: [
        { name: 'Oligoclonal Bands', unit: 'count', value: 4, range: '0-1', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 7, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 }
    }
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    description: 'Condition in which skin cells build up and form scales and itchy, dry patches.',
    type: 'Genetic',
    template: {
      diseaseName: 'Psoriasis',
      severity: 'Moderate',
      probability: 92,
      confidenceScore: 88,
      clinicalNotes: 'Chronic plaque psoriasis. HLA-C*06:02 is a major genetic determinant.',
      morphologySummary: 'Normal blood cell morphology. Systemic inflammation markers may be elevated.',
      geneticMarkers: ['HLA-C*06:02'],
      geneSequences: [{ gene: 'HLA-C', location: '6p21.3', sequence: 'GATT...' }],
      parameters: [
        { name: 'CRP', unit: 'mg/L', value: 12, range: '<5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 200, wbcCount: 9, plateletCount: 25, morphology: 'normal', cellColor: '#3b82f6' },
      stats: { totalCells: 900, normalCells: 900, abnormalCells: 0, mutationsFound: 1 }
    }
  },
  {
    id: 'celiac-disease',
    name: 'Celiac Disease',
    description: 'Immune reaction to eating gluten, a protein found in wheat, barley, and rye.',
    type: 'Genetic',
    template: {
      diseaseName: 'Celiac Disease',
      severity: 'Moderate',
      probability: 95,
      confidenceScore: 92,
      clinicalNotes: 'Villous atrophy in the small intestine. HLA-DQ2 and HLA-DQ8 are present in almost all patients.',
      morphologySummary: 'Iron deficiency anemia common due to malabsorption.',
      geneticMarkers: ['HLA-DQ2', 'HLA-DQ8'],
      geneSequences: [{ gene: 'HLA-DQA1', location: '6p21.3', sequence: 'GATT...' }],
      parameters: [
        { name: 'tTG-IgA', unit: 'U/mL', value: 150, range: '<15', status: 'CRITICAL' },
        { name: 'Hemoglobin', unit: 'g/dL', value: 10.5, range: '13.5-17.5', status: 'ABNORMAL' }
      ],
      visualData: { rbcCount: 190, wbcCount: 7, plateletCount: 25, morphology: 'microcytic', cellColor: '#fca5a5' },
      stats: { totalCells: 950, normalCells: 750, abnormalCells: 200, mutationsFound: 1 }
    }
  }
];




