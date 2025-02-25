import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Volcanoids - Progression Expansion",
    description:
      "I designed a complete overhaul of the games progression and questing system. I also supported hundreds of new game mechanics and new material systems based on different in game mechanics.",
    tools: ["C#", "Unity", "Express", "AWS EC2", "Firebase", "C", "Nginx"],
    role: "Primary Developer",
    code: "",
    demo: "https://github.com/MelodicAlbuild/ProgressionExpansion",
    private: false,
    image: crefin,
  },
  {
    id: 2,
    name: "Valous Data Engine",
    description:
      "I built a complete data driven game engine that works off of one of many data sources to create and demonstrate games. I also wrote a complete network library called ValousCloud that handles realtime networking between game instances.",
    tools: [
      "C++",
      "OpenGL",
      "Vulkan",
      "DirectX 11/12",
      "Ninja",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "MariaDB",
      "SQLite",
      "JSON",
      "AWS S3",
      "AWS DynamoDB",
      "AWS RDS",
      "TCP/UDP Networking",
      "C",
      "AWS Elastic Load Balancing",
    ],
    code: "",
    role: "Complete Developer",
    demo: "",
    private: true,
    image: realEstate,
  },
  {
    id: 3,
    name: "Zennix",
    description:
      "I developed a from scratch programming language for inhouse development that greatly increases my development time. Zennix helps me develop hundreds of tools quickly by integrating seemlessly with all of my infrastructure. My entire internal tooling and server systems are built on Zennix.",
    tools: ["Java", "Maven", "Zennix", "Systems Design", "Systems Management"],
    code: "",
    demo: "https://github.com/MelodicAlbuild/Zennix",
    private: false,
    image: ayla,
    role: "Complete Developer",
  },
  {
    id: 4,
    name: "Project Oblivion",
    description:
      "A Pokemon-like game engine built from scratch in C# using SDL2. Oblivion uses the Tiled format for maps, and will host a system for managing and using Zennix for NPCs, Quests, and other game mechanics.",
    tools: [
      "C#",
      "SDL2",
      "Zennix",
      "Tiled",
      "Systems Design",
      "Systems Management",
    ],
    code: "",
    demo: "https://github.com/MelodicAlbuild/OblivionEngine",
    private: false,
    image: ayla,
    role: "Project Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
