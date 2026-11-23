const templateCover = "images/projects/template-illustration.svg";

const templateScreenshots = {
  sterling: "sterling-home.jpg",
  crestline: "crestline-home.png",
  apex: "apex-home.jpg",
  clarity: "clarity-home-preview.png",
  bright: "bright-home-preview.png",
  noble: "noble-home.jpg",
};

const template = (slug, name, tier, description, features, contributions = []) => ({
  slug,
  title: name,
  category: `${tier} templates`,
  eyebrow: `${tier} real estate microsite`,
  subtitle: description,
  company: "E-Systematic",
  status: "Delivered",
  cover: `images/projects/${templateScreenshots[slug]}`,
  coverIsScreenshot: true,
  tech: ["Nuxt 4", "Vue 3", "TypeScript", "Nuxt Layers", "Tailwind CSS"],
  role: "Frontend development and technical team leadership.",
  overview: `${name} is one of six white-label real-estate templates delivered on a shared Nuxt foundation. Each template supports its own branding and content.`,
  features,
  contributions: [
    ...contributions,
    "Established shared frontend patterns and guided template delivery across the team.",
  ],
});

export const projects = [
  {
    slug: 'real-estate-crm', title: 'Real Estate CRM Platform', category: 'CRM & platforms', eyebrow: 'Multi-tenant real-estate SaaS', company: 'E-Systematic', status: 'Production v1.0.0 · released November 2026',
    subtitle: 'A multi-tenant workspace connecting brokerage operations, property workflows, and public agent websites.',
    cover: 'images/projects/crm-platform-overview.svg',
    tech: ['Vue 3', 'TypeScript', 'Vite', 'PrimeVue', 'Pinia', 'Tailwind CSS', 'FormKit', 'FullCalendar', 'Stripe'],
    role: 'Senior Frontend Developer & Acting Frontend Lead · February 2026 – present',
    overview: 'I joined E-Systematic at project inception and established the frontend foundation for a multi-tenant real-estate CRM and its microsites. I personally built Profile Settings, Calendar/To-Do, and Brokerage/Office settings end to end, and contributed to 10+ of the product’s 15 modules. As the frontend team grew from two developers to nine, I shifted toward technical direction, estimates, priorities, reviews and work allocation. The first user-facing release, including six website templates, shipped on August 25, 2026; the first versioned production release, v1.0.0, followed on November 9.',
    impact: [
      { value: '10+', label: 'of 15 product modules contributed to' },
      { value: '158', label: 'non-merge commits authored' },
      { value: '~100', label: 'Vue components created' },
      { value: '6', label: 'microsite templates in the first release' },
    ],
    features: [{title:'Profile & secure account flows',text:'Built profile, account and business settings, including OTP-based email changes, password updates and avatar uploads with cropping.'},{title:'Brokerage & office operations',text:'Organization and office management with API integration, team contributions and permission-gated commission-split editing.'},{title:'Calendar & daily workflows',text:'Built calendar and to-do experiences end to end, linking activities with leads, deals, listings and contacts.'},{title:'Shared UI & platform patterns',text:'Reusable tabs, pagination, avatar, country/timezone/phone inputs and locale utilities adopted across product areas.'}],
    contributions: ['Built responsive microsite templates with property search, listing details, and editable branding and content.', 'Built Profile Settings and Calendar/To-Do end to end, plus Brokerage/Office pages and integrations.', 'Created shared UI and reference-data components reused across Profile, Settings and Onboarding.', 'Integrated listing creation and editing and added buyer preferences to support property matching.', 'Introduced a changelog and a pull-request template and helped prepare the first versioned production release.', 'Guided a frontend team that grew from two to nine developers through technical approaches, estimates, priorities, reviews and knowledge sharing.'],
  },
  template('sterling','Sterling','Pro','An editorial property experience with a distinct brand presence.',[{title:'Property discovery',text:'Search and listing detail experiences connected to IDX/MLS data.'},{title:'Lead generation',text:'Contact and inquiry journeys connected to the brokerage workspace.'},{title:'White-label flexibility',text:'Tenant-driven branding and content with Solo, Team and Office variants.'},{title:'Shared foundation',text:'Reusable components and logic delivered through a common Nuxt layer.'}], ['Built and maintained template pages and responsive layouts.']),
  template('crestline','Crestline','Pro','A refined real estate template designed around confident property discovery.',[{title:'Search and discovery',text:'A dedicated property search experience and detailed listing pages.'},{title:'Content and trust',text:'Brand content and blog experiences alongside property discovery.'},{title:'Responsive delivery',text:'Post-launch work included responsive updates and audit feedback.'},{title:'Reusable architecture',text:'A distinct visual identity supported by shared Nuxt components and data flows.'}], ['Built and maintained template pages and responsive layouts.']),
  template('apex','Apex','Pro','A bold property-led template within the Lista Pro collection.',[{title:'A branded homepage',text:'A clear visual starting point for property discovery and agency content.'},{title:'Listing journeys',text:'Property search and detailed listing information in one consistent experience.'},{title:'CRM-managed content',text:'Branding and page content connected to the site editor.'},{title:'White-label architecture',text:'Template-specific design with common platform behavior.'}], ['Built and maintained template pages and responsive layouts.']),
  template('clarity','Clarity','Core','A focused Core template that puts the essential property journey first.',[{title:'Essential discovery',text:'Property search and listing details form the core visitor journey.'},{title:'Brand essentials',text:'About and contact experiences for a tenant’s real estate business.'},{title:'Configurable content',text:'Page sections and tenant branding driven by platform data.'},{title:'Responsive layouts',text:'Interfaces designed to work across desktop and mobile viewports.'}]),
  template('bright','Bright','Core','An approachable Core microsite with its own visual character.',[{title:'Property-first entry',text:'A clear homepage connecting visitors to property search.'},{title:'Search to details',text:'Consistent navigation from discovery to individual listing information.'},{title:'Shared Core logic',text:'Common components and data access provided by the Nuxt layer.'},{title:'Brand customization',text:'Tenant content and branding managed through the CRM platform.'}]),
  template('noble','Noble','Core','A composed Core template for an accessible real estate presence.',[{title:'Property discovery',text:'Dedicated search and listing detail screens.'},{title:'Business identity',text:'Tenant branding, about content and contact entry points.'},{title:'Component reuse',text:'A separate template identity built on shared platform functionality.'},{title:'Multi-device layouts',text:'Responsive presentation across mobile and desktop.'}]),
  {
    slug:'listahomes',title:'ListaHomes',category:'CRM & platforms',eyebrow:'Branded production microsite',company:'E-Systematic',status:'Live',url:'https://listahomes.com/',cover:templateCover,
    subtitle:'The shared microsite platform in a live Central Florida real estate experience.',tech:['Nuxt 4','Vue 3','IDX / MLS','SSR','Nuxt Layers'],
    role:'Frontend platform architecture, microsite implementation and technical leadership.',
    overview:'ListaHomes is a live branded implementation of the microsite platform. It brings property discovery, listing details, local content and lead-generation entry points into a single real estate experience.',
    features:[{title:'Live listings',text:'Property cards and listing details backed by IDX/MLS information.'},{title:'Local discovery',text:'County and city entry points alongside property-type browsing.'},{title:'Market context',text:'Market snapshot content gives visitors context alongside listings.'},{title:'Lead capture',text:'Contact, consultation and property inquiry entry points.'}],
    contributions:['Built the shared microsite foundation supporting branded deployments.','Connected reusable page sections and property experiences with tenant-driven content.','Led ongoing improvements based on product feedback.'],
  },
];

export const assetUrl = (base, src) => `${base}${src}`;
