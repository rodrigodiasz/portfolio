const navLinks = [
  {
    name: "About",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 75, suffix: "%+", label: "Ops Overhead Reduced" },
  { value: 60, suffix: "%+", label: "Accessibility Improved" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React / React Native",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js Developer",
    imgPath: "/images/logos/next.svg",
  },
  {
    name: "Node.js / NestJS",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwindcss-original.svg",
  },
  {
    name: "Git / GitHub",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Rodrigo joined our technology team and quickly became a key contributor, delivering impactful UI/UX rebuilds, backend integrations, and automation pipelines that transformed how our business teams operate.",
    imgPath: "/images/exp-horizontal.png",
    logoPath: "/images/exp2.svg",
    title: "Full-Stack Developer",
    date: "August 2025 - Present",
    responsibilities: [
      "Delivered complete UI/UX rebuilds across web and mobile platforms, improving user experience and product consistency.",
      "Built backend services and REST API integrations (Node.js, NestJS) connecting internal systems, webhooks, and relational databases.",
      "Developed internal analytics tooling giving business teams direct access to data, eliminating manual reporting.",
      "Replaced spreadsheet-based workflows with AWS Lambda automation pipelines, reducing operational overhead by 75%+.",
      "Maintained high codebase quality through clean architecture practices and scalable database design (PostgreSQL, Prisma ORM).",
    ],
  },
  {
    review: "Rodrigo interned with us for two years, contributing meaningfully to the Central Bank's web team. He led a full infrastructure migration, improved accessibility compliance significantly, and delivered reusable component libraries that sped up frontend delivery.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Front-End Developer Intern",
    date: "2022 - 2024",
    responsibilities: [
      "Built and maintained interfaces for institutional websites, corporate intranets, and internal systems serving thousands of government users.",
      "Led a full infrastructure migration of an internal platform from design through deployment with zero downtime.",
      "Achieved 60%+ improvement in WCAG accessibility compliance and 45% faster mobile load times verified with Lighthouse.",
      "Built a reusable React component library reducing code duplication by 50% and front-end delivery time by 25%.",
      "Delivered 85%+ automated test coverage with Jest and Cypress, enabling safe continuous delivery via CI/CD pipelines.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/rodrigo-oliveira-aa4525236",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    url: "https://github.com/rodrigodiasz",
    imgPath: "/images/github-original.svg",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};