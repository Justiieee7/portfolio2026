export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  outcomes: string[];
  role: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "cisco-homepage",
    title: "AppDynamics (Cisco)",
    subtitle: "Observability Homepage Redesign",
    category: "B2B SaaS · Enterprise Productivity",
    year: "2022–24",
    description:
      "Directed a comprehensive redesign of Cisco's Observability platform homepage to enhance usability and feature discoverability for enterprise users. Led a 15-person cross-functional team through user research, competitive benchmarking, and iterative delivery.",
    outcomes: [
      "30% increase in feature adoption",
      "25% increase in homepage engagement",
      "Reduced setup and troubleshooting time via contextual help widgets",
    ],
    role: "Product Manager",
    link: "https://shenyuewu.myportfolio.com/cisco-homepage",
  },
];
