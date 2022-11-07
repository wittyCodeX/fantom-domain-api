export default {
  name: "testnet",
  chainId: "4",
  contracts: {
    Domain: {
      address: "0x445ff985D9f899d4c6173F6a2dCF23ba49DB047B",
      abi: [
        {
          inputs: [
            { internalType: "string", name: "_name", type: "string" },
            { internalType: "string", name: "_symbol", type: "string" },
            { internalType: "string", name: "uri", type: "string" },
            {
              internalType: "contract ContractRegistryInterface",
              name: "contractRegistry",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool"
            }
          ],
          name: "ApprovalForAll",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          name: "OwnershipTransferred",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "agent",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "registrant",
              type: "address"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "name",
              type: "uint256"
            }
          ],
          name: "Register",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "agent",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "holder",
              type: "address"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "name",
              type: "uint256"
            }
          ],
          name: "Revoke",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "agent",
              type: "address"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "name",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "bool",
              name: "suspended",
              type: "bool"
            }
          ],
          name: "Suspend",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]"
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "values",
              type: "uint256[]"
            }
          ],
          name: "TransferBatch",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256"
            }
          ],
          name: "TransferSingle",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "value",
              type: "string"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "id",
              type: "uint256"
            }
          ],
          name: "URI",
          type: "event"
        },
        {
          inputs: [],
          name: "ADMIN_AGENT",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "LEASING_AGENT",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "REVOCATION_AGENT",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "SUSPENSION_AGENT",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "_baseURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "_contractRegistry",
          outputs: [
            {
              internalType: "contract ContractRegistryInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" }
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address[]", name: "accounts", type: "address[]" },
            { internalType: "uint256[]", name: "ids", type: "uint256[]" }
          ],
          name: "balanceOfBatch",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "creators",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "uint256", name: "_id", type: "uint256" }],
          name: "exists",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "domainId", type: "uint256" }
          ],
          name: "getNamespaceId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
          name: "getRoleAdmin",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "uint256", name: "namespaceId", type: "uint256" }
          ],
          name: "getRoleForNamespace",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "pure",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "hasRole",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "address", name: "operator", type: "address" }
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "uint256", name: "_name", type: "uint256" }],
          name: "isSuspended",
          outputs: [{ internalType: "bool", name: "suspended", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "registrant", type: "address" },
            { internalType: "uint256", name: "namespaceId", type: "uint256" },
            { internalType: "uint256", name: "_name", type: "uint256" }
          ],
          name: "register",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "namespaceId", type: "uint256" },
            { internalType: "uint256", name: "_name", type: "uint256" }
          ],
          name: "revoke",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256[]", name: "ids", type: "uint256[]" },
            { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            { internalType: "bytes", name: "data", type: "bytes" }
          ],
          name: "safeBatchTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" }
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" }
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [{ internalType: "string", name: "_uri", type: "string" }],
          name: "setBaseURI",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" }
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "namespaceId", type: "uint256" },
            { internalType: "uint256", name: "_name", type: "uint256" },
            { internalType: "bool", name: "suspended", type: "bool" }
          ],
          name: "suspend",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "tokenSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "_tokenId", type: "uint256" }
          ],
          name: "tokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" }
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "uri",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    EVMReverseResolver: {
      address: "0xba22e87D7802DCB0B71A40aaD43f376E98816cc9",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ContractRegistryInterface",
              name: "_contractRegistry",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "name",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "path",
              type: "uint256[]"
            },
            {
              indexed: false,
              internalType: "address",
              name: "target",
              type: "address"
            }
          ],
          name: "EntrySet",
          type: "event"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256[]", name: "path", type: "uint256[]" }
          ],
          name: "clear",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          name: "contractRegistry",
          outputs: [
            {
              internalType: "contract ContractRegistryInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "address", name: "target", type: "address" }
          ],
          name: "get",
          outputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256", name: "hash", type: "uint256" }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256", name: "hash", type: "uint256" }
          ],
          name: "getEntry",
          outputs: [
            { internalType: "address", name: "entry", type: "address" }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256[]", name: "path", type: "uint256[]" }
          ],
          name: "set",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    LeasingAgent: {
      address: "0xc591f840031F21007de51711c893297Ba8378fD5",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "contractRegistryAddress",
              type: "address"
            },
            { internalType: "uint256", name: "namespaceId", type: "uint256" }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "bool",
              name: "enabled",
              type: "bool"
            }
          ],
          name: "Enabled",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256[]",
              name: "names",
              type: "uint256[]"
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "quantities",
              type: "uint256[]"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "payment",
              type: "uint256"
            }
          ],
          name: "Registered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "premiumStartTime",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "premiumEndTime",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "premiumPricePoints",
              type: "uint256[]"
            }
          ],
          name: "RegistrationPremiumSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MANAGER_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "_contractRegistry",
          outputs: [
            {
              internalType: "contract ContractRegistryInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "_enabled",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "_namespaceId",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "_premiumEndTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "_premiumPricePoints",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "_premiumStartTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "bool", name: "enabled", type: "bool" }],
          name: "enable",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
          name: "getRoleAdmin",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "hasRole",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "names", type: "uint256[]" },
            { internalType: "uint256[]", name: "lengths", type: "uint256[]" },
            { internalType: "uint256[]", name: "quantities", type: "uint256[]" }
          ],
          name: "register",
          outputs: [],
          stateMutability: "payable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "names", type: "uint256[]" },
            {
              internalType: "uint256[]",
              name: "quantities",
              type: "uint256[]"
            },
            { internalType: "uint256[]", name: "lengths", type: "uint256[]" },
            { internalType: "uint256[]", name: "preimages", type: "uint256[]" }
          ],
          name: "registerWithPreimage",
          outputs: [],
          stateMutability: "payable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "premiumStartTime",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "premiumEndTime",
              type: "uint256"
            },
            {
              internalType: "uint256[]",
              name: "premiumPricePoints",
              type: "uint256[]"
            }
          ],
          name: "setRegistrationPremiumDetails",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" }
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        }
      ]
    },
    PublicResolver: {
      address: "0xe51709ED2218BFb38396543eCD7b59Dd3d4900a8",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "contractRegistryAddress",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "name",
              type: "uint256"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "hash",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "path",
              type: "uint256[]"
            },
            {
              indexed: false,
              internalType: "string",
              name: "key",
              type: "string"
            },
            {
              indexed: false,
              internalType: "string",
              name: "data",
              type: "string"
            }
          ],
          name: "EntrySet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "name",
              type: "uint256"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "hash",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "path",
              type: "uint256[]"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "key",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "string",
              name: "data",
              type: "string"
            }
          ],
          name: "StandardEntrySet",
          type: "event"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256", name: "hash", type: "uint256" },
            { internalType: "string", name: "key", type: "string" }
          ],
          name: "resolve",
          outputs: [{ internalType: "string", name: "data", type: "string" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256", name: "hash", type: "uint256" },
            { internalType: "uint256", name: "key", type: "uint256" }
          ],
          name: "resolveStandard",
          outputs: [{ internalType: "string", name: "data", type: "string" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256[]", name: "path", type: "uint256[]" },
            { internalType: "string", name: "key", type: "string" },
            { internalType: "string", name: "data", type: "string" }
          ],
          name: "set",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256[]", name: "path", type: "uint256[]" },
            { internalType: "uint256", name: "key", type: "uint256" },
            { internalType: "string", name: "data", type: "string" }
          ],
          name: "setStandard",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    RainbowTable: {
      address: "0xB5271d46344265d0E630Df102cAeE84Bc87Db633",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "contractRegistryAddress",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "hash",
              type: "uint256"
            }
          ],
          name: "Revealed",
          type: "event"
        },
        {
          inputs: [],
          name: "contractRegistry",
          outputs: [
            {
              internalType: "contract ContractRegistryInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "hash", type: "uint256" },
            { internalType: "uint256[]", name: "preimage", type: "uint256[]" }
          ],
          name: "getHash",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "uint256", name: "hash", type: "uint256" }],
          name: "isRevealed",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "uint256", name: "hash", type: "uint256" }],
          name: "lookup",
          outputs: [
            { internalType: "uint256[]", name: "preimage", type: "uint256[]" }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256[]", name: "preimage", type: "uint256[]" },
            { internalType: "uint256", name: "hash", type: "uint256" }
          ],
          name: "reveal",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    ResolverRegistry: {
      address: "0x4B8A21Fd9De1E7A267BF922256084C9D81A70081",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "contractRegistryAddress",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "name",
              type: "uint256"
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "hash",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "path",
              type: "uint256[]"
            },
            {
              indexed: false,
              internalType: "address",
              name: "resolver",
              type: "address"
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "datasetId",
              type: "uint256"
            }
          ],
          name: "ResolverSet",
          type: "event"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256", name: "hash", type: "uint256" }
          ],
          name: "get",
          outputs: [
            { internalType: "address", name: "resolver", type: "address" },
            { internalType: "uint256", name: "datasetId", type: "uint256" }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256[]", name: "path", type: "uint256[]" },
            { internalType: "address", name: "resolver", type: "address" },
            { internalType: "uint256", name: "datasetId", type: "uint256" }
          ],
          name: "set",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
    ReverseResolverRegistry: {
      address: "0xDA7f55Ac5d1855CF9eaD041037921d6dc529DDBd",
      abi: [
        {
          inputs: [
            {
              internalType: "contract ContractRegistryInterface",
              name: "_contractRegistry",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "name",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "contractAddress",
              type: "address"
            }
          ],
          name: "AuthenticatorSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "standardKey",
              type: "uint256"
            },
            {
              indexed: false,
              internalType: "address",
              name: "resolverAddress",
              type: "address"
            }
          ],
          name: "ResolverSet",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32"
            }
          ],
          name: "RoleAdminChanged",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleGranted",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32"
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address"
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address"
            }
          ],
          name: "RoleRevoked",
          type: "event"
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "MANAGER_ROLE",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "authenticators",
          outputs: [
            {
              internalType: "contract ReverseResolverAuthenticatorInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            { internalType: "uint256[]", name: "path", type: "uint256[]" },
            { internalType: "address", name: "sender", type: "address" }
          ],
          name: "canWrite",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "contractRegistry",
          outputs: [
            {
              internalType: "contract ContractRegistryInterface",
              name: "",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "standardKey", type: "uint256" }
          ],
          name: "getResolver",
          outputs: [
            {
              internalType: "address",
              name: "resolverAddress",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
          name: "getRoleAdmin",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "hasRole",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes32", name: "role", type: "bytes32" },
            { internalType: "address", name: "account", type: "address" }
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "name", type: "uint256" },
            {
              internalType: "contract ReverseResolverAuthenticatorInterface",
              name: "authenticator",
              type: "address"
            }
          ],
          name: "setAuthenticator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "uint256", name: "standardKey", type: "uint256" },
            {
              internalType: "address",
              name: "resolverAddress",
              type: "address"
            }
          ],
          name: "setResolver",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" }
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function"
        }
      ]
    }
  }
};
