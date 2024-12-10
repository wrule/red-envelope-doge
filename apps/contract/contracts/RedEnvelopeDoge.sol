// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { Ownable2Step, Ownable } from "@openzeppelin/contracts/access/Ownable2Step.sol";
import { MerkleProof } from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract RedEnvelopeDoge is ERC721, Ownable2Step {
  using Strings for uint256;

  uint256 private _nextTokenId;
  string private baseURI;

  constructor() ERC721("Red Envelope Doge", "RPDoge") Ownable(msg.sender) { }

  mapping(uint256 => uint8) private rpdNums;
  mapping(uint256 => uint256) private rpdBalances;
  mapping(uint256 => bytes32) private rpdMklRoots;
  mapping(uint256 => uint256) private rpdRandom;
  mapping(uint256 => address) private rpdFirst;

  error InsufficientValue(uint256 required, uint256 provided);
  error IllegalUnboxing(uint256 tokenId, bytes32[] proof, address sender);

  function mint(
    uint8 num,
    bytes32 mklRoot
  ) public payable returns (uint256) {
    if (msg.value < num) {
      revert InsufficientValue(num, msg.value);
    }
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

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    _requireOwned(tokenId);
    return bytes(baseURI).length > 0 ? string.concat(baseURI, "?id=", tokenId.toString()) : "";
  }

  function unboxing(uint256 tokenId, bytes32[] memory proof) public {
    if (!MerkleProof.verify(proof, rpdMklRoots[tokenId], keccak256(abi.encodePacked(_msgSender())))) {
      revert IllegalUnboxing(tokenId, proof, _msgSender());
    }
  }
}
