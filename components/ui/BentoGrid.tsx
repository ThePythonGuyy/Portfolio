"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeModel } from "./GlobeModel";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/animationData.json'
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[4rem] grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-6 w-full mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  gridItemStyles,
}: {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  gridItemStyles?: any;
}) => {
  const index = id;
  const className = "";
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = (e: React.MouseEvent<HTMLElement>) => {
    const text = "prorahul555@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={`${cn(
        "relative rounded-3xl group/bento  shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4"
      )} ${gridItemStyles[0]} ${gridItemStyles[index]}`}
    >


        {img && (
               <img src={img} alt="image" />
        )}

        {spareImg && (
          
        <img src={spareImg} alt="image" />
        )}



      <div>
        {description && <p>{description}</p>}
        <h3>{title}</h3>
      </div>
      {id === 6 && (
        <div>
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold " />
          </BackgroundGradientAnimation>
        </div>
      )}

      {id === 2 && (
        <div>
          <GlobeModel />
        </div>
      )}

      {id===3 && (
        <div>
          <div>
            <span></span>
            {['ReactJs','TypeScript','MongoDB'].map((item) =>(
              <span key={item}> {item}</span>
            ))}
          </div>
          
          <div>
            
            {['NextJs','SCSS','Python'].map((item) =>(
              <span key={item}> {item}</span>
            ))}
            <span></span>
          </div>
        </div>
      )}

      {id===6 && (
         <div >

         <div
           className={`absolute -bottom-5 right-0 w-full z-12  ${copied ? "block" : "block"
             }`}
         >
       
           <Lottie options={defaultOptions} height={200} width={400} />
         </div>

         <MagicButton
           title={copied ? "Email is Copied!" : "Copy my email address"}
           icon='/icons/copy.svg'
           position="left"
           handleClick={handleCopy}
          //  otherClasses="!bg-[#161A31]"
         />
       </div>
      )}
    </div>
  );
};
