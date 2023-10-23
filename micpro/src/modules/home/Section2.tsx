import { IconApple } from "@/components/icons";
import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

function Section2() {
  return (
    <section className="bg-white rounded-[30px] max-w-[1170px] mx-auto pt-[70px] px-12 pb-[120px]">
      <div className="grid grid-cols-4 gap-8 mb-32">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <div
              className="bg-white p-8 rounded-xl border border-grayf2"
              key={index}
            >
              <div className="rounded-full w-[88px] h-[88px] mb-8 bg-gradientPink flex items-center justify-center">
                <IconApple></IconApple>
              </div>
              <h3 className="text-lg font-semibold">
                Discover, Explore the Product
              </h3>
            </div>
          ))}
      </div>
      <Heading className="max-w-[810px] mb-10">
        More than <span className="text-primary">80,000+</span> companies trust
        Micpro
      </Heading>
      <div className="flex items-center gap-5 justify-between">
        {Array(5)
          .fill(0)
          .map((item, index) => (
            <Image
              key={index}
              src="/slack.svg"
              alt=""
              width={150}
              height={40}
              className="aspect-video object-contain"
            ></Image>
          ))}
      </div>
    </section>
  );
}

export default Section2;
