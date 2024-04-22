import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tadej Satler",
  initials: "TS",
  location: "Ljubljana, Slovenia, CET",
  locationLink: "https://www.google.com/maps/place/Ljubljana",
  about:
    "PhD Student @ Kemijski Inštitut | Protein Design, Structural and Computational Biology",
  summary:
    "I'm a Biochemistry graduate currently pursuing a PhD, with a keen interest in Protein Design, Structural Biology, Computational Biology, and Machine Learning. Actively seeking opportunities to apply my expertise in innovative research and development projects.",
  // avatarUrl: "https://avatars.githubusercontent.com/u/36132075?v=4",
  avatarUrl: "https://raw.githubusercontent.com/Poko18/cv/495cb9bf711b2165e4d5ce123532b9f2a18f318b/pp.jpeg",
  personalWebsiteUrl: "https://bento.me/tadej",
  contact: {
    email: "tadej.satler@gmail.com",
    tel: "+38631514849",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Poko18",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tadejsatler/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/TadejSatler",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Ljubljana",
      degree: "PhD - Protein Design, Structural and Computational Biology",
      start: "2020",
      end: "Present",
    },
    {
      school: "University of Ljubljana",
      degree: "Master's degree in Biochemistry",
      start: "2017",
      end: "2019",
    },
    {
      school: "University of Ljubljana",
      degree: "Bachelor's degree in Biochemistry",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "CryoCloud",
      link: "https://www.cryocloud.io/",
      badges: ["Remote"],
      title: "Software Developer",
      title_badges: [],
      start: "2023",
      end: "Present",
      description:
        "Responsible for the development and integration of software solutions tailored for cryoEM data analysis within CryoCloud's platform. Duties include conducting research, testing, documentation, scripting, and contributing to web development of the platform.",
      tags: ["Python", "Relion", "API", "Docker", "AWS", "EC2"],
    },
    {
      company: "National Institute of Chemistry",
      link: "https://www.ki.si/en/",
      badges: [],
      title: "PhD Student",
      title_badges: [],
      start: "2020",
      end: "Present",
      description:
        "Developed several protein design pipelines, including those for de novo protein binder generation. These pipelines integrate computational tools such as Rosetta, RFdiffusion, AlphaFold2, and ProteinMPNN with experimental validation methods. Additionally, I have successfully resolved multiple protein structures to high resolution using both CryoEM and X-ray crystallography.",
      tags: ["Protein Design", "Computational Biology", "Rosetta", "AlphaFold2", "RFdiffusion", "ProteinMPNN", "Modeller", "Gromacs", "HPC", "Pipelining", "Protein Purification (FPLC)", "Protein Characterization (CD,DLS,SEC-MALS)", "PPI (ITC)", "X-ray Crystallography", "CryoEM"],
    },
    {
      company: "University of California, San Francisco",
      link: "https://www.ucsf.edu/",
      badges: [],
      title: "Student Researcher",
      title_badges: ["Internship"],
      start: "2021",
      end: "2022",
      description:
        "In Andrej Šali's lab. Advanced the development of deep neural networks specifically tailored for the identification of protein residues within cryoEM densities.",
      tags: ["Python", "TensorFlow", "Integrative Biology", "CryoEM", "Machine Learning", "HPC", "Pipelining"],
    },
    {
      company: "University of Bristol",
      link: "https://www.bristol.ac.uk/",
      badges: [],
      title: "Student Researcher",
      title_badges: ["Internship"],
      start: "2020",
      end: "2020",
      description:
        "In Dek Wolfson's lab. Design and structure determination of novel peptide helical barrels.",
      tags: ["Peptide Design", "Peptide Purification", "Peptide Characterization", "X-ray Crystallography", "Structure Determination"],
    },
    {
      company: "Stockholms universitet",
      link: "https://www.su.se/english/",
      badges: [],
      title: "Student Researcher",
      title_badges: ["Internship"],
      start: "2019",
      end: "2019",
      description:
        "In Agneta Norén's lab. The group is working on the regulation of nitrogen fixation in photosynthetic bacteria. My project focused on the recognition of putative DraG binding proteins responsible for the inactivation of DraG under energy depletion in Rhodospirillum rubrum.",
      tags: ["Protein Purification", "Protein-protein interactions"],
    },
    {
      company: "University of Ljubljana",
      link: "https://www.uni-lj.si/en/university",
      badges: [],
      title: "Student Researcher",
      title_badges: ["Master's degree project"],
      start: "2017",
      end: "2019",
      description:
        "I was responsible for the production, purification, and biophysical characterization of diverse coiled-coil protein origami constructs. Additionally, I conducted binding trials with nanobodies to assess their interactions with the constructs. Furthermore, I endeavored to crystallize the proteins to further elucidate their structure and function.",
      tags: ["Protein Purification", "Protein Characterization", "Protein Structure", "Protein Expression", "Protein Engineering", "Antibodies", "Protein Crystallization", "Biopython", "Pandas", "NumPy", "Pymol"],
    },
    {
      company: "University of Ljubljana",
      link: "https://www.uni-lj.si/en/university",
      badges: [],
      title: "Student Researcher",
      title_badges: ["Bachelor's degree project"],
      start: "2017",
      end: "2017",
      description:
        "In the Department of Biochemistry under the supervision of doc. Dr. Marko Novinec. I was involved in expression, isolation and activity measurements of a mutant cathepsin K enzyme.",
      tags: ["Protein Purification", "Enzyme Activity", "Protein Expression"],
    },
  ],
  skills: [
    "Protein Design",
    "Structural Biology",
    "Computational Biology",
    "CryoEM",
    "X-ray",
    "Rosetta",
    "AlphaFold2",
    "RFdiffusion",
    "ProteinMPNN",
    "TensorFlow",
    "Biopython",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "AWS",
    "Docker",
    "Git",
    "HPC",
  ],
  projects: [
  ],
} as const;
