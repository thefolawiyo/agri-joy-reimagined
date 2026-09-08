import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/earth/Nav";
import { Hero } from "@/components/earth/Hero";
import { Categories } from "@/components/earth/Categories";
import { Story } from "@/components/earth/Story";
import { Catalogue } from "@/components/earth/Catalogue";
import { GlobalReach } from "@/components/earth/GlobalReach";
import { WhyEarth } from "@/components/earth/WhyEarth";
import { Vision } from "@/components/earth/Vision";
import { Closing } from "@/components/earth/Closing";

const title = "Earth — From Earth to market | Global resource sourcing, import & export";
const description =
  "Earth sources, buys and moves agricultural produce, energy, minerals, metals, timber and raw materials from origin to the markets that need them.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
      <Hero />
      <Categories />
      <Story />
      <Catalogue />
      <GlobalReach />
      <WhyEarth />
      <Vision />
      <Closing />
    </main>
  );
}
