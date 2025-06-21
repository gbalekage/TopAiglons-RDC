import type { MenuItem } from "@/types";
import {
  Code,
  BrainCircuit,
  Blocks,
  LaptopMinimal,
  ArrowBigDownDash,
  CreditCard,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  ServerCog,
  LucideWebhook,
  Pen,
  Wrench,
  Book,
  LucideServer,
  Globe,
  Palette,
  MarsStroke,
  Code2,
} from "lucide-react";
import {
  feature1,
  feature2,
  blog1,
  blog2,
  blog3,
  avatar1,
  avatar2,
  avatar3,
  heroBanner,
  heroBannerDark,
} from "@/public";

// Header
export const navMenu: MenuItem[] = [
  {
    href: "/pricing",
    label: "Tarifs",
    desc: "Découvrez nos plans tarifaires.",
  },

  {
    href: "/services",
    label: "Services",
    desc: "Découvrez notre gamme de services et solutions.",
    submenu: [
      {
        href: "/hebergement-web",
        icon: <ServerCog />,
        label: "Hébergement web",
        desc: "Hébergement sécurisé, rapide et fiable pour votre site web.",
      },
      {
        href: "/enregistrement-domaine",
        icon: <LucideWebhook />,
        label: "Enregistrement de domaine",
        desc: "Enregistrez facilement votre nom de domaine.",
      },
      {
        href: "/conception-graphique",
        icon: <Blocks />,
        label: "Conception graphique",
        desc: "Des designs créatifs pour votre identité visuelle.",
      },
      {
        href: "/developpement-fullstack",
        icon: <Code />,
        label: "Développement Full Stack",
        desc: "Solutions web complètes, du front-end au back-end.",
      },
      {
        href: "/marketing-digital",
        icon: <BrainCircuit />,
        label: "Marketing digital",
        desc: "Boostez votre présence en ligne et atteignez vos clients.",
      },
    ],
  },

  {
    href: "/contacts",
    label: "Contacter-Nous",
    desc: "Découvrez les fonctionnalités que nous proposons.",
  },
  {
    href: "/explore",
    label: "Explorer",
    desc: "Parcourez nos ressources et découvrez notre univers.",
    submenu: [
      {
        href: "/blogs",
        icon: <Pen />,
        label: "Blog",
        desc: "Découvrez nos articles et actualités.",
      },
      {
        href: "/features",
        icon: <Wrench />,
        label: "Fonctionnalités",
        desc: "Explorez les fonctionnalités de notre plateforme.",
      },
      {
        href: "/about-us",
        icon: <Book />,
        label: "Notre Histoire",
        desc: "Apprenez-en plus sur notre parcours et notre équipe.",
      },
    ],
  },
];

// Hero
export const heroData = {
  sectionSubtitle: "Hébergement, domaines & services web",
  sectionTitle: "Votre plateforme tout-en-un",
  decoTitle: "web solutions",
  sectionText:
    "Simplifiez votre présence en ligne : enregistrez vos domaines, hébergez vos sites web, profitez de designs professionnels et de services de développement sur mesure depuis une seule plateforme centralisée.",
};

