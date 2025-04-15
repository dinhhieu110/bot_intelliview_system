import { getTechLogos } from "@/src/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {};

const DisplayTechIcon = async ({ techStack }: TechIconProps) => {
  const techIcon = await getTechLogos(techStack);
  return (
    <div className="flex flex-row">
      {techIcon.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className="relative group bg-dark-300 rounded-full p-2 flex-center"
        >
          <span className="tech-tooltip">{tech}</span>
          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcon;
