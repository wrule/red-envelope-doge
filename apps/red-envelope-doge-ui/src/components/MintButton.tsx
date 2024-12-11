'use client';

import Image from 'next/image';
import { MouseEventHandler } from 'react';

const MintButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement>,
}) => {
  return (
    <button
      onClick={props.onClick}
      className="
        relative
        px-16 py-6
        text-white text-2xl font-bold
        rounded-2xl
        bg-gradient-to-r from-envelope-500 via-envelope-600 to-envelope-500
        hover:from-envelope-600 hover:via-envelope-500 hover:to-envelope-600
        transform hover:scale-105
        transition-all duration-500
        shadow-lg hover:shadow-envelope-500/50
        flex flex-col items-center gap-3
        group
        border-2 border-white/10
        overflow-hidden
        before:absolute
        before:content-['']
        before:w-[200%]
        before:h-full
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/20
        before:to-transparent
        before:-left-full
        before:top-0
        before:transition-transform
        before:duration-[1.5s]
        before:ease-in-out
        hover:before:translate-x-full
      ">
      <div className="
        absolute inset-0
        bg-gradient-to-r from-ingot-500/0 via-ingot-500/20 to-ingot-500/0
        blur-xl
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-500
      " />
      <div className="
        absolute inset-0
        bg-gradient-to-r from-envelope-400/30 via-ingot-500/30 to-envelope-400/30
        -z-10
        rounded-2xl
        animate-gradient-xy
      " />
      <Image
        className="
          absolute top-0 right-0
          transform group-hover:scale-110 group-hover:rotate-12
          transition-transform duration-500
        "
        src="/images/rp-doge-1.png"
        alt="rp-doge"
        width={200}
        height={200}
        loading="eager"
        priority
      />
      <span className="relative flex items-center gap-3">
        <span className="text-4xl animate-bounce">🧧</span>
        <span className="group-hover:text-shadow-glow">Send Some Doge Red Envelope</span>
        <span className="text-4xl animate-bounce">✨</span>
      </span>
      <span className="
        relative text-base font-normal
        text-white/80
        group-hover:text-white
        transition-colors duration-300
      ">
        Share happy moments with your friends
      </span>
      <div className="
        absolute top-0 left-0 w-full h-full
        bg-gradient-to-b from-white/5 to-transparent
        group-hover:from-white/10
        transition-colors duration-300
      " />
    </button>
  );
};

export default MintButton;
