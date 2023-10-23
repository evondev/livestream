import Heading from "@/components/ui/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Section3() {
  return (
    <section className="main-container pb-[120px]">
      <Heading className="mb-[100px]">
        Our Team’s <span className="text-primary">Work</span>
      </Heading>
      <div className="flex flex-col gap-[100px]">
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <div
              className="flex items-center odd:gap-[104px] even:gap-[70px] even:flex-row-reverse even:text-right group"
              key={index}
            >
              <div>
                <div className="text-dark1 mb-4 flex items-start gap-2 group-even:justify-end">
                  <span>Mobile app, Weather,</span>
                  <span>Software</span>
                </div>
                <h3 className="font-bold text-[34px] mb-8">
                  Weather App UI Kit - WETHY{" "}
                </h3>
                <p className="text-gray17 text-lg leading-normal mb-10 font-poppins">
                  Hello Designers! This is the video calling website landing
                  page design concept. Video calling software is very popular
                  nowadays.
                </p>
                <Link href="#" className="text-lg uppercase tracking-[10px]">
                  <span className="block mb-4">VIEW PORTFOLIO</span>
                  <div className="w-2/4 h-1 bg-gradientPink group-even:ml-auto"></div>
                </Link>
              </div>
              <div className="w-full max-w-[700px] flex-shrink-0">
                <Image
                  src="/img1.png"
                  alt=""
                  className="w-full h-full object-cover"
                  width={700}
                  height={585}
                ></Image>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Section3;
