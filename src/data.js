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
import leadpageViolao from "./images/leadpage-violao.png";
import ecommerceImg from "./images/ecommerce.png";
import clinicaImg from "./images/Clínica.png";
import cafeImg from "./images/Cafe.png";

// Atualize manualmente sempre que abrir um novo túnel local para o Portal do Cliente
// (ex: cloudflared tunnel --url http://localhost:5174) — a URL muda a cada execução.
export const clientPortalUrl = "https://sam-honolulu-elimination-toll.trycloudflare.com";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  // { label: "Depoimentos", href: "#depoimentos" },
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
    img: clinicaImg,
    title: "Clínica Odontológica",
    desc: "Ajuda a clínica a captar pacientes e fechar agendamentos direto pelo site, com integração via WhatsApp.",
    tags: ["React", "Tailwind", "WhatsApp API"],
    grad: "from-emerald-800 to-emerald-500",
    link: "https://studiocastro.github.io/ClinicaOdontologica/",
    code: "https://github.com/StudioCastro/ClinicaOdontologica",
  },
  {
    badge: "Landing Page",
    img: leadpageViolao,
    title: "LeadPage — Aulas de Violão",
    desc: "Converte visitantes em alunos: galeria, depoimentos e formulário de agendamento guiam o lead até a matrícula.",
    tags: ["React", "Vite", "CSS"],
    grad: "from-neutral-900 to-red-700",
    link: "https://studiocastro.github.io/LeadPage/",
    code: "https://github.com/StudioCastro/StudioCastro",
  },
  {
    badge: "Site institucional",
    img: cafeImg,
    title: "Café da Vila",
    desc: "Facilita a vida do cliente: cardápio online e localização interativa antes mesmo de visitar a cafeteria.",
    tags: ["React", "Vite", "CSS Modules"],
    grad: "from-amber-900 to-amber-700",
    link: "https://studiocastro.github.io/Cafe/",
    code: "https://github.com/StudioCastro/Cafe",
  },
  {
    badge: "E-commerce",
    img: ecommerceImg,
    title: "Ecommerce",
    desc: "Vende online de ponta a ponta — carrinho, pagamentos e painel administrativo para gerenciar pedidos e estoque.",
    tags: ["React", "Node.js", "MongoDB"],
    grad: "from-blue-950 to-blue-700",
    link: "https://studiocastro.github.io/Ecommerce/",
    code: "https://github.com/StudioCastro/Ecommerce",
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

export const faqs = [
  {
    question: "Quanto custa um site?",
    answer:
      "O investimento varia conforme o tipo de projeto, funcionalidades e nível de personalização. Após entendermos sua necessidade, elaboramos um orçamento detalhado, transparente e sem compromisso.",
  },
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "O prazo depende da complexidade do projeto. Em média, um site institucional é entregue entre 7 e 20 dias úteis, enquanto sistemas e e-commerces podem demandar mais tempo.",
  },
  {
    question: "Meu site será responsivo e aparecerá no Google?",
    answer:
      "Sim. Todos os projetos são desenvolvidos com design responsivo, garantindo uma ótima experiência em computadores, smartphones e tablets. Além disso, aplicamos técnicas de SEO desde o desenvolvimento — estrutura otimizada, desempenho e acessibilidade — para aumentar a visibilidade do seu site nos mecanismos de busca.",
  },
  {
    question: "Vocês oferecem suporte após a entrega do site?",
    answer:
      "Sim. Após a publicação do projeto, oferecemos suporte para correções, orientações e, se desejar, planos de manutenção para manter o site sempre atualizado, seguro e com alto desempenho.",
  },
  {
    question: "O site será seguro?",
    answer:
      "Sim. Seguimos as melhores práticas de segurança, incluindo HTTPS, validação de dados, proteção contra ataques comuns, otimização de desempenho e atualizações constantes para garantir a confiabilidade do sistema.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos PIX, cartão de crédito, cartão de débito e transferência bancária. Também oferecemos opções de parcelamento, conforme o projeto.",
  },
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
