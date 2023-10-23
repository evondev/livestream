import { IconCheckPink } from "@/components/icons";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import React from "react";

function Section5() {
  return (
    <section className="py-70 bg-grayf2 mb-120">
      <div className="main-container">
        <Heading className="max-w-[679px] mb-[70px]">
          Find the plan that fits your budget
        </Heading>
        <div className="flex items-center justify-center gap-3 mb-10">
          <Button className="bg-primary text-white text-sm font-normal font-poppins">
            Monthly
          </Button>
          <Button className="bg-white text-dark1 text-sm font-normal font-poppins">
            Yearly
          </Button>
        </div>
        <div className="flex gap-8">
          <div className="w-full max-w-[730px]">
            <div className="bg-white py-5 px-8 rounded-t-xl">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold font-poppins">Pro</h5>
                <span className="flex items-center justify-center rounded-full py-3 px-6 text-primary bg-primary bg-opacity-10 font-poppins text-sm font-medium">
                  Most popular
                </span>
              </div>
              <h4 className="text-[50px] font-bold">
                $35
                <small className="text-xl text-dark1 font-poppins font-normal">
                  /Per Month
                </small>
              </h4>
            </div>
            <div className="py-11 px-10 rounded-b-xl bg-grayea">
              <div className="grid grid-cols-2 gap-10 mb-11">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 text-lg font-poppins text-dark1">
                    <IconCheckPink></IconCheckPink>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 text-lg font-poppins text-dark1">
                    <IconCheckPink></IconCheckPink>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <Button className="bg-gradientMix font-poppins font-medium py-2.5 px-9 text-white">
                Buy Now
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white py-5 px-8 rounded-t-xl">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-semibold font-poppins">Pro</h5>
                <span className="flex items-center justify-center rounded-full py-3 px-6 text-primary bg-primary bg-opacity-10 font-poppins text-sm font-medium">
                  Most popular
                </span>
              </div>
              <h4 className="text-[50px] font-bold">
                $35
                <small className="text-xl text-dark1 font-poppins font-normal">
                  /Per Month
                </small>
              </h4>
            </div>
            <div className="py-11 px-10 rounded-b-xl bg-grayea">
              <div className="flex items-center gap-3 text-lg font-poppins text-dark1 mb-11">
                <IconCheckPink></IconCheckPink>
                <p>UI/UX Designer</p>
              </div>

              <Button className="bg-gradientMix font-poppins font-medium py-2.5 px-9 text-white">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
