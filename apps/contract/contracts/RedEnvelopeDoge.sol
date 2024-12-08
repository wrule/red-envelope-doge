// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { ERC721URIStorage, ERC721 } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract RedEnvelopeDoge is ERC721URIStorage {
  uint256 private _nextTokenId;

  constructor() ERC721("Red Envelope Doge", "RPDoge") { }

  function awardItem(address player, string memory tokenURI) public returns (uint256) {
    uint256 tokenId = _nextTokenId++;
    _mint(player, tokenId);
    _setTokenURI(tokenId, tokenURI);
    return tokenId;
  }
}
