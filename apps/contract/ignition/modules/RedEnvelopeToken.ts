// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const RedEnvelopeToken = buildModule("RedEnvelopeToken", (m) => {
  const redEnvelopeToken = m.contract("RedEnvelopeToken");
  return { redEnvelopeToken };
});

export default RedEnvelopeToken;
