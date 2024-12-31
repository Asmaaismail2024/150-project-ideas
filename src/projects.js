export const categories = [
  { title: "Energy: Sustainable Materials and Design (EGSD)", code: "EGSD" },
  { title: "Animal Sciences (ANIM)", code: "ANIM" },
  { title: "Behavioral and Social Sciences (BEHA)", code: "BEHA" },
  { title: "Biochemistry (BCHM)", code: "BCHM" },
  { title: "Biomedical and Health Sciences (BMED)", code: "BMED" },
  { title: "Biomedical Engineering (ENBM)", code: "ENBM" },
  { title: "Cellular and Molecular Biology (CELL)", code: "CELL" },
  { title: "Chemistry (CHEM)", code: "CHEM" },
  { title: "Computational Biology and Bioinformatics (CBIO)", code: "CBIO" },
  { title: "Earth and Environmental Sciences (EAEV)", code: "EAEV" },
  { title: "Embedded Systems (EBED)", code: "EBED" },
  {
    title: "Engineering Technology: Statics and Dynamics (ETSD)",
    code: "ETSD",
  },
  { title: "Environmental Engineering (ENEV)", code: "ENEV" },
  { title: "Materials Science (MATS)", code: "MATS" },
  { title: "Microbiology (MCRO)", code: "MCRO" },
  { title: "Plant Sciences (PLNT)", code: "PLNT" },
  { title: "Robotics and Intelligent Machines (ROBO)", code: "ROBO" },
  { title: "Systems Software (SOFT)", code: "SOFT" },
  { title: "Technology Enhances the Arts (TECA)", code: "TECA" },
  { title: "Translational Medical Science (TMED)", code: "TMED" },
];

export const projects = [
  {
    category: "EGSD",
    items: [
      {
        title: "Solar Chimney for Power and Desalinated Water Production",
        problem: "Water Scarcity and Energy Shortage in Arid Regions",
        solution: "Solar Chimney System",
        steps: [
          "Design and Build a Greenhouse",
          "Heat Collection and Airflow Creation",
          "Airflow is Channeled into a Central Chimney",
          "Energy Generation Using Turbines",
          "Desalination with Residual Heat",
        ],
        materials: [
          "Greenhouse Materials: Transparent glass or plastic panels",
          "Chimney Structure: Tall, cylindrical chimney (metal, concrete, or other durable materials)",
          "Turbines: Wind turbines",
          "Desalination System: Condensing and evaporating chambers, piping",
        ],
        researchPaper: "https://doi.org/10.1016/j.csite.2020.100687",
      },
      {
        title: "Solar Tracking Systems to Increase Solar Power Efficiency",
        problem: "Low Efficiency of Static Solar Panels",
        solution: "Solar Tracking Systems",
        steps: [
          "Install Solar Panels with Tracking Systems",
          "Program the Tracking Systems",
          "Increase Solar Energy Collection Efficiency",
        ],
        materials: [
          "Solar Panels: Photovoltaic panels",
          "Tracking Systems: Mechanical or electronic systems",
          "Solar Sensors: Sensors to detect the position of the sun",
        ],
        researchPaper: "https://doi.org/10.1016/j.seta.2024.103879",
      },
      {
        title: "Converting Organic Waste to Biogas (Biogas Production)",
        problem: "Waste Management and Energy Shortage",
        solution: "Biogas Production from Organic Waste",
        steps: [
          "Collection of Organic Waste",
          "Anaerobic Digestion in a Bioreactor",
          "Biogas Production",
          "Utilizing Biogas for Energy Generation",
        ],
        materials: [
          "Organic Waste Materials: Food scraps, animal manure",
          "Bioreactor (Anaerobic Digester)",
          "Biogas Collection System",
          "Energy Conversion Equipment",
        ],
        researchPaper: "https://doi.org/10.1016/j.cscee.2024.100618",
      },
      {
        title:
          "Generating Electricity from Traffic Using Piezoelectric Materials",
        problem: "Wasted Energy from Traffic Movements",
        solution: "Piezoelectric Energy Harvesting",
        steps: [
          "Install Piezoelectric Materials Under Roads or Pavements",
          "Harness Pressure from Traffic",
          "Energy Storage and Distribution",
        ],
        materials: [
          "Piezoceramic Materials",
          "Energy Storage System",
          "Electric Grid or Local Network",
        ],
        researchPaper: "https://doi.org/10.3390/en15093395",
      },
      {
        title: "Green Hydrogen Production Using Solar Energy",
        problem: "Dependence on Fossil Fuels",
        solution: "Green Hydrogen Production Using Solar Energy",
        steps: [
          "Install Solar Panels",
          "Electrolysis Process",
          "Hydrogen Storage",
        ],
        materials: [
          "Solar Panels: Photovoltaic panels",
          "Electrolyzer: A device to split water molecules",
          "Hydrogen Storage Tanks: High-pressure tanks",
        ],
        researchPaper: "https://www.acciona.com/green-hydrogen/",
      },
      {
        title: "Electricity Generation Using Hydrogen Fuel Cells",
        problem: "Need for Clean and Efficient Energy",
        solution: "Hydrogen Fuel Cells for Clean Electricity Generation",
        steps: [
          "Extract Hydrogen via Electrolysis",
          "Use Hydrogen in Fuel Cells",
          "Energy Storage System",
        ],
        materials: [
          "Hydrogen Fuel Cells",
          "Electrolyzer (for Water Splitting)",
          "Hydrogen Storage Tanks",
        ],
        researchPaper: "https://www.acciona.com/green-hydrogen/",
      },
    ],
  },
];
