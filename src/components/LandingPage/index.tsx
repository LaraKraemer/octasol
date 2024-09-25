"use client";
import React, { useEffect } from "react";
import { SparklesCore } from "../ui/sparkles";
import Text from "./Text";
import { store } from "@/app/Redux/store";
import { decrement, increment } from "@/app/Redux/Features/loader/loaderSlice";

export default function LandingPage() {
  useEffect(() => {
    store.dispatch(decrement());
    return () => {
      store.dispatch(increment());
    };
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden gap-12 md:gap-8 mt-16 md:mt-0">
      <article className="container">
        <Text />
      </article>
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="absolute inset-0 w-full h-full "
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
