'use client';

const MintButton = () => {
  return (
    <button
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
        animate-pulse-slow
        border-2 border-white/10
        overflow-hidden
      "
    >
      {/* Background animation effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-ingot-500/0 via-ingot-500/20 to-ingot-500/0 blur-xl group-hover:animate-shine" />

      {/* Content */}
      <span className="relative flex items-center gap-3">
        <span className="text-4xl animate-bounce">🧧</span>
        <span>Mint NFT</span>
        <span className="text-4xl animate-bounce">✨</span>
      </span>

      {/* Subtle text */}
      <span className="relative text-base font-normal text-white/80">
        Get Your Lucky Red Envelope
      </span>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent" />
    </button>
  );
};

export default MintButton;
