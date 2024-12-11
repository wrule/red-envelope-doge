'use client';

import { metaMaskHooks } from '@/connectors/metaMask';
import { useWeb3React } from '@web3-react/core';

const ConnectButton = () => {
  const { connector } = useWeb3React();

  return (
    <button
      className="
        px-6 py-2.5
        text-base font-bold
        text-envelope-700
        rounded-lg
        bg-gradient-to-r from-ingot-500 to-ingot-400
        hover:from-ingot-400 hover:to-ingot-500
        transform hover:scale-105
        transition-all duration-300
        shadow-md hover:shadow-ingot-500/50
        flex items-center gap-2.5
      "
      onClick={() => {
        connector.activate();
      }}>
      <span className="text-xl">👛</span>
      <span>Connect Wallet</span>
    </button>
  );
};

export default ConnectButton;
