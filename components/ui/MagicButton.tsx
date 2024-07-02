import Image from "next/image";
import React from "react";

interface buttonProps {
  title: string;
  icon?: string;
  position?: 'left' | 'right';
  handleClick?: (e:React.MouseEvent<HTMLElement>) => void;
  styles?: string;

}
export default function MagicButton({title, icon, position, handleClick, styles} : buttonProps) {

  const iconDeploy = () => {
    if(icon){
    return (
      <Image 
        src={icon}
        alt={title}
        height={20}
        width={20}
      />

    )
  } else {
    return <></>
  }
  }
  return (
    <button className={`relative inline-flex h-12  overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60   ${styles}`} onClick={handleClick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl">
       {position === 'left' && iconDeploy()}
       <span>{title}</span> 
        {position === 'right' && iconDeploy()}
      </span>
    </button>
  );
}