// Feature
export const featureData = {
  sectionSubtitle: "Fonctionnalités",
  sectionTitle: "Fonctionnalités clés de notre plateforme",
  sectionText:
    "Exploitez tout le potentiel de notre plateforme tout-en-un : hébergement web rapide, enregistrement de domaines, design graphique, marketing digital et développement full stack professionnel",
  features: [
    {
      icon: <LucideServer size={32} />,
      iconBoxColor: "bg-blue-600",
      title: "HÉBERGEMENT WEB (Web Hosting)",
      desc: "Offrez la possibilité de créer un espace web en quelques clics. Grâce à une interface simple et intuitive, ils peuvent gérer leurs fichiers, bases de données, comptes emails, sous-domaines et bien plus encore, le tout depuis un tableau de bord centralisé.",
      imgSrc: feature1,
      link: "/hebergement-web",
    },
    {
      icon: <Globe size={32} />,
      iconBoxColor: "bg-cyan-500",
      title: "ENREGISTREMENT DES NOMS DE DOMAINES",
      desc: "Permet de vérifier en temps réel la disponibilité de nom de domaine idéal, avec des suggestions intelligentes et créatives si le nom est déjà pris.",
      imgSrc: feature2,
      link: "/domains",
    },
    {
      icon: <Palette size={32} />,
      iconBoxColor: "bg-yellow-500",
      title: "GRAPHIC DESIGN",
      desc: "Notre service de graphic design vous accompagne dans la création d’une identité visuelle forte et cohérente. Que ce soit pour des logos, affiches, flyers, cartes de visite, bannières web, ou tout autre support visuel, nous mettons notre créativité et notre expertise à votre service pour refléter parfaitement votre image de marque.",
      link: "/design",
    },
    {
      icon: <MarsStroke size={32} />,
      iconBoxColor: "bg-red-500",
      title: "DIGITAL MARKETING",
      desc: "Proposez à vos clients la mise en place de campagnes Facebook, Google, Instagram, TikTok ou WhatsApp, avec un formulaire simple pour définir leur cible, budget et objectifs.",
      link: "/marketing",
    },
    {
      icon: <Code2 size={32} />,
      iconBoxColor: "bg-purple-500",
      title: "FULL STACK DEVELOPMENT",
      desc: "Les clients peuvent soumettre un brief complet (site web, app mobile, back-office...) avec leurs besoins, objectifs, fonctionnalités attendues. Un devis estimatif est généré automatiquement.",
      link: "/develpement",
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: "Comment ça marche",
  sectionTitle: "Processus simple pour obtenir un hébergement",
  sectionText:
    "Suivez ces étapes pour réserver un nom de domaine et activer votre hébergement en quelques minutes.",
  list: [
    {
      icon: <LaptopMinimal size={32} />,
      title: "Créer un compte",
      text: "Créez un compte gratuitement pour accéder à notre plateforme d’hébergement et de réservation de domaines.",
    },
    {
      icon: <ArrowBigDownDash size={32} />,
      title: "Choisir un domaine et un plan",
      text: "Recherchez et réservez un nom de domaine disponible, puis sélectionnez l’offre d’hébergement qui vous convient.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Activer et lancer votre site",
      text: "Payez et activez instantanément votre hébergement. Vous pouvez ensuite commencer à gérer votre site ou installer votre CMS préféré.",
    },
  ],
};

// Pricing
export const pricingData = {
  sectionSubtitle: "Nos Tarifs",
  sectionTitle: "Choisissez votre plan d'hébergement",
  sectionText: "Trouvez l'offre qui convient à votre projet.",
  list: [
    {
      icon: <LaptopMinimal size={32} />,
      title: "Hobby",
      price: { mois: 5, annee: 60 },
      duration: "mois",
      features: [
        { feature: "1 site web" },
        { feature: "10 Go de stockage SSD" },
        { feature: "1 base de données MySQL" },
        { feature: "Certificat SSL gratuit" },
        { feature: "Support par email" },
      ],
      text: "Idéal pour les petits projets ou les sites personnels.",
      button: {
        label: "Choisir ce plan",
        action: "hobby",
        link: "/dashboard", // peut être utilisé pour un identifiant ou une logique de clic
      },
    },
    {
      icon: <ArrowBigDownDash size={32} />,
      title: "Pro",
      price: { mois: 10, annee: 120 },
      duration: "mois",
      flag: "Le plus populaire",
      features: [
        { feature: "Jusqu'à 5 sites web" },
        { feature: "50 Go de stockage SSD" },
        { feature: "5 bases de données MySQL" },
        { feature: "Certificat SSL gratuit" },
        { feature: "Support prioritaire 24/7" },
      ],
      text: "Conçu pour les développeurs et petites entreprises.",
      button: {
        label: "Choisir ce plan",
        action: "pro",
      },
    },
    {
      icon: <ServerCog size={32} />,
      title: "Entreprise",
      price: { mois: 15, annee: 180 },
      duration: "mois",
      features: [
        { feature: "Sites web illimités" },
        { feature: "Stockage SSD illimité" },
        { feature: "Bases de données illimitées" },
        { feature: "Certificats SSL personnalisés" },
        { feature: "Support dédié avec SLA" },
      ],
      text: "Solutions haut de gamme pour les grandes entreprises.",
      button: {
        label: "Choisir ce plan",
        action: "entreprise",
      },
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: "Overview",
  sectionTitle: "All-In-One Analytics Tool",
  sectionText:
    "Powerful analytics made easy. Make data-driven decisions with our all-in-one tool.",
  listTitle: "More than 1M+ people around the world are already using",
  list: [
    {
      title: "1M+",
      text: "Active Downloads",
    },
    {
      title: "4.86",
      text: "Average Rating",
    },
    {
      title: "60K+",
      text: "Active Users",
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: "Avis",
  sectionTitle: "Ce que disent nos clients",
  sectionText: "Trouvez l'offre d’hébergement qui correspond à votre projet.",
  reviewCard: [
    {
      name: "Jack",
      username: "@jack",
      body: "Je n'avais jamais utilisé un service d'hébergement aussi simple et rapide. J'adore !",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "Une plateforme intuitive, j'ai pu lancer mon site en quelques minutes sans aucune difficulté.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "Le support est très réactif et la qualité de l’hébergement est remarquable.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "Une solution idéale pour les débutants comme pour les pros. Tout est clair et bien expliqué.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "Mon site est resté disponible sans interruption depuis l'inscription. Fiable et efficace.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "Excellent rapport qualité/prix. Je recommande à tous ceux qui veulent se lancer sur le web.",
      img: "https://avatar.vercel.sh/james",
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: "Notre Blog",
  sectionTitle: "Centre de Ressources",
  sectionText:
    "Explorez tout le potentiel de notre centre de ressources et accédez à des informations précieuses pour faire évoluer votre projet.",
  blogs: [
    {
      imgSrc: blog1,
      badge: "Hosting",
      title:
        "Pourquoi la fidélisation client est-elle la meilleure stratégie de croissance ?",
      subtitle: "Pourquoi la fidélisation client stratégie de croissance ?",
      desc: "<h1>Tips for Getting the Most Out of Apps and Software</h1><p>We use tons of apps daily—but most people only scratch the surface. Here's how to truly unlock their value:</p><h2>1. <strong>Learn the Shortcuts</strong></h2><p>Keyboard shortcuts or gesture controls save time and improve your workflow.</p><h2>2. <strong>Explore All Features</strong></h2><p>Take time to go beyond the basics—many apps have hidden tools that boost productivity.</p><h2>3. <strong>Use Integrations</strong></h2><p>Connect apps (like linking your calendar with your task manager) to streamline your workflow.</p><h2>4. <strong>Customize Settings</strong></h2><p>Adjust preferences, themes, and notifications to suit how you work best.</p><h2>5. <strong>Keep It Updated</strong></h2><p>Updates often bring better features, security patches, and performance improvements.</p><h2>6. <strong>Sync Across Devices</strong></h2><p>Use cloud sync to stay productive whether you're on your phone, laptop, or tablet.</p><h2>7. <strong>Read the Docs or Tutorials</strong></h2><p>Official docs, videos, or help centers can reveal pro tips you might miss on your own.</p>",
      author: {
        avatarSrc: avatar1,
        authorName: "John Carte",
      },
      _id: "7654872837",
      createdAt: "2025-04-21T07:06:37.508Z",
      updatedAt: "2025-04-24T08:26:29.750Z",
    },

    {
      imgSrc: blog2,
      badge: "Domains",
      title:
        "Comment optimiser vos campagnes publicitaires pour un meilleur rendement ?",
      subtitle: "Pourquoi la fidélisation client stratégie de croissance ?",
      desc: "Explorez tout le potentiel de notre centre de ressources et accédez à des informations précieuses pour faire évoluer votre projet.Explorez tout le potentiel de notre centre de ressources et accédez à des informations précieuses pour faire évoluer votre projet.",
      author: {
        avatarSrc: avatar2,
        authorName: "Annette Black",
      },
      _id: "75932gritw",
      createdAt: "2025-04-21T07:06:37.508Z",
      updatedAt: "2025-04-24T08:26:29.750Z",
    },

    {
      imgSrc: blog3,
      badge: "Full-Stack",
      title:
        "Construire la meilleure stack technologique pour soutenir votre croissance",
      subtitle: "Pourquoi la fidélisation client stratégie de croissance ?",
      desc: "Explorez tout le potentiel de notre centre de ressources et accédez à des informations précieuses pour faire évoluer votre projet.Explorez tout le potentiel de notre centre de ressources et accédez à des informations précieuses pour faire évoluer votre projet.",
      author: {
        avatarSrc: avatar3,
        authorName: "Ralph Edwards",
      },
      _id: "7654872837uyer",
      createdAt: "2025-04-21T07:06:37.508Z",
      updatedAt: "2025-04-24T08:26:29.750Z",
    },

    {
      imgSrc: heroBannerDark,
      badge: "Full-Stack",
      title: "How to create an effective startup roadmap or ideas",
      subtitle: "Pourquoi la fidélisation client stratégie de croissance ?",
      desc: '<p>\tCreating an effective <strong>startup roadmap</strong> helps you turn an idea into a structured, actionable plan. It gives clarity on what to build, when to build it, and how to scale. Here\'s a short and practical guide to help you build your startup roadmap or refine your startup ideas:</p><h2>1. <strong>Start with the Problem, Not the Product</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Identify a real, painful problem.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Validate that it affects a significant audience.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Ask: “Is this a must-have or just nice to have?”</li></ol><p><strong>Tip:</strong> Talk to real users, not just friends or family.</p><h2>2. <strong>Define Your Vision and Mission</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Vision: Long-term impact you want to make.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mission: The approach or method to get there.</li></ol><p>This gives your roadmap a clear direction and purpose.</p><h2>3. <strong>Brainstorm and Filter Ideas</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>List all possible solutions to the problem.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Evaluate each based on:</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Feasibility</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Market demand</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Uniqueness</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Revenue potential</li></ol><p>Shortlist 1-2 core ideas to pursue initially.</p><h2>4. <strong>Define Your MVP (Minimum Viable Product)</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Strip your idea down to the core functionality.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Build only what\'s needed to solve the problem simply.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Focus on value, not features.</li></ol><p><strong>Example:</strong> If you\'re building a job portal, start with user registration and job posting only.</p><h2>5. <strong>Set Milestones (Roadmap Stages)</strong></h2><p>Break your journey into clear phases:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 1: Research &amp; Validation</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Market research</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Competitor analysis</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>User interviews</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 2: MVP Development</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Build core product</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Internal testing</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 3: Launch &amp; Feedback</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Soft launch to early users</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Collect data, iterate</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 4: Growth &amp; Optimization</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Marketing</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Add features based on feedback</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Improve UI/UX</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 5: Scale</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Monetization</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Partnerships</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Hiring team</li></ol><h2>6. <strong>Use Tools for Planning and Tracking</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Product roadmap tools: Trello, Notion, Jira, ClickUp</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Timeline tools: Gantt charts, Google Sheets, Miro</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Analytics: Mixpanel, Hotjar, GA4 for feedback loops</li></ol><h2>7. <strong>Keep It Flexible</strong></h2><p>A roadmap is a guide, not a rulebook. Be ready to pivot based on user feedback, market trends, or technical limitations.</p><h2>8. <strong>Revisit and Refine Regularly</strong></h2><p>Review your progress monthly or quarterly. Adjust priorities based on:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>User data</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Business metrics</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>New opportunities</li></ol><p><br></p>',
      author: {
        avatarSrc: avatar3,
        authorName: "Ralph Edwards",
      },
      _id: "87452guwe674873",
      createdAt: "2025-04-21T07:06:37.508Z",
      updatedAt: "2025-04-24T08:26:29.750Z",
    },

    {
      imgSrc: heroBanner,
      badge: "Marketing",
      title: "A detailed step by step guide to manage your lifestyle",
      subtitle: "Pourquoi la fidélisation client stratégie de croissance ?",
      desc: "<h1>A Simple Step-by-Step Guide to Managing Your Lifestyle</h1><p>If you're looking to improve your health, boost productivity, and create a balanced life, managing your lifestyle intentionally is key. Here's a short guide to help you take control of your daily habits and overall well-being.</p><h2>1. Assess Your Current Lifestyle</h2><p>Track your habits for a week. Note your energy levels, sleep, diet, and daily routines. Reflect on what's working and what needs change.</p><h2>2. Focus on Health</h2><p>Eat balanced meals, stay hydrated, get enough sleep, and move your body daily. Mental health matters too—set boundaries and practice mindfulness.</p><h2>3. Set Clear Goals</h2><p>Break your goals into categories like health, career, and relationships. Make them specific and achievable.</p><h2>4. Create Daily Routines</h2><p>Establish morning and evening routines. Plan your days and weeks with intention using a planner or digital calendar.</p><h2>5. Manage Time Wisely</h2><p>Prioritize important tasks, limit distractions, and take regular breaks. Learn to say no when needed.</p><h2>6. Handle Finances Smartly</h2><p>Track your spending, set a budget, save regularly, and build financial literacy. Financial stability supports overall peace of mind.</p><h2>7. Build Strong Relationships</h2><p>Surround yourself with supportive people. Communicate openly and maintain healthy boundaries.</p><h2>8. Keep Learning</h2><p>Read, take online courses, or explore new hobbies. Personal growth keeps life fulfilling and dynamic.</p><h2>9. Declutter Regularly</h2><p>Simplify your physical and digital spaces. Clear surroundings help reduce stress and increase focus.</p><h2>10. Celebrate Small Wins</h2><p>Track your progress, reflect often, and reward yourself for sticking to positive habits. Consistency is more important than perfection.</p><p><strong>Final Tip</strong>: Start small, stay consistent, and review your lifestyle regularly. With steady effort, a well-managed life becomes a natural way of living.</p>",
      author: {
        avatarSrc: avatar3,
        authorName: "Ralph Edwards",
      },
      _id: "48752",
      createdAt: "2025-04-21T07:06:37.508Z",
      updatedAt: "2025-04-24T08:26:29.750Z",
    },
  ],
};

// Cta
export const ctaData = {
  text: "Lancez votre site dès aujourd’hui avec notre hébergement rapide et sécurisé",
};

// Footer
export const footerData = {
  links: [
    {
      title: "Product",
      items: [
        {
          href: "#",
          label: "Components",
        },
        {
          href: "#",
          label: "Pricing",
        },
        {
          href: "#",
          label: "Dashboard",
        },
        {
          href: "#",
          label: "Feature requests",
        },
      ],
    },
    {
      title: "Developers",
      items: [
        {
          href: "#",
          label: "Documentation",
        },
        {
          href: "#",
          label: "Discord server",
        },
        {
          href: "#",
          label: "Support",
        },
        {
          href: "#",
          label: "Glossary",
        },
        {
          href: "#",
          label: "Changelog",
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          href: "#",
          label: "About",
        },
        {
          href: "#",
          label: "Careers",
        },
        {
          href: "#",
          label: "Blog",
        },
        {
          href: "#",
          label: "Contact",
        },
      ],
    },
    {
      title: "Legal",
      items: [
        {
          href: "#",
          label: "Terms and Conditions",
        },
        {
          href: "#",
          label: "Privacy Policy",
        },
        {
          href: "#",
          label: "Data Processing Agreement",
        },
        {
          href: "#",
          label: "Cookie manager",
        },
      ],
    },
  ],
  copyright: "© 2024 codewithsadee",
  socialLinks: [
    {
      href: "https://x.com/codewithsadee_",
      icon: <Twitter size={18} />,
    },
    {
      href: "https://github.com/codewithsadee",
      icon: <Github size={18} />,
    },
    {
      href: "https://www.linkedin.com/in/codewithsadee/",
      icon: <Linkedin size={18} />,
    },
    {
      href: "https://www.instagram.com/codewithsadee",
      icon: <Instagram size={18} />,
    },
    {
      href: "https://www.youtube.com/codewithsadee",
      icon: <Youtube size={18} />,
    },
  ],
};

// blog categories
export const blogCategories = [
  "All",
  "Hosting",
  "Domains",
  "Full-Stack",
  "Marketing",
];

export const blog_data = [
  {
    _id: "6805ee7dd8f584af5da78d37",
    title: "A detailed step by step guide to manage your lifestyle",
    description:
      "<h1>A Simple Step-by-Step Guide to Managing Your Lifestyle</h1><p>If you're looking to improve your health, boost productivity, and create a balanced life, managing your lifestyle intentionally is key. Here's a short guide to help you take control of your daily habits and overall well-being.</p><h2>1. Assess Your Current Lifestyle</h2><p>Track your habits for a week. Note your energy levels, sleep, diet, and daily routines. Reflect on what's working and what needs change.</p><h2>2. Focus on Health</h2><p>Eat balanced meals, stay hydrated, get enough sleep, and move your body daily. Mental health matters too—set boundaries and practice mindfulness.</p><h2>3. Set Clear Goals</h2><p>Break your goals into categories like health, career, and relationships. Make them specific and achievable.</p><h2>4. Create Daily Routines</h2><p>Establish morning and evening routines. Plan your days and weeks with intention using a planner or digital calendar.</p><h2>5. Manage Time Wisely</h2><p>Prioritize important tasks, limit distractions, and take regular breaks. Learn to say no when needed.</p><h2>6. Handle Finances Smartly</h2><p>Track your spending, set a budget, save regularly, and build financial literacy. Financial stability supports overall peace of mind.</p><h2>7. Build Strong Relationships</h2><p>Surround yourself with supportive people. Communicate openly and maintain healthy boundaries.</p><h2>8. Keep Learning</h2><p>Read, take online courses, or explore new hobbies. Personal growth keeps life fulfilling and dynamic.</p><h2>9. Declutter Regularly</h2><p>Simplify your physical and digital spaces. Clear surroundings help reduce stress and increase focus.</p><h2>10. Celebrate Small Wins</h2><p>Track your progress, reflect often, and reward yourself for sticking to positive habits. Consistency is more important than perfection.</p><p><strong>Final Tip</strong>: Start small, stay consistent, and review your lifestyle regularly. With steady effort, a well-managed life becomes a natural way of living.</p>",
    category: "Lifestyle",
    image: blog1,
    createdAt: "2025-04-21T07:06:37.508Z",
    updatedAt: "2025-04-24T08:26:29.750Z",
    __v: 0,
    isPublished: true,
    subTitle: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
  },

  {
    _id: "6805ef08d8f584af5da78d39",
    title: "How to create an effective startup roadmap or ideas",
    description:
      '<p>\tCreating an effective <strong>startup roadmap</strong> helps you turn an idea into a structured, actionable plan. It gives clarity on what to build, when to build it, and how to scale. Here\'s a short and practical guide to help you build your startup roadmap or refine your startup ideas:</p><h2>1. <strong>Start with the Problem, Not the Product</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Identify a real, painful problem.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Validate that it affects a significant audience.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Ask: “Is this a must-have or just nice to have?”</li></ol><p><strong>Tip:</strong> Talk to real users, not just friends or family.</p><h2>2. <strong>Define Your Vision and Mission</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Vision: Long-term impact you want to make.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Mission: The approach or method to get there.</li></ol><p>This gives your roadmap a clear direction and purpose.</p><h2>3. <strong>Brainstorm and Filter Ideas</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>List all possible solutions to the problem.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Evaluate each based on:</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Feasibility</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Market demand</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Uniqueness</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Revenue potential</li></ol><p>Shortlist 1-2 core ideas to pursue initially.</p><h2>4. <strong>Define Your MVP (Minimum Viable Product)</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Strip your idea down to the core functionality.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Build only what\'s needed to solve the problem simply.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Focus on value, not features.</li></ol><p><strong>Example:</strong> If you\'re building a job portal, start with user registration and job posting only.</p><h2>5. <strong>Set Milestones (Roadmap Stages)</strong></h2><p>Break your journey into clear phases:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 1: Research &amp; Validation</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Market research</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Competitor analysis</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>User interviews</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 2: MVP Development</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Build core product</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Internal testing</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 3: Launch &amp; Feedback</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Soft launch to early users</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Collect data, iterate</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 4: Growth &amp; Optimization</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Marketing</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Add features based on feedback</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Improve UI/UX</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Phase 5: Scale</strong></li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Monetization</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Partnerships</li><li data-list="bullet" class="ql-indent-1"><span class="ql-ui" contenteditable="false"></span>Hiring team</li></ol><h2>6. <strong>Use Tools for Planning and Tracking</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Product roadmap tools: Trello, Notion, Jira, ClickUp</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Timeline tools: Gantt charts, Google Sheets, Miro</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Analytics: Mixpanel, Hotjar, GA4 for feedback loops</li></ol><h2>7. <strong>Keep It Flexible</strong></h2><p>A roadmap is a guide, not a rulebook. Be ready to pivot based on user feedback, market trends, or technical limitations.</p><h2>8. <strong>Revisit and Refine Regularly</strong></h2><p>Review your progress monthly or quarterly. Adjust priorities based on:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>User data</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Business metrics</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>New opportunities</li></ol><p><br></p>',
    category: "Startup",
    image: blog2,
    createdAt: "2025-04-21T07:08:56.214Z",
    updatedAt: "2025-04-24T08:30:47.920Z",
    __v: 0,
    isPublished: true,
    subTitle: "Creating an effective <strong>startup roadmap",
  },

  {
    _id: "6805f2aad8f584af5da78d3b",
    title: "Learning new technology to boost your career in software",
    description:
      '<h1>Learning New Tech to Boost Your Software Career</h1><p>In tech, staying still means falling behind. Here\'s how learning new technologies can fast-track your software career:</p><h2>1. <strong>Stay Relevant</strong></h2><p>Tech evolves fast. Learning modern tools, frameworks, or languages keeps you valuable to employers and clients.</p><h2>2. <strong>Increase Opportunities</strong></h2><p>New skills open doors—whether it\'s switching to a better role, freelancing, or launching your own product.</p><h2>3. <strong>Grow Your Confidence</strong></h2><p>Tackling new tech boosts problem-solving skills and helps you adapt quickly in real-world projects.</p><h2>4. <strong>Stand Out</strong></h2><p>Knowing in-demand skills (like TypeScript, DevOps, AI/ML, or cloud platforms) makes your resume and GitHub shine.</p><h2>5. <strong>How to Learn Smart</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Pick tech that aligns with your goals</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Build real projects</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Join communities and open source</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Stay consistent, not perfect</li></ol><p><br></p>',
    category: "Technology",
    image: blog3,
    createdAt: "2025-04-21T07:24:26.853Z",
    updatedAt: "2025-04-24T08:20:36.187Z",
    __v: 0,
    isPublished: true,
    subTitle: "Learning New Tech to Boost Your Software Career",
  },

  {
    _id: "6805f2e2d8f584af5da78d3d",
    title: "Tips for getting the most out of apps and software",
    description:
      "<h1>Tips for Getting the Most Out of Apps and Software</h1><p>We use tons of apps daily—but most people only scratch the surface. Here's how to truly unlock their value:</p><h2>1. <strong>Learn the Shortcuts</strong></h2><p>Keyboard shortcuts or gesture controls save time and improve your workflow.</p><h2>2. <strong>Explore All Features</strong></h2><p>Take time to go beyond the basics—many apps have hidden tools that boost productivity.</p><h2>3. <strong>Use Integrations</strong></h2><p>Connect apps (like linking your calendar with your task manager) to streamline your workflow.</p><h2>4. <strong>Customize Settings</strong></h2><p>Adjust preferences, themes, and notifications to suit how you work best.</p><h2>5. <strong>Keep It Updated</strong></h2><p>Updates often bring better features, security patches, and performance improvements.</p><h2>6. <strong>Sync Across Devices</strong></h2><p>Use cloud sync to stay productive whether you're on your phone, laptop, or tablet.</p><h2>7. <strong>Read the Docs or Tutorials</strong></h2><p>Official docs, videos, or help centers can reveal pro tips you might miss on your own.</p>",
    category: "Technology",
    image: blog3,
    createdAt: "2025-04-21T07:25:22.362Z",
    updatedAt: "2025-04-24T08:20:36.979Z",
    __v: 0,
    isPublished: true,
    subTitle: "Tips for Getting the Most Out of Apps and Software",
  },

  // {
  //   _id: "6805f307d8f584af5da78d3f",
  //   title: "Enhancing your skills and capturing memorable moments",
  //   description:
  //     '<h1>Enhancing Your Skills and Capturing Memorable Moments</h1><p>In today\'s fast-paced world, personal growth and preserving memories go hand in hand. Here\'s how to do both meaningfully:</p><h2>1. <strong>Invest in Skill Building</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Set clear learning goals</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Practice consistently through real projects</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Use online platforms like YouTube, Coursera, or freeCodeCamp</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Track progress to stay motivated</li></ol><h2>2. <strong>Capture Moments That Matter</strong></h2><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Take photos/videos of milestones, both big and small</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Keep a digital or physical journal</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Use apps like Google Photos or Notion to organize memories</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Reflect regularly—it helps you appreciate the journey</li></ol><h2>3. <strong>Balance Growth and Presence</strong></h2><p>While chasing goals, don\'t forget to pause and enjoy the process. Learn, improve, and make time to document the moments that shape you.</p>',
  //   category: "Lifestyle",
  //   image: blog_pic_5,
  //   createdAt: "2025-04-21T07:25:59.789Z",
  //   updatedAt: "2025-04-24T08:32:42.649Z",
  //   __v: 0,
  //   isPublished: true,
  //   subTitle: "Enhancing Your Skills and Capturing Memorable Moments",
  // },

  // {
  //   _id: "6805f324d8f584af5da78d41",
  //   title: "Maximizing returns by minimizing resources in your startup",
  //   description:
  //     "<h1>Maximizing Returns by Minimizing Resources in Your Startup</h1><p>Startups thrive not by having the most, but by using the least for the most impact. Here's how to do more with less:</p><h2>1. <strong>Focus on Core Value</strong></h2><p>Build only what solves the main problem. Avoid bloated features early on.</p><h2>2. <strong>Use No-Code/Low-Code Tools</strong></h2><p>Launch faster and cheaper using platforms like Webflow, Bubble, or Airtable.</p><h2>3. <strong>Automate Repetitive Tasks</strong></h2><p>Use tools like Zapier or Make to automate workflows without hiring extra help.</p><h2>4. <strong>Outsource Smartly</strong></h2><p>Hire freelancers or agencies for specific needs instead of full-time staff too early.</p><h2>5. <strong>Test Before You Scale</strong></h2><p>Validate ideas with a small user base before investing in full development or marketing.</p><h2>6. <strong>Keep Overhead Low</strong></h2><p>Work remotely, avoid unnecessary software subscriptions, and stay lean.</p>",
  //   category: "Startup",
  //   image: blog_pic_6,
  //   createdAt: "2025-04-21T07:26:28.058Z",
  //   updatedAt: "2025-04-24T09:32:08.179Z",
  //   __v: 0,
  //   isPublished: true,
  //   subTitle: "Maximizing Returns by Minimizing Resources in Your Startup",
  // },

  // {
  //   _id: "68062afc8474108ecb7d7944",
  //   title: "Taxes on Luxury Houses",
  //   description:
  //     "<h2>Luxury Home Taxes: Are They Fair, and What Do They Mean for the Market?</h2><p>\r\n</p><p>Luxury homes. The pinnacle of real estate, often boasting breathtaking views, lavish amenities, and price tags that make your eyes water. But with great wealth comes great responsibility... and in this case, that includes taxes. But are taxes on luxury homes fair? And what impact do they actually have on the overall real estate market? Let's dive in.</p><p>\r\n</p><p><strong>What Exactly are Luxury Home Taxes?</strong></p><p>\r\n</p><p>First, let's clarify what we're talking about. Luxury home taxes aren't a specific, separate tax category in most places. Instead, they refer to the <em>property taxes</em> applied to high-value homes. These taxes are calculated based on the assessed value of the property, and because luxury homes are worth significantly more, they naturally generate higher tax bills.</p><p>\r\n</p><p>In some areas, there might also be:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>The Argument for Higher Taxes on Luxury Homes</strong></p><p>\r\n</p><p>Proponents of higher taxes on luxury homes argue that it's a matter of fairness and social responsibility. Their rationale often includes:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>The Argument Against Higher Taxes on Luxury Homes</strong></p><p>\r\n</p><p>On the other hand, arguments against higher taxes on luxury homes often center around potential negative consequences:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>The Impact on the Real Estate Market</strong></p><p>\r\n</p><p>The impact of luxury home taxes on the real estate market is a complex issue with no easy answers. Here's what we know:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>The Future of Luxury Home Taxes</strong></p><p>\r\n</p><p>The debate over luxury home taxes is likely to continue as governments grapple with funding public services and addressing income inequality. Here are some potential trends to watch:</p><p>\r\n</p><p><br></p><p>\r\n</p><p><strong>Conclusion</strong></p><p>\r\n</p><p>Taxation of luxury homes is a complex issue with strong arguments on both sides. While it can be a valuable source of revenue for public services, it can also have unintended consequences for the real estate market and the overall economy. Finding the right balance requires careful consideration of the specific circumstances of each community and a commitment to fairness, transparency, and economic sustainability.</p><p>\r\n</p><p><strong>What are your thoughts on luxury home taxes? Share your opinions in the comments below!</strong></p><p>\r\n</p>",
  //   category: "Finance",
  //   image: blog_pic_7,
  //   createdAt: "2025-04-21T11:24:44.773Z",
  //   updatedAt: "2025-04-24T09:31:52.102Z",
  //   __v: 0,
  //   isPublished: true,
  //   subTitle: "What Do They Mean for the Market?",
  // },

  // {
  //   _id: "6809f9f23e075dbeedd23bca",
  //   title: "The New Way of Study",
  //   description:
  //     "<h2>The New Way of Study: Ditching the Old, Embracing the Now</h2><p>\n</p><p>For years, the image of studying has been synonymous with late nights, stacks of textbooks, and the constant pressure to memorize. But let's face it: that traditional approach is often ineffective, stressful, and frankly, outdated. In today's rapidly evolving world, the \"new way of study\" is less about rote memorization and more about <strong>understanding, application, and personalized learning.</strong></p><p>\n</p><p>So, what does this \"new way\" actually look like? Let's dive in:</p><p>\n</p><p><strong>1. Active Learning is King (and Queen!):</strong></p><p>\n</p><p>Forget passively rereading notes. The new way prioritizes actively engaging with the material. This means:</p><p>\n</p><p><br></p><p>\n</p><p><strong>2. Personalized Learning: Tailoring Your Approach:</strong></p><p>\n</p><p>One-size-fits-all doesn't work for learning. The new way encourages you to:</p><p>\n</p><p><br></p><p>\n</p><p><strong>3. Focus &amp; Mindfulness: Train Your Brain for Success:</strong></p><p>\n</p><p>Distraction is the enemy of effective learning. The new way emphasizes:</p><p>\n</p><p><br></p><p>\n</p><p><strong>4. Collaboration &amp; Community: Learning Together:</strong></p><p>\n</p><p>Learning doesn't have to be a solitary pursuit. The new way encourages:</p><p>\n</p><p><br></p><p>\n</p><p><strong>In Conclusion:</strong></p><p>\n</p><p>The \"new way of study\" is about embracing a more active, personalized, and holistic approach to learning. It's about understanding concepts, applying knowledge, and cultivating a lifelong love of learning. By ditching the outdated methods and embracing these new strategies, you can unlock your full potential and achieve academic success without the stress and burnout. So, are you ready to embrace the new way?</p><p>\n</p><p><strong>What are your favorite study techniques? Share them in the comments below!</strong></p><p>\n</p>",
  //   category: "Finance",
  //   image: blog_pic_8,
  //   isPublished: true,
  //   createdAt: "2025-04-24T08:44:34.937Z",
  //   updatedAt: "2025-04-24T09:59:21.299Z",
  //   __v: 0,
  //   subTitle: "The New Way of Study: Ditching the Old",
  // },

  // {
  //   _id: "6810995bb5fd81dd0c923d5b",
  //   title: "Importance of Tourism",
  //   description:
  //     "<h2>Beyond Postcards: Why Tourism Matters More Than You Think</h2><p>\n</p><p>Tourism. The word conjures up images of sun-drenched beaches, historical landmarks, and exotic adventures. But beyond the beautiful photos and unforgettable experiences, tourism is a powerhouse, a driving force that shapes economies, cultures, and even the environment. It's much more than just vacations; it's a complex and vital industry that deserves our attention and understanding.</p><p>\n</p><p>So, why is tourism so important? Let's dive in:</p><p>\n</p><p><strong>1. Fueling the Economic Engine:</strong></p><p>\n</p><p><br></p><p>\n</p><p><strong>2. Preserving Culture and Heritage:</strong></p><p>\n</p><p><br></p><p>\n</p><p><strong>3. Fostering Sustainable Development:</strong></p><p>\n</p><p><br></p><p>\n</p><p><strong>The Challenges and the Future:</strong></p><p>\n</p><p>While the benefits of tourism are undeniable, it's important to acknowledge the potential challenges. Over-tourism, environmental degradation, and the exploitation of local communities are serious concerns.</p><p>\n</p><p>However, by embracing responsible and sustainable tourism practices, we can mitigate these risks and ensure that tourism benefits everyone involved. This includes:</p><p>\n</p><p><br></p><p>\n</p><p><strong>In Conclusion:</strong></p><p>\n</p><p>Tourism is a powerful force that can drive economic growth, preserve cultural heritage, and foster sustainable development. By understanding its importance and embracing responsible practices, we can unlock its full potential to create a better world for all. So, the next time you plan a trip, consider the impact you can have and choose to be a conscious and responsible traveler. Your journey can make a real difference.</p><p>\n</p><p><strong>What are your thoughts on the importance of tourism? Share your experiences and insights in the comments below!</strong></p><p>\n</p>",
  //   category: "Lifestyle",
  //   image: blog_pic_9,
  //   isPublished: true,
  //   createdAt: "2025-04-29T09:18:19.662Z",
  //   updatedAt: "2025-04-29T10:13:25.035Z",
  //   __v: 0,
  //   subTitle: " Why Tourism Matters More Than You Think",
  // },

  // {
  //   _id: "6810a6a2ed57ecc68a99abb3",
  //   title: "AI best practices in healthcare",
  //   description:
  //     '<h2>AI Best Practices in Healthcare: Navigating the Future Responsibly</h2><p>\n</p><p>Artificial Intelligence (AI) is rapidly transforming healthcare, promising to revolutionize everything from diagnosis and treatment to patient care and operational efficiency. But with great power comes great responsibility. To harness the full potential of AI in healthcare while mitigating risks, we need to adopt a set of best practices that prioritize patient safety, ethical considerations, and responsible innovation.</p><p>\n</p><p>This blog post explores key AI best practices in healthcare, offering a roadmap for organizations looking to integrate AI solutions effectively and ethically.</p><p>\n</p><p><strong>1. Prioritize Patient Safety and Well-being Above All Else:</strong></p><p>\n</p><p>This is the golden rule of AI in healthcare. Any AI application must be rigorously tested and validated to ensure it enhances, not hinders, patient care.</p><p>\n</p><p>\n</p><p><strong>2. Embrace Transparency and Explainability (XAI):</strong></p><p>\n</p><p>"Black box" AI can erode trust and make it difficult to understand how decisions are made. Strive for transparency and explainability in your AI solutions.</p><p>\n</p><p>\n</p><p><strong>3. Address Bias and Ensure Fairness:</strong></p><p>\n</p><p>AI models are trained on data, and if that data reflects existing biases in the healthcare system, the AI will perpetuate and potentially amplify those biases.</p><p>\n</p><p>\n</p><p><strong>4. Secure Patient Data and Protect Privacy:</strong></p><p>\n</p><p>Data security and patient privacy are paramount. AI systems must comply with all applicable regulations and protect sensitive patient information.</p><p>\n</p><p>\n</p><p><strong>5. Foster Collaboration and Continuous Learning:</strong></p><p>\n</p><p>AI development in healthcare is a collaborative effort.  Break down silos and encourage knowledge sharing among stakeholders.</p><p>\n\n</p><p><strong>6. Define Clear Roles and Responsibilities:</strong></p><p>\n</p><p>Clearly define the roles and responsibilities of each stakeholder involved in AI development and deployment.</p><p>\n</p><p><br></p><p>\n</p><p><strong>Conclusion: Embracing a Future of Responsible AI in Healthcare</strong></p><p>\n</p><p>AI holds immense potential to transform healthcare for the better. By embracing these best practices, healthcare organizations can navigate the complexities of AI integration responsibly, ensuring patient safety, ethical considerations, and data privacy are at the forefront.  As AI continues to evolve, a commitment to continuous learning and adaptation will be crucial to unlocking its full potential and building a future where AI empowers healthcare professionals to deliver the best possible care to patients.</p><p>\n</p><p><strong>What are your thoughts? What other best practices do you think are essential for AI in healthcare? Share your insights in the comments below!</strong></p><p>\n</p>',
  //   category: "Lifestyle",
  //   image: blog_pic_10,
  //   isPublished: true,
  //   createdAt: "2025-04-29T10:14:58.575Z",
  //   updatedAt: "2025-04-29T10:14:58.575Z",
  //   __v: 0,
  //   subTitle: "Navigating the Future Responsibly",
  // },
];

export const comment_data = [
  {
    _id: "64983utew9874ue943",
    blog: blogData.blogs[0],
    name: "John Doe",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, error quod! Optio nesciunt rerum ipsa voluptatibus, sit fuga veniam eius, mollitia magni, molestiae ullam itaque sequi ratione unde obcaecati assumenda?",
    isApprouved: false,
    createdAt: "2025-05-30T09:30:06.918Z",
    updatedAt: "2025-05-30T09:30:06.918Z",
  },
  {
    _id: "64983utew9874ue9323",
    blog: blogData.blogs[0],
    name: "Jane Doe",
    comment: "This is jane's comment",
    isApprouved: true,
    createdAt: "2025-05-30T09:30:06.918Z",
    updatedAt: "2025-05-30T09:30:06.918Z",
  },
  {
    _id: "64983utew9874ue943",
    blog: blogData.blogs[0],
    name: "Balekage Gael",
    comment: "This is Balekage Gael's comment",
    isApprouved: true,
    createdAt: "2025-05-30T09:30:06.918Z",
    updatedAt: "2025-05-30T09:30:06.918Z",
  },
];
