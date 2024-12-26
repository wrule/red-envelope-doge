'use client';

import { Contract, ethers } from 'ethers';
import MintButton from "@/components/MintButton";
import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import RedEnvelopeDogeABI from './RedEnvelopeDoge.json';
import { RedEnvelopeDoge } from './types/ethers-contracts';

const App = () => {
  const { provider, account } = useWeb3React();

  const contract = useMemo(() => {
    if (!provider) return null;
    return new Contract(
      '0x2b97120D2bEc9CE5B2c49E8af1e7Abb09c606C88',
      RedEnvelopeDogeABI.abi,
      provider.getSigner(account),
    ) as RedEnvelopeDoge;
  }, [provider, account]);

  return (
    <div className="flex justify-center mt-[28vh]">
      <MintButton onClick={async () => {
        if (contract) {
          const a = await contract.mint(5, '0x0000000000000000000000000000000000000000000000000000000000000000', {
            value: ethers.utils.parseEther('0.000001'),
          })
          await a.wait();
          console.log('mint成功');
        }
      }} />
    </div>
  );
};

export default App;
