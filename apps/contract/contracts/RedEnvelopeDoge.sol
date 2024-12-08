// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { ERC721URIStorage, ERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract RedEnvelopeDoge is ERC721URIStorage {
  uint256 private _nextTokenId;

  constructor() ERC721("Red Envelope Doge", "RPDoge") { }

  mapping(uint256 => uint256) private balances;

  function mint(address player, string memory tokenURI) public payable returns (uint256) {
    uint256 tokenId = _nextTokenId++;
    _mint(player, tokenId);
    _setTokenURI(tokenId, tokenURI);
    balances[tokenId] = msg.value;
    return tokenId;
  }
}
