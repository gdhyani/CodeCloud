"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import Herosection from "./herosection";

export function Mainherosection() {
  return (
    <div className="flex bg-black flex-col p-0 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <Herosection/>
        }
      >
        <Image
          src="/hero.jpg"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
