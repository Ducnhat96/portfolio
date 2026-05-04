import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import {
  ApiIcon,
  AiChat01Icon,
  Blockchain01Icon,
  ConversationIcon,
  CssThreeIcon,
  CrownIcon,
  EyeIcon,
  GithubIcon,
  HtmlFiveIcon,
  JavaScriptIcon,
  LaptopPhoneSyncIcon,
  LayoutGridIcon,
  PresentationLineChartIcon,
  PuzzleIcon,
  StripeIcon,
  TailwindcssIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Astro } from "@/components/ui/svgs/astro";
import { Vite } from "@/components/ui/svgs/vite";
import { Socketio } from "@/components/ui/svgs/socketio";
import { Firebase } from "@/components/ui/svgs/firebase";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Vercel } from "@/components/ui/svgs/vercel";
import { Railway } from "@/components/ui/svgs/railway";
import { createHugeiconsSkillIcon } from "@/components/ui/hugeicons-skill-icon";

const GithubSkillIcon = createHugeiconsSkillIcon(GithubIcon, "#181717");
const JavascriptSkillIcon = createHugeiconsSkillIcon(JavaScriptIcon, "#F7DF1E");
const Html5SkillIcon = createHugeiconsSkillIcon(HtmlFiveIcon, "#E34F26");
const CssSkillIcon = createHugeiconsSkillIcon(CssThreeIcon, "#1572B6");
const TailwindCssSkillIcon = createHugeiconsSkillIcon(TailwindcssIcon, "#06B6D4");
const ShadcnUiSkillIcon = createHugeiconsSkillIcon(LayoutGridIcon, "#000000");
const RechartsSkillIcon = createHugeiconsSkillIcon(PresentationLineChartIcon, "#8884D8");
const StripeSkillIcon = createHugeiconsSkillIcon(StripeIcon, "#635BFF");
const BlockchainSkillIcon = createHugeiconsSkillIcon(Blockchain01Icon, "#627EEA");
const Web3DappsSkillIcon = createHugeiconsSkillIcon(Blockchain01Icon, "#3B82F6");
const ResponsiveSkillIcon = createHugeiconsSkillIcon(LaptopPhoneSyncIcon, "#38BDF8");
const RestfulApisSkillIcon = createHugeiconsSkillIcon(ApiIcon, "#009688");
const ProblemSolvingSkillIcon = createHugeiconsSkillIcon(PuzzleIcon, "#F59E0B");
const AttentionToDetailSkillIcon = createHugeiconsSkillIcon(EyeIcon, "#8B5CF6");
const CommunicationSkillIcon = createHugeiconsSkillIcon(ConversationIcon, "#0EA5E9");
const TeamLeadershipSkillIcon = createHugeiconsSkillIcon(CrownIcon, "#F59E0B");
const TeamCollaborationSkillIcon = createHugeiconsSkillIcon(UserMultipleIcon, "#10B981");
const AiAssistantSkillIcon = createHugeiconsSkillIcon(AiChat01Icon, "#7C3AED");

