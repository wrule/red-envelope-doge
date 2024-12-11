/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RedEnvelopeDoge,
  RedEnvelopeDogeInterface,
} from "../RedEnvelopeDoge";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "IllegalUnboxing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "provided",
        type: "uint256",
      },
    ],
    name: "InsufficientValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "num",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "mklRoot",
        type: "bytes32",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "unboxing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336040518060400160405280601181526020017f52656420456e76656c6f706520446f67650000000000000000000000000000008152506040518060400160405280600681526020017f5250446f67650000000000000000000000000000000000000000000000000000815250816000908161008d9190610474565b50806001908161009d9190610474565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101125760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016101099190610587565b60405180910390fd5b6101218161012760201b60201c565b506105a2565b600760006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905561015b8161015e60201b60201c565b50565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806102a557607f821691505b6020821081036102b8576102b761025e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026103207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102e3565b61032a86836102e3565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061037161036c61036784610342565b61034c565b610342565b9050919050565b6000819050919050565b61038b83610356565b61039f61039782610378565b8484546102f0565b825550505050565b600090565b6103b46103a7565b6103bf818484610382565b505050565b5b818110156103e3576103d86000826103ac565b6001810190506103c5565b5050565b601f821115610428576103f9816102be565b610402846102d3565b81016020851015610411578190505b61042561041d856102d3565b8301826103c4565b50505b505050565b600082821c905092915050565b600061044b6000198460080261042d565b1980831691505092915050565b6000610464838361043a565b9150826002028217905092915050565b61047d82610224565b67ffffffffffffffff8111156104965761049561022f565b5b6104a0825461028d565b6104ab8282856103e7565b600060209050601f8311600181146104de57600084156104cc578287015190505b6104d68582610458565b86555061053e565b601f1984166104ec866102be565b60005b82811015610514578489015182556001820191506020850194506020810190506104ef565b86831015610531578489015161052d601f89168261043a565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061057182610546565b9050919050565b61058181610566565b82525050565b600060208201905061059c6000830184610578565b92915050565b612d45806105b16000396000f3fe60806040526004361061012a5760003560e01c806370a08231116100ab578063a22cb4651161006f578063a22cb465146103cf578063b88d4fde146103f8578063c87b56dd14610421578063e30c39781461045e578063e985e9c514610489578063f2fde38b146104c65761012a565b806370a082311461030e578063715018a61461034b57806379ba5097146103625780638da5cb5b1461037957806395d89b41146103a45761012a565b806342842e0e116100f257806342842e0e1461022657806355f804b31461024f57806362ac25e0146102785780636352211e146102a85780636d918fbb146102e55761012a565b806301ffc9a71461012f57806306fdde031461016c578063081812fc14610197578063095ea7b3146101d457806323b872dd146101fd575b600080fd5b34801561013b57600080fd5b5061015660048036038101906101519190611d3d565b6104ef565b6040516101639190611d85565b60405180910390f35b34801561017857600080fd5b506101816105d1565b60405161018e9190611e30565b60405180910390f35b3480156101a357600080fd5b506101be60048036038101906101b99190611e88565b610663565b6040516101cb9190611ef6565b60405180910390f35b3480156101e057600080fd5b506101fb60048036038101906101f69190611f3d565b61067f565b005b34801561020957600080fd5b50610224600480360381019061021f9190611f7d565b610695565b005b34801561023257600080fd5b5061024d60048036038101906102489190611f7d565b610797565b005b34801561025b57600080fd5b5061027660048036038101906102719190612105565b6107b7565b005b610292600480360381019061028d91906121bd565b6107d2565b60405161029f919061220c565b60405180910390f35b3480156102b457600080fd5b506102cf60048036038101906102ca9190611e88565b6108b0565b6040516102dc9190611ef6565b60405180910390f35b3480156102f157600080fd5b5061030c600480360381019061030791906122ef565b6108c2565b005b34801561031a57600080fd5b506103356004803603810190610330919061234b565b61095d565b604051610342919061220c565b60405180910390f35b34801561035757600080fd5b50610360610a17565b005b34801561036e57600080fd5b50610377610a2b565b005b34801561038557600080fd5b5061038e610aba565b60405161039b9190611ef6565b60405180910390f35b3480156103b057600080fd5b506103b9610ae4565b6040516103c69190611e30565b60405180910390f35b3480156103db57600080fd5b506103f660048036038101906103f191906123a4565b610b76565b005b34801561040457600080fd5b5061041f600480360381019061041a9190612485565b610b8c565b005b34801561042d57600080fd5b5061044860048036038101906104439190611e88565b610bb1565b6040516104559190611e30565b60405180910390f35b34801561046a57600080fd5b50610473610c1b565b6040516104809190611ef6565b60405180910390f35b34801561049557600080fd5b506104b060048036038101906104ab9190612508565b610c45565b6040516104bd9190611d85565b60405180910390f35b3480156104d257600080fd5b506104ed60048036038101906104e8919061234b565b610cd9565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806105ba57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806105ca57506105c982610d86565b5b9050919050565b6060600080546105e090612577565b80601f016020809104026020016040519081016040528092919081815260200182805461060c90612577565b80156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b5050505050905090565b600061066e82610df0565b5061067882610e78565b9050919050565b610691828261068c610eb5565b610ebd565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107075760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016106fe9190611ef6565b60405180910390fd5b600061071b8383610716610eb5565b610ecf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610791578382826040517f64283d7b000000000000000000000000000000000000000000000000000000008152600401610788939291906125a8565b60405180910390fd5b50505050565b6107b283838360405180602001604052806000815250610b8c565b505050565b6107bf6110e9565b80600990816107ce919061278b565b5050565b60008260ff1634101561081e5782346040517f7040b58c00000000000000000000000000000000000000000000000000000000815260040161081592919061288e565b60405180910390fd5b600060086000815480929190610833906128e6565b91905055905061084a610844610eb5565b82611170565b83600a600083815260200190815260200160002060006101000a81548160ff021916908360ff16021790555034600b60008381526020019081526020016000208190555082600c6000838152602001908152602001600020819055508091505092915050565b60006108bb82610df0565b9050919050565b61090d81600c6000858152602001908152602001600020546108e2610eb5565b6040516020016108f29190612976565b60405160208183030381529060405280519060200120611269565b61095957818161091b610eb5565b6040517fc0afb55600000000000000000000000000000000000000000000000000000000815260040161095093929190612a4f565b60405180910390fd5b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109d05760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016109c79190611ef6565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a1f6110e9565b610a296000611280565b565b6000610a35610eb5565b90508073ffffffffffffffffffffffffffffffffffffffff16610a56610c1b565b73ffffffffffffffffffffffffffffffffffffffff1614610aae57806040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610aa59190611ef6565b60405180910390fd5b610ab781611280565b50565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610af390612577565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1f90612577565b8015610b6c5780601f10610b4157610100808354040283529160200191610b6c565b820191906000526020600020905b815481529060010190602001808311610b4f57829003601f168201915b5050505050905090565b610b88610b81610eb5565b83836112b1565b5050565b610b97848484610695565b610bab610ba2610eb5565b85858585611420565b50505050565b6060610bbc82610df0565b50600060098054610bcc90612577565b905011610be85760405180602001604052806000815250610c14565b6009610bf3836115d1565b604051602001610c04929190612b72565b6040516020818303038152906040525b9050919050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610ce16110e9565b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16610d41610aba565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080610dfc8361169f565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e6f57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610e66919061220c565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610eca83838360016116dc565b505050565b600080610edb8461169f565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610f1d57610f1c8184866118a1565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fae57610f5f6000856000806116dc565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611031576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b6110f1610eb5565b73ffffffffffffffffffffffffffffffffffffffff1661110f610aba565b73ffffffffffffffffffffffffffffffffffffffff161461116e57611132610eb5565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016111659190611ef6565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111e25760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016111d99190611ef6565b60405180910390fd5b60006111f083836000610ecf565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112645760006040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161125b9190611ef6565b60405180910390fd5b505050565b6000826112768584611965565b1490509392505050565b600760006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556112ae816119b5565b50565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361132257816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016113199190611ef6565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114139190611d85565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b11156115ca578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161147f9493929190612bfa565b6020604051808303816000875af19250505080156114bb57506040513d601f19601f820116820180604052508101906114b89190612c5b565b60015b61153f573d80600081146114eb576040519150601f19603f3d011682016040523d82523d6000602084013e6114f0565b606091505b50600081510361153757836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161152e9190611ef6565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146115c857836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016115bf9190611ef6565b60405180910390fd5b505b5050505050565b6060600060016115e084611a7b565b01905060008167ffffffffffffffff8111156115ff576115fe611fda565b5b6040519080825280601f01601f1916602001820160405280156116315781602001600182028036833780820191505090505b509050600082602001820190505b600115611694578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161168857611687612c88565b5b0494506000850361163f575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806117155750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561184957600061172584610df0565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561179057508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156117a357506117a18184610c45565b155b156117e557826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016117dc9190611ef6565b60405180910390fd5b811561184757838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6118ac838383611bce565b61196057600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361192157806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611918919061220c565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611957929190612cb7565b60405180910390fd5b505050565b60008082905060005b84518110156119aa5761199b8286838151811061198e5761198d612ce0565b5b6020026020010151611c8f565b9150808060010191505061196e565b508091505092915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611ad9577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611acf57611ace612c88565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611b16576d04ee2d6d415b85acef81000000008381611b0c57611b0b612c88565b5b0492506020810190505b662386f26fc100008310611b4557662386f26fc100008381611b3b57611b3a612c88565b5b0492506010810190505b6305f5e1008310611b6e576305f5e1008381611b6457611b63612c88565b5b0492506008810190505b6127108310611b93576127108381611b8957611b88612c88565b5b0492506004810190505b60648310611bb65760648381611bac57611bab612c88565b5b0492506002810190505b600a8310611bc5576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611c8657508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611c475750611c468484610c45565b5b80611c8557508273ffffffffffffffffffffffffffffffffffffffff16611c6d83610e78565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b6000818310611ca757611ca28284611cba565b611cb2565b611cb18383611cba565b5b905092915050565b600082600052816020526040600020905092915050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d1a81611ce5565b8114611d2557600080fd5b50565b600081359050611d3781611d11565b92915050565b600060208284031215611d5357611d52611cdb565b5b6000611d6184828501611d28565b91505092915050565b60008115159050919050565b611d7f81611d6a565b82525050565b6000602082019050611d9a6000830184611d76565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611dda578082015181840152602081019050611dbf565b60008484015250505050565b6000601f19601f8301169050919050565b6000611e0282611da0565b611e0c8185611dab565b9350611e1c818560208601611dbc565b611e2581611de6565b840191505092915050565b60006020820190508181036000830152611e4a8184611df7565b905092915050565b6000819050919050565b611e6581611e52565b8114611e7057600080fd5b50565b600081359050611e8281611e5c565b92915050565b600060208284031215611e9e57611e9d611cdb565b5b6000611eac84828501611e73565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ee082611eb5565b9050919050565b611ef081611ed5565b82525050565b6000602082019050611f0b6000830184611ee7565b92915050565b611f1a81611ed5565b8114611f2557600080fd5b50565b600081359050611f3781611f11565b92915050565b60008060408385031215611f5457611f53611cdb565b5b6000611f6285828601611f28565b9250506020611f7385828601611e73565b9150509250929050565b600080600060608486031215611f9657611f95611cdb565b5b6000611fa486828701611f28565b9350506020611fb586828701611f28565b9250506040611fc686828701611e73565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61201282611de6565b810181811067ffffffffffffffff8211171561203157612030611fda565b5b80604052505050565b6000612044611cd1565b90506120508282612009565b919050565b600067ffffffffffffffff8211156120705761206f611fda565b5b61207982611de6565b9050602081019050919050565b82818337600083830152505050565b60006120a86120a384612055565b61203a565b9050828152602081018484840111156120c4576120c3611fd5565b5b6120cf848285612086565b509392505050565b600082601f8301126120ec576120eb611fd0565b5b81356120fc848260208601612095565b91505092915050565b60006020828403121561211b5761211a611cdb565b5b600082013567ffffffffffffffff81111561213957612138611ce0565b5b612145848285016120d7565b91505092915050565b600060ff82169050919050565b6121648161214e565b811461216f57600080fd5b50565b6000813590506121818161215b565b92915050565b6000819050919050565b61219a81612187565b81146121a557600080fd5b50565b6000813590506121b781612191565b92915050565b600080604083850312156121d4576121d3611cdb565b5b60006121e285828601612172565b92505060206121f3858286016121a8565b9150509250929050565b61220681611e52565b82525050565b600060208201905061222160008301846121fd565b92915050565b600067ffffffffffffffff82111561224257612241611fda565b5b602082029050602081019050919050565b600080fd5b600061226b61226684612227565b61203a565b9050808382526020820190506020840283018581111561228e5761228d612253565b5b835b818110156122b757806122a388826121a8565b845260208401935050602081019050612290565b5050509392505050565b600082601f8301126122d6576122d5611fd0565b5b81356122e6848260208601612258565b91505092915050565b6000806040838503121561230657612305611cdb565b5b600061231485828601611e73565b925050602083013567ffffffffffffffff81111561233557612334611ce0565b5b612341858286016122c1565b9150509250929050565b60006020828403121561236157612360611cdb565b5b600061236f84828501611f28565b91505092915050565b61238181611d6a565b811461238c57600080fd5b50565b60008135905061239e81612378565b92915050565b600080604083850312156123bb576123ba611cdb565b5b60006123c985828601611f28565b92505060206123da8582860161238f565b9150509250929050565b600067ffffffffffffffff8211156123ff576123fe611fda565b5b61240882611de6565b9050602081019050919050565b6000612428612423846123e4565b61203a565b90508281526020810184848401111561244457612443611fd5565b5b61244f848285612086565b509392505050565b600082601f83011261246c5761246b611fd0565b5b813561247c848260208601612415565b91505092915050565b6000806000806080858703121561249f5761249e611cdb565b5b60006124ad87828801611f28565b94505060206124be87828801611f28565b93505060406124cf87828801611e73565b925050606085013567ffffffffffffffff8111156124f0576124ef611ce0565b5b6124fc87828801612457565b91505092959194509250565b6000806040838503121561251f5761251e611cdb565b5b600061252d85828601611f28565b925050602061253e85828601611f28565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061258f57607f821691505b6020821081036125a2576125a1612548565b5b50919050565b60006060820190506125bd6000830186611ee7565b6125ca60208301856121fd565b6125d76040830184611ee7565b949350505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026126417fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612604565b61264b8683612604565b95508019841693508086168417925050509392505050565b6000819050919050565b600061268861268361267e84611e52565b612663565b611e52565b9050919050565b6000819050919050565b6126a28361266d565b6126b66126ae8261268f565b848454612611565b825550505050565b600090565b6126cb6126be565b6126d6818484612699565b505050565b5b818110156126fa576126ef6000826126c3565b6001810190506126dc565b5050565b601f82111561273f57612710816125df565b612719846125f4565b81016020851015612728578190505b61273c612734856125f4565b8301826126db565b50505b505050565b600082821c905092915050565b600061276260001984600802612744565b1980831691505092915050565b600061277b8383612751565b9150826002028217905092915050565b61279482611da0565b67ffffffffffffffff8111156127ad576127ac611fda565b5b6127b78254612577565b6127c28282856126fe565b600060209050601f8311600181146127f557600084156127e3578287015190505b6127ed858261276f565b865550612855565b601f198416612803866125df565b60005b8281101561282b57848901518255600182019150602085019450602081019050612806565b868310156128485784890151612844601f891682612751565b8355505b6001600288020188555050505b505050505050565b600061287861287361286e8461214e565b612663565b611e52565b9050919050565b6128888161285d565b82525050565b60006040820190506128a3600083018561287f565b6128b060208301846121fd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006128f182611e52565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612923576129226128b7565b5b600182019050919050565b60008160601b9050919050565b60006129468261292e565b9050919050565b60006129588261293b565b9050919050565b61297061296b82611ed5565b61294d565b82525050565b6000612982828461295f565b60148201915081905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6129c681612187565b82525050565b60006129d883836129bd565b60208301905092915050565b6000602082019050919050565b60006129fc82612991565b612a06818561299c565b9350612a11836129ad565b8060005b83811015612a42578151612a2988826129cc565b9750612a34836129e4565b925050600181019050612a15565b5085935050505092915050565b6000606082019050612a6460008301866121fd565b8181036020830152612a7681856129f1565b9050612a856040830184611ee7565b949350505050565b600081905092915050565b60008154612aa581612577565b612aaf8186612a8d565b94506001821660008114612aca5760018114612adf57612b12565b60ff1983168652811515820286019350612b12565b612ae8856125df565b60005b83811015612b0a57815481890152600182019150602081019050612aeb565b838801955050505b50505092915050565b7f3f69643d00000000000000000000000000000000000000000000000000000000815250565b6000612b4c82611da0565b612b568185612a8d565b9350612b66818560208601611dbc565b80840191505092915050565b6000612b7e8285612a98565b9150612b8982612b1b565b600482019150612b998284612b41565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b6000612bcc82612ba5565b612bd68185612bb0565b9350612be6818560208601611dbc565b612bef81611de6565b840191505092915050565b6000608082019050612c0f6000830187611ee7565b612c1c6020830186611ee7565b612c2960408301856121fd565b8181036060830152612c3b8184612bc1565b905095945050505050565b600081519050612c5581611d11565b92915050565b600060208284031215612c7157612c70611cdb565b5b6000612c7f84828501612c46565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000604082019050612ccc6000830185611ee7565b612cd960208301846121fd565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220eb18132fe2731373b9396028d320c2ca44aa89b51bd67695f18cd409d0f38fa464736f6c634300081c0033";

type RedEnvelopeDogeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedEnvelopeDogeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RedEnvelopeDoge__factory extends ContractFactory {
  constructor(...args: RedEnvelopeDogeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<RedEnvelopeDoge> {
    return super.deploy(overrides || {}) as Promise<RedEnvelopeDoge>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RedEnvelopeDoge {
    return super.attach(address) as RedEnvelopeDoge;
  }
  override connect(signer: Signer): RedEnvelopeDoge__factory {
    return super.connect(signer) as RedEnvelopeDoge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedEnvelopeDogeInterface {
    return new utils.Interface(_abi) as RedEnvelopeDogeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RedEnvelopeDoge {
    return new Contract(address, _abi, signerOrProvider) as RedEnvelopeDoge;
  }
}