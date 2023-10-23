import IconCheckList from "@/components/icons/IconCheckList";
import Heading from "@/components/ui/Heading";
import { expertiseList } from "@/constant";
import React from "react";

function Section4() {
  return (
    <section className="main-container bg-grayf1 rounded-xl pt-[70px] pb-12 px-10 mb-[105px]">
      <Heading className="mb-8">
        Explore our core <span className="text-primary">Expertise</span>
      </Heading>
      <p className="max-w-[710px] text-center mx-auto mb-12 leading-normal font-poppins">
        We produce beautiful and engaging websites. Our team is mostly
        experienced in the design of stunning interfaces, e-commerce and
        marketing website development, ready to work with you on your project!
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {expertiseList.map((item, index) => (
          <div className="bg-white rounded-xl py-6 px-8" key={index}>
            <h4 className="font-bold text-xl pb-5 border-b border-b-grayf2 mb-6">
              {item.title}
            </h4>
            <div className="flex flex-col gap-4">
              {item.features.map((feature, index) => (
                <CoreItem
                  icon={<IconCheckList type={item.iconColor}></IconCheckList>}
                  key={index}
                  title={feature}
                ></CoreItem>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
function CoreItem({
  icon,
  title = "High-quality motion design",
}: {
  icon: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-5 h-5 flex-shrink-0">{icon}</span>
      <p className="text-black leading-normal">{title}</p>
    </div>
  );
}
export default Section4;
