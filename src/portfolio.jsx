import React, { useState } from "react";
import { ExternalLink, Download, Mail, Globe, Menu, X, ChevronDown, Bot, Building2, GraduationCap } from "lucide-react";

const Github = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Linkedin = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  </svg>
);

const TechIcons = {
  "Node.js": () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#5FA04E">
      <path d="M12 2L2 7.5v11L12 24l10-5.5v-11L12 2zm0 2.31l7.5 4.12v8.24L12 20.79l-7.5-4.12V8.43L12 4.31z"/>
    </svg>
  ),
  Express: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.1 16.5l-1.4 1.4-3.7-3.7-3.7 3.7-1.4-1.4 3.7-3.7-3.7-3.7 1.4-1.4 3.7 3.7 3.7-3.7 1.4 1.4-3.7 3.7 3.7 3.7z"/>
    </svg>
  ),
  React: () => (
    <svg className="h-5 w-5 animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),
  TypeScript: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#3178C6">
      <path d="M3 3h18v18H3V3zm10.2 12.8c.4.7 1.1 1.2 2.1 1.2 1.2 0 1.9-.6 1.9-1.5 0-.9-.6-1.3-1.8-1.8l-.7-.3c-1.9-.8-2.7-1.7-2.7-3.2 0-2.2 1.8-3.6 4.5-3.6 1.8 0 3.1.6 3.8 1.9l-1.5 1c-.4-.7-1.1-1.1-2.1-1.1-1.1 0-1.7.5-1.7 1.3 0 .8.5 1.1 1.6 1.6l.7.3c2.1.9 2.9 1.8 2.9 3.4 0 2.3-1.8 3.7-4.8 3.7-2.2 0-3.7-.8-4.5-2.2l1.5-1.2zM7 8.3h6v1.8h-2.1v8.6H8.8v-8.6H6.7V8.3z"/>
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  PostgreSQL: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#4169E1">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm1.7-4.3c-.4.4-.9.7-1.7.9V14h-2v-1.1c-.8-.2-1.3-.5-1.7-.9-.4-.4-.6-.9-.6-1.5h2c0 .3.1.5.3.7.2.2.5.3.9.3s.7-.1.9-.3c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7-.2-.2-.6-.3-1.1-.5l-.6-.2c-.9-.3-1.5-.6-1.9-1-.4-.4-.6-.9-.6-1.5 0-.7.3-1.2.8-1.6.5-.4 1.2-.6 2.1-.6s1.6.2 2.1.6c.5.4.8.9.8 1.6h-2c0-.3-.1-.5-.3-.6-.2-.1-.5-.2-.8-.2s-.6.1-.8.2c-.2.1-.3.3-.3.5 0 .2.1.4.3.5.2.1.6.3 1.1.4l.6.2c.9.3 1.5.6 1.9 1 .4.4.6.9.6 1.6 0 .7-.2 1.2-.6 1.6z"/>
    </svg>
  ),
  Supabase: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#3ECF8E">
      <path d="M13.35 20.13c-.76.96-2.27.42-2.27-.81v-7.29H3.72c-1.11 0-1.73-1.28-1.04-2.14l7.97-9.82c.76-.96 2.27-.42 2.27.81v7.29h7.36c1.11 0 1.73 1.28 1.04 2.14l-7.97 9.82z"/>
    </svg>
  ),
  Python: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path fill="#3776AB" d="M11.87 2c-4.46 0-4.18 1.93-4.18 1.93l.01 2h4.25v.6H6.12S2 6.06 2 10.55c0 4.48 3.6 4.32 3.6 4.32h2.15v-3.03s-.12-3.6 3.55-3.6h3.58s3.43.05 3.43-3.32c0-3.37-2.98-2.92-2.98-2.92H11.87zm-1.2 1.24a.83.83 0 1 1 0 1.66.83.83 0 0 1 0-1.66z"/>
      <path fill="#FFD43B" d="M12.13 22c4.46 0 4.18-1.93 4.18-1.93l-.01-2h-4.25v-.6h5.83s4.12.47 4.12-4.02c0-4.48-3.6-4.32-3.6-4.32h-2.15v3.03s.12 3.6-3.55 3.6h-3.58s-3.43-.05-3.43 3.32c0 3.37 2.98 2.92 2.98 2.92h3.46zm1.2-1.24a.83.83 0 1 1 0-1.66.83.83 0 0 1 0 1.66z"/>
    </svg>
  ),
  pandas: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#150458">
      <rect x="3" y="3" width="4" height="18" rx="1" fill="#E70488"/>
      <rect x="10" y="7" width="4" height="10" rx="1" fill="#150458"/>
      <rect x="17" y="3" width="4" height="18" rx="1" fill="#00A3E0"/>
    </svg>
  ),
  "scikit-learn": () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#F7931E">
      <circle cx="8" cy="12" r="5" fill="#F7931E"/>
      <circle cx="16" cy="12" r="5" fill="#3499CD" opacity="0.8"/>
    </svg>
  ),
  Git: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.707 11.293l-9-9a.999.999 0 0 0-1.414 0l-9 9a.999.999 0 0 0 0 1.414l9 9c.39.39 1.023.39 1.414 0l9-9a.999.999 0 0 0 0-1.414zM12 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.354-5.854l-2.1 2.1a2.49 2.49 0 0 0-.754-.234v-3.024a1.5 1.5 0 1 1 1 0v2.246l1.854-1.854a.5.5 0 0 1 .707.707z"/>
    </svg>
  ),
  WordPress: () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#21759B">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1-4.75-1.56l3.52-9.63 3.56 9.61A8 8 0 0 1 12 20zm5.66-3.15l-2.43-7.23 1.7-1.12a7.9 7.9 0 0 1 1.73 8.35zm-11.32 0a7.9 7.9 0 0 1 1.73-8.35l1.7 1.12-2.43 7.23zM12 4a7.92 7.92 0 0 1 5.3 2.08l-2.8 7.64-2.5-6.8a.72.72 0 0 0-.68-.48.72.72 0 0 0-.68.48l-2.5 6.8-2.8-7.64A7.92 7.92 0 0 1 12 4z"/>
    </svg>
  ),
};

