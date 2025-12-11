"use client";

import { GlowingEffect } from "../ui/glowingEffect";
import { services } from "../services-offered/const";
import { GridItemProps } from "./types";

export function Services() {
  return (
    <div className="w-full">
      {/* Services Grid */}
      <div className="flex justify-center w-full">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl w-full">
          {services.map((service) => (
            <GridItem
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-56 list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-5.5 font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-gray-700 dark:text-gray-300">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
