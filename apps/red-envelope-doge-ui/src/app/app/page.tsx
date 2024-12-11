'use client';

import { Contract } from 'ethers';
import MintButton from "@/components/MintButton";
import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import RedEnvelopeDogeABI from './RedEnvelopeDoge.json';

const App = () => {
  const { provider, account } = useWeb3React();

  const contract = useMemo(() => {
    if (!provider) return null;
    return new Contract(
      '0x2b97120D2bEc9CE5B2c49E8af1e7Abb09c606C88',
      RedEnvelopeDogeABI.abi,
      provider.getSigner(account),
    );
  }, [provider, account]);

  return (
    <div className="flex justify-center mt-[28vh]">
      <MintButton onClick={async () => {
        if (contract) {
          const a = await contract.tokenURI(0);
          console.log(a);
        }
      }} />
    </div>
  );
};

export default App;
