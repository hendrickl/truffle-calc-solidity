export const calculator_address = "0x01Ad3fADd8E50809Da0a9a6Ff76ddE601350e042";
export const calculator_abi = [
  [
    {
      inputs: [
        {
          internalType: "address",
          name: "_adderContract",
          type: "address",
        },
        {
          internalType: "address",
          name: "_suberContract",
          type: "address",
        },
        {
          internalType: "address",
          name: "_multiplierContract",
          type: "address",
        },
        {
          internalType: "address",
          name: "_divisorContract",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "nb1",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "nb2",
          type: "uint256",
        },
      ],
      name: "add",
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
          name: "nb1",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "nb2",
          type: "uint256",
        },
      ],
      name: "div",
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
          name: "nb1",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "nb2",
          type: "uint256",
        },
      ],
      name: "mul",
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
          name: "nb1",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "nb2",
          type: "uint256",
        },
      ],
      name: "sub",
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
  ],
];
