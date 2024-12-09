// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { ERC721URIStorage, ERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract RedEnvelopeDoge is ERC721URIStorage {
  uint256 private _nextTokenId;

  constructor() ERC721("Red Envelope Doge", "RPDoge") { }

  mapping(uint256 => uint8) private rpdNums;
  mapping(uint256 => uint256) private rpdBalances;
  mapping(uint256 => bytes32) private rpdMklRoots;

  function mint(
    uint8 num,
    bytes32 mklRoot
  ) public payable returns (uint256) {
    uint256 tokenId = _nextTokenId++;
    _mint(_msgSender(), tokenId);
    rpdNums[tokenId] = num;
    rpdBalances[tokenId] = msg.value;
    rpdMklRoots[tokenId] = mklRoot;
    return tokenId;
  }
}