const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      cv: "CV PDF"
    },
    hero: {
      badge: "Lima · disponible",
      name: "Fernando Fernandez",
      role: "Full-Stack Developer · Backend y bases de datos",
      btnProjects: "Ver Proyectos",
      btnContact: "Contactar",
      sqlTab: "~/fernando/query.sql",
      sqlSelect: "proyecto, stack, estado",
      sqlFrom: "fernando.trabajo",
      sqlWhere: "funciona = true",
      sqlNote: "-- 3 filas",
      cols: ["proyecto", "stack", "estado"],
      rows: [
        ["MINISO POS", "Node, PostgreSQL", "demo en vivo"],
        ["Panel de pedidos", "React, Supabase", "operativo"],
        ["Green Selva", "WordPress, PHP", "en producción"],
      ],
    },
    mascot: "Revisé esta página dos veces. Si encuentras un bug, avísale a Fernando.",
    about: {
      title: "// SOBRE MÍ",
      bio: "Desarrollador Full Stack especializado en backend, bases de datos y la automatización de procesos manuales. Cuento con experiencia desarrollando sistemas POS de alta concurrencia, plataformas de despacho que eliminan la dependencia de mensajería tradicional y optimizaciones web avanzadas que elevan el PageSpeed de 22% a 60%. Busco aplicar esta experiencia en soluciones robustas de negocio.",
      expTitle: "// EXPERIENCIA LABORAL",
      exp: [
        {
          role: "Desarrollador web freelance · Green Selva S.A.C.",
          period: "Ene 2026",
          desc: "Rehice una web WordPress lenta: comprimí imágenes de más de 80 MB (-99% de peso), quité plugins que la frenaban y subí el puntaje de PageSpeed de 22% a 60%.",
          logoUrl: "/green-selva.jpg",
        },
        {
          role: "Administración y digitalización · V10 Auto Detailing SAC",
          period: "Abr 2023 – Mar 2024",
          desc: "Modelé la base de datos (SQL) para llevar el registro diario de servicios y pasé a sistema procesos que se hacían a mano.",
          logoUrl: "/v10.png",
        },
      ],
      eduTitle: "// FORMACIÓN Y CERTIFICACIONES",
      edu: [
        {
          role: "Ingeniería de Sistemas Computacionales",
          period: "2021 – Actualidad",
          desc: "Universidad Privada del Norte (UPN), Lima.",
          logoUrl: "/upn.jpg",
        },
        {
          role: "CCNA: Introducción a las Redes",
          period: "2026",
          desc: "Cisco Networking Academy, a través de la UPN.",
          logoUrl: "/cisco.png",
        },
      ],
      roleFooter: "Full-Stack Developer · Ingeniería de Sistemas, UPN"
    },
    projects: {
      category: "PORTFOLIO",
      title: "Proyectos destacados",
      btnCode: "Ver código",
      btnDemo: "Ver ↗",
    },
    stack: { title: "// STACK TECNOLÓGICO" },
    contact: {
      title: "// CONTACTO DIRECTO",
      heading: "¿Buscas automatizar procesos o integrar arquitecturas de datos escalables?",
      sub: "Establece una conexión directa para proyectos freelance, consultorías o vacantes de ingeniería de sistemas.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      cv: "Resume PDF"
    },
    hero: {
      badge: "Lima · available",
      name: "Fernando Fernandez",
      role: "Full-Stack Developer · Backend & databases",
      btnProjects: "View Projects",
      btnContact: "Contact Me",
      sqlTab: "~/fernando/query.sql",
      sqlSelect: "project, stack, status",
      sqlFrom: "fernando.work",
      sqlWhere: "it_works = true",
      sqlNote: "-- 3 rows",
      cols: ["project", "stack", "status"],
      rows: [
        ["MINISO POS", "Node, PostgreSQL", "live demo"],
        ["Order panel", "React, Supabase", "working"],
        ["Green Selva", "WordPress, PHP", "in production"],
      ],
    },
    mascot: "I checked this page twice. If you find a bug, tell Fernando.",
    about: {
      title: "// ABOUT ME",
      bio: "Full Stack Developer specialized in backend, databases, and manual process automation. I have experience developing high-concurrency POS systems, dispatch platforms that eliminate the reliance on traditional messaging, and advanced web optimizations that elevate PageSpeed from 22% to 60%. I am looking to apply this experience to robust business solutions.",
      expTitle: "// WORK EXPERIENCE",
      exp: [
        {
          role: "Freelance web developer · Green Selva S.A.C.",
          period: "Jan 2026",
          desc: "Rebuilt a slow WordPress site: compressed 80 MB+ images (-99% in weight), removed plugins that were slowing it down, and raised the PageSpeed score from 22% to 60%.",
          logoUrl: "green-selva.jpg",
        },
        {
          role: "Administration & digitalization · V10 Auto Detailing SAC",
          period: "Apr 2023 – Mar 2024",
          desc: "Modeled the (SQL) database to track daily services and moved processes that were done by hand into a system.",
          logoUrl: "/v10.png",
        },
      ],
      eduTitle: "// EDUCATION & CERTIFICATIONS",
      edu: [
        {
          role: "Computer Systems Engineering",
          period: "2021 – Present",
          desc: "Universidad Privada del Norte (UPN), Lima.",
          logoUrl: "/upn.jpg",
        },
        {
          role: "CCNA: Introduction to Networks",
          period: "2026",
          desc: "Cisco Networking Academy, through UPN.",
          logoUrl: "/cisco.png",
        },
      ],
      roleFooter: "Full-Stack Developer · Systems Engineering, UPN"
    },
    projects: {
      category: "PORTFOLIO",
      title: "Featured Projects",
      btnCode: "View code",
      btnDemo: "View ↗",
    },
    stack: { title: "// TECH STACK" },
    contact: {
      title: "// DIRECT CONTACT",
      heading: "Looking to automate processes or integrate scalable data architectures?",
      sub: "Establish a direct connection for freelance projects, consulting, or systems engineering opportunities.",
    },
  },
};

