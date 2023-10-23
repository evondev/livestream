import Button from "@/components/ui/Button";
import React from "react";

function Section1() {
  return (
    <section className="hero mb-[100px]">
      <div className="l-container">
        <h1 className="max-w-[807px] mx-auto font-extrabold text-6xl text-center leading-snug mb-7">
          Build Your Dream Website with Our Skilled{" "}
          <span className="text-gradient">Development</span> Team
        </h1>
        <div className="text-center max-w-[715px] text-lg mb-11 mx-auto">
          Are you looking for a way to close all marketing, technical and
          customer support tasks for`` your company in one place
        </div>
        <div className="flex items-center gap-6 justify-center">
          <Button className="text-white bg-primary">Get Started</Button>
          <Button className="border border-dark">Pricing</Button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
