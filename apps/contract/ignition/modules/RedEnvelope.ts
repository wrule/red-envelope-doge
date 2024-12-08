// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const RedEnvelope = buildModule("RedEnvelope", (m) => {
  const redEnvelope = m.contract("RedEnvelope");
  return { redEnvelope };
});

export default RedEnvelope;
