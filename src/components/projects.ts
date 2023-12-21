import { ProjectCardProps } from "@components/components/ProjectList";

export const projects: ProjectCardProps[] = [
  {
    title: "Legends of Runeterra Expedition Assistant",
    description:
      "Destop application to help players draft decks in the digitial trading card game Legends of Runeterra, built for a hackathon",
    image: "./LoRExpeditionAssistantCropped.png",
    technologies: ["logos:javascript", "logos:electron", "logos:react"],
    codeUrl:
      "https://github.com/Saltwater-Giants/Legends-of-Runeterra-Expedition-Assistant",
  },
  {
    title: "Ludum Dare 38 Game Jam",
    description:
      "Game made for the Ludum Dare 38 Game Jam, Wave shooter built in Unity in 72 hours",
    image: "./LudumDare38.png",
    technologies: ["mdi:unity"],
    url: "https://ldjam.com/events/ludum-dare/38/yet-another-zombie-wave-shooter",
    codeUrl: "https://bitbucket.org/krombopulostrigger/ld38/src/master/",
  },
  {
    title: "Wedding Website",
    description:
      "Wedding website built from scratch using a MERN stack and deployed on AWS. Site includes an RSVP feature that requires a secret passphrase to RSVP, all of which is managed through a hidden admin panel. Also includes a guest support chat and song request feature.",
    image: "./wedding-website.png",
    technologies: [
      "logos:javascript",
      "logos:react",
      "vscode-icons:file-type-mongo",
    ],
    codeUrl: "https://github.com/jacobbrown0192/weddingapp",
  },
];
