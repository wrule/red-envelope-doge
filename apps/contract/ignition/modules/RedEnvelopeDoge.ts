// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const RedEnvelopeDoge = buildModule("RedEnvelopeDoge", (m) => {
  const redEnvelopeDoge = m.contract("RedEnvelopeDoge");
  return { redEnvelopeDoge };
});

export default RedEnvelopeDoge;
