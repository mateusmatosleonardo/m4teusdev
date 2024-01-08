import { type IExperience } from "./types";

import arkos from "../../assets/arkos.jpeg";
import barato from "../../assets/barato_coletivo_logo.jpeg";
import move_mais from "../../assets/move_mais_logo.jpeg";
import spott from "../../assets/evspott_logo.jpeg";

export const list: IExperience[] = [
  {
    company: "Arkos",
    logo: arkos,
    office: "Desenvolvedor Front-end",
    description:
      "A Arkos marcou o início da minha trajetória profissional, sendo a primeira empresa em que atuei. Guardo um apreço especial pela organização e por todos os colegas com os quais colaborei durante esse período. Desempenhei o cargo de Desenvolvedor Front-End Júnior, atuando em atividades como: desenvolvimento e integração de aplicativos móveis e web sites, manutenção e aprimoramento de softwares existentes, e colaboração em equipes multidisciplinares para entrega de projetos de alta qualidade.",
    technologiesUsed: ["React", "Next.js", "React Native", "TypeScript"],
    date: "2021 - 2022",
  },
  {
    company: "Barato Coletivo",
    logo: barato,
    office: "Desenvolvedor Front-end",
    description:
      "Responsável pela concepção e implementação de novas features no aplicativo Barato Coletivo, focadas na elevação da experiência do usuário e na otimização de performance do aplicativo. Criação do sistema administrativo de parceiros do Barato Coletivo, simplificando processos internos e fortalecendo as relações com os stakeholders. Gerenciamento eficiente da manutenção e melhoria contínua dos sistemas existentes, garantindo estabilidade operacional e identificando oportunidades para aprimoramentos constantes.",
    technologiesUsed: ["React", "Next.js", "React Native", "TypeScript"],
    date: "2023 - atualmente",
  },
  {
    company: "Move mais",
    logo: move_mais,
    office: "Desenvolvedor Mobile | React Native",
    description:
      "Fui encarregado de desenvolver, de forma singular, o novo aplicativo da Move Mais, empresa de destaque no meio de pagamento eletrônico de pedágio, presente em todos os estados do Brasil e oferecendo soluções específicas para pessoas físicas e jurídicas. Neste projeto, fui responsável por criar um aplicativo eficiente, performático e intuitivo, elevando a experiência de pagamento eletrônico de pedágio para os usuários da Move Mais.",
    technologiesUsed: ["React Native", "Expo", "TypeScript"],
    date: "2023 - atualmente",
  },
  {
    company: "Spott",
    logo: spott,
    office: "Desenvolvedor Front-end",
    description:
      "Encarregado de aprimorar continuamente o desempenho do aplicativo Spott, meu papel central é garantir sua estabilidade e proporcionar uma experiência ininterrupta aos usuários. Atuando no desenvolvimento do CMS 2.0 da Spott, desempenhando uma função vital em sua concepção e evolução. A gestão eficiente do CMS é minha responsabilidade, assegurando operações fluidas e integração perfeita com a API e com o aplicativo. Participo ativamente da implementação de melhorias, desde a criação de novas funcionalidades até otimizações de desempenho. Contribuo para a eficiência operacional aplicando metodologias ágeis, como o Kanban, garantindo abordagens organizadas no desenvolvimento de projetos.",
    technologiesUsed: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
    ],
    date: "2023 - atualmente",
  },
];
