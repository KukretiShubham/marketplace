export const FactoryABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "collectionName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "collectionSymbol",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "collectionAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string[]",
				"name": "tokenURIs",
				"type": "string[]"
			},
			{
				"indexed": false,
				"internalType": "address payable[]",
				"name": "whitelisted",
				"type": "address[]"
			}
		],
		"name": "EventItemCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "collectionAddress",
				"type": "address"
			}
		],
		"name": "PanchFactoryCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToEventId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "collectionName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "collectionSymbol",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_tokenURIs",
				"type": "string[]"
			},
			{
				"internalType": "address payable[]",
				"name": "_whitelisted",
				"type": "address[]"
			}
		],
		"name": "createNewPanch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getDeployedCollection",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]