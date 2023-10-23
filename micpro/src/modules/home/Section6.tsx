import Heading from "@/components/ui/Heading";
import Image from "next/image";
import React from "react";

function Section6() {
  return (
    <section className="pb-120">
      <div className="main-container">
        <Heading className="mb-30">
          Our Creative <span className="text-primary">Team</span>
        </Heading>
        <p className="text-center max-w-[481px] mx-auto mb-70">
          Flowgiri is a creative and modern theme for startups, freelancers and
          creatives.{" "}
        </p>
        <div className="grid grid-cols-3 gap-12  max-w-[1075px] mx-auto">
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <div
                key={index}
                className="w-full h-[385px] relative rounded-full group"
              >
                <div className="overlay absolute inset-0 z-10 bg-primary flex items-center justify-center p-2 bg-opacity-80 rounded-full text-white opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                  <h4 className="text-xl font-semibold font-poppins">
                    STEVE THOMAS
                  </h4>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  fill
                  className="w-full h-full object-cover rounded-full"
                ></Image>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Section6;
