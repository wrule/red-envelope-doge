// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable2Step } from "@openzeppelin/contracts/access/Ownable2Step.sol";

contract RedEnvelopeDoge is ERC721, Ownable2Step {
  uint256 private _nextTokenId;
  string private baseURI;

  constructor() ERC721("Red Envelope Doge", "RPDoge") Ownable(msg.sender) { }

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

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  function setBaseURI(string memory newBaseURI) public onlyOwner {
    baseURI = newBaseURI;
  }
}
