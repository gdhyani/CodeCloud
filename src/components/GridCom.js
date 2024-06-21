import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { GaugeCircleA } from "./GaugeCircleA";
import { AnimatedListA } from "./AnimatedListA";
import { DockA } from "./DockA";
import { AvatarCirclesA } from "./AvatarCirclesA";


export function GridCom() {
  return (
    <BentoGrid className="max-w-6xl gap-10 md:gap-5 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    header: <AnimatedListA/>,
    className: "md:col-span-2",
  },
  {
    title: "The Digital Revolution",
    header: <GaugeCircleA/>,
    className: "md:col-span-1",
  },
  {
    title: "The Art of Integration",
    header: <DockA />,
    className: "md:col-span-1",
  },
  {
    title: "The Power of Contributions",
    header: <AvatarCirclesA/>,
    className: "md:col-span-2",
  },
];
