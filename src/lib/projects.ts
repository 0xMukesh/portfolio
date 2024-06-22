import { z } from "zod";

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "candypay checkout",
      link: "https://candypay.fun",
      description: "A low-code checkout solution and effortless payment infrastructure for web3 businesses, where you can get started accepting Solana payments right away",
    },
    {
      repo: "@candypay/caramel",
      link: "https://github.com/candypay/caramel",
      description: "A POW app that showcases the usage of CandyPay checkout, to monetize GitHub packages",
    },
    {
      repo: "candypay nft builder",
      link: "https://pitch.com/public/329fca8c-d130-4d23-b480-263be0cef3ef",
      description: "A seamless NFT creation/minting experience on Solana, powered by Solana Pay",
    },
    {
      repo: "snipli",
      link: "https://github.com/0xMukesh/snipli",
      description: "A command-line tool to quickly convert your local files into a GitHub gist",
    },
    {
      repo: "rayli",
      link: "https://github.com/avneesh0612/rayli",
      description: "A command-line tool to quickly generate beautiful screenshots of your code right from the terminal",
    },
    {
      repo: "react and nextjs snippets",
      link: "https://github.com/avneesh0612/react-nextjs-snippets",
      description: "A VSCode extension packed with a bunch of React and Next.js snippets, used by over 20k+ people.",
    },
  ];
}
