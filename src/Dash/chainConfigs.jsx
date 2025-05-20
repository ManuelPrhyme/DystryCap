export const chainsConfig = {
    baseSepolia : {
        chainId: '0x14a34',
        chainName: 'Base Sepolia Testnet',
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls:['https://sepolia.base.org'],
        blockExplorerUrls:['https://base-sepolia.blockscout.com/'],
        tokenContractUSDT_Testnet:'0x036CbD53842c5426634e7929541eC2318f3dCF7e',
        tokenContractUSDT_Mainnet:'	0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'
    },

    celoAfajores: {  
        chainId: '0xaef3',
        chainName: 'Celo Alfajores Testnet',
        nativeCurrency: {
            name: 'CELO',
            symbol: 'CELO',
            decimals: 18
        },
        rpcUrls:['https://alfajores-forno.celo-testnet.org'],
        blockExplorerUrls:['https://alfajores.celoscan.io'],
        tokenContractUSDT_Testnet:'0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B',
        tokenContractUSDT_Mainnet:'0xcebA9300f2b948710d2653dD7B07f33A8B32118C'},

    ethereumSepolia: {
         chainId: '0xaa36a7',
        chainName: 'Etheruem Sepolia Testnet',
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls:['https://rpc.therpc.io/ethereum-sepolia'],
        blockExplorerUrls:['https://alfajores.celoscan.io'],
        tokenContractUSDT_Testnet:'0x2F25deB3848C207fc8E0c34035B3Ba7fC157602B',
        tokenContractUSDT_Mainnet:'0xcebA9300f2b948710d2653dD7B07f33A8B32118C'
    },

    arbitrumSepolia: {},

    opSepolia: {},

    uniChain: {}

}