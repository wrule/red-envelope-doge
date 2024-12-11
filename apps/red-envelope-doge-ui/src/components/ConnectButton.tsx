'use client';

import useConnect from '@/hooks/useConnect';

const shortenAddress = (address: string, chars = 4) => {
  if (!address) return '';
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
};

const ConnectButton = () => {
  const connect = useConnect();

  return (
    <button
      className="
        px-4 py-2.5
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
        connect.connector.activate();
      }}>
      {connect.isActive ? <>
        <span className="w-[7.1rem] text-left">{shortenAddress(connect.account!)}</span>
        <span className="flex justify-center items-center w-[6.5rem] h-[1.5rem] rounded-md text-white bg-gradient-to-r from-nightsky-500 via-nightsky-400 to-nightsky-500 shadow-lg shadow-nightsky-400/30 hover:shadow-nightsky-400/50 animate-gradient-xy transition-all duration-300">
          {connect.balanceText ? <span>
            <span>{connect.balanceText}</span>
            <span className="ml-[0.2rem]">ETH</span>
          </span> : ''}
        </span>
      </> : <>
        <span className="text-xl">👛</span>
        <span>Connect Wallet</span>
      </>}
    </button>
  );
};

export default ConnectButton;