export const DATA = {
  browserTitle: "Portfolio | Nhat D. Pham | Front-end Developer",
  name: "Nhat D. Pham",
  initials: "DMJ",
  url: "https://ducnhat96.io",
  location: "Da Nang City, VN",
  locationLink: "https://www.google.com/maps/place/danang",
  description:
    "A front-end developer who turns ideas into polished, accessible, and performance-driven web experiences.",
  summary:
    "I'm a front-end developer passionate about creating interfaces that feel smooth, purposeful, and memorable. My work blends clean code, thoughtful UX, responsive design, and attention to detail to transform product ideas into reliable web experiences. I enjoy working with modern technologies like React, Vite, Astro, Next.js, TypeScript, and design systems, while continuously refining performance, accessibility, and usability. Beyond shipping features, I care about understanding the problem behind each screen, collaborating with clear communication, and building products that not only look good but also solve real user needs.",
  avatarUrl: "about-me/me.avif",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Astro", icon: Astro },
    { name: "Vite", icon: Vite },
    { name: "Typescript", icon: Typescript },
    { name: "Javascript", icon: JavascriptSkillIcon },
    { name: "HTML5", icon: Html5SkillIcon },
    { name: "CSS3", icon: CssSkillIcon },
    { name: "Tailwind CSS", icon: TailwindCssSkillIcon },
    { name: "Shadcn UI", icon: ShadcnUiSkillIcon },
    { name: "Recharts", icon: RechartsSkillIcon },
    { name: "Stripe", icon: StripeSkillIcon },
    { name: "Socket.io", icon: Socketio },
    { name: "Firebase", icon: Firebase },
    { name: "Supabase", icon: Supabase },
    { name: "Vercel", icon: Vercel },
    { name: "Railway", icon: Railway },
    { name: "Blockchain UI", icon: BlockchainSkillIcon },
    { name: "Web3 DApps", icon: Web3DappsSkillIcon },
    { name: "Github", icon: GithubSkillIcon },
    { name: "Responsive design", icon: ResponsiveSkillIcon },
    { name: "RESTful APIs", icon: RestfulApisSkillIcon },
    { name: "Problem-solving", icon: ProblemSolvingSkillIcon },
    { name: "AI assistant", icon: AiAssistantSkillIcon },
    { name: "Attention to detail", icon: AttentionToDetailSkillIcon },
    { name: "Communication", icon: CommunicationSkillIcon },
    { name: "Team leadership", icon: TeamLeadershipSkillIcon },
    { name: "Team collaboration", icon: TeamCollaborationSkillIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  services: [
    {
      title: "Responsive & Mobile Friendly Design",
      description:
        "Build interfaces that work smoothly across mobile, tablet, and desktop with mobile-first layouts and cross-browser compatibility.",
      icon: "Smartphone",
    },
    {
      title: "UI / UX Implementation",
      description:
        "Translate product ideas and visual designs into clean, accessible, and user-centered web interfaces with strong attention to detail.",
      icon: "Code2",
    },
    {
      title: "Performance Optimization",
      description:
        "Improve loading speed, rendering performance, image delivery, and Core Web Vitals so every interaction feels fast and reliable.",
      icon: "Gauge",
    },
    {
      title: "API Integration",
      description:
        "Connect front-end applications with REST APIs, realtime services, authentication flows, and external platforms through stable data handling.",
      icon: "PlugZap",
    },
    {
      title: "Front End Testing",
      description:
        "Test components, user flows, edge cases, and responsive behavior to reduce regressions and keep product quality consistent.",
      icon: "TestTube2",
    },
    {
      title: "Website Maintenance & Updates",
      description:
        "Maintain, refine, and improve existing websites with feature updates, bug fixes, dependency upgrades, and UI polish.",
      icon: "LifeBuoy",
    },
  ],
  contact: {
    email: "phamducnhat96bkhn@gmail.com",
    tel: "+84396899593",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ducnhat96",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/duc-nhat-dmj",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/PNhat19778",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@phamucnhat7706",
        icon: Icons.youtube,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Avacus CC",
      href: "https://avacus.cc",
      location: "Da Nang City, Vietnam",
      title: "Software Engineer",
      logoUrl: "/logos/logo-avacus.png",
      start: "April 2023",
      end: "Present",
      description:
        "Developed the Avacus Web3 DApps, focusing on secure social features that let users connect, chat with friends, share NFTs, and transfer crypto assets in one place. Built responsive UI and clear product sections to present the app experience smoothly.",
    },
    {
      company: "Wakumo VietNam",
      href: "https://wakumo.vn",
      location: "Da Nang City, Vietnam",
      title: "Software Engineer",
      logoUrl: "/logos/logo-wakumo.png",
      start: "April 2023",
      end: "Present",
      description:
        "Developed web products at an R&D company focused on Blockchain, Microservices, Machine Learning, and Mobile Applications. Built user-friendly interfaces for high-quality IT products with a focus on usability, performance, and security.",
    },
    {
      company: "VietConnect.us",
      href: "https://www.vietconnect.us",
      location: "San Francisco, California, USA",
      title: "Software Engineer (Freelancer)",
      logoUrl: "/logos/logo-vietconnect.png",
      start: "April 2024",
      end: "October 2025",
      description:
        "Developed VietConnect job listing features for the Vietnamese community in the United States. Built interfaces for browsing job posts, viewing details, filtering listings, and posting recruitment content with a clear and easy-to-use user experience.",
    },
    {
      company: "BIG Group Holdings",
      href: "https://biggroup.vn",
      location: "Ho Chi Minh City, Vietnam",
      title: "Software Engineer (Freelancer)",
      logoUrl: "/logos/logo-biggroup.jpg",
      start: "June 2023",
      end: "March 2024",
      description:
        "Developed the Big Group Holdings website for a multi-sector business focused on commercial real estate, trade, finance, technology, events, and agriculture. Built responsive pages to present company information, business fields, development history, leadership, and awards clearly.",
    },
    {
      company: "VMO Group",
      href: "https://vmogroup.com",
      location: "Hanoi City, Vietnam",
      title: "Software Engineer",
      logoUrl: "/logos/logo-vmo.png",
      start: "January 2021",
      end: "March 2023",
      description:
        "Developed outsourcing web and mobile app projects for Asian and American markets, covering healthcare, logistics, social networking, eKYC, and other business domains.",
    },
    {
      company: "Luci.vn",
      href: "https://luci.vn",
      location: "Hanoi City, Vietnam",
      title: "Software Engineer",
      logoUrl: "/logos/logo-luci.png",
      start: "August 2020",
      end: "April 2021",
      description:
        "Developed and maintained smart urban management software for residential communities. Built web interfaces to help manage resident services, facilities, communication, and daily operations more efficiently.",
    },
    {
      company: "Westay.vn",
      href: "https://www.facebook.com/westay.vn",
      location: "Hanoi City, Vietnam",
      title: "Software Engineer",
      logoUrl: "/logos/logo-westay.jpg",
      start: "May 2019",
      end: "August 2020",
      description:
        "Developed a homestay booking platform for Vietnamese users, inspired by Airbnb and Booking.com. Built user-facing features for browsing accommodations, viewing property details, checking availability, and making reservations with a focus on responsive UI, clear booking flows, and a smooth local user experience.",
    },
  ],
  education: [
    {
      school: "Hanoi University of Science and Technology",
      href: "https://hust.edu.vn/en",
      degree: "Engineer's Degree",
      logoUrl: "/logos/logo-hust.jpeg",
      start: "August 2014",
      end: "March 2019",
    },
    {
      school: "TOEIC Listening & Reading",
      href: "https://iigvietnam.com/toeic-test",
      degree: "800/990",
      logoUrl: "/logos/logo-IIG.png",
      start: "April 2026",
      end: "April 2027",
    },
  ],
  projects: [
    {
      title: "Secure Chat - App",
      href: "https://app.avacus.cc/secure-chat",
      dates: "April 2023",
      active: true,
      description:
        "Connect and chat with friends securely - send messages, share NFTs, and transfer crypto assets effortlessly in one place.",
      technologies: [
        "React",
        "Vite",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
        "Socket.io",
        "Web3 DApps",
        "Web3 Auth",
        "Wagmi",
        "Viem",
        "Smart-contract",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.avacus.cc/secure-chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/secure-chat.avif",
    },
    {
      title: "Avacus - Landing Page",
      href: "https://avacus.cc",
      dates: "October 2025",
      active: true,
      description:
        "Developed the Avacus landing page to showcase its Web3 social app, highlighting secure chat, NFT sharing, crypto transfers, and wallet-based user experiences through a polished, responsive interface.",
      technologies: [
        "Astro",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
        "I18next",
        "Lottie-web",
      ],
      links: [
        {
          type: "Website",
          href: "https://avacus.cc",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/avacus-lp.png",
    },
    {
      title: "DeBingo - Game",
      href: "https://v2.debingo.app",
      dates: "August 2024",
      active: true,
      description:
        "Classic Bingo on blockchain world. Play, compete, and win lots of attractive crypto rewards.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Ethers.js",
        "Web3 DApps",
        "Socket.io",
        "Smart-contract",
        "NFT",
        "Coin",
        "Viem",
        "Wagmi",
      ],
      links: [
        {
          type: "Game",
          href: "https://v2.debingo.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/debingo.png",
    },
    {
      title: "Wakumo VietNam",
      href: "https://wakumo.vn",
      dates: "June 2023",
      active: true,
      description:
        "We bring end-to-end solutions to facilitate your entry and engage with the decentralized web, incorporating blockchain and Web3 technologies.",
      technologies: ["React", "Next.js", "Typescript", "TailwindCSS", "Framer-motion"],
      links: [
        {
          type: "Website",
          href: "https://wakumo.vn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/wakumo.png",
    },
    {
      title: "VietConnect US",
      href: "https://www.vietconnect.us",
      dates: "June 2025",
      active: true,
      description:
        "A free classifieds and job search site for Vietnamese people in the US - Jobs, housing, business transfers, classified ads.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
        "React-query",
        "Framer-motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.vietconnect.us",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/vietconnect.png",
    },
    {
      title: "SNS Audience",
      href: "https://avacus.cc/audience",
      dates: "December 2025",
      active: true,
      description:
        "Subscription-powered Party chat rooms let you deepen fan relationships while monetizing on-chain. No middlemen. Your rules, your pricing.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
        "Wagmi",
        "Socket.io",
        "React-query",
        "Framer-motion",
        "Blockchain",
        "Smart-contract",
      ],
      links: [
        {
          type: "Website",
          href: "https://avacus.cc/audience",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/audience.avif",
    },
  ],
  internationalExperiences: [
    {
      title: "VietConnect.us",
      dates: "April 2024 - October 2025",
      location: "San Francisco, California, USA",
      image: "/logos/logo-vietconnect.png",
      description:
        "Worked with a US-based partner to build job listing and classified features for the Vietnamese community in America, focusing on clear browsing flows, posting experiences, and responsive user interfaces.",
      href: "https://www.vietconnect.us",
    },
    {
      title: "Wakumo VietNam",
      dates: "April 2023 - Present",
      location: "Japan-connected R&D products",
      image: "/logos/logo-wakumo.png",
      description:
        "Built user-friendly interfaces for R&D products involving Blockchain, Microservices, Machine Learning, and Mobile Applications, with attention to usability, performance, and secure product experiences.",
      href: "https://wakumo.vn",
    },
    {
      title: "Avacus CC",
      dates: "April 2023 - Present",
      location: "Global Web3 product collaboration",
      image: "/logos/logo-avacus.png",
      description:
        "Developed Web3 DApp experiences for secure chat, NFT sharing, and crypto transfers, supporting product communication through polished, responsive interfaces for international users.",
      href: "https://avacus.cc",
    },
    {
      title: "VMO Group",
      dates: "January 2021 - March 2023",
      location: "Asian and American markets",
      image: "/logos/logo-vmo.png",
      description:
        "Contributed to outsourcing projects for international clients across healthcare, logistics, social networking, eKYC, and other business domains, collaborating with distributed teams to deliver reliable web and mobile products.",
      href: "https://vmogroup.com",
    },
  ],
} as const;
