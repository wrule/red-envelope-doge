// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RedEnvelopeToken is ERC20 {
  constructor() ERC20("RedEnvelope Token", "RP") {
    _mint(msg.sender, 100_000_000 * (10 ** decimals()));
  }
}
