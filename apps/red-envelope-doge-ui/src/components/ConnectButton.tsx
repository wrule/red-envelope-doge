'use client';

const ConnectButton = () => {
  return (
    <button
      className="
        px-4 py-1.5
        text-sm font-medium
        text-envelope-700
        rounded-md
        bg-gradient-to-r from-ingot-500 to-ingot-400
        hover:from-ingot-400 hover:to-ingot-500
        transform hover:scale-105
        transition-all duration-300
        shadow-md hover:shadow-ingot-500/50
        flex items-center gap-1.5
      "
    >
      <span className="text-base">👛</span>
      <span>Connect Wallet</span>
    </button>
  );
};

export default ConnectButton;