const projectsData = [
  {
    id: "miniso",
    title: "Punto de Venta MINISO (POS & Inventario)",
    highlights: [
      "Ventas concurrentes atómicas con PostgreSQL",
      "Control de acceso por rol (RBAC) con bcryptjs",
      "Seguridad activa con Row Level Security (RLS)",
      "Registro e historial de transacciones en tiempo real"
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "Supabase", "bcryptjs"],
    demoUrl: "https://miniso-web-omega.vercel.app",
    githubUrl: "https://github.com/fbjfernandez/miniso_web",
    image: "/miniso.png",
  },
  {
    id: "panel",
    title: "Panel de Pedidos e Importaciones",
    highlights: [
      "Gestión centralizada de pedidos B2B",
      "Gestión de comprobantes y permisos por rol",
      "Impresión de tickets térmicos de envío en 1 clic",
      "Interfaz reactiva integrada con Supabase"
    ],
    tech: ["React", "Vite", "Supabase", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://panel-pedidos-pi.vercel.app",
    githubUrl: "https://github.com/fbjfernandez/panel-pedidos",
    image: "/Panel-pedidos.png",
  },
  {
    id: "green",
    title: "Green Selva (Auditoría & Optimización)",
    highlights: [
      "Imágenes de más de 80 MB comprimidas: -99% de peso",
      "Plugins innecesarios fuera y web rehecha",
      "Errores 404 corregidos desde la configuración del hosting",
      "PageSpeed de 22% a 60%"
    ],
    tech: ["WordPress", "PHP", "WPO", "cPanel"],
    demoUrl: "https://sumaknature.com",
    githubUrl: "https://github.com/fbjfernandez/green-selva-web",
    image: "/sumak.png",
  },
];

const stackList = [
  { name: "Node.js" },
  { name: "Express" },
  { name: "PostgreSQL" },
  { name: "Supabase" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Python" },
  { name: "pandas" },
  { name: "scikit-learn" },
  { name: "Git" },
  { name: "WordPress" },
];

const CompanyLogo = ({ src, alt, fallbackIcon: FallbackIcon }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="h-10 w-10 shrink-0 rounded-lg border border-zinc-800 bg-zinc-950 p-1.5 flex items-center justify-center overflow-hidden">
      {!hasError && src ? (
        <img
          src={src}
          alt={alt || "Logo"}
          onError={() => setHasError(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <FallbackIcon className="h-5 w-5 text-cyan-400" />
      )}
    </div>
  );
};

const MascotWidget = ({ text }) => {
  const [open, setOpen] = useState(true);

  return (
    <aside aria-label="Mascota interactiva" className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      {open && (
        <div className="mb-2 w-52 sm:w-60 rounded-xl border border-cyan-500/40 bg-zinc-950/95 p-3 font-mono text-[11px] text-zinc-300 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5 mb-2 text-[10px] text-cyan-400 font-bold">
            <span className="flex items-center gap-1">
              <Bot className="h-3.5 w-3.5 text-cyan-400" />
              <span>CODY // CC-2224</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-zinc-500 hover:text-cyan-400 transition-colors p-0.5"
            >
              ✕
            </button>
          </div>
          <p className="leading-tight text-zinc-300">
            "{text}"
          </p>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-cyan-400 bg-zinc-950 p-1 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <img
          src="https://github.com/fbjfernandez.png"
          alt="Clone Trooper Cody Mascot"
          className="h-full w-full object-cover rounded-full filter contrast-125"
        />
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-cyan-400 border-2 border-zinc-950 animate-pulse" />
      </button>
    </aside>
  );
};

const HeroSection = ({ t }) => {
  if (!t) return null;
  return (
    <section id="inicio" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-24 pb-12 px-4 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
        <div className="space-y-6 text-left order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-mono text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{t?.badge}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              {t?.name}
            </span>
          </h1>

          <div className="space-y-2">
            <p className="font-mono text-sm md:text-base font-bold text-zinc-300">
              {t?.role}
            </p>
            <p className="font-mono text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
              {t?.tagline}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-3 font-mono text-xs">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-5 py-2.5 font-bold text-zinc-950 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>{t?.btnProjects || "Ver Proyectos"}</span>
              <ChevronDown className="h-4 w-4" />
            </a>
            <a
              href="mailto:fbjfernandez8103@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-zinc-200 hover:border-cyan-400 transition-all"
            >
              <span>{t?.btnContact || "Contactar"}</span>
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-sm shadow-2xl overflow-hidden font-mono text-xs sm:text-sm order-2 transform transition-transform hover:scale-[1.01] duration-300">
          <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 text-zinc-500 text-xs">{t?.sqlTab || "~/fernando/query.sql"}</span>
            </div>
            <span className="text-[10px] text-cyan-400 font-semibold tracking-wider">POSTGRESQL</span>
          </div>

          <div className="p-4 sm:p-5 text-zinc-300 leading-relaxed overflow-x-auto">
            <span className="text-cyan-400 font-bold">SELECT</span> {t?.sqlSelect} <br />
            <span className="text-cyan-400 font-bold">FROM</span> {t?.sqlFrom} <br />
            <span className="text-cyan-400 font-bold">WHERE</span> {t?.sqlWhere};<br /><br />
            <span className="text-cyan-500/70 opacity-80">{t?.sqlNote}</span><br />
            <table className="w-full mt-3 border-collapse border border-zinc-800/80 text-[11px] sm:text-xs">
              <thead>
                <tr className="border-b border-zinc-800/80 bg-zinc-900/40 text-left text-cyan-400">
                  {t?.cols?.map((col, i) => (
                    <th key={col} className={`p-2.5 font-medium ${i > 0 ? "border-l border-zinc-800/80" : ""}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t?.rows?.map((row) => (
                  <tr key={row[0]} className="border-b border-zinc-800/60 last:border-b-0 hover:bg-zinc-900/30 transition-colors">
                    {row?.map((cell, i) => (
                      <td
                        key={i}
                        className={`p-2.5 ${i > 0 ? "border-l border-zinc-800/80" : ""} ${i === 2 ? "text-cyan-400 font-bold" : "text-zinc-300"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, t }) => {
  if (!project) return null;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/60 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-xl">
      <div className="relative h-52 sm:h-56 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">
        <img
          src={project.image || "https://images.unsplash.com/photo-1556742049-0a67238a04ed?auto=format&fit=crop&w=800&q=80"}
          alt={project.title || "Proyecto"}
          className="h-full w-full object-cover opacity-80 transition-all duration-500 hover:scale-105 hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {project.title}
          </h3>

          {Array.isArray(project.highlights) && project.highlights.length > 0 && (
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-4 pt-2 border-t border-zinc-800/60">
          {Array.isArray(project.tech) && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="rounded-md bg-zinc-950 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-zinc-300 border border-zinc-800"
                >
                  {techItem}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 border border-zinc-700/80 px-4 py-2 text-zinc-200 hover:bg-zinc-800 hover:text-cyan-400 transition-all font-medium"
              >
                <Github className="h-4 w-4" />
                <span>{t?.projects?.btnCode || "Ver código"}</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-400 px-4 py-2 text-zinc-950 font-bold hover:bg-cyan-300 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{t?.projects?.btnDemo || "Ver ↗"}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const TechCard = ({ item }) => {
  if (!item?.name) return null;
  const IconComp = TechIcons[item.name] || TechIcons.Git;
  return (
    <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 hover:border-cyan-500/50 transition-all group">
      <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-center shrink-0 group-hover:border-zinc-700 transition-colors">
        <IconComp />
      </div>
      <span className="font-mono text-xs text-zinc-200 font-medium truncate">{item.name}</span>
    </div>
  );
};

export default function Portfolio() {
  const [lang, setLang] = useState("es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang] || translations.es;

  const navKeys = ["about", "projects", "contact"];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-cyan-500/30">
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-3.5 text-xs font-mono tracking-widest text-zinc-400">
          <a href="#inicio" className="text-sm font-bold text-white tracking-widest hover:text-cyan-400 transition-colors">
            ~/FERNANDO.DEV
          </a>

          <ul className="hidden md:flex gap-8">
            {navKeys.map((key) => (
              <li key={key}>
                <a href={`#${key}`} className="hover:text-cyan-400 transition-colors uppercase font-medium">
                  {t?.nav?.[key] || key}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="inline-flex items-center gap-1 rounded-md border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[11px] font-mono text-zinc-300 hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-cyan-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <a
              href="/CV_Fernando_Fernandez_Navarrete.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-cyan-500/50 bg-cyan-500/10 px-3 py-1.5 text-cyan-400 hover:bg-cyan-400 hover:text-zinc-950 transition-all font-mono text-xs font-bold"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{t?.nav?.cv || "CV PDF"}</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-6 py-4 space-y-3 font-mono text-xs uppercase tracking-widest text-zinc-300">
            {navKeys.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 hover:text-cyan-400"
              >
                {t?.nav?.[key] || key}
              </a>
            ))}
            <a
              href="/CV_Fernando_Fernandez_Navarrete.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 text-cyan-400 py-1.5 font-bold"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{t?.nav?.cv || "CV PDF"}</span>
            </a>
          </div>
        )}
      </header>

      <HeroSection t={t?.hero} />

      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pb-24 space-y-16 sm:space-y-20">
        <section id="about" className="scroll-mt-24">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-6 font-semibold">
            {t?.about?.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-12 items-start">
            <div className="md:col-span-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 text-center space-y-3">
              <div className="h-36 w-36 sm:h-40 sm:w-40 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/40 p-1 bg-zinc-950 flex items-center justify-center">
                <img
                  src="/me.jpeg"
                  alt="Fernando Fernandez Navarrete"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <div>
                <h3 className="font-bold text-sm text-white">Fernando Fernandez N.</h3>
                <p className="font-mono text-[11px] text-cyan-400">Full-Stack Developer</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6">
              <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-300">
                {t?.about?.bio}
              </p>

              <div className="space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                  {t?.about?.expTitle}
                </h3>
                <div className="space-y-4">
                  {(t?.about?.exp || []).map((job) => (
                    <div key={job.role} className="flex gap-3.5 items-start">
                      <CompanyLogo src={job.logoUrl} alt={job.role} fallbackIcon={Building2} />
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-sm text-white">{job.role}</h4>
                        <span className="font-mono text-[11px] text-zinc-500 block">{job.period}</span>
                        <p className="text-xs font-light text-zinc-400 leading-relaxed pt-0.5">{job.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                  {t?.about?.eduTitle}
                </h3>
                <div className="space-y-4">
                  {(t?.about?.edu || []).map((item) => (
                    <div key={item.role} className="flex gap-3.5 items-start">
                      <CompanyLogo src={item.logoUrl} alt={item.role} fallbackIcon={GraduationCap} />
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-sm text-white">{item.role}</h4>
                        <span className="font-mono text-[11px] text-zinc-500 block">{item.period}</span>
                        <p className="text-xs font-light text-zinc-400 leading-relaxed pt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-zinc-900 pt-12 sm:pt-16 scroll-mt-24">
          <div className="mb-8 space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-400 font-semibold block">
              {t?.projects?.category || "PORTFOLIO"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t?.projects?.title || "Proyectos destacados"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {Array.isArray(projectsData) && projectsData.map((p) => (
              <ProjectCard key={p.id} project={p} t={t} />
            ))}
          </div>
        </section>

        <section id="stack" className="border-t border-zinc-900 pt-12 sm:pt-16 scroll-mt-24">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-8 font-semibold">
            {t?.stack?.title}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3">
            {Array.isArray(stackList) && stackList.map((item) => (
              <TechCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-900 pt-12 sm:pt-16 text-center scroll-mt-24">
          <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3 font-semibold">
            {t?.contact?.title}
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            {t?.contact?.heading}
          </h3>
          <p className="mx-auto max-w-lg text-xs font-light text-zinc-400 mb-8">
            {t?.contact?.sub}
          </p>

          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 font-mono text-xs">
            <a
              href="mailto:fbjfernandez8103@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-cyan-500/50 bg-cyan-500/10 px-4 sm:px-5 py-2.5 text-cyan-400 hover:bg-cyan-400 hover:text-zinc-950 transition-all font-bold"
            >
              <Mail className="h-4 w-4" />
              <span>fbjfernandez8103@gmail.com</span>
            </a>
            <a
              href="https://github.com/fbjfernandez"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 sm:px-5 py-2.5 text-zinc-200 hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-fernandez-navarrete"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 sm:px-5 py-2.5 text-zinc-200 hover:border-cyan-400 hover:text-cyan-400 transition-all"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      <MascotWidget text={t?.mascot} />

      <footer className="border-t border-zinc-900 py-6 text-center font-mono text-[11px] text-zinc-600">
        © {new Date().getFullYear()} Fernando Fernandez Navarrete · {t?.about?.roleFooter}
      </footer>
    </div>
  );
}