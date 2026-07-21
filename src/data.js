import {
  Monitor,
  Rocket,
  ShoppingCart,
  Settings,
  RefreshCw,
  TrendingUp,
  MessageCircle,
  PenLine,
  Code,
  Eye,
  Headphones,
} from "lucide-react";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const services = [
  {
    icon: Monitor,
    title: "Sites Institucionais",
    desc: "Sites profissionais para apresentar sua empresa e conquistar clientes.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "Páginas estratégicas para gerar leads e aumentar conversões.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Lojas virtuais completas, seguras e integradas com os principais meios de pagamento.",
  },
  {
    icon: Settings,
    title: "Sistemas Web",
    desc: "Desenvolvimento de sistemas personalizados para automatizar seu negócio.",
  },
  {
    icon: RefreshCw,
    title: "Manutenção",
    desc: "Atualizações, correções e melhorias para manter seu site sempre rápido e seguro.",
  },
  {
    icon: TrendingUp,
    title: "Otimização (SEO)",
    desc: "Seu site mais visível, bem posicionado e pronto para o Google.",
  },
];

export const projects = [
  {
    badge: "Site institucional",
    title: "Clínica Odontológica",
    desc: "Site moderno e responsivo para clínica com agendamento online.",
    tags: ["React", "Tailwind", "WhatsApp API"],
    grad: "from-emerald-800 to-emerald-500",
  },
  {
    badge: "Landing Page",
    title: "Estética Automotiva",
    desc: "Landing page para captação de leads e agendamento de serviços.",
    tags: ["HTML", "CSS", "JavaScript"],
    grad: "from-neutral-900 to-neutral-600",
  },
  {
    badge: "Site institucional",
    title: "Café da Vila",
    desc: "Site institucional com cardápio online e localização interativa.",
    tags: ["React", "Vite", "CSS Modules"],
    grad: "from-amber-900 to-amber-700",
  },
  {
    badge: "E-commerce",
    title: "Loja Tech",
    desc: "Loja virtual completa com carrinho, pagamentos e painel administrativo.",
    tags: ["React", "Node.js", "MongoDB"],
    grad: "from-blue-950 to-blue-700",
  },
];

export const steps = [
  { icon: MessageCircle, title: "Briefing", desc: "Entendo suas necessidades e objetivos." },
  { icon: PenLine, title: "Planejamento", desc: "Defino a estrutura, prazos e melhores tecnologias." },
  { icon: Code, title: "Desenvolvimento", desc: "Transformo o projeto em um site rápido e funcional." },
  { icon: Eye, title: "Revisões", desc: "Você avalia e pede ajustes se necessário." },
  { icon: Rocket, title: "Entrega", desc: "Publico seu site com todos os testes realizados." },
  { icon: Headphones, title: "Suporte", desc: "Ofereço suporte após a entrega para o que precisar." },
];

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

export const techs = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

export const testimonials = [
  {
    text: "Leandro entregou nosso site antes do prazo e com uma qualidade incrível. Super recomendo!",
    name: "Juliana Mendes",
    role: "Dona da JLM Odontologia",
  },
  {
    text: "Ótima comunicação, entendeu exatamente o que precisávamos e o resultado foi excelente!",
    name: "Rafael Souza",
    role: "Proprietário da Estética Prime",
  },
  {
    text: "Profissional dedicado, atencioso e muito competente. Voltaremos a trabalhar juntos!",
    name: "Carolina Lima",
    role: "CEO da Lima Consultoria",
  },
];
