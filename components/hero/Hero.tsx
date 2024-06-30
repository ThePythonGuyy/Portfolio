import React from "react";
import styles from "./hero.module.scss";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from '../ui/MagicButton'
import Image from "next/image";

export default function Hero() {
  
  return (
    <section className={styles.hero}>
      <div>
        <Spotlight className={styles.spotlight_1} fill="white" />
        <Spotlight className={styles.spotlight_2} fill="purple" />
        {/* <Spotlight className={styles.spotlight_3} fill="blue" /> */}
      </div>
      <div className="h-[100vh] w-[100vw] dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.3] flex items-center justify-center absolute top-0 left-0 opacity-2">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] " />
      </div>
      <div className={styles.heroContent_container}>
        <div className={styles.heroContent}>
          <h2>
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect 
            styles={styles.textGenerate}
            words="Transforming Concepts into Seamless 
           User Experiences"
          />
          <p>Hi, I&apos;m Rahul, a Next.js Developer </p>
          <a href="#about" className="">
            <MagicButton 
            title="My Works"
            position="right"
            icon="/icons/location.svg"
            styles={styles.button}
            />
          </a>


        </div>
      </div>
    </section>
  );
}
